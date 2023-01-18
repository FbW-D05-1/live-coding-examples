export default class ApiCall {
  constructor() {
    this.token = "3cbc9940";
  }
  async fetchMovie(title) {
    const sauber = title.trim().split(" ").join("+");
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${this.token}&t=${sauber}`
    );
    const data = await response.json();
    return data;
  }
}
