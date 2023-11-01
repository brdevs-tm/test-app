const hiderWindow = document.querySelector(".hider");
const changerBtn = document.querySelector(".changer");
const signUpPass = document.querySelector("#up-password");
const repeatPass = document.querySelector("#repeat-password");
const signInBtn = document.querySelector(".signin-btn");
const signUpBtn = document.querySelector(".signup-btn");
const inputs = document.querySelectorAll("input");

changerBtn.addEventListener("click", () => {
  if (changerBtn.textContent === "Create an account") {
    hiderWindow.classList.remove("hider-up");
    hiderWindow.classList.add("hider-in");
    changerBtn.textContent = "I have already account";
  } else {
    hiderWindow.classList.remove("hider-in");
    hiderWindow.classList.add("hider-up");
    changerBtn.textContent = "Create an account";
  }
});


signUpBtn.addEventListener("click", () => {
  if (signUpPass.value != null) {
    if (signUpPass.value === repeatPass.value) {
      console.log("ajoyib");
    } else {
      alert("Repeat password is incorrect.");
    }
  }
});
