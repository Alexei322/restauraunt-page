import { loadHomePage, loadHomeNotFirst } from "./homepage.js";
import { loadMenuPage } from "./menupage.js";
import { loadContactPage } from "./contact.js";
import "./style.css";

document.body.appendChild(loadHomePage());

const homeSelect = document.querySelector(".home");
const menuSelect = document.querySelector(".menu");
const contactSelect = document.querySelector(".contact");

homeSelect.addEventListener("click", (e) => {
  if (!!document.querySelector(".menugrid")) {
    const menuItem = document.querySelector(".menugrid");
    menuItem.parentNode.removeChild(menuItem);
    document.body.appendChild(loadHomeNotFirst());
  } else if (!!document.querySelector(".contactinfo")) {
    const homeItem = document.querySelector(".contactinfo");
    homeItem.parentNode.removeChild(homeItem);
    document.body.appendChild(loadHomeNotFirst());
  }
});

menuSelect.addEventListener("click", (e) => {
  if (!!document.querySelector(".shulkwithcaption")) {
    const homeItem = document.querySelector(".shulkwithcaption");
    homeItem.parentNode.removeChild(homeItem);
    document.body.appendChild(loadMenuPage());
  } else if (!!document.querySelector(".contactinfo")) {
    const homeItem = document.querySelector(".contactinfo");
    homeItem.parentNode.removeChild(homeItem);
    document.body.appendChild(loadMenuPage());
  }
});

contactSelect.addEventListener("click", (e) => {
  if (!!document.querySelector(".shulkwithcaption")) {
    const homeItem = document.querySelector(".shulkwithcaption");
    homeItem.parentNode.removeChild(homeItem);
    document.body.appendChild(loadContactPage());
  } else if (!!document.querySelector(".menugrid")) {
    const menuItem = document.querySelector(".menugrid");
    menuItem.parentNode.removeChild(menuItem);
    document.body.appendChild(loadContactPage());
  }
});
