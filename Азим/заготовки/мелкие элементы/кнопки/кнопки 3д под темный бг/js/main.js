const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
const controls = new THREE.OrbitControls(camera, renderer.domElement);
const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
const textures = [
  "https://i.imgur.com/QtoGfJF.png",
  "https://i.imgur.com/pnZtZUW.png",
  "https://i.imgur.com/QXLk8zb.png"
];

let animating = false;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
renderer.shadowMapSoft = true;
renderer.shadowMapType = THREE.PCFSoftShadowMap;

renderer.shadowCameraNear = 1;
renderer.shadowCameraFar = 1;
renderer.shadowCameraFov = 50;

renderer.shadowMapBias = 0.0001;
renderer.shadowMapDarkness = 1;

document.body.appendChild(renderer.domElement);
camera.position.z = 3;

function addLights() {
  const directionalLight1 = new THREE.DirectionalLight( 0xffffff, 1, 100);
  const directionalLight2 = new THREE.DirectionalLight( 0xffffff, 1, 100);  
  const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
  const pointLight1 = new THREE.PointLight(0x00ccff, 1, 150);
  const pointLight2 = new THREE.PointLight(0x00ccff, 1, 150);
  const pointLight3 = new THREE.PointLight(0x00ccff, 1, 150);
  const pointLight4 = new THREE.PointLight(0x00ccff, 0.8, 0.7);

  directionalLight1.position.set(6, 10, 1);
  directionalLight2.position.set(2.5, 1.5, 1);
  pointLight1.position.set(-1, 0, 0);
  pointLight2.position.set(0, 0, 0);
  pointLight3.position.set(1, 0, 0);
  //pointLight4.position.set(0.25, 0, 1.5);

  directionalLight1.castShadow = true;
  directionalLight1.shadow.mapSize.width = 2048;
  directionalLight1.shadow.mapSize.height = 2048;

  scene.add(directionalLight1);
  scene.add(directionalLight2);
  scene.add(ambientLight);
  scene.add(pointLight1);
  scene.add(pointLight2);
  scene.add(pointLight3);
  scene.add(pointLight4);
}

function getCube(arc = 0.25, scale = 1, depth, material, returnGeo = false) {
  const cubePath = new THREE.Shape();
  const arcMultiplier = arc / 4;
  const negative = scale - arc;
  const positive = scale;
  const extrudeSettings = {
    depth: depth || (scale - arc),
    bevelEnabled: false,
  };

  cubePath.moveTo(arc, 0);
  cubePath.lineTo(negative, 0);
  cubePath.bezierCurveTo((negative + (arcMultiplier * 2)), 0, (negative + arc), -(arcMultiplier * 2), positive, -arc)
  cubePath.lineTo(positive, -negative);
  cubePath.bezierCurveTo(positive, (-negative + -(arcMultiplier * 2)), (negative + (arcMultiplier * 2)), (-negative + -arc), negative, -positive);
  cubePath.lineTo(arc, -positive);
  cubePath.bezierCurveTo((arcMultiplier * 2), (-negative + -arc), 0, (-negative + -(arcMultiplier * 2)), 0, -negative);
  cubePath.lineTo(0, -arc);
  cubePath.bezierCurveTo(0, -(arcMultiplier * 2), (arcMultiplier * 2), 0, arc, 0);

  const geometry = new THREE.ExtrudeGeometry(cubePath, extrudeSettings);

  if (returnGeo) {
    return geometry;
  }

  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;

  cube.position.set(-(scale / 2), (scale / 2), -(scale / 2));

  return cube;
};

