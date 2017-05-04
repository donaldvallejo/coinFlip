//coin flip game
//  creat outcome/flip function
  // based off of math.random to give us heads or tails
// a prompt for user to input thier guess
  // logs thier guess
$(document).ready(function() {
  // reset Button function
  function reset(){
    console.log("reset clicked");
    $("div").empty();
  }
  $(".reset").on("click", reset);
  // make a box function
  function addBox(){
    $(".container").prepend("<div class='infinity'>to infinity... and beyond!</div>");
    $(".infinity").on("click", function() {
      console.log("infinity click");
    });

  }
  $(".makeBox").on("click", addBox);

  $("#parent-list").on("click", function(){console.log("i am an Li")});

   function printClickedElement() {
     $("li").on("click", function() {
       console.log("on part is working")
       console.log(this)
   })
   return printClickedElement
  }
  printClickedElement();

  function flip() {
    console.log("flip is workin");
    console.log('this at first line of flip', this);

    var question = prompt("heads or tails?")
    var random = Math.random();
    if (random < .5 && question === "heads") {
      console.log('this in conditional', this);

      console.log("It's heads!!!");
      // console.log(random);
      var heads = document.getElementById('result').innerHTML = "It's heads!!!";

    } else if (random > .5 && question === "tails") {
      console.log('this in conditional', this);

      console.log("It's tails!!!");
      // console.log(random);
      var tails = document.getElementById('result').innerHTML = "It's tails!!!";

    } else {
      console.log('this in conditional', this);

      console.log("you're wrong!!! try again!!!");
      var answer = document.getElementById('result').innerHTML = "you're wrong!!! try again!!!";
    }
  }
  $(".button").on("click", flip);
  $(".container").on("*", function(){
    console.log("all clicked?");
  });

  $('#parent').on('click', '.child', function() {
    $(this).toggleClass("hidden displayed");
  });
  // make li buble up
    $("#parent").on("click", function(){

        alert("list item alert!!!", this)

    });


});
