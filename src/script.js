import Typed from "typed.js";

const autoType = document.getElementById("autotype");

const typed = new Typed(autoType, {
    strings: ["Web Developer.","Frontend Specialist.", "Self Taught Programmer.","Environmentalist.", "Chess Geek."],
    typeSpeed: 75,
    backSpeed: 40,
    loop: true
});