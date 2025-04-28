import Typed from "typed.js";

const autoTyped = document.getElementById("autotype");

function autoType() {
    const typed = new Typed(autoTyped, {
        strings: ["Web Developer.","Frontend Specialist.", "Self Taught Developer.","Environmentalist.", "Chess Geek."],
        typeSpeed: 75,
        backSpeed: 40,
        loop: true
    });
}

export default autoType;