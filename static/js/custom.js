let DEFAULT_COLOR = "#3498db";
let entries        = [];

if (location.search) {
    let params = location.search.substring(1).split('&');
    for (let idx in params) {
        let param = params[idx].replace("$", "#")

        let paramParts = param.split('=', 2);
        if (paramParts.length < 1) continue;

        if (paramParts.length === 1) {
            entries.push({
                name: paramParts[0],
                color: DEFAULT_COLOR,
                href: ""
            })
            continue
        }

        let argParts = paramParts[1].split(',', 2)
        if (argParts.length === 1) {
            entries.push({
                name: paramParts[0],
                color: DEFAULT_COLOR,
                href: argParts[0]
            })
            continue
        }

        entries.push({
            name: paramParts[0],
            color: argParts[0],
            href: argParts[1]
        })
    }
}

if (entries.length > 0) {
    window.addEventListener("DOMContentLoaded", () => {
        let collections = document.querySelectorAll(".words")
        collections.forEach(collection => {
            let words = collection.querySelectorAll(".word")
            words.forEach(it => collection.removeChild(it))

            entries.forEach((v, idx) => {
                let element = document.createElement("a")
                element.text        = v.name;
                element.href        = v.href;
                element.style.color = v.color;

                element.classList.add("word")
                if (idx === 0) element.classList.add("in")

                collection.appendChild(element);
            })
        })
    });
}

