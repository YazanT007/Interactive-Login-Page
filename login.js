function toggleActive(state) {
  const container = document.getElementById("container");
  container.classList.toggle("active", state);
}

document.addEventListener("DOMContentLoaded", () => {
  const signUpForm = document.querySelector(".sign-up form");

  signUpForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("Username").value;
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;

    const userData = { username, email, password };
  });
});
