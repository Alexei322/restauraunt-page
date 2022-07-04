import { loadHomePage, loadHomeNotFirst } from "./homepage.js";
import { loadMenuPage } from "./menupage.js";
import "./style.css";

document.body.appendChild(loadHomePage());

const homeSelect = document.querySelector(".home");
const menuSelect = document.querySelector(".menu");

homeSelect.addEventListener("click", (e) => {
  if (!!document.querySelector(".menugrid")) {
    const menuItem = document.querySelector(".menugrid");
    console.log("yep");
    menuItem.parentNode.removeChild(menuItem);
    document.body.appendChild(loadHomeNotFirst());
  }
});

menuSelect.addEventListener("click", (e) => {
  if (!!document.querySelector(".shulkwithcaption")) {
    const homeItem = document.querySelector(".shulkwithcaption");
    console.log("yep");
    homeItem.parentNode.removeChild(homeItem);
    document.body.appendChild(loadMenuPage());
  }
});
