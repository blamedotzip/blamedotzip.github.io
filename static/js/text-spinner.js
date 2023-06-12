/* Adapted from https://github.com/programmercloud/rotating-text/ */

window.addEventListener("DOMContentLoaded", () => {

    let modifyClassList = (element, add, ...remove) => {
        element.classList.remove(...remove)
        element.classList.add(add)
    }

    let collections = document.querySelectorAll(".words")
    collections.forEach((collection) => {
        let words = collection.querySelectorAll(".word")
        if (words.length < 2) return;

        let currentWordIndex = 0;
        let maxWordIndex = words.length - 1;

        words.forEach(it => it.classList.add("out"))
        modifyClassList(words[0], "in", "out")

        let rotateText = () => {
            let currentWord = words[currentWordIndex];
            let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

            // rotate out current word
            modifyClassList(currentWord, "out", "behind", "in")

            // reveal and rotate next word
            modifyClassList(nextWord, "behind", "in", "out")
            setTimeout(() => {
                modifyClassList(nextWord, "in", "behind", "out")
            }, 340)

            currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        }

        // Initial Rotation at 1s
        setTimeout(() => {
            rotateText()

            // Then repeat after 4s
            setInterval(rotateText, 4000);
        }, 1000);
    })
})