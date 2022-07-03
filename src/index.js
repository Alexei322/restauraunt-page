import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menupage.js";
import "./style.css";

document.body.appendChild(loadMenuPage());

const homeSelect = document.querySelector(".home");
homeSelect.addEventListener("click", function (e) {
  const toRemove =
    document.querySelector(".shulksection") ||
    document.querySelector(".menugrid");
  toRemove.remove();
});
