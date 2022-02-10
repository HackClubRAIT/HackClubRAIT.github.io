const bodyTag = document.body;
const loaderContainer = document.getElementById("loader_fixed_container");
window.onload = function(){
    setTimeout(function(){
        loaderContainer.style.opacity = "0";
        loaderContainer.style.pointerEvents = "none";
        bodyTag.classList.replace("no_scroll_bar_visible","scroll_bar_visible");
    }, 5000);
}