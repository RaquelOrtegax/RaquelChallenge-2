function displayTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  var clockDiv = document.getElementById('clock');

  clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
  
  var t = new Date().getSeconds();
  // onder de 20 minuten heeft het een lichtblauwe kleur
  if (t < 20) {
  document.body.style.backgroundColor="#80d4ea";
  } else if (t < 40) {
  // onder de 40 minuten heeft het een donkerblauwe kleur
  document.body.style.backgroundColor="#296d98";
  } else {
  // Na de 40 minuten heeft het een zwarte kleur
  document.body.style.backgroundColor="#1c2e4a";
  }
}

  displayTime();
  setInterval(displayTime, 1000);
;
