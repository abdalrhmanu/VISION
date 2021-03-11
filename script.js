var fontSize = window.outerHeight * 0.32;
var testChar = "Q";
var round = 0;
var fails = 0;
var failsTemp = 0;
var level = 1;
var transcript = '';
var score;
// var noSpeech = 0;
var letterIndex = 0;

// Web Speech Recognition API
try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
} catch (e) {
    console.error(e);
    $('.no-browser-support').show();
    $('.app').hide();
}

// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses.
recognition.continuous = false;

// This block is called every time the Speech APi captures a line, to capture the input voice, and compare it with the test character
recognition.onresult = function (event) {
    console.log(">>> Recognition onresult <<<");
    var current = event.resultIndex;
    transcript = event.results[current][0].transcript;

    // This replace function is to replace the correct spelled letters which were caught wrongly by the API...
    // transcript = replace(transcript);

    if (testChar.toUpperCase() === transcript[0].toUpperCase()) {
        // console.log("Correct >>>> Input: " + transcript[0].toUpperCase() + " is same as the test character: " + testChar.toUpperCase());

        // document.getElementById("result").innerHTML = "correct";
    } else {
        // document.getElementById("result").innerHTML = "false";
        // console.log("Wrong >>>> Input: " + transcript[0].toUpperCase() + " is different from the test character: " + testChar.toUpperCase())
        fails = fails + 1;
    }
};

recognition.onstart = function () {
    // document.getElementById("recording").innerHTML = "recording status: ON";
}

recognition.onspeechend = function () {
    // document.getElementById("recording").innerHTML = "recording status: OFF";
}

recognition.onerror = function (event) {
    if (event.error === 'no-speech') {
        console.log("no speech detected");
        // noSpeech += 1;
    }
    ;
}

recognition.onend = function () {
    nextWord();
}

function replace(text) {
    if (text.toUpperCase() === "OH") {
        return 'o';
    }
    if (text.toUpperCase() === "ZEDD") {
        return 'z';
    }
    if (text.toUpperCase() === "BEEF") {
        return 'p';
    }
    if (text.toUpperCase() === "SAID") {
        return 'z';
    }
    if (text.toUpperCase() === "SAD") {
        return 'z';
    }
    if (text.toUpperCase() === "BE") {
        return 'p';
    }
    if (text.toUpperCase() === "DAD") {
        return 'z';
    }
    if (text.toUpperCase() === "PT") {
        return 'p';
    }
    if (text.toUpperCase() === "DEE DEE") {
        return 'p';
    }
    if (text.toUpperCase() === "THAT") {
        return 'p';
    }
    if (text.toUpperCase() === "ZEDGE") {
        return 'z';
    }
    if (text.toUpperCase() === "HE") {
        return 'e';
    } else {
        return text;
    }

}

function setFont(level) {
    if (level === 2) {
        fontSize = fontSize * 0.47
    }
    if (level === 3) {
        fontSize = fontSize * 0.8
    }
    if (level === 4) {
        fontSize = fontSize * 0.83
    }
    if (level === 5) {
        fontSize = fontSize * 0.8
    }
    if (level === 6) {
        fontSize = fontSize * 0.75
    }
    if (level === 7) {
        fontSize = fontSize * 0.83
    }
    if (level === 8) {
        fontSize = fontSize * 0.8
    }
    if (level === 9) {
        fontSize = fontSize * 0.75
    }

}

function showLanding() {
    // console.log("show landing");
    $('#landingPage').fadeIn();
    $('#testing').fadeOut();
    $('#scoreDiv').fadeOut();
}

function startTesting() {
    $('#landingPage').fadeOut();
    $('#testing').fadeIn();
    $('#scoreDiv').fadeOut();
    console.log(">>> Testing Started <<<");
    nextWord();
}

function showScore() {
    document.getElementById("scoreUser").innerHTML = "Your Test Results: " + score.SixMeter;
    $('#landingPage').fadeOut();
    $('#testing').fadeOut();
    $('#scoreDiv').fadeIn();
    recognition.stop();

    // console.log("show score");
}

document.getElementById("btnEnter").addEventListener("click", function () {
    console.log("enter pressed");
    // $('.chatbot-container').show()
    startTesting();
});

document.getElementById("btnRedo").addEventListener("click", function () {
    // console.log("take again pressed");
    fontSize = window.outerHeight * 0.32;
    testChar = "Q";
    round = 0;
    fails = 0;
    level = 1;
    letterIndex = 0;
    transcript = '';
    score;
    startTesting();
});

