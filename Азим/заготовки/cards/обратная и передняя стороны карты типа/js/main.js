document.onmousemove = e => {
    document.querySelector(".wrapper").style.transform = `translate(-${e.clientX * 0.04}px, -${e.clientY * 0.04}px)`;
    document.querySelector(".light").style.transform = `translate(-${e.clientX * 0.1}px, -${e.clientY * 0.1}px)`;
  }