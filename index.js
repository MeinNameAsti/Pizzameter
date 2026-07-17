let persons = 2;

const personsText = document.getElementById("persons");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

// Personenanzahl:

plus.addEventListener("click", () => {
  persons++;

  updatePersons();
});

minus.addEventListener("click", () => {
  if (persons > 1) {
    persons--;
  }

  updatePersons();
});

function updatePersons() {
  personsText.textContent = persons;
}

// Hunger Buttons:

const options = document.querySelectorAll(".option");

options.forEach((button) => {
  button.addEventListener("click", () => {
    options.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");
  });
});

// Berechnung:

const calculate = document.getElementById("calculate");

calculate.addEventListener("click", () => {});
