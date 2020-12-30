const container = document.querySelector('[data-container]');

window.addEventListener('scroll', () => {
    container.style.transform = `
        translate(${-Math.floor(window.pageYOffset) * .377 + 125}px,
        ${-Math.floor(window.pageYOffset)}px)
        rotateX(45deg)
        rotateZ(-15deg)
    `;
});


