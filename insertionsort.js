async function insertionSort(array, draw) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
            draw(array, [j + 1, j + 2]);
            await sleep(speed);
        }
        array[j + 1] = key;
        draw(array, [j + 1]);
        await sleep(speed);
    }
    draw(array);
}
