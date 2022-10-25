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
    return `Mein name ist ${Obj.vollName}, ich bin ein ${Obj.job}, irgendwann möchte ich in ${Obj.lieblingsStadt} wohnen`;
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
console.log(typeof details());
console.log("Fähigkeiten", fähigkeit);
console.log("Fähigkeiten", Array.isArray(fähigkeit));
