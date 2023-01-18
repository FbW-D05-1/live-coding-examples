const url = "https://cat-fact.herokuapp.com/facts/";
const target = document.querySelector("#facts");

async function lina() {
  try {
    const antwort = await fetch(url);
    console.log(antwort);
    if (!antwort.ok) {
      return;
    }
    if (antwort.ok) {
      const daten = await antwort.json();
      console.log(daten);
      target.innerHTML = daten.map((fact) => `<li>${fact.text}</li>`).join("");
    }
  } catch (error) {
    console.log(error, error.message);
  }
}
lina();
