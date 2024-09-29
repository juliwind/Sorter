let speed = 100;
let arraySize = 100;
let originalValues = [];
let sorting = false;

let sortConfigs = {
    bubble: { color: '#e74c3c', name: 'Bubble Sort' },
    quick: { color: '#3498db', name: 'Quick Sort' },
    merge: { color: '#2ecc71', name: 'Merge Sort' },
    insertion: { color: '#f1c40f', name: 'Insertion Sort' }
};

init();

function init() {
    renewOriginalArray();
    setupSpeedControl();
}

function setupSpeedControl() {
    const speedRange = document.getElementById("speedRange");
    const speedValue = document.getElementById("speedValue");
    speedRange.addEventListener("input", function() {
        speed = parseInt(speedRange.value);
        speedValue.textContent = speed + "ms";
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function renewOriginalArray() {
    originalValues = [];
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
        originalValues.push(r);
    }
    redrawAllContainers();
}

function redrawAllContainers() {
    const canvasContainer = document.getElementById("canvasContainer");
    const checkboxes = document.querySelectorAll(".algorithm-selection input[type=checkbox]");
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const type = checkbox.value;
            const container = document.getElementById(`container-${type}`);
            if (container) {
                const array = originalValues.slice();
                const canvas = container.querySelector("canvas");
                const ctx = canvas.getContext("2d");
                draw(array, ctx, sortConfigs[type].color);
            }
        }
    });
}

function toggleSortContainer(type) {
    const checkbox = document.getElementById(type);
    const canvasContainer = document.getElementById("canvasContainer");

    if (checkbox.checked) {
        const container = document.createElement("div");
        container.classList.add("sort-container");
        container.id = `container-${type}`;
        const canvas = document.createElement("canvas");
        canvas.width = 600;
        canvas.height = 300;
        canvas.classList.add("sort-canvas");
        container.appendChild(canvas);

        canvasContainer.appendChild(container);

        const ctx = canvas.getContext("2d");
        draw(originalValues.slice(), ctx, sortConfigs[type].color);

    } else {
        const container = document.getElementById(`container-${type}`);
        if (container) {
            container.remove();
        }
    }
}

function draw(array, ctx, color, highlightIndices = []) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#bdc3c7';
    ctx.moveTo(50, 250);
    ctx.lineTo(550, 250);
    ctx.stroke();

    for(let i = 0; i < array.length; i++) {
        const width = Math.min(40, 500 / arraySize / 2);
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = highlightIndices.includes(i) ? color : '#2c3e50';
        ctx.moveTo(i / arraySize * 500 + 50, 250);
        ctx.lineTo(i / arraySize * 500 + 50, 250 - array[i]/2);
        ctx.stroke();
    }
}

function changeArraySize() {
    if (sorting) {
        alert("Arraygröße kann nicht während des Sortierens geändert werden.");
        return;
    }
    const newSize = parseInt(prompt("Wie viele Elemente sollen sortiert werden?", arraySize));
    if (!isNaN(newSize) && newSize > 0) {
        arraySize = newSize;
        renewOriginalArray();
    }
}

function randomizeArray() {
    if (sorting) {
        alert("Array kann nicht während des Sortierens zufällig angeordnet werden.");
        return;
    }
    renewOriginalArray();
}

function startSelectedSorts() {
    const selectedSorts = [];
    for (const key in sortConfigs) {
        const checkbox = document.getElementById(key);
        if (checkbox.checked) {
            selectedSorts.push(key);
        }
    }

    if (selectedSorts.length === 0) {
        alert("Bitte mindestens einen Sortieralgorithmus auswählen.");
        return;
    }

    sorting = true;
    disableButtons();

    activeSorts = selectedSorts.length;

    selectedSorts.forEach(sortType => {
        startSort(sortType);
    });
}

function startSort(type) {
    const container = document.getElementById(`container-${type}`);
    if (!container) {
        alert(`Container für ${sortConfigs[type].name} nicht gefunden.`);
        activeSorts--;
        checkIfAllSortsCompleted();
        return;
    }

    const canvas = container.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    const array = originalValues.slice();

    draw(array, ctx, sortConfigs[type].color);

    let sortPromise;
    switch(type) {
        case 'bubble':
            sortPromise = bubbleSort(array, drawWrapper.bind(null, ctx, sortConfigs[type].color));
            break;
        case 'quick':
            sortPromise = quickSort(array, 0, array.length -1, drawWrapper.bind(null, ctx, sortConfigs[type].color));
            break;
        case 'merge':
            sortPromise = mergeSort(array, drawWrapper.bind(null, ctx, sortConfigs[type].color));
            break;
        case 'insertion':
            sortPromise = insertionSort(array, drawWrapper.bind(null, ctx, sortConfigs[type].color));
            break;
        default:
            alert("Unbekannter Sortieralgorithmus");
            activeSorts--;
            checkIfAllSortsCompleted();
            return;
    }

    sortPromise.then(() => {
        checkIfAllSortsCompleted();
    }).catch(error => {
        console.error(`Fehler beim Sortieren mit ${sortConfigs[type].name}:`, error);
        checkIfAllSortsCompleted();
    });
}

function drawWrapper(ctx, color, array, highlightIndices) {
    draw(array, ctx, color, highlightIndices);
}

let activeSorts = 0;

function checkIfAllSortsCompleted() {
    activeSorts--;
    if (activeSorts <= 0) {
        sorting = false;
        enableButtons();
    }
}

function disableButtons() {
    const buttons = document.getElementsByClassName("btn");
    for(const button of buttons){
        button.disabled = true;
        button.classList.add("disabled");
    }

    const checkboxes = document.querySelectorAll(".algorithm-selection input[type=checkbox]");
    checkboxes.forEach(checkbox => {
        checkbox.disabled = true;
    });
}

function enableButtons() {
    const buttons = document.getElementsByClassName("btn");
    for(const button of buttons){
        button.disabled = false;
        button.classList.remove("disabled");
    }

    const checkboxes = document.querySelectorAll(".algorithm-selection input[type=checkbox]");
    checkboxes.forEach(checkbox => {
        checkbox.disabled = false;
    });
}
