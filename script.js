const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.14 });

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("visible"));
}

document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelector(button.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
    });
});

const tabButtons = document.querySelectorAll("[data-filter]");
const galleryCards = document.querySelectorAll("[data-category]");

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        tabButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");

        galleryCards.forEach((card) => {
            const show = filter === "todos" || card.dataset.category === filter;
            card.style.display = show ? "block" : "none";
        });
    });
});

const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = form.querySelector(".form-message");
        message.textContent = "Solicitud recibida. Talleres Heredia te contactara pronto.";
        form.reset();
    });
}
