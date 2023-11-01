document.addEventListener("DOMContentLoaded", function () {
  const avatar = document.querySelector(".avatar");
  const avaDropdown = document.querySelector(".ava-dropdown");
  const quizInputs = document.querySelectorAll(".quiz-input");

  avatar.addEventListener("click", () => {
    avaDropdown.classList.toggle("ava-dropdown-show");
  });

  quizInputs.forEach((inputDiv) => {
    inputDiv.addEventListener("click", () => {
      const input = inputDiv.querySelector("input");
      if (input) {
        input.checked = true;
        console.log(input.value);
      }
    });
  });
});
