const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("active");

  const expanded =
    menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute(
    "aria-expanded",
    String(!expanded)
  );
});


document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
