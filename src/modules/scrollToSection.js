const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");

const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");

function scrollToSection() {
    function link(section) {
        return function(event) {
            section.scrollIntoView({ behavior: "smooth" });
        };
    }

    const homeHandler = link(homeSection);
    const aboutHandler = link(aboutSection);

    homeLink.addEventListener("click", homeHandler);
    aboutLink.addEventListener("click", aboutHandler);

    return function() {
        homeLink.removeEventListener("click", homeHandler);
        aboutLink.removeEventListener("click", aboutHandler);
    };
}

export default scrollToSection;