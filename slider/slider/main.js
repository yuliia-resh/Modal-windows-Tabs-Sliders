const prev = document.getElementById("btn-prev"),
    next = document.getElementById("btn-next"),
    slides = document.querySelectorAll(".slide"),
    dots = document.querySelectorAll(".dot");

let index = 0;

const changeSlide = (index) => {
    for (let i = 0; i < slides.length && i < dots.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }
    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

const nextSlide = () => {
    if (index == slides.length -1) {
        index = 0;
    }
    else {
        index++;
    }
    changeSlide(index);
}

const prevSlide = () => {
    if (index == 0) {
        index =  slides.length -1;
    }
    else {
        index--;
    }
    changeSlide(index);
}

dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
        index = indexDot;
        changeSlide(index);
    })
})

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
