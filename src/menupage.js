function loadMenuPage() {
  const pagecontent = document.querySelector("#content");
  const menusection = document.createElement("div");
  menusection.classList.add("menugrid");
  const sectionone = document.createElement("div");
  sectionone.classList.add("section");
  const dishone = document.createElement("div");
  dishone.classList.add("dish");
  dishone.textContent = "Ramen!";
  const dishimgone = document.createElement("div");
  dishimgone.classList.add("image", "imageone");
  const dishonedesc = document.createElement("div");
  dishimgone.classList.add("description");
  dishonedesc.textContent = "The most delicious food - £3.99";
  sectionone.append(dishone, dishimgone, dishonedesc);
  menusection.appendChild(sectionone);

  const sectiontwo = document.createElement("div");
  sectiontwo.classList.add("section");
  const dishtwo = document.createElement("div");
  dishtwo.classList.add("dish");
  dishtwo.textContent = "Ramen again?";
  const dishimgtwo = document.createElement("div");
  dishimgtwo.classList.add("image", "imagetwo");
  dishimgtwo.classList.add("description");
  const dishtwodesc = document.createElement("div");
  dishtwodesc.textContent = "The most delicious food - £3.99";
  sectiontwo.append(dishtwo, dishimgtwo, dishtwodesc);
  menusection.appendChild(sectiontwo);

  const sectionthree = document.createElement("div");
  sectionthree.classList.add("section");
  const dishthree = document.createElement("div");
  dishthree.classList.add("dish");
  dishthree.textContent = "Ramen!";
  const dishimgthree = document.createElement("div");
  dishimgthree.classList.add("image", "imagethree");
  dishimgthree.classList.add("description");
  const dishthreedesc = document.createElement("div");
  dishthreedesc.textContent =
    "The most delicious food - Can you guess the price?";
  sectionthree.append(dishthree, dishimgthree, dishthreedesc);
  menusection.appendChild(sectionthree);

  const sectionfour = document.createElement("div");
  sectionfour.classList.add("section");
  const dishfour = document.createElement("div");
  dishfour.classList.add("dish");
  dishfour.textContent = "???";
  const dishimgfour = document.createElement("div");
  dishimgfour.classList.add("image", "imagefour");
  dishimgfour.classList.add("description");
  const dishfourdesc = document.createElement("div");
  dishfourdesc.textContent = "The most delicious food - £3.99!";
  sectionfour.append(dishfour, dishimgfour, dishfourdesc);
  menusection.appendChild(sectionfour);

  const sectionfive = document.createElement("div");
  sectionfive.classList.add("section");
  const dishfive = document.createElement("div");
  dishfive.classList.add("dish");
  dishfive.textContent = "Do you have anything else?";
  const dishimgfive = document.createElement("div");
  dishimgfive.classList.add("image", "imagefive");
  dishimgfive.classList.add("description");
  const dishfivedesc = document.createElement("div");
  dishfivedesc.textContent = "The most delicious food - £3.99!";
  sectionfive.append(dishfive, dishimgfive, dishfivedesc);
  menusection.appendChild(sectionfive);

  const sectionsix = document.createElement("div");
  sectionsix.classList.add("section");
  const dishsix = document.createElement("div");
  dishsix.classList.add("dish");
  dishsix.textContent = "ONLY RAMEN";
  const dishimgsix = document.createElement("div");
  dishimgsix.classList.add("image", "imagesix");
  dishimgsix.classList.add("description");
  const dishsixdesc = document.createElement("div");
  dishsixdesc.textContent = "The most delicious food - £3.20!";
  sectionsix.append(dishsix, dishimgsix, dishsixdesc);
  menusection.appendChild(sectionsix);
  pagecontent.appendChild(menusection);

  return pagecontent;
}

export { loadMenuPage };
