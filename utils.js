

function txtToSpeech(txt){
    if('speechSynthesis' in window){
        if(window.speechSynthesis.speaking){
            window.speechSynthesis.cancel();
        }
        const utterance = new SpeechSynthesisUtterance(txt);
        speechSynthesis.speak(utterance);
    }else{
        alert("Text-to-speech is not supported in this browser");
    }
}





///maths functions
let maxNum = 90;
let minNum = 1;

function getRandomNumber(x=minNum, y=maxNum) {
    let randInt = Math.floor(Math.random() * (y - x + 1) + x);

    return randInt;
}