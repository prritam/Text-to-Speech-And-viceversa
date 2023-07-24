const textArea =document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;
const textToSpeech=()=>{
    const synth = window.speechSynthesis;
    const text = textArea.value;
   if(!synth.speaking && text){
    const utternace = new SpeechSynthesisUtterance(text);
     synth.speak(utternace);}


     if(text.length > 50){
        if(synth.speaking && isSpeaking){
            button.innerText="pause";
            synth.resume();
            isSpeaking=false;

        }
        else{
            button.innerText='Resume';
            synth.pause();
            isSpeaking=true;
        }
     }
     else{
        isSpeaking=false;
        button.innerText=Speaking;
     }
     setInterval(()=>{
        if(!synth.speaking && isSpeaking){
            isSpeaking=true;
            button.innerText="Convert"
        }
    })
}; 
button.addEventListener("click",textToSpeech);
function speak(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang ="en-GB";
    recognition.onresult =function(event){
        console.log(event);
        document.getElementById("text").value=
        event.results[0][0].transcript;
    }
    recognition.start();
}

