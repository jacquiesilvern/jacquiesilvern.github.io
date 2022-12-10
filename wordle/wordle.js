let height = 5; //number of guesses
let width = 5; // length of the word

let row = 0; //current attempt #
let column = 0; //current letter for attempt

let gameover= false;
let wordList = ["enter", "anger", "still", "proud", "cause","china", "given", "reach","sense","maker","spare","sleep","twice","laugh", "where", "model", "shirt", "meant", "sharp", "sugar", "never", "lying", "layer", "mixed", "young", "route", "asset", "basic", "hence", "paper", "alone", "arise", "women", "taxes", "vital", "issue", "study", "mouse", "carry", "alert", "chair", "table", "texas", "class", "loose", "actor", "catch", "adopt"];

let words = wordList[Math.floor(Math.random()*wordList.length)].toUpperCase();

window.onload = function(){
    initialize();
}

function initialize(){
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < height; c++){
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    document.addEventListener("keyup", (e) => {
        if (gameover) return;

        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (column < width) {
                let currentTile = document.getElementById(row.toString() + "-" + column.toString());
                if (currentTile.innerText == "") {
                    currentTile.innerText = e.code[3];
                    column += 1;
                }
        }
    
    }
    else if (e.code == "Backspace" ) {
        if (0 < column && column <= width) {
            column -=1;
        }
        let currentTile = document.getElementById(row.toString() + "-" + column.toString());
        currentTile.innerText = "";
    }

    else if (e.code == "Enter") {
        update();
        row += 1;
        column = 0;
    }

    if (!gameover && row == height) {
        gameover = true;
        document.getElementById("answer").innerText = words;
    }
    })

}

function update() {
    let right = 0;
    for (let c = 0; c < width; c++) {
        let currentTile = document.getElementById(row.toString() + "-" + c.toString());
        let letter = currentTile.innerText;

        if (words[c] == letter) {
            currentTile.classList.add("right");
            right += 1;
        }
        else if (words.includes(letter)) {
            currentTile.classList.add("present");
        }
        else {
            currentTile.classList.add("wrong")
        }

        if (right == width) {
            gameover = true;
        }
    }
}