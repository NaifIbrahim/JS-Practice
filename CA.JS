var TeamA = 50 + 20 + 15 + 3
var TeamB = 20 + 50 + 90 + 3


if (!(TeamA > 100) && !(TeamB > 100)) {
    alert("both lost the game")
} else if (TeamA > TeamB) {
    alert("Congratulations! Team A")
}
else {
    alert("Congratulations! Team B")
}