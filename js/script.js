var choices = ["1GB", "3GB", "6GB", "10GB", "15GB", "20GB", "30GB", "180mins", "", "monthly", "annually"];

var price = 0;
var chatterbox_price = 0;
var chatterbox_mins = 0;
var chatterbox_gb = 0;

// wolf price calculations and price display//

$("#price").hide();

$(".wolf--price").click(function(event) {
  $(".wolf--price").css("background-color", "rgb(95, 213, 136)");
  $(this).css("background-color", "lightgrey");
  var wolf_gb = this.getAttribute("data-gb");
  var wolf_price = this.getAttribute("data-price");
  price = wolf_price;
});

$(".monthly").click(function(event) {
  $(".monthly").css("background-color", "rgb(95, 213, 136)");
  $(this).css("background-color", "lightgrey");
    $("#price").text(price);
});

$(".annually").click(function(event) {
  $(".annually").css("background-color", "rgb(95, 213, 136)");
  $(this).css("background-color", "lightgrey");
  $("#price").text(price * 12);
  $("#price").show();
});

// chatterbox price calculations and price display//

$(".chatterbox--price").click(function(event) {
  $(".chatterbox--price").css("background-color", "rgb(95, 213, 136)");
  $(this).css("background-color", "lightgrey");
  chatterbox_gb = this.getAttribute("data-gb");
  chatterbox_price = this.getAttribute("data-price");
  price = chatterbox_price + chatterbox_mins;
});

$(".chatterbox--mins").click(function(event) {
  $(".chatterbox--mins").css("background-color", "rgb(95, 213, 136)");
  $(this).css("background-color", "lightgrey");
  chatterbox_mins = this.getAttribute("mins-price");
  price = parseInt(chatterbox_price) + parseInt(chatterbox_mins);
    $("#price").show();
    $("#price").hide();
});

$(".monthly").click(function(event) {
  $(".monthly").css("background-color", "rgb(95, 213, 136)");
  $(this).css("background-color", "lightgrey");
  $("#price").text(price);
    $("#price").show();
});

$(".annually").click(function(event) {
  $(".annually").css("background-color", "rgb(95, 213, 136)");
  $(this).css("background-color", "lightgrey");
  $("#price").text(price * 12);
    $("#price").show();
});

// Family price calculations and price display//

$(".family--price").click(function(event) {
  $(".family--price").css("background-color", "rgb(95, 213, 136)");
  $(this).css("background-color", "lightgrey");
  family_gb = this.getAttribute("data-gb");
  family_sims = this.getAttribute("sims");
  price = family_gb + family_sims;
});

$(".family--sims").click(function(event) {
  $(".family--sims").css("background-color", "rgb(95, 213, 136)");
  $(this).css("background-color", "lightgrey");
  family_sims = this.getAttribute("sims");
  price = parseInt(family_price) + parseInt(family_sims);
    $("#price").show();
    $("#price").hide();
});

$(".monthly").click(function(event) {
  $(".monthly").css("background-color", "rgb(95, 213, 136)");
  $(this).css("background-color", "lightgrey");
  $("#price").text(price);
    $("#price").show();
});

$(".annually").click(function(event) {
  $(".annually").css("background-color", "rgb(95, 213, 136)");
  $(this).css("background-color", "lightgrey");
  $("#price").text(price * 12);
    $("#price").show();
});
