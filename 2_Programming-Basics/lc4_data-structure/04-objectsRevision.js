// CRUD  ==> C = Create, R = Read, U = Update, D = Delete

const dci = {
  users: [
    {
      _id: 12344,
      name: "Sidar",
      email: "sidar.halman@digitalcareerinstitute.de",
      password: 12356,
      isAdmin: false,
      date: new Date(),
    },
  ],
};

// const userIdGen = () => {
//   const genId = Math.floor(Math.random() * 10000);
//   return genId;
// };

const userIdGen = () => Math.floor(Math.random() * 10000);

function createUser(user) {
  if (typeof user === "object") {
    const newUser = {
      _id: userIdGen(),
      date: new Date(),
      email: user.name.toLowerCase() + "@digitalcareerinstitute.de",
      name: user.name,
      password: user.password,
      isAdmin: user.isAdmin,
    };
    dci.users.push(newUser);
  } else {
    console.log("Not a valid user :C");
  }
}

createUser({
  name: "hosam",
  password: 80085,
  isAdmin: true,
});

createUser({
  name: "Micha",
  password: 1337,
  isAdmin: false,
});

// console.log(createUser("sadsad"));
console.log(dci);

//challenge start
function getAdmins() {
  //code
}
