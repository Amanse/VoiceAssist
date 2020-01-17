const button = document.querySelector('.talk');
const content = document.querySelector('.content');


const greetings = ['I was fine but now you came', 'I am good, unlike you', 'Fuck you nigger'];
const weather = ['why do you wanna know you never go out', 'Storm of gayness in your mind'];
const meme  = ['Ur mom gay', 'Ok boomer', 'That wasn\'t very cash money of you'];

const SpeechRecognition = window.SpeechRecogniton || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log('voice is active');
};

recognition.onresult = function (event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

//add the listner to btn

button.addEventListener('click', () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;

  if (message.includes('how are you')) {
    const finaltext = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finaltext;
  } else if (message.includes('weather')) {
    const finalText = weather[Math.floor(Math.random() * weather.length)];
    speech.text = finalText;
  } else if (message.includes('mum') && message.includes('gay')) {
    speech.text = "no u";
  } else if (message.includes('kill') && message.includes('me') ) {
    speech.text = 'i really wish i could';
  } else {
    const finalText = meme[Math.floor(Math.random() * meme.length)];
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 0.99;
  speech.pitch = 1;
  speech.lang = 'en-US';

  window.speechSynthesis.speak(speech);
}
