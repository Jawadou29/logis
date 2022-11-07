// start header
let bars = document.querySelector(".header .container i.fa-bars");
let links = document.querySelector(".header .container .links");
let overlay = document.querySelector(".header .container .overlay");
let cclose = document.querySelector(".header .container .links .fa-close");
let dropDown = document.querySelector(".header .container .drop-btn");
bars.onclick = function () {
    links.classList.toggle("open");
    overlay.style.setProperty("display", "block", "important");
};
cclose.onclick = function () {
    links.classList.remove("open");
    overlay.style.setProperty("display", "none", "important");
}
document.onkeyup = function (e) {
    if (e.key === "Escape") {
        links.classList.remove("open");
        overlay.style.setProperty("display", "none", "important");
    }
}
dropDown.onclick = function () {
    document.querySelector(".header .container .drop-btn > ul").classList.toggle("drop");
}


window.onscroll = function () {
    if (window.scrollY >= 50) {
        document.querySelector(".header").classList.add("header-scroll");
        document.querySelectorAll(".header .links > ul > li > a").forEach(a => {
            a.classList.add("links-scroll");
        });
    }
    else{
        document.querySelector(".header").classList.remove("header-scroll");
        document.querySelectorAll(".header .links > ul > li  a").forEach(a => {
            a.classList.remove("links-scroll");
        });
    }
}
// end header
// start about
let play = document.querySelector(".about .container .icon-holder");
let vid = document.querySelector(".about .vid");
let close_vid = document.querySelector(".about .vid .fa-close");
play.onclick = function () {
    vid.classList.add("open");
}
close_vid.onclick = function () {
    vid.classList.remove("open");
}
// end about
// start testimonial
let test_boxes = document.querySelectorAll(".testimonial .container .openions .box");
let bullets = document.querySelectorAll(".testimonial .container .bullets li");
let arrow_right = document.querySelector(".testimonial .container .fa-chevron-right")
let arrow_left = document.querySelector(".testimonial .container .fa-chevron-left")
let target = 0;

test_boxes[target].classList.add("active");
bullets[target].classList.add("active");
setInterval(() => {
    if (target < test_boxes.length - 1) {
        test_boxes[target].classList.remove("active");
        bullets[target].classList.remove("active");
        target++;
        test_boxes[target].classList.add("active");
        bullets[target].classList.add("active");
    }
    else{
        test_boxes[target].classList.remove("active");
        bullets[target].classList.remove("active");
        target = 0;
        test_boxes[target].classList.add("active");
        bullets[target].classList.add("active");
    }
}, 10000)
arrow_right.onclick = function () {
    if (target < test_boxes.length - 1) {
        test_boxes[target].classList.remove("active");
        bullets[target].classList.remove("active");
        target++;
        test_boxes[target].classList.add("active");
        bullets[target].classList.add("active");
    }
    else{
        test_boxes[target].classList.remove("active");
        bullets[target].classList.remove("active");
        target = 0;
        test_boxes[target].classList.add("active");
        bullets[target].classList.add("active");
    }
}
arrow_left.onclick = function () {
    if (target > 0) {
        test_boxes[target].classList.remove("active");
        bullets[target].classList.remove("active");
        target--;
        test_boxes[target].classList.add("active");
        bullets[target].classList.add("active");
    }
    else{
        test_boxes[target].classList.remove("active");
        bullets[target].classList.remove("active");
        target = test_boxes.length - 1;
        test_boxes[target].classList.add("active");
        bullets[target].classList.add("active");
    }
}
bullets.forEach((bullet) => {
    bullet.onclick = function () {
        let position = bullet.getAttribute("data-position");
        test_boxes[target].classList.remove("active");
        bullets[target].classList.remove("active");
        target = +position;
        test_boxes[target].classList.add("active");
        bullets[target].classList.add("active");
    }
})
// end testimonial
// start question
let questions = document.querySelectorAll(".questions .container .box");
questions.forEach((q) => {
    q.onclick = function () {
        if (q.classList.contains("active")) {
            q.classList.remove("active");
        }
        else{
            questions.forEach((q) => {
                q.classList.remove("active");
            })
            q.classList.add("active");
        }
    }
});
// end question