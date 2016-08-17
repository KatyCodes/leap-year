// Business logic
var leapYear = function (year){
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    return true;
  } else if (year === ""){
    alert("Please enter a year.");
  } else {
    return false;
  }
}
// User Interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
