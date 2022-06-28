var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
  recognition.start();
}

recognition.onresult = function (event) {
  console.log(event);

  var content = event.results[0][0].transcript;

  document.getElementById("textbox").innerHTML = content;
  console.log(content);
  speak();
};

function speak() {
  var synth = window.speechSynthesis;

  var speak_data = document.getElementById("textbox").value;

  var utterThis = new SpeechSynthesisUtterance("the computer says"+speak_data)
  ;

  synth.speak(utterThis);
}





