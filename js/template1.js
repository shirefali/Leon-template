let icon = document.querySelector(".icon");
let menue = document.querySelector(".links ul");
let topBtn = document.querySelector(".top-btn");

document.onclick = function (e) {
    if(e.target.id !== "icon" && e.target.id !== "menue") {
        icon.classList.remove("close");
        menue.classList.remove("active");
    }
}

icon.onclick =  function() {
    icon.classList.toggle("close");
    menue.classList.toggle("active");
};

window.onscroll = function () {
    if(window.scrollY > "700") {
        topBtn.classList.add("to-top");
    }
    else {
        topBtn.classList.remove("to-top");
    }
}

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}