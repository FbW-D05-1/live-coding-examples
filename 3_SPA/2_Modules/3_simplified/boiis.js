const bois = ["Hosam", "33", "Nice", "Sidar"];

const formatBoyes = () => {
  let val = "";

  bois.forEach((boi) => (val += boi + ", "));

  return val;
};

const greet = () => {
  console.log(bois[0], "says hello");
};

export { formatBoyes, greet as greetings };

export default bois;
