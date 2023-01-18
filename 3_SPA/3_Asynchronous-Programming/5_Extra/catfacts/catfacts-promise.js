const url = "https://cat-fact.herokuapp.com/facts/";
const target = document.querySelector("#facts");
const func = () => {
  const fetchPromise = window.fetch(url);
  console.log(fetchPromise);
  fetchPromise
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((datas) => {
      console.log(datas);
      target.innerHTML = datas
        .map((data) => {
          return `<li>${data.text}</li>`;
        })
        .join("");
    })
    .catch((grund) => console.log(grund, grund.message))
    .finally(console.log("Catfacts were fetched successfully"));
};
