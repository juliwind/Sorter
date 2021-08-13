let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let arraySize = 100;
let values = [];

init();

function init() {
    renewArray();
}

function draw(array) {
    console.log("DRAW")
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //LINE
    ctx.beginPath();
    ctx.lineWidth = 1
    ctx.moveTo(50, 550);
    ctx.lineTo(1250, 550);
    ctx.stroke();

    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    for(i = 0; i < array.length; i++) {
        let width = 1200 / arraySize / 2;
        if (width > 40) {
            width = 40;
        }
        ctx.beginPath();
        ctx.lineWidth = width
        ctx.moveTo(i / arraySize * 1200 + 50, 550);
        ctx.lineTo(i / arraySize * 1200 + 50, 550 - array[i]);
        ctx.stroke();
    }
}

function changeArraySize() {
    arraySize = prompt("How many pillars to sort?", );
    values = [];
    renewArray();
}
function startBubblesort() {
    //let sortedArray = bubbleSortSlow(values)
    let sortedArray = bubbleSort(values)
    console.log(sortedArray)
    draw(sortedArray);
}
function startQuicksort() {
    let sortedArray = quickSort(values, 0, values.length - 1);
    //console.log("sorted", sortedArray)
    draw(sortedArray);
}
function startMergesort() {
    //console.log(values)
    let sortedArray = mergeSort(values);
    console.log(sortedArray)
    draw(sortedArray);
    //console.log("sdajn")
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