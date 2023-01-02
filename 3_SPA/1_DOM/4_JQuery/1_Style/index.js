// selecting jQuery('button') or $('button'); both work but everyone uses the $ sign for simplicity
// why ? cause we want to keep it as short as possible

// if JQuery import is in the head tag you should use this
// $(document).ready(function () {
//     $("h1").css("color", "red");
// });

// if imports are in the bottom use freely

// next open this in the browser https://code.jquery.com/jquery-3.6.2.js it's the source in our JQuery import. The whole sdk is saved there and you can check few lines with the students. Feel free to copy whole code and paste it here

// use https://minifier.org/ to show how much space could be saved when minifying our code

// SELECTING ELEMENTS

// for example document.querySelector('h1'); we want to do it in jQuery

// we target the h1 with $ then with .css method we will style. first arg is which property and second one will be value
$("h1").css("color", "red");

// will show us rgb value
console.log($("h1").css("color"));

$("h1").css("font-size", "5rem");

//the font size in px
console.log($("h1").css("font-size"));

// targeting h1 with class title => $('h1.title'); or $('.title')
// targeting h1 inside div with id header => $('#header h1') or $('#header')

// now unto buttons

// instead of document.querySelectorAll('button');
const buttons = $("button");

console.log(buttons);

// the problem here is .css method will do inline styling so it's better to work with classes

// MANIPULATING CLASSES WITH JQuery

//giving h1 a new class
console.log("BEFORE", $("h1").css("font-weight"));
$("h1").addClass("thick-title");
console.log("AFTER", $("h1").css("font-weight"));

// removing the given class
$("h1").removeClass("thick-title");

// adding and removing multiple classes: just use space inbetween
$("h1").addClass("thick-title margin-50");

// to check if class exists in our h1: returns boolean

console.log("Does h1 have margin-50 class", $("h1").hasClass("margin-50"));

$("h1").removeClass("thick-title margin-50");
