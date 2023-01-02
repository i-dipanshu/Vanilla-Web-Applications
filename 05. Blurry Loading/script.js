const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

const interval = setInterval(blurring, 100);

let load = 0;

function blurring() {
  load += 2;

  if (load > 99) {
    clearInterval(interval);
  }

  loadText.innerHTML = `${load}%`;

  loadText.style.opacity = 1 - load / 100;

  bg.style.filter = `blur(${20 - load / 5}px)`;
}
