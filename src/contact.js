function loadContactPage() {
  const pagecontent = document.querySelector("#content");
  const contactsection = document.createElement("div");
  contactsection.classList.add("contactinfo");
  const aboutHeading = document.createElement("div");
  aboutHeading.classList.add("aboutHeading");
  aboutHeading.textContent = "About us!";
  const sentenceOne = document.createElement("div");
  sentenceOne.classList.add("sentence");
  sentenceOne.textContent =
    "Hello! We are located in Satoryl Marsh (waist of Bionis).";
  const sentenceTwo = document.createElement("div");
  sentenceTwo.classList.add("sentence");
  sentenceTwo.textContent =
    "We started this little venture due to the popularity of Shulk's sandwiches, Fiora thought it would be a great idea.";
  const sentenceThree = document.createElement("div");
  sentenceThree.classList.add("sentence");
  sentenceThree.textContent =
    "We are not heavily in debt as a result of starting this, absolutely not at all.";
  const sentenceFour = document.createElement("div");
  sentenceFour.classList.add("sentence");
  sentenceFour.textContent =
    "If you could please come down it would be amazing.";
  const mapSection = document.createElement("div");
  mapSection.classList.add("map");
  const sentenceFive = document.createElement("div");
  sentenceFive.classList.add("sentence");
  sentenceFive.textContent = "Contact us on: 9992-011-1111";
  const sentenceSix = document.createElement("div");
  sentenceSix.classList.add("sentence");
  sentenceSix.textContent = "Opening times:";
  const sentenceSeven = document.createElement("div");
  sentenceSeven.classList.add("sentence");
  sentenceSeven.textContent = "Monday - Friday 7 - 19:00";
  const sentenceEight = document.createElement("div");
  sentenceEight.classList.add("sentence");
  sentenceEight.textContent = "Weekends 9 - 16:00";
  contactsection.append(
    aboutHeading,
    sentenceOne,
    sentenceTwo,
    sentenceThree,
    sentenceFour,
    mapSection,
    sentenceFive,
    sentenceSix,
    sentenceSeven,
    sentenceEight
  );
  pagecontent.appendChild(contactsection);
  return pagecontent;
}

export { loadContactPage };
