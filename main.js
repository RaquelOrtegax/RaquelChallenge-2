function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // This gets a "handle" to the clock div in our HTML
    var clockDiv = document.getElementById('clock');

    // Then we set the text inside the clock div 
    // to the hours, minutes, and seconds of the current time
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
  }

  // This runs the displayTime function the first time
  displayTime();
  setInterval(displayTime, 1000);
;

var t = new Date().getMinutes();
// onder de 20 minuten heeft het een lichtblauwe kleur
if (t < 20) {
    document.body.style.backgroundColor="#80d4ea";
} else if (t < 40) {
	// onder de 40 minuten heeft het een donkerblauwe kleur
    document.body.style.backgroundColor="darkblue";
} else {
	// Na de 40 minuten heeft het een zwarte kleur
    document.body.style.backgroundColor="black";
}