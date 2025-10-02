let testText = "The quick brown fox jumps over the lazy dog";
let startTime;
let endTime;

const startTest = () => {
    document.getElementById('inputText').value = testText;

    let userInput = document.getElementById('userInput');

    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    document.getElementById('output').innerHTML = '';
    
    startTime = new Date().getTime(); 
}

const endTest = () => {
    endTime = new Date().getTime();

    document.getElementById('userInput').readOnly = true;
    
    var timeElapsed = (endTime - startTime) / 1000;
    var userTypedText = document.getElementById('userInput').value;
    var lengthOfUserTypedText = userTypedText.length;

    var typedWords = userTypedText.split(/\s+/).filter(w => w !== "").length;

    var wpm = 0;

    if (timeElapsed !== 0) {
        wpm = Math.round((typedWords / timeElapsed) *60);
    }

    var outputDiv = document.getElementById('output');
    
    outputDiv.innerHTML = 
    `<h2>Typing Test Results:</h2>
    <p>Text Length: ${lengthOfUserTypedText} characters</p>
    <p>Words Typed: ${typedWords}</p>
    <p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds</p>
    <p>Words Per Minute: ${wpm}</p>`;
}

document.getElementById('userInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        endTest();
    }
});


document.getElementById('userInput').addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        startTest();
    }
});

