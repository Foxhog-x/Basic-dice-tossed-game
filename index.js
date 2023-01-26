

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image1 = document.getElementById("dice1_img");
var image2 = document.getElementById("dice2_img");


var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 == randomNumber2) {
    image1.setAttribute("src", `images/Dice-${randomNumber1}.png`)
    image2.setAttribute("src", `images/Dice-${randomNumber2}.png`)

    alert("match is drawn")
}
else {
    image1.setAttribute("src", `images/Dice-${randomNumber1}.png`)
    image2.setAttribute("src", `images/Dice-${randomNumber2}.png`)


}
function refreshPage() {
    window.location.reload();
}
