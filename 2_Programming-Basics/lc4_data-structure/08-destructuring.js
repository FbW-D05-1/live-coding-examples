let Obj = {
  vollName: "Sidar Halman",
  job: "Assistent Lehrer",
  "job Beschreibung":
    "Ich öffne break out rooms und trinke kaffee. Prüfe tests manchmal",
  fähigkeit: [
    "Html",
    "CSS",
    "SCSS",
    "JavaScript",
    "React",
    "NodeJS",
    "MongoDB",
    "Express",
  ],
  lieblingsStadt: "Marburg",
  lieblingsZahl: 69,
  details() {
    return `Mein name ist ${this.vollName}, ich bin ein ${this.job}, irgendwann möchte ich in ${this.lieblingsStadt} wohnen`;
  },
};

// 1. mit dot notation

let vollName = Obj.vollName;

console.log("Voll Name", vollName);

//2. bracket notation
let jobBeschreibung = Obj["job Beschreibung"];

console.log("Job Beschreibung", jobBeschreibung);

// 3. detstructuring

let { fähigkeit, details, lieblingsZahl } = Obj;
console.log(details());
console.log("Fähigkeiten", fähigkeit);
console.log("Fähigkeiten", Array.isArray(fähigkeit));

// bind () https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

const detailsGet = Obj.details;
console.log(detailsGet());

const fixedDetails = detailsGet.bind(Obj);

console.log(fixedDetails());

const oneLine = Obj.details.bind(Obj);
console.log(oneLine());
