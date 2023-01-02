const header = $("#giveMeE");

// same as onclick
header.click(function () {
  header.css("color", "Hotpink");
});

// now comes to beneficial part if we wanted to select all buttons and give them an event listener we would need a for loop. in JQuery you don't need that

// for example like this:

// for (let i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//       document.querySelector("h1").style.color = "purple";
//     });
//   }

const btns = $("button");

// we dont need the for loop anymore
// jquery searches all the buttons for you
btns.click(function () {
  header.css("color", "purple");
});

// Detecting keystrokes in our input
const inp = $("input");

inp.keypress(function (event) {
  console.log(event.key);
});

// looking which key user presses on document itself and making use of it for example in games etc...

$(document).keypress(function (event) {
  console.log(event.key);
});

// we will change the text with function above to show which key is pressed instead of an h1
$(document).keypress(function (event) {
  header.text(event.key);
});

// with on we can use all js event listeners
header.on("mouseover", function () {
  header.css("color", "grey");
});

// ADDING AND REMOVING ELEMENTS WITH JQUERY

// creates a button before our h1
header.before("<button>I was made before</button>");

// creates a button after our h1
header.after("<button>I was made after</button>");

// prepend and append will be nested inside our h1
header.prepend("<button>I was prepended</button>");
header.append("<button>I was appended</button>");

// removing all buttons. again no for loop is needed
$("button").remove();
