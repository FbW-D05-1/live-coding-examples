import API from "./apiCall.js";
import View from "./view.js";

const client = new API();
const view = new View();

const saveBtn = document.querySelector(".btn-save");
const searchBar = document.getElementById("input");
const resetBtn = document.querySelector(".btn-reset");

const getMovies = () => {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    result.push(localStorage.key(i));
  }
  return result;
};
const displayFromStorage = () => {
  getMovies();
  for (let i = 0; i < localStorage.length; i++) {
    const movie = JSON.parse(localStorage.getItem(localStorage.key(i)));
    console.log(localStorage.key(i));
    view.displayMovieOnPage(movie);
  }
};

displayFromStorage();

saveBtn.addEventListener("click", async (e) => {
  const search = searchBar.value;
  if (getMovies().includes(search)) {
    alert("Schon im speicher");
  } else {
    const data = await client.fetchMovie(search);
    localStorage.setItem(search, JSON.stringify(data));
    view.displayMovieOnPage(data);
    searchBar.value = "";
  }
});

resetBtn.addEventListener("click", () => {
  view.removeDisplay();
  localStorage.clear();
  searchBar.value = "";
});
