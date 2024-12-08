// _______________________________________________theme-switch______________________________________

const themeSwitch = document.getElementById("theme-switch");
const body = document.body;
themeSwitch.addEventListener("change", () => {
  console.log("Theme switch toggled!");
  body.classList.toggle("dark-mode");
});

// ________________________________change item ______________________________________

const footerImages1 = document.querySelectorAll(".footer .images img");
const foodbarImages1 = document.querySelector(".foodbar img");
footerImages1.forEach((imgage) => {
  imgage.addEventListener("click", () => {
    foodbarImages1.src = imgage.src;
  });
});

// ______________________________________remove animation________________________________

const footerImages = document.querySelectorAll(".footer .images img");
const foodbarImages = document.querySelector(".foodbar img");
footerImages.forEach((image) => {
  image.addEventListener("click", () => {
    foodbarImages.src = image.src;
    image.style.animationPlayState =
      image.style.animationPlayState === "paused" ? "running" : "paused";
    footerImages.forEach((img) => {
      if (img !== image) {
        img.style.animationPlayState = "running";
      }
    });
  });
});

// _______________________________________add item in cart________________________________________
const addcart = document.querySelectorAll(".images a");
const cartIcon = document.querySelector(".top-navbar .icons a i");
const cartCountElement = document.createElement("span"); // Create a span element
let cartcount = 0;
cartIcon.appendChild(cartCountElement);
addcart.forEach((button) => {
  button.addEventListener("click", () => {
    cartcount++;
    cartCountElement.textContent = cartcount;
    cartCountElement.style.color = "green";
    cartCountElement.style.fontSize = "22px";
  });
});
