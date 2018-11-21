var choices = ["3GB", "6GB", "15GB", "30GB", "monthly", "annually"];

var price = 0;
var chatterbox_price = 0;
var chatterbox_mins = 0;
var chatter_gb = 0;

// wolf price calculations and price display//

$(".wolf--price").click(function(event) {
  var wolf_gb = this.getAttribute("data-gb");
  var wolf_price = this.getAttribute("data-price");
  price = wolf_price;
  console.log(wolf_price);
});

$(".monthly").click(function(event) {
  $("#price").text(price);
});

$(".annually").click(function(event) {
  $("#price").text(price * 12);
});

// chatterbox price calculations and price display//

$(".chatterbox--price").click(function(event) {
  chatterbox_gb = this.getAttribute("data-gb");
  chatterbox_price= this.getAttribute("data-price");
  price = chatterbox_price + chatterbox_mins;
  console.log(chatterbox_price);
});

$(".chatterbox--mins").click(function(event) {
  chatterbox_mins = this.getAttribute("mins-price");
  price = chatterbox_price + chatterbox_mins;
});

$(".monthly").click(function(event) {
  $("#price").text(price);
});

$(".annually").click(function(event) {
  $("#price").text(price * 12);
});
