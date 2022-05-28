$(document).ready(function() {
  $("h1").css("color", "green");
  // $("h1").addClass("big");
  // $("h1").removeClass("big");
  // let bol = $("h1").hasClass("margin-50");
  // console.log(bol);

// mannage the text and innerhtml using .text and .html rather than using the innerHTML and vice versa

// Manipulate the attributes using jquery
// use .attr for attributes
 console.log($("button").attr("name")) //prints button
 $("a").attr("href", "http://www.google.com")

 // add an event listner
 $("button").click(function() {
   $("h1").css("color", "red");
 })

//        !! IMPORTANT !!
 // chande the content of h1 when user clicks any key
 // sentence=''
 // list1=[]
 // $(document).on("keypress", function(e) {
 //   sentence+=e.key
 //   $("h1").text(sentence);
 // })

// the before() after() and prepend() append() methods can be used to add the html elements


// we ca use the element.hede() or show() methods to hide or show any html elements, or use toggle() to toggle between hide and show
// also this can be done using fadeout() fadein() or fadetoggl() , slideup()("it provides some kind of collapsing effect to the element") or slidedown() or slidetoggle() provides some sort of animated effect






})
