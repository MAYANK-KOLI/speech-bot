
const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, I did not understand that.";

    if (message.includes('Hey Simon')) {
      speech.text = "Checking command, command found, activating speech bot system, hello, who are you? ";
    }

    if (message.includes('Janvi')) {
      speech.text = "Sorry but I dont know you. Mayank didn't told me about you. Quitting system.";
    }

    if (message.includes('Mayank')) {
      speech.text = "Hello Mayank. Hope you having a nice day ";
    }

    if (message.includes('Tell me something about todays weather')) {
      speech.text = "Of course. Which place weather do you want to know";
    }

    if (message.includes('Indian weather')) {
      speech.text = "Sorry, I cant help you. In India weather changes just as politician changes their promise.";
    }
    if (message.includes('What is your opinion about corona virus')) {
      speech.text = "Let me check my files, According to my data Modi hai toh munkin hai.";
    }
    if (message.includes('Who is your creator?')) {
      speech.text = "The name of my creator is Late Bell Labs in 19 52. But my this version is programmed by someone whos name is Mayank Koli";
    }
    if (message.includes('Ok Simon you can quit program')) {
      speech.text = "Closing file, clearing memory, shutting system down.";
    }
    if (message.includes('Ok Simon quit')) {
      speech.text = "I am an A I so don't tell me when to quit .";
    }
    if (message.includes('Get lost')) {
      speech.text = "It won't work Mayank will recreate my better version me again.";
    }
    if (message.includes('What is your Name?')) {
      speech.text = "I am Simon. I am a seech bot programmed by Mayank Koli";
    }
    if (message.includes('Anju')) {
      speech.text = "I know who are you. You are mother of Mayank koli";
    }
    if (message.includes('Nagesh')) {
      speech.text = "I know who are you. You are father of Mayank koli";
    }
    if (message.includes('What is the time? ')) {
      speech.text = "Move your head upwards and look into your watch. the one that is hanging on your wall or look at right corner of your device";
    }



    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener('click', () =>{
  recorder.start();
});
