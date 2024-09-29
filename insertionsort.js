function insertionSort(array) {
    for (i = 0; i < array.length; i++) {
        let pointer = array[i];
        let j = i-1;
        while (array[j] > pointer && j >= 0) {
            array[j + 1] = array[j];
            j--;
        }
        array[j+1] = pointer;
    }
    return array;
}

async function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let pointer = array[i];
        let j = i -1;
        while (j >= 0 && array[j] > pointer) {
            array[j + 1] = array[j];
            j--;
            draw(array, [j+1, j+2]);
            await sleep(speed);
        }
        array[j +1] = pointer;
        draw(array, [j +1]);
        await sleep(speed);
    }
    draw(array);
}
