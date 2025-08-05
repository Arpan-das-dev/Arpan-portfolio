 const titles = ["Full-Stack Developer", "Backend Specialist", "Frontend Engineer", "Java Programmer"];
  let i = 0;
  let j = 0;
  let currentTitle = "";
  let isDeleting = false;
  const speed = 100;
  const typedTextSpan = document.querySelector(".typed-text");

  function typeEffect() {
    if (i < titles.length) {
      if (!isDeleting && j <= titles[i].length) {
        currentTitle = titles[i].substring(0, j++);
      }
      if (isDeleting && j >= 0) {
        currentTitle = titles[i].substring(0, j--);
      }
      typedTextSpan.textContent = currentTitle;

      if (j === titles[i].length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % titles.length;
        setTimeout(typeEffect, 200);
      } else {
        setTimeout(typeEffect, speed);
      }
    }
  }

  document.addEventListener("DOMContentLoaded", typeEffect);