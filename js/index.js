var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var galleryImages = document.querySelectorAll(".app-gallery img");
var currentIndex;
var imageSources = [];
galleryImages.forEach(function(img) {
    imageSources.push(img.src);
});

function openModal(index) {
    currentIndex = index;
    modal.style.display = "block";
    modalImg.src = imageSources[currentIndex];
}

function closeModal() {
    modal.style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex >= imageSources.length) {
        currentIndex = 0;
    } 
    else if (currentIndex < 0) {
        currentIndex = imageSources.length - 1;
    }

    modalImg.src = imageSources[currentIndex];
}