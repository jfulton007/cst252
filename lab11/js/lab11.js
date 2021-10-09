/*
  * Author: Joe Fulton <jfulton@csumb.edu>
  * Created: 9 October
  * Liscense: Public Domain
*/
//trying to use jQuery.
$("button").click(function(){
  $("#home").css("color", "green");
  $(".wrap").css("margin", "10px");
  //trying to link it to the script output in html.
  document.getElementById("Script Output");
  //trying to create the alert message.
  var alert = jQuery.Event("click");
  jQuery("body").trigger( alert );
}
