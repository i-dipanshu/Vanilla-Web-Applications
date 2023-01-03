const labels = document.querySelectorAll(".form-control label");

const inputs = document.querySelectorAll(".form-control input");

labels.forEach((label) => {
  label.innerHTML = `<span>${label.innerText}</span>`;
});
