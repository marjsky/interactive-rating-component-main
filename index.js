const mainContainer = document.querySelector(".container");

const thankYouContainer = document.querySelector(".thank-you");

const submitButton = document.querySelector("#submit");

const rating = document.querySelector("#rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
    thankYouContainer.classList.remove("hidden");
    mainContainer.style.display = "none"
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        // console.log(rate.innerHTML); *checking*
        rating.innerHTML = rate.innerHTML;
    })
})