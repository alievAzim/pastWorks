const body = document.body;
const siteContainer = document.querySelector('.ss-inner');
const contentContainer = document.querySelector('.content-container');

let state = {
    scroll: {
        height: 0,
        offset: 0,
        speed: 0.075,
    }
}

function adjustSiteContainer(container, maxWidth) {
    
    if (window.innerWidth < maxWidth) {
        return;
    }
    
  let difference = window.innerWidth - maxWidth;
      
  container.style.marginLeft = `${ difference / 2 }px`;
  container.style.width = `${ maxWidth }px`;
}

document.addEventListener('DOMContentLoaded', function() {
    adjustSiteContainer(siteContainer, 1800);

  state.scroll.height = contentContainer.getBoundingClientRect().height;
  body.style.height = `${ Math.floor(state.scroll.height) }px`;

});


function renderLoop() {
    // If you don't floor this value, it blows up into highp.
  state.scroll.offset += Math.floor((window.pageYOffset - state.scroll.offset) * state.scroll.speed);

  contentContainer.style.transform = `translateY(-${ state.scroll.offset }px)`;

  requestAnimationFrame(renderLoop);
}
renderLoop();

window.addEventListener('resize', function() {
  state.scroll.height = contentContainer.getBoundingClientRect().height;
  body.style.height = Math.floor(state.scroll.height) + "px";
    adjustSiteContainer(siteContainer, 1800);
});


