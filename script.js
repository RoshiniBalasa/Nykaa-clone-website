const btnPreve = document.querySelector(".btn-container-prev")
const btnNext = document.querySelector(".btn-container-next")
const ImageContainerSlider = document.querySelector("#imageSlideContainer")

btnNext.addEventListener("click", () => {
    ImageContainerSlider.scrollLeft += 300;
});

btnPreve.addEventListener("click", () => {
    ImageContainerSlider.scrollLeft -= 100
});


function openNav() {
    document.getElementById("mySidebar").style.width = "400px";
    document.getElementById("main").style.marginLeft = "250px";
}


function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}