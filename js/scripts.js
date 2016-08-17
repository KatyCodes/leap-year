// Business logic
var leapYear = function (year){
  console.log(year);
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    return true;
  } //else if (year.length === 0){
  //   alert("Please enter a year.");
  // }
   else {
    return false;
  }
}
// User Interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    //check if length is 0 here

    //if length is 0, show alert,

    //otherwise parse, and call function.

    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  
  });
});
