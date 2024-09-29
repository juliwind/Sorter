async function bubbleSort(array, draw) {
    let n = array.length;
    let swapped;

    for (let i = 0; i < n; i++) {
        swapped = false;
        for (let j = 0; j < n - i -1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
                draw(array, [j, j + 1]);
                await sleep(speed);
            }
        }
        if (!swapped) break;
    }
    draw(array);
}
