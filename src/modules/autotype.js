import Typed from "typed.js";

let typedInstance = null;

export function autoType() {
    const autoTyped = document.getElementById("autotype");

    if(!typedInstance) {
        typedInstance = new Typed(autoTyped, {
            strings: ["Web Developer.","Frontend Specialist.", "Self Taught Developer.","Environmentalist.", "Chess Geek."],
            typeSpeed: 75,
            backSpeed: 40,
            loop: true
        });
    }
}

export function cleanUpAutoType() {
    if(typedInstance) {
        typedInstance.destroy();
        typedInstance = null;
    }
}


