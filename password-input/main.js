const passInput = document.querySelector(".input-group input");
const toggleIcon = document.querySelector(".input-group .toggle");
const ripple = document.querySelector(".input-group .ripple");
const percentBar = document.querySelector(".strength-percent span");
const passLabel = document.querySelector(".strength-label");

passInput.addEventListener("input", handlePassInput);
toggleIcon.addEventListener("click", togglePassInput);

function handlePassInput(e) {
  if (passInput.value.length === 0) {
    passLabel.innerHTML = "Strength";
    addClass();
  } else if (passInput.value.length <= 4) {
    passLabel.innerHTML = "Weak";
    addClass("weak");
  } else if (passInput.value.length <= 7) {
    passLabel.innerHTML = "Not Bad";
    addClass("average");
  } else {
    passLabel.innerHTML = "Strong";
    addClass("strong");
  }
}

function addClass(className) {
  percentBar.classList.remove("weak");
  percentBar.classList.remove("average");
  percentBar.classList.remove("strong");
  if (className) {
    percentBar.classList.add(className);
  }
}

function togglePassInput(e) {
  const type = passInput.getAttribute("type");
  if (type === "password") {
    passInput.setAttribute("type", "text");
    toggleIcon.innerHTML = "💀";
    // toggleIcon.innerHTML = "🐵";
    ripple.style.cssText = `
    border-radius: 4px;
    width: 100%;
    height: 100%;
    right: 0;
    z-index: -1;
    `;
    passInput.style.color = "#000";
    passInput.style.background = "transparent";
    toggleIcon.style.fontSize = "27px";
  } else {
    passInput.setAttribute("type", "password");
    toggleIcon.innerHTML = "☠️";
    // toggleIcon.innerHTML = "🙈";
    toggleIcon.style.fontSize = "25px";
    ripple.style.cssText = `
    border-radius: 50%;
    height: 35px;
    width: 35px;
    right: 10px;
     z-index: 1;
    `;
    passInput.style.color = "#fff";
    passInput.style.background = "#112d37";
  }
}
