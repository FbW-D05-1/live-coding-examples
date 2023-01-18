export default class View {
  constructor() {
    this.movieSection = document.querySelector(".movies");
  }
  displayMovieOnPage(data) {
    console.log(data.Response);
    if (!data.Response) {
      alert("Sorry, can't find this movie!");
    }
    this.movieSection.innerHTML += `<section class="movie-display">
        <section class="movie-meta">
        <h2>${data.Title}</h2>
        <p>Release date: ${data.Year}</p>
        
        <p>Rating: ${data.imdbRating}</p>
        </section>
        <p>Plot: ${data.Plot}</p>
        </section>`;
  }
  removeDisplay() {
    this.movieSection.innerHTML = "";
  }
}
