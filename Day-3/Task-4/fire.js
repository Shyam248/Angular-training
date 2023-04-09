let countdown = 5;
let countdownInterval;
function updateTimer() {
document.getElementById("timer").innerHTML = countdown;
if (countdown === 0) {
    
clearInterval(countdownInterval);
displayGif()
dis;
countdown.Visibility=Visibility.hidden;
} else {
countdown--;
}
}
function displayGif() {
document.getElementById("gif").src = "fireworks.jpg";
document.getElementById("gif").style.display = "block";
}
countdownInterval = setInterval(updateTimer, 1000);