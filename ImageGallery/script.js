const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

galleryImages.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;
        showImage();

    });

});

function showImage(){

    lightbox.style.display = "flex";
    lightboxImg.src = galleryImages[currentIndex].src;

}

closeBtn.onclick = () => {

    lightbox.style.display = "none";

};

nextBtn.onclick = () => {

    currentIndex++;

    if(currentIndex >= galleryImages.length){

        currentIndex = 0;

    }

    showImage();

};

prevBtn.onclick = () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = galleryImages.length - 1;

    }

    showImage();

};

window.onclick = (e) => {

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

};

function filterImages(category){

    const images = document.querySelectorAll(".image");

    images.forEach(image => {

        if(category === "all"){

            image.style.display = "block";

        }
        else if(image.classList.contains(category)){

            image.style.display = "block";

        }
        else{

            image.style.display = "none";

        }

    });

}