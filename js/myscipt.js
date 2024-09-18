const menu_toggle = document.getElementById("menu_toggle");
const dropdown_menu = document.getElementById("dropdown_menu");

function handleClick() {
  if (dropdown_menu.style.display == "block") {
    dropdown_menu.style.display = "none";
  } else {
    dropdown_menu.style.display = "block";
  }
}
menu_toggle.addEventListener("click", handleClick);

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 65.876em)").matches) {
    dropdown_menu.style.display = "flex"; // Keep it visible on larger screens, or change to "none" if needed
  } else {
    dropdown_menu.style.display = "none"; // Hide dropdown on smaller screens
  }
});

const alli = document.querySelectorAll("header nav ul li a");

alli.forEach((el) => {
  el.onclick = () => {
    alli.forEach((el) => {
      el.classList.remove("active");
    });
    el.classList.add("active");
  };
});
