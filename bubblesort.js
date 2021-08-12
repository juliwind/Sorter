function bubbleSort(array) {
    for (i = 0; i <= array.length; i++) {
        for (j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let a = array[j]
                let b = array[j + 1];
                array[j + 1] = a;
                array[j] = b;
            }
        }
    }
    return array;
} 

function bubbleSortSlow(array) {
    for (i = 0; i <= array.length; i++) {
        if (array[i] > array[i + 1]) {
            let a = array[i]
            let b = array[i + 1];
            array[i + 1] = a;
            array[i] = b;
        }
    }
    return array;
}
