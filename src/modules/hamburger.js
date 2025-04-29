
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

function showSidebar() {
    let isOpen = false;

    const toggleBgColor = () => {
        isOpen = !isOpen;
        sidebar.classList.toggle("active");

        hamburger.style.transition = "none";
        hamburger.style.backgroundColor = isOpen ? "#38bdf8" : "292f37";

        hamburger.style.transition = "";
    }

    hamburger.addEventListener("click", toggleBgColor);

    return function cleanUpSidebarToggle() {
        hamburger.removeEventListener("click", toggleBgColor);
    };
}

export default showSidebar;