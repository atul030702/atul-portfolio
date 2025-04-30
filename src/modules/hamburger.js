
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

let isOpen = false;

function showSidebar() {
    const toggleBgColor = () => {
        isOpen = !isOpen;
        sidebar.classList.toggle("active");

        hamburger.style.backgroundColor = isOpen ? "#64748b" : "#292f37";
        hamburger.title = isOpen ? "Close Sidebar" : "Expand Sidebar";
    }

    hamburger.addEventListener("click", toggleBgColor);

    return function cleanUpSidebarToggle() {
        hamburger.removeEventListener("click", toggleBgColor);
    };
}

export default showSidebar;