function addFrame(frame, cube1, cube2, cube3, colour) {
  const csgCube1 = new ThreeBSP(cube1);
  const csgCube2 = new ThreeBSP(cube2);
  const csgCube3 = new ThreeBSP(cube3);

  const csgFrame1 = new ThreeBSP(frame);
  const subtract1 = csgFrame1.subtract(csgCube1);
  const csgMesh1 = subtract1.toMesh();

  const csgFrame2 = new ThreeBSP(csgMesh1);
  const subtract2 = csgFrame2.subtract(csgCube2);
  const csgMesh2 = subtract2.toMesh();

  const csgFrame3 = new ThreeBSP(csgMesh2);
  const subtract3 = csgFrame3.subtract(csgCube3);
  const csgMesh3 = subtract3.toMesh();

  csgMesh3.material = new THREE.MeshPhongMaterial({ color: colour });

  csgMesh3.receiveShadow = true;
  csgMesh3.castShadow = true;
  
  scene.add(csgMesh3);
};

function addButton(index, x, y, z) {
  const texture = new THREE.TextureLoader().load(textures[index]);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 1.5, 1.5 );

  const material1 = new THREE.MeshPhongMaterial( { color: 0x008db0, shininess:100 } );
  const material2 = new THREE.MeshPhongMaterial( {map: texture } );
  const material3 = new THREE.MeshPhongMaterial( { color: 0x2e333c } );
  const cubeBack = getCube(0.175, 0.675, 0.2, material1);

  const cubeFrontGeo = getCube(0.175, 0.675, 0.025, material2, true);
  cubeFrontGeo.faces[0].materialIndex = 0;
  cubeFrontGeo.faces[1].materialIndex = 1;

  const cubeFront = new THREE.Mesh(cubeFrontGeo, [ material2, material3 ]);
  const cube = new THREE.Group();
  
  cube.add(cubeBack);
  cube.add(cubeFront);

  cubeFront.position.x = -0.337;
  cubeFront.position.y = 0.337;
  cubeFront.position.z = 0.12;
  cubeBack.position.z = -0.08;
  cube.position.set(x, y, z);

  cubeBack.receiveShadow = true;
  cubeFront.receiveShadow = true;
  cubeBack.castShadow = true;
  cubeFront.castShadow = true;

  scene.add(cube);

  domEvents.addEventListener(cubeFront, 'click', function(event) {
    if (animating) {
      return;
    }

    animating = true;
    const timeline = new TimelineMax({onComplete: () => {
      cube.rotation.x = 0;
      animating = false;
    }});

    timeline.to(cube.rotation, {
      duration: 0.4,
      x: Math.PI * 2
    });
  }, false)

  domEvents.addEventListener(cubeFront, 'mouseover', function(event) {
    document.body.style.cursor = "pointer";

    if (animating) {
      return;
    }

    gsap.to(cube.rotation, {
      duration: 0.1,
      x: 0.2
    });
  }, false)

  domEvents.addEventListener(cubeFront, 'mouseout', function(event) {
    document.body.style.cursor = "default";

    if (animating) {
      return;
    }

    gsap.to(cube.rotation, {
      duration: 0.1,
      x: 0
    } );
  }, false)
}

function loadScene() {
  const cube1 = getCube(0.2, 0.75);
  const cube2 = getCube(0.2, 0.75);
  const cube3 = getCube(0.2, 0.75);
  const geometryFront = new THREE.BoxGeometry(60, 30, 0.05);
  const geometryBack = new THREE.BoxGeometry(60, 30, 2);
  const frameFront = new THREE.Mesh(geometryFront);
  const frameBack = new THREE.Mesh(geometryBack);
  
  const z = 0.5;
  const y = 0.397;

  cube1.position.set(-1.448  , y, z);
  cube2.position.set(-0.374, y, z);
  cube3.position.set(0.7, y, z);

  frameFront.position.z = 1.025;

  addFrame(frameBack, cube1, cube2, cube3, 0x00ccff);
  addFrame(frameFront, cube1, cube2, cube3, 0x2e333c);

  addButton(0, -1.075, 0.022, 0.905);
  addButton(1, 1.075, 0.02, 0.905);
  addButton(2, 0, 0.02, 0.905);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

loadScene();
addLights();
animate();

window.addEventListener('resize', onWindowResize, false);
window.setTimeout(() => {
  document.querySelector('.tip').style.opacity = 1;
  document.querySelector('.inspired').style.opacity = 1;
}, 2000)

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
}

