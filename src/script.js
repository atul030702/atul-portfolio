import { autoType, cleanUpAutoType } from "./modules/autotype.js";
import { animateOnScroll } from "./modules/scrollAnimation.js";
import { updateActiveLink, initSectionHighlighter } from "./modules/scrollSpy.js";
import showSidebar from "./modules/hamburger.js";
import scrollToSection from "./modules/scrollToSection.js";

const handleHashChangeAndScroll = () => updateActiveLink();

document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
    history.replaceState(null, null, " ");

    autoType();
    animateOnScroll();
    showSidebar();
    scrollToSection();
    initSectionHighlighter();

    window.addEventListener("hashchange", handleHashChangeAndScroll);
    window.addEventListener("scroll", handleHashChangeAndScroll);
});

function cleanUpListeners() {
    window.removeEventListener("hashchange", handleHashChangeAndScroll);
    window.removeEventListener("scroll", handleHashChangeAndScroll);
}

function cleanUp() {
    cleanUpListeners();
    cleanUpAutoType();
}

window.addEventListener("beforeunload", cleanUp);
document.addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" ? cleanUp() : autoType();
});