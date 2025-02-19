const buttonSubmit = document.querySelector("button[type = 'submit']");
const ratingSection = document.querySelector(".rating");
const thankYouSection = document.querySelector(".thank-you");
const inputs = document.querySelector("fieldset").children;
const ratingScore = document.querySelector(".rating-score");
let checkedScore;

const initialisation = () => {
    showHideThankYouDOM(false);
};

buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    if (checkedScore) {
        showHideThankYouDOM(true);
        ratingScore.textContent = `You selected ${checkedScore} out of 5`;
    }
});

document.querySelector("input[value='1']").addEventListener("click", (event) => {
    if (event.target.checked) {
        checkedScore = event.target.value;
    }
});

document.querySelector("input[value='2']").addEventListener("click", (event) => {
    if (event.target.checked) {
        checkedScore = event.target.value;
    }
});

document.querySelector("input[value='3']").addEventListener("click", (event) => {
    if (event.target.checked) {
        checkedScore = event.target.value;
    }
});

document.querySelector("input[value='4']").addEventListener("click", (event) => {
    if (event.target.checked) {
        checkedScore = event.target.value;
    }
});

document.querySelector("input[value='5']").addEventListener("click", (event) => {
    if (event.target.checked) {
        checkedScore = event.target.value;
    }
});

const isInputsChecked = (inputsVal) => {
    for (const input of inputsVal) {
        if (input.checked) {
            checkedScore = input.value;
            return true;
        }
    }
    return false;
};

const showHideThankYouDOM = (display) => {
    if (display) {
        ratingSection.style.display = "none";
        thankYouSection.style.display = "flex";
    } else {
        ratingSection.style.display = "block";
        thankYouSection.style.display = "none";
    }
};

initialisation();
