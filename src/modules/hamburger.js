const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close");

let isOpen = false;

function toggleSidebar(forceClose = false) {
    const shouldOpen = !forceClose && !isOpen;
    isOpen = shouldOpen;

    sidebar.classList.toggle("active", shouldOpen);
    //hamburger.style.backgroundColor = shouldOpen ? "#64748b" : "#292f37";

}

function showSidebar() {

    hamburger.addEventListener("click", () => toggleSidebar());
    closeSidebar.addEventListener("click", () => toggleSidebar());


    const sidebarLinks = sidebar.querySelectorAll("a");
    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => toggleSidebar(true));
    });


    document.addEventListener("click", handleClickOutside);

    function handleClickOutside(e) {
        const clickedOutside =
            !sidebar.contains(e.target) && !hamburger.contains(e.target);
        if (isOpen && clickedOutside) toggleSidebar(true);
    }


    return function cleanUpSidebarToggle() {
        hamburger.removeEventListener("click", toggleSidebar);
        closeSidebar.removeEventListener("click", toggleSidebar);
        sidebarLinks.forEach(link =>
            link.removeEventListener("click", () => toggleSidebar(true))
        );
        document.removeEventListener("click", handleClickOutside);
    };
}

export default showSidebar;
