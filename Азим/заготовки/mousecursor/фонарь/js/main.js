let light = document.querySelector('.light'),
on = false;
light.addEventListener('dblclick',function(e){
    on = !on;
    if(on){
        let x = e.clientX;
        let y = e.clientY;
        light.style.background = `radial-gradient(circle at ${x}px ${y}px,transparent 130px,rgba(0,0,0,1) 200px)`;
        light.style.cursor = "pointer",
        document.querySelector("body").style.opacity = "1"


    }
    else{
        light.style.background = "none",
        document.querySelector("body").style.opacity = "0"
        light.style.cursor = "initial"
    }
});
light.addEventListener('mousemove',function(e){
    if(on){
        let x = e.clientX;
        let y = e.clientY;
        light.style.background = `radial-gradient(circle at ${x}px ${y}px,transparent 130px,rgba(0,0,0,0.95) 200px)`;
        light.style.cursor = "pointer"
    }
    else{
        light.style.cursor = "initial"
    }
});