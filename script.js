const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".site-nav a");

toggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const productTabs = document.querySelectorAll("[data-product-tab]");
const productPanels = document.querySelectorAll("[data-product-panel]");

function showProductPanel(target) {
  productTabs.forEach((tab) => {
    const isActive = tab.dataset.productTab === target;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });

  productPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.productPanel === target);
  });
}

productTabs.forEach((tab) => {
  tab.addEventListener("click", () => showProductPanel(tab.dataset.productTab));
  tab.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showProductPanel(tab.dataset.productTab);
    }
  });
});

const caseCards = document.querySelectorAll("[data-case-target]");

function scrollToCaseDetail(targetId) {
  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  const headerOffset = (header?.offsetHeight || 0) + 18;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top: targetTop,
    behavior: "smooth",
  });
}

caseCards.forEach((card) => {
  card.addEventListener("click", () => scrollToCaseDetail(card.dataset.caseTarget));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToCaseDetail(card.dataset.caseTarget);
    }
  });
});

const scrollTopLink = document.querySelector("[data-scroll-top]");

scrollTopLink?.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
