const slideshowImages = document.querySelectorAll(".fadein div");
const nexImageDelay = 4500;
let currentImageCounter = 0;
slideshowImages[currentImageCounter].style.opacity = "1";
slideshowImages[currentImageCounter].style.transition = "2s";
setInterval(nextImage,nexImageDelay);
function nextImage(){
    slideshowImages[currentImageCounter].style.zIndex = -2;
    const tempCounter = currentImageCounter;
    setTimeout(() => {
        slideshowImages[tempCounter].style.opacity = "0";
        slideshowImages[tempCounter].style.transition = "2s";
    });
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.opacity = 1;
        slideshowImages[tempCounter].style.transition = "2s";
        slideshowImages[currentImageCounter].style.zIndex = -1;
}