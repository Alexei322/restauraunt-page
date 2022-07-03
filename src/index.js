import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menupage.js";
import "./style.css";

document.body.appendChild(loadMenuPage());

const contentItems = document.querySelector(".content");
if (contentItems) {
  contentItems.addEventListener("click", (e) => {
    console.log("yep");
    while (contentItems.firstChild) {
      contentItems.removeChild(contentItems.lastChild);
    }
  });
}

const homeSelect = document.querySelector(".home");
homeSelect.addEventListener("click", (e) => {
  console.log("yep");
  const contentItems = document.querySelector("#content");
  contentItems.textContent = "";
  document.body.appendChild(loadMenuPage());
});
