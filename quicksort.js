function quicksortChange(array, left, right) {
    let pivot_number = Math.floor(array.length / 2);
    let pivot = array[pivot_number];
    for (i = 0; i < pivot_number; i++) {
        if (array[i] > pivot) {
            let a = array[i];
            for (j = array.length - 1; j > pivot; j--) {
                if (array[j] < pivot) {
                    let b = array[j];
                    if (a <= b) {
                        array[i] = b;
                        array[j] = a;
                        i++
                        j--
                    }
                }
            }
        }
    }
    return i;
}

function quicksort(array, left, right) {
    if (array.length > 1) {
        let sort = quicksortChange(array, left, right);
        if (left < sort - 1) {
            quicksort(array, left, sort - 1)
        }
        if (right > sort) {
            quicksort(array, sort, right);
        }
    }
    return array;
}