let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let arraySize = 100;
let values = [];
let sorting = false;
let speed = 100; // Standardgeschwindigkeit in ms

init();

function init() {
    renewArray();
    setupSpeedControl();
}

function setupSpeedControl() {
    let speedRange = document.getElementById("speedRange");
    let speedValue = document.getElementById("speedValue");
    speedRange.addEventListener("input", function() {
        speed = parseInt(speedRange.value);
        speedValue.textContent = speed + "ms";
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function draw(array, highlightIndices = []) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Linie zeichnen
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(50, 550);
    ctx.lineTo(1250, 550);
    ctx.stroke();

    for(let i = 0; i < array.length; i++) {
        let width = 1200 / arraySize / 2;
        if (width > 40) {
            width = 40;
        }
        ctx.beginPath();
        ctx.lineWidth = width;
        if (highlightIndices.includes(i)) {
            ctx.strokeStyle = 'red'; // Hervorheben der aktuellen Indizes
        } else {
            ctx.strokeStyle = 'black';
        }
        ctx.moveTo(i / arraySize * 1200 + 50, 550);
        ctx.lineTo(i / arraySize * 1200 + 50, 550 - array[i]);
        ctx.stroke();
    }
}

function changeArraySize() {
    if (sorting) return; // Verhindern der Änderung während des Sortierens
    let newSize = parseInt(prompt("How many pillars to sort?", arraySize));
    if (!isNaN(newSize) && newSize > 0) {
        arraySize = newSize;
        values = [];
        renewArray();
    }
}

function startBubblesort() {
    if (sorting) return;
    sorting = true;
    disableButtons();
    bubbleSort(values).then(() => {
        sorting = false;
        enableButtons();
    });
}

function startQuicksort() {
    if (sorting) return;
    sorting = true;
    disableButtons();
    quickSort(values, 0, values.length - 1).then(() => {
        sorting = false;
        enableButtons();
    });
}

function startMergesort() {
    if (sorting) return;
    sorting = true;
    disableButtons();
    mergeSort(values).then(sortedArray => {
        values = sortedArray;
        draw(values);
        sorting = false;
        enableButtons();
    });
}

function startInsertionsort() {
    if (sorting) return;
    sorting = true;
    disableButtons();
    insertionSort(values).then(() => {
        sorting = false;
        enableButtons();
    });
}

function disableButtons() {
    let buttons = document.getElementsByClassName("buttons");
    for(let button of buttons){
        button.disabled = true;
    }
}

function enableButtons() {
    let buttons = document.getElementsByClassName("buttons");
    for(let button of buttons){
        button.disabled = false;
    }
}

async function renewArray() {
    values = [];
    for (let i = 0; i < arraySize; i++) {
        let min = 1;
        let max = arraySize;
        if (max >= 450) {
            max = 450;
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
    if (sorting) return;
    renewArray();
}
