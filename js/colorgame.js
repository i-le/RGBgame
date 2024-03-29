var numSquares = 6;
var colors = generateRandomColors(numSquares);
let h1 = document.querySelector("h1")
let colorDisplay = document.querySelector("#colorDisplay");
let pickedColor = pickColor();
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = "none"
        }
    }

})

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i]
            squares[i].style.display = "block"
    }
})

resetButton.addEventListener("click", function() {
     colors = generateRandomColors(numSquares);
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
     this.textContent = "New Colors"
     for(var i =0; i < squares.length; i++) {
         squares[i].style.backgroundColor = colors[i]
     }
     h1.style.backgroundColor = "steelblue";
     messageDisplay.textContent = "Yes you are almost"
})

    colorDisplay.textContent = pickedColor;

let squares = document.querySelectorAll(".square");
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
        squares[i].addEventListener("click", function () {
            clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor
            }else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        })
    }

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
    }
}

function pickColor() {   
    let random = Math.floor(Math.random() * colors.length);
    return colors[random]
}

function generateRandomColors(num) {
    let arr = new Array;
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

