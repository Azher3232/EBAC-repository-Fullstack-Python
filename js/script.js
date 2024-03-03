// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add("sticky");

    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

//  Modal
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close");

// Form
const form = document.querySelector(".cta-form");
const submitButton = document.querySelector(".btn--form");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function openModalWithFormData() {
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const where = document.getElementById("select-where").value;
  const modalFormInfo = document.getElementById("modal-form-info");

  modalFormInfo.innerHTML = `
    <p>Your info:</p>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Where did you hear from us?:</strong> ${where}</p>
  `;

  openModal();
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  openModalWithFormData();
});

closeButton.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