function nextWord() {
    // console.log("Letter Index"+letterIndex)
    // console.log("############ " + testChar + " ############");
    // // document.getElementById("round").innerHTML = "round: " + round;
    // // document.getElementById("level").innerHTML = "level: " + level;
    // // document.getElementById("fails").innerHTML = "fails: " + fails;
    // // document.getElementById("youSaid").innerHTML = "said: " + transcript;
    // console.log("said: " + transcript.toUpperCase());
    // console.log("fails: " + fails);
    // console.log("round: " + round);
    // console.log("level: " + level);
    // console.log("font:" + fontSize);
    // console.log("############ " + testChar + " ############");

    round += 1;
    if (fails >= 2) {
        if (level === 1) {
            score = {
                US: "20/200",
                SixMeter: "6/60",
                DecimalNot: "0.10",
                MAR: "10.0",
                logMAR: "1.0",
                VAS: "50"
            };
            showScore()
        }
        if (level === 2) {
            score = {
                US: "20/100",
                SixMeter: "6/30",
                DecimalNot: "0.20",
                MAR: "5.0",
                logMAR: "0.7",
                VAS: "65"
            };
            showScore()
        }
        if (level === 3) {
            score = {
                US: "20/80",
                SixMeter: "6/24",
                DecimalNot: "0.25",
                MAR: "4.0",
                logMAR: "0.6",
                VAS: "7.0"
            };
            showScore()
        }
        if (level === 4) {
            score = {
                US: "20/63",
                SixMeter: "6/18",
                DecimalNot: "0.32",
                MAR: "3.2",
                logMAR: "0.5",
                VAS: "75"
            };
            showScore()
        }
        if (level === 5) {
            score = {
                US: "20/50",
                SixMeter: "6/15",
                DecimalNot: "0.40",
                MAR: "2.5",
                logMAR: "0.4",
                VAS: "80"
            };
            showScore()
        }
        if (level === 6) {
            score = {
                US: "20/40",
                SixMeter: "6/12",
                DecimalNot: "0.50",
                MAR: "2.0",
                logMAR: "0.3",
                VAS: "85"
            };
            showScore()
        }
        if (level === 7) {
            score = {
                US: "20/32",
                SixMeter: "6/9.5",
                DecimalNot: "0.63",
                MAR: "1.6",
                logMAR: "0.2",
                VAS: "90"
            };
            showScore()
        }
        if ((level === 8) || (level === 9)) {
            score = {
                US: "20/20",
                SixMeter: "6/6",
                DecimalNot: "1.0",
                MAR: "1.0",
                logMAR: "0.0",
                VAS: "100"
            };
            showScore()
        }
    }

    // if (round === 2) {
    //     round = 0;
    //     fails = 0;
    //     level = level + 1;
    //     setFont(level);
    // }
    if(letterIndex === 1){
        round = 0;
        fails = 0;
        level = level + 1; // 2
        setFont(level);
    }else if(letterIndex === 3){
        round = 0;
        fails = 0;
        level = level + 1; // 3
        setFont(level);
    }else if(letterIndex === 6){
        round = 0;
        fails = 0;
        level = level + 1; // 4
        setFont(level);
    }else if(letterIndex === 10){
        round = 0;
        fails = 0;
        level = level + 1; // 5
        setFont(level);
    }else if(letterIndex === 15){
        round = 0;
        fails = 0;
        level = level + 1; // 6
        setFont(level);
    }else if(letterIndex === 21){
        round = 0;
        fails = 0;
        level = level + 1; // 7
        setFont(level);
    }else if(letterIndex === 28){
        round = 0;
        fails = 0;
        level = level + 1; // 8
        setFont(level);

    }else if(letterIndex === 36 ){
        round = 0;
        fails = 0;
        level = level + 1; // 9
        setFont(level);
    }
    else if(letterIndex === 44 ){
        round = 0;
        fails = 0;
        level = level + 1; // 10
        setFont(level);
    }



    if (level === 10) {
        score = {
            US: "20/20",
            SixMeter: "6/6",
            DecimalNot: "1.0",
            MAR: "1.0",
            logMAR: "0.0",
            VAS: "100"
        };
        showScore()
    }
    
    // Testing Char picker
    if(transcript != ""){
        letterIndex += 1;
    }
    charPicker()
}

function charPicker(){
    if (fails <= 1 && level !== 10) {
        $("#charDiv").fadeOut("fast");
        testChar = ('EFPTOZLDC').split('')[(Math.floor(Math.random() * 9))];
        document.getElementById("char").innerHTML = testChar;
        document.getElementById("charDiv").style.fontSize = fontSize + "px";
        recognition.stop();
        recognition.start();
        $("#charDiv").fadeIn();
    }
}

function assistantPicker(){
    var names = [
        "Mark",
        "Tom",
        "Edward",
        "Tony",
        "Stark",
        "Roger",
        "Lisa",
        "Sean",
        "Phil",
        "Mohamed",
        "Lisa",
        "Mike",
        "Lara",
        "Wendy"
    ];

    var name = names[Math.floor(Math.random() * names.length)];
    name = name.charAt(0).toUpperCase() + name.substring(1);
    document.getElementById("assistantPicker").innerText = name;


}


document.addEventListener('DOMContentLoaded', (event) => {
        
    showLanding();
    assistantPicker();
});


