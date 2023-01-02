$(".first-btn").on("click", function () {
  // $("h1").hide(); statically hides
  // $('h1').show(); statically shows
  // $("h1").toggle(); // still very sudden and doesn't look good
  // let's make it progressive
  // $("h1").fadeOut(); // animation with a fadeOut
  // $("h1").fadeIn(); // animation with a fade in
  $(".firstH").fadeToggle(); // both fadeOut and fadeIn inside of a toggle
});

$(".second-btn").on("click", function () {
  // $(".secondH").slideUp(); // cool sliding animation collapsing and removing the element
  // $(".secondH").slideDown(); // the collapse backwards and revealing

  $(".secondH").slideToggle(); // again a toggler for the animations

  // cool for dropdowns
});

// if we want custom animations and not pre-built

$(".third-btn").on("click", function () {
  // works with custom css
  // sets the opacity GRADUALLY to 50% which is really cool

  $(".thirdH").animate({ opacity: 0.5 });
  // one rule that you can only add css properties that have numbers as a value
  // that means you can't animate a color etc
  // px works
  $(".thirdH").animate({ margin: 20 });
  //if you want percentage input value as string
  // $(".thirdH").animate({ margin: "20%" });
});

//if you want more than one animation you need to chain the methods

$(".fourth-btn").click(function () {
  // it will do everything in order we chained
  $(".fourthH").slideUp().slideDown().animate({ opacity: 0.5 });
});
