var gallons = function (num1) {
  return num1 / 0.26417;
}
var tbs = function (num1) {
  return num1 / 0.067628
}


$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("input#gallons").val());
    var result = gallons(num1);
    $("#liters").text(result);
  });
  $("#blanks2 form").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("input#tbs").val());
    var result = tbs(num1);
    $("#ml").text(result);
  });
});
