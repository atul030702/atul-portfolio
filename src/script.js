import autoType from "./modules/autotype.js";
import animateOnScroll from "./modules/scrollAnimation.js";
import showSidebar from "./modules/hamburger.js";


document.addEventListener("DOMContentLoaded", () => {
    autoType();
    animateOnScroll();
    showSidebar();
});