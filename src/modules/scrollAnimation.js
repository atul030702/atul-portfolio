function animateOnScroll() {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (!entry.target.classList.contains("visible")) {
                    entry.target.classList.add("visible");
                }
            } else {
                if (entry.target.classList.contains("visible")) {
                    entry.target.classList.remove("visible");
                }
            }
        });
    }, { threshold: 0.2, rootMargin: "0px" });

    sections.forEach((section) => observer.observe(section));
}

export default animateOnScroll;