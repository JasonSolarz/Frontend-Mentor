const main = document.querySelector("main");
const section = document.querySelector("section");
const ratings = document.querySelectorAll("li");
const rating = document.querySelector(".rating");
const submitBTN = document.querySelector("button");
let chosenRating;
let ratingSelected = false;

ratings.forEach((rating, index) => {
  rating.addEventListener("click", () => {
    clearAllSelections();
    rating.classList.add("selected");
    ratingSelected = true;
    chosenRating = `You selected ${index + 1} out of 5`;
  })
})

submitBTN.addEventListener("click", () => {
  if (ratingSelected) {
    main.classList.add("display-not");
    rating.textContent = chosenRating;
    section.classList.remove("display-not");
  }
})

function clearAllSelections() {
  ratings.forEach(rating => {
    rating.classList.remove("selected");
  });
}

