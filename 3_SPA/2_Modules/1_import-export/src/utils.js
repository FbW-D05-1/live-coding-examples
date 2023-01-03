const getTimesTwo = (val) => {
  return val * 2;
};

const getTimesFour = (val) => {
  return val * 4;
};

const buildPage = (input) => {
  const appElement = document.getElementById("app");

  appElement.innerHTML = `
    <ul>
        <li>testwert 1: ${input.getTimesTwo}</li>
        <li>testwert 2: ${input.getTimesFour}</li>
    </ul>
    `;
};

export { getTimesTwo, getTimesFour, buildPage as makePage };
