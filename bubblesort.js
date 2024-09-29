async function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i -1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                draw(array, [j, j+1]);
                await sleep(speed);
            }
        }
    }
    draw(array);
} 

async function bubbleSortSlow(array) {
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > array[i + 1]) {
            let a = array[i];
            let b = array[i + 1];
            array[i + 1] = a;
            array[i] = b;
            draw(array, [i, i+1]);
            await sleep(speed);
        }
    }
    return array;
}
