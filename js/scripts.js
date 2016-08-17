// Business logic
var leapYear = function (year){
  if (year % 4 === 0){
    return true;
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
