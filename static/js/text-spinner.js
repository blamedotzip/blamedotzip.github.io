/* Adapted from https://github.com/programmercloud/rotating-text/ */

let words = document.querySelectorAll(".word")

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;

let rotateText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    // rotate out current word
    currentWord.classList.remove("behind", "in")
    currentWord.classList.add("out")

    // reveal and rotate next word
    nextWord.classList.remove("in", "out")
    nextWord.classList.add("behind")
    setTimeout(() => {
        nextWord.classList.remove("behind", "out")
        nextWord.classList.add("in")
    }, 340)

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}

setInterval(rotateText, 4000);