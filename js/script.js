var choices = ["3GB", "6GB", "15GB", "30GB", "monthly", "annually"];

var price = 0;

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
  var chatterbox_gb = this.getAttribute("data-gb");
  var chatterbox_price = this.getAttribute("data-price");
  var chatterbox_mins = this.getAttribute("mins-price");
  price = chatterbox_price;
  console.log(chatterbox_price);
});

$(".mins-price").click(function(event) {
  $("#price").text(price);
});

$(".monthly").click(function(event) {
  $("#price").text(price);
});

$(".annually").click(function(event) {
  $("#price").text(price * 12);
});

// wolf_price = parseInt(this.getAttribute("data-price"));
chatterbox_price = parseInt(this.getAttribute("data-price"));
chatterbox_price = parseInt(this.getAttribute("mins-price"));
