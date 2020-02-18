console.log('Hello World!')

let count = 0;
let counterView = document.getElementById('counter');

function increase() {
    return counterView.innerText = count += 1;
}

function decrease() {
    return counterView.innerText = count -= 1;
}

function reset() {
    return counterView.innerText = count = 0;
}

function selectTheme(theme) {
    document.getElementsByTagName("body")[0].className = theme;
    document.getElementsByTagName("main")[0].className = theme;
    const buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].cassName = theme;
    }
}