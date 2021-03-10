// Web Speech Recognition API
try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
} catch (e) {
    console.error(e);
    $('.no-browser-support').show();
    $('.app').hide();
}

var fontSize = window.outerHeight * 0.32;
var testChar = "Q";
var round = 0;
var fails = 0;
var level = 1;
var transcript = '';
var score;

// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses.
recognition.continuous = false;

// This block is called every time the Speech APi captures a line, to capture the input voice, and compare it with the test character
recognition.onresult = function (event) {
    console.log("******** onresult called ********");
    var current = event.resultIndex;
    transcript = event.results[current][0].transcript;

    // This replace function is to replace the correct spelled letters which were caught wrongly by the API...
    // transcript = replace(transcript);

    if (testChar.toUpperCase() === transcript[0].toUpperCase()) {
        console.log("Correct >>>> Input: " + transcript[0].toUpperCase() + " is same as the test character: " + testChar.toUpperCase());
        // document.getElementById("result").innerHTML = "correct";
    } else {
        // document.getElementById("result").innerHTML = "false";
        console.log("Wrong >>>> Input: " + transcript[0].toUpperCase() + " is different from the test character: " + testChar.toUpperCase())
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
    console.log("show landing");
    $('#landingPage').fadeIn();
    $('#testing').fadeOut();
    $('#scoreDiv').fadeOut();
}

function showTesting() {
    $('#landingPage').fadeOut();
    $('#testing').fadeIn();
    $('#scoreDiv').fadeOut();
    console.log("show testing");
    nextWord();
}

function showScore() {
    document.getElementById("scoreUser").innerHTML = "Your Test Results: " + score.US;
    $('#landingPage').fadeOut();
    $('#testing').fadeOut();
    $('#scoreDiv').fadeIn();
    console.log("show score");
}

document.getElementById("btnEnter").addEventListener("click", function () {
    console.log("enter pressed");
    // $('.chatbot-container').show()
    showTesting();
});
document.getElementById("btnRedo").addEventListener("click", function () {
    console.log("take again pressed");
    fontSize = window.outerHeight * 0.32;
    testChar = "Q";
    round = 0;
    fails = 0;
    level = 1;
    transcript = '';
    score;
    showTesting();
});

function nextWord() {
    console.log("############ " + testChar + " ############");
    // document.getElementById("round").innerHTML = "round: " + round;
    // document.getElementById("level").innerHTML = "level: " + level;
    // document.getElementById("fails").innerHTML = "fails: " + fails;
    // document.getElementById("youSaid").innerHTML = "said: " + transcript;
    console.log("said: " + transcript.toUpperCase());
    console.log("fails: " + fails);
    console.log("round: " + round);
    console.log("level: " + level);
    console.log("font:" + fontSize);
    console.log("############ " + testChar + " ############");

    round = round + 1;
    if (fails >= 2) {
        if (level === 1) {
            score = {
                US: "20/200",
                SixMeter: "",
                DecimalNot: "",
                MAR: "",
                logMAR: "",
                VAS: ""
            };
            showScore()
        }
        if (level === 2) {
            score = {
                US: "20/100",
                SixMeter: "",
                DecimalNot: "",
                MAR: "",
                logMAR: "",
                VAS: ""};
            showScore()
        }
        if (level === 3) {
            score = {
                US: "20/80",
                SixMeter: "",
                DecimalNot: "",
                MAR: "",
                logMAR: "",
                VAS: ""};
            showScore()
        }
        if (level === 4) {
            score = {
                US: "20/63",
                SixMeter: "",
                DecimalNot: "",
                MAR: "",
                logMAR: "",
                VAS: ""};
            showScore()
        }
        if (level === 5) {
            score = {
                US: "20/50",
                SixMeter: "",
                DecimalNot: "",
                MAR: "",
                logMAR: "",
                VAS: ""};
            showScore()
        }
        if (level === 6) {
            score = {
                US: "20/40",
                SixMeter: "",
                DecimalNot: "",
                MAR: "",
                logMAR: "",
                VAS: ""};
            showScore()
        }
        if (level === 7) {
            score = {
                US: "20/32",
                SixMeter: "",
                DecimalNot: "",
                MAR: "",
                logMAR: "",
                VAS: ""};
            showScore()
        }
        if (level === 8) {
            score = {
                US: "20/25",
                SixMeter: "",
                DecimalNot: "",
                MAR: "",
                logMAR: "",
                VAS: ""};
            showScore()
        }
        if (level === 9) {
            score = {
                US: "20/20",
                SixMeter: "",
                DecimalNot: "",
                MAR: "",
                logMAR: "",
                VAS: ""};
            showScore()

        }
    }
    if (round === 5) {
        round = 0;
        fails = 0;
        level = level + 1;
        setFont(level);
    }

    if (level === 10) {
        score = {
                US: "20/20",
                SixMeter: "",
                DecimalNot: "",
                MAR: "",
                logMAR: "",
                VAS: ""};
        showScore()
    }

    if (fails <= 1 && level !== 10) {
        $("#charDiv").fadeOut("fast");
        testChar = ('EFPTOZLDC').split('')[(Math.floor(Math.random() * 8))];
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

showLanding();
assistantPicker();

