function warning() {
  alert("be back soon");
}

setTimeout(warning, 3000);

//TODO bird appears after five seconds //

setInterval(function () {
  // toggle css display for bird every six seconds
  $("#yardBird").css("display", "block");
  setTimeout(function () {
    $("#yardBird").css("display", "none");
  }, 1000);
}, 6000);

function openMailBox() {
  $(".imgDisplay").css("display", "block");
}

function getMail() {
  let newMail = document.createElement("p");
  newMail.innerHTML = "here is some mail";
  $("#mailContainer").append(newMail);
}
