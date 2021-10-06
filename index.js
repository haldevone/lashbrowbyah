
let carouselContainer = document.querySelectorAll(".carousel");
let slide = document.querySelectorAll(".carousel-item");
let slideTotal = slide.length -1;
let slideCurrent = -1;

const noBullets = false;
const repeat = false;
const noArrows = false;

function InitCarousel(){
InitBullets();
InitArrows();
setTimeout(function () {
    slideRight();
}, 500);
}

function InitBullets(){
    let bullets = document.querySelectorAll(".bullet");
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].addEventListener('click', () => {GoToIndexItem(i)});
        slide[i].classList.add("proactivated");
    }
}

function InitArrows(){
    const leftArrow = document.createElement("a");
    const iLeft = document.createElement("i");
    iLeft.classList.add("fa");
    iLeft.classList.add("fa-arrow-left");
    leftArrow.classList.add("slider-left");
    leftArrow.appendChild(iLeft);
    leftArrow.addEventListener("click", () => {
        slideLeft();
    });
    const rightArrow = document.createElement("a");
    const iRight = document.createElement("i");
    iRight.classList.add("fa");
    iRight.classList.add("fa-arrow-right");
    rightArrow.classList.add("slider-right");
    rightArrow.appendChild(iRight);
    rightArrow.addEventListener("click", () => {
        slideRight();
    });
    carouselContainer[0].appendChild(leftArrow);
    carouselContainer[0].appendChild(rightArrow);
}

function GoToIndexItem(index){
const sliding = (slideCurrent > index) ? () => slideRight() : () => slideLeft();
while(slideCurrent !== index){
    sliding();
}
}

function UpdateBullets(){
    if (!noBullets) {
        document.querySelector('.bullet-container').querySelectorAll('.bullet').forEach((elem, i) => {
            elem.classList.remove('active');
            if (i === slideCurrent) {
                elem.classList.add('active');
            }
        })
    }
    checkRepeat();
}

function checkRepeat(){
    if (!repeat) {
        if (slideCurrent === slide.length -1) {
            slide[0].classList.add("not-visible");
            slide[slide.length - 1].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-right').classList.add('not-visible')
                document.querySelector('.slider-left').classList.remove('not-visible')
            }
        }
    } 
    else if (slideCurrent === 0) {
        slide[slide.length - 1].classList.add('not-visible');
        slide[0].classList.remove('not-visible');
        if (!noArrows) {
            document.querySelector('.slider-left').classList.add('not-visible')
            document.querySelector('.slider-right').classList.remove('not-visible')
        }
    }
    else {
        slide[slide.length - 1].classList.remove('not-visible');
        slide[0].classList.remove('not-visible');
        if (!noArrows) {
            document.querySelector('.slider-left').classList.remove('not-visible')
            document.querySelector('.slider-right').classList.remove('not-visible')
        }
    }

function slideRight(){
    if (slideCurrent < slideTotal) {
        slideCurrent++;
    }else{
        slideCurrent = 0;
    }

    if (slideCurrent > 0) {
        let preactiveSlide = slide[slideCurrent -1];
    }else{
        let preactiveSlide = slide[slideTotal];
    }

    let activeSlide = slide[slideCurrent];
    if (slideCurrent < slideTotal) {
        let postactiveSlide = slide[slideCurrent +1];
    }else{
        let postactiveSlide = slide[0];
    }
    slide.forEach((elem) => {
        let thisSlide = elem;
        if (thisSlide.classList.contains("preactivated")) {
            thisSlide.classList.remove("preactivated");
            thisSlide.classList.remove("preactive");
            thisSlide.classList.remove("active");
            thisSlide.classList.remove("postactivated");
            thisSlide.classList.add("postactive");
        }
        if (thisSlide.classList.contains("preactive")) {
            thisSlide.classList.remove("preactive");
            thisSlide.classList.remove("active");
            thisSlide.classList.remove("postactive");
            thisSlide.classList.remove("postactivated");
            thisSlide.classList.add("preactivated");
        }
    });
    preactiveSlide.classList.remove("preactivated");
    preactiveSlide.classList.remove("active");
    preactiveSlide.classList.remove("postactive");
    preactiveSlide.classList.remove("postactivated");
    preactiveSlide.classList.add("preactive");

    activeSlide.classList.remove("preactivated");
    activeSlide.classList.remove("preactive");
    activeSlide.classList.remove("postactive");
    activeSlide.classList.remove("postactivated");
    activeSlide.classList.add("active");

    postactiveSlide.classList.remove("preactivated");
    postactiveSlide.classList.remove("preactive");
    postactiveSlide.classList.remove("active");
    postactiveSlide.classList.remove("postactivated");
    postactiveSlide.classList.add("postactive");

    UpdateBullets();
}

function slideLeft(){
    if (slideCurrent > 0) {
        slideCurrent--;
    }else{
        slideCurrent = slideTotal;
    }

    if (slideCurrent < slideTotal) {
        let postactiveSlide = slide[slideCurrent +1];
    }else{
        let postactiveSlide = slide[0];
    }

    let activeSlide = slide[slideCurrent];
    if (slideCurrent > 0) {
        let preactiveSlide = slide[slideCurrent -1];
    }else{
        let preactiveSlide = slide[slideTotal];
    }
    slide.forEach((elem) => {
        let thisSlide = elem;
        if (thisSlide.classList.contains("postactive")) {
            thisSlide.classList.remove("preactivated");
            thisSlide.classList.remove("preactive");
            thisSlide.classList.remove("active");
            thisSlide.classList.remove("postactive");
            thisSlide.classList.add("postactivated");
        }
        if (thisSlide.classList.contains("postactivated")) {
            thisSlide.classList.remove("preactive");
            thisSlide.classList.remove("active");
            thisSlide.classList.remove("postactive");
            thisSlide.classList.remove("postactivated");
            thisSlide.classList.add("preactivated");
        }
    });
    preactiveSlide.classList.remove("preactivated");
    preactiveSlide.classList.remove("active");
    preactiveSlide.classList.remove("postactive");
    preactiveSlide.classList.remove("postactivated");
    preactiveSlide.classList.add("preactive");

    activeSlide.classList.remove("preactivated");
    activeSlide.classList.remove("preactive");
    activeSlide.classList.remove("postactive");
    activeSlide.classList.remove("postactivated");
    activeSlide.classList.add("active");

    postactiveSlide.classList.remove("preactivated");
    postactiveSlide.classList.remove("preactive");
    postactiveSlide.classList.remove("active");
    postactiveSlide.classList.remove("postactivated");
    postactiveSlide.classList.add("postactive");

    UpdateBullets();
}

InitCarousel();