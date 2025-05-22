const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// optimize Clients section

const logos = [
  { src: "https://cdn.worldvectorlogo.com/logos/tesla-9.svg", alt: "Tesla" },
  { src: "https://cdn.worldvectorlogo.com/logos/siemens.svg", alt: "Siemens" },
  { src: "https://cdn.worldvectorlogo.com/logos/abb.svg", alt: "ABB" },
  { src: "https://cdn.worldvectorlogo.com/logos/abb.svg", alt: "ABB" },
  { src: "https://cdn.worldvectorlogo.com/logos/baidu.svg", alt: "Baidu" },
  {
    src: "https://cdn.worldvectorlogo.com/logos/honeywell.svg",
    alt: "Honeywell",
  },
  { src: "https://cdn.worldvectorlogo.com/logos/baidu.svg", alt: "Baidu" },
];

function createLogoElements(container) {
  // Add each logo twice for continuous scrolling effect
  for (let i = 0; i < 2; i++) {
    logos.forEach(({ src, alt }) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = alt;
      img.classList.add("client-logo");
      container.appendChild(img);
    });
  }
}

const leftTrack = document.querySelector(".carousel-track.track-left");
const rightTrack = document.querySelector(".carousel-track.track-right");

createLogoElements(leftTrack);
createLogoElements(rightTrack);

// optimize Services Cards Ripple Effect
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--ripple-x", x + "px");
    card.style.setProperty("--ripple-y", y + "px");
  });

  // Optional: reset ripple center on mouse leave (to center)
  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--ripple-x", "50%");
    card.style.setProperty("--ripple-y", "50%");
  });
});
