let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let arraySize = 100;
let values = [];

init();

function init() {
    renewArray();
}

function draw(array) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //LINE
    ctx.beginPath();
    ctx.lineWidth = 1
    ctx.moveTo(50, 550);
    ctx.lineTo(1250, 550);
    ctx.stroke();

    for(i = 0; i < array.length; i++) {
        let width = 1200 / arraySize / 2;
        if (width > 40) {
            width = 40;
        }
        ctx.beginPath();
        ctx.lineWidth = width
        ctx.moveTo(i / arraySize * 1200 + 50, 550);
        ctx.lineTo(i / arraySize * 1200 + 50, 550 - values[i]);
        ctx.stroke();
    }
}
function changeArraySize() {
    arraySize = prompt("How many pillars to sort?", );
    values = []
    renewArray();
}
function startBubblesort() {
    //let cleanArray = bubbleSortSlow(values)
    let cleanArray = quicksort(values, 0, values.length - 1)
    draw(cleanArray);
}


function renewArray() {
    for (i = 0; i < arraySize; i++) {
        let min = 1;
        let max = arraySize;
        if (max >= 450) {
            max = 450
        }
        let multiplier = Math.floor(550 / max);
        if (multiplier <= 0) {
            multiplier = 1;
        }
        let r = (Math.floor(Math.random() * (max - min + 1)) + min) * multiplier;
        values.push(r);
    }
    draw(values);
}

function randomizeArray() {
    arraySize = values.length;
    values = [];
    renewArray();
}