$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name = $("input#name").val();
    var address = $("input#address").val();
    var country = $("input#country").val().toUpperCase();

    $(".name").text(name);
    $(".address").text(address);
    $(".country").text(country);

    $("#story").show();

    event.preventDefault();
  });
});
