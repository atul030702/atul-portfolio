let activeLink = null;
let debounceTimer = null;

export function updateActiveLink() {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
        const newHash = window.location.hash;

        if(activeLink) activeLink.classList.remove("active");

        const newActiveLink = document.querySelector(`.nav-link[href="${newHash}"]`);

        if(newActiveLink) {
            newActiveLink.classList.add("active");
            activeLink = newActiveLink;
        }else {
            activeLink = null;
        }
    }, 150);

}


export function initSectionHighlighter(navLinkSelector = ".nav-link", sectionSelector = "section") {

    const navLinks = Array.from(document.querySelectorAll(navLinkSelector));
    const sections = Array.from(document.querySelectorAll(sectionSelector));
    
    let activeLink = null;
  
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };
  
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
        
                const currentLink = navLinks.find(link => link.getAttribute("href") === `#${sectionId}`);
        
                if (currentLink && currentLink !== activeLink) {
                    if (activeLink) activeLink.classList.remove("active");
        
                    currentLink.classList.add("active");
                    activeLink = currentLink;
                }
            }
        });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });
}
  