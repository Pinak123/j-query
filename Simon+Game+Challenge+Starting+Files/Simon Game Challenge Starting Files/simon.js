let colorpattern = [];
// alert('hey there');
let level = 0

var started = false;
let colour = ["red", "blue", "green", "yellow"]
clickpattern = []
$(".btn").click(function () {




  let clickedbtn = $(this).attr("id");
  // console.log(clickedbtn);
  clickpattern.push(clickedbtn);
  // console.log(clickpattern);
  checkAnswer(clickpattern.length - 1);
  playSound(clickedbtn);
  animateclick(clickedbtn);

});
// check answers
let index = 0;

function checkAnswer(answer) {

  if (colorpattern[answer] == clickpattern[answer]) {
    console.log('correct answer');

    if (colorpattern.length == clickpattern.length) {

      setTimeout(function () {
        newsequence()
      }, 1000);
    }
  } else {
    console.log('wrong answer')
    level = 0
    var newaudio = new Audio('./sounds/wrong.mp3');
    newaudio.play()
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    started = false;
    startover()



  }
}

// function check(){
// while (index < level) {
//    if (clickpattern[index] == colorpattern[index]){
//      index++;
//    }else{
//      level =0;
//      index =0;
//      clickpattern=[]
//      colorpattern=[]
//      $("#level-title").text("you have messed up")
//      started = false;
//    };
//    if (index ==level) {
//      newsequence();
//    };
// }
// }




function newsequence() {
  level += 1;
  clickpattern = []
  var randomnum = Math.floor(Math.random() * 4)
  // console.log(randomnum)
  $("#level-title").text("level " + level)
  let choose_color = colour[randomnum];
  colorpattern.push(choose_color);
  // console.log(choose_color);
  $("#" + choose_color).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(choose_color);

  // $("btn").click(function() {
  //   clickedbtn=this.attr("id");
  //   console.log(clickedbtn);
  // })

};
// newsequence();
$(document).keypress(function (e) {
  if (!started) {
    $("#level-title").text("level " + level)
    newsequence();
    // check()
    started = true;

  }

});

function playSound(name) {

  //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};


function animateclick(currentcolor) {
  $("#" + currentcolor).addClass("pressed")
  setTimeout(function () {
    $("#" + currentcolor).removeClass("pressed")
  }, 100)
}

function startover() {
  colorpattern = []
  clickpattern = []
  started = false
  level = 0
}
// this thing i had done in vs code dev