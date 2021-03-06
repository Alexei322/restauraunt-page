function loadHomePage() {
  const pagecontent = document.querySelector("#content");
  const header = document.createElement("header");
  const navbar = document.createElement("div");
  navbar.classList.add("navBar");
  header.appendChild(navbar);
  const h2top = document.createElement("h2");
  h2top.classList.add("titleheading");
  h2top.textContent = "Xenoblade eatery";
  navbar.appendChild(h2top);
  const navlist = document.createElement("ul");
  navlist.classList.add("listitems");
  const buttonone = document.createElement("button");
  buttonone.classList.add("home");
  buttonone.textContent = "Home";
  const buttontwo = document.createElement("button");
  buttontwo.classList.add("menu");
  buttontwo.textContent = "Menu";
  const buttonthree = document.createElement("button");
  buttonthree.classList.add("contact");
  buttonthree.textContent = "Contact us";
  navlist.append(buttonone, buttontwo, buttonthree);
  navbar.appendChild(navlist);
  pagecontent.appendChild(header);
  const pagefooter = document.createElement("footer");
  const bottomsection = document.createElement("div");
  bottomsection.classList.add("bottomsection");
  const bottomitem = document.createElement("div");
  bottomitem.textContent = "2022";
  bottomitem.classList.add("bottomitem");
  const bottomitemtwo = document.createElement("div");
  bottomitemtwo.textContent = "Alexei Bradshaw";
  bottomitemtwo.classList.add("bottomitem");
  bottomsection.append(bottomitem, bottomitemtwo);
  pagefooter.appendChild(bottomsection);
  pagecontent.appendChild(pagefooter);
  const shulksection = document.createElement("div");
  shulksection.classList.add("shulkwithcaption");
  const shulkdescone = document.createElement("div");
  shulkdescone.textContent = "The best food on Bionis!";
  const shulkdesctwo = document.createElement("div");
  shulkdesctwo.textContent = "Making sandwiches since 4010";
  const shulkimage = document.createElement("div");
  shulkimage.classList.add("shulk");
  const shulkdescthree = document.createElement("div");
  shulkdescthree.textContent = "I'm really feeling it!";
  shulksection.append(shulkdescone, shulkdesctwo, shulkimage, shulkdescthree);
  pagecontent.appendChild(shulksection);
  return pagecontent;
}

function loadHomeNotFirst() {
  const pagecontent = document.querySelector("#content");
  const shulksection = document.createElement("div");
  shulksection.classList.add("shulkwithcaption");
  const shulkdescone = document.createElement("div");
  shulkdescone.textContent = "The best food on Bionis!";
  const shulkdesctwo = document.createElement("div");
  shulkdesctwo.textContent = "Making sandwiches since 4010";
  const shulkimage = document.createElement("div");
  shulkimage.classList.add("shulk");
  const shulkdescthree = document.createElement("div");
  shulkdescthree.textContent = "I'm really feeling it!";
  shulksection.append(shulkdescone, shulkdesctwo, shulkimage, shulkdescthree);
  pagecontent.appendChild(shulksection);

  return pagecontent;
}

export { loadHomePage, loadHomeNotFirst };
