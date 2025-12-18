function updateCountdown() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const christmas = new Date(currentYear, 11, 25);

  if (now > christmas) {
    christmas.setFullYear(currentYear + 1);
  }

  const diff = christmas - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);


  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

document.querySelectorAll(".faq-header").forEach((header) => {
  header.addEventListener("click", function () {
    const faqItem = this.parentElement;
    const arrow = this.querySelector(".faq-arrow");
    const answer = faqItem.querySelector(".faq-answer");

    faqItem.classList.toggle("active");

    if (faqItem.classList.contains("active")) {
      arrow.textContent = "▲";
      arrow.style.transform = "rotate(0deg)";
    } else {
      arrow.textContent = "▼";
      arrow.style.transform = "rotate(0deg)";
    }
  });
});

document.querySelector(".scroll-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// document.querySelector(".menu-toggle").addEventListener("click", function () {
//   console.log("Menu clicked");
// });
