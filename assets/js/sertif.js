const track = document.querySelector(".certificates-track");
const cards = document.querySelectorAll(".certificate-card");

const prev = document.getElementById("prevCert");
const next = document.getElementById("nextCert");

let page = 0;

function visibleCards() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
}

function updateSlider() {

    const visible = visibleCards();

    const gap = 24;

    const cardWidth = cards[0].offsetWidth + gap;

    track.style.transform =
        `translateX(-${page * visible * cardWidth}px)`;

    const maxPage = Math.ceil(cards.length / visible) - 1;

    prev.disabled = page === 0;
    next.disabled = page === maxPage;
}

next.addEventListener("click", () => {

    const maxPage = Math.ceil(cards.length / visibleCards()) - 1;

    if (page < maxPage) {
        page++;
        updateSlider();
    }

});

prev.addEventListener("click", () => {

    if (page > 0) {
        page--;
        updateSlider();
    }

});

window.addEventListener("resize", updateSlider);

window.addEventListener("load", updateSlider);

/* ==========================================
   CERTIFICATE MODAL
========================================== */

const modal = document.getElementById("certificateModal");
const preview = document.getElementById("certificatePreview");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".open-certificate").forEach(button => {

    button.addEventListener("click", () => {

        preview.src = button.dataset.image;

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});

closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

    document.body.style.overflow = "auto";

});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("show");

        document.body.style.overflow = "auto";

    }

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        modal.classList.remove("show");

        document.body.style.overflow = "auto";

    }

});