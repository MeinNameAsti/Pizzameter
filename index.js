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

// Hungerlevel:

const options = document.querySelectorAll(".option");

options.forEach((button) => {
  button.addEventListener("click", () => {
    options.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");
  });
});

// Berechnung:

const calculate = document.getElementById("calculate");

calculate.addEventListener("click", () => {
  pizzenBerechnen();
});

function pizzenBerechnen() {
  const hungerlevel = document.querySelector(".option.active").dataset.hunger;
  const pizzagroesse = Number(document.getElementById("size").value);

  const ergebnis = berechnePizzen(persons, hungerlevel, pizzagroesse);

  console.log(ergebnis);

  document.getElementById("pizzaResult").textContent =
    `Empfohlene Anzahl an Pizzan: ${ergebnis.pizzen}`;
  document.getElementById("piecesTotal").textContent =
    ergebnis.benoetigteStuecke;
  document.getElementById("piecesLeft").textContent = ergebnis.uebrigeStuecke;
  document.getElementById("piecesPerPerson").textContent =
    ergebnis.stueckeProPerson;
}

function berechnePizzen(personen, hungerlevel, pizzagroesse) {
  const stueckeProPerson = {
    wenig: {
      26: 7,
      30: 6,
      36: 5,
    },
    normal: {
      26: 8,
      30: 7,
      36: 6,
    },
    viel: {
      26: 9,
      30: 8,
      36: 7,
    },
  };

  const stueckePerson = stueckeProPerson[hungerlevel][pizzagroesse];

  const benoetigteStuecke = personen * stueckePerson;
  const anzahlPizzen = Math.ceil(benoetigteStuecke / 8);
  const uebrigeStuecke = anzahlPizzen * 8 - benoetigteStuecke;

  return {
    pizzen: anzahlPizzen,
    benoetigteStuecke: benoetigteStuecke,
    uebrigeStuecke: uebrigeStuecke,
    stueckeProPerson: stueckePerson,
  };
}
