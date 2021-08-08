/*function quicksortChange(array, left, right) {
    let pivot_number = Math.floor(array.length / 2);
    let pivot = array[pivot_number];

    while (left <= right) {
        while (array[left] < pivot) {
            left++;
        }
        while (array[right] > pivot) {
            right--;
        }
        if (left <= right) {
            // SWITCH
            a = array[left];
            b = array[right];
            array[left] = b;
            array[right] = a;
            left++;
            right--;
        }
    }
    return left;
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
*/
function quicksortChange(array, left, right) {
    let pivot   = array[Math.floor((right + left) / 2)]
    while (left <= right) {
        while (array[left] < pivot) {
            left++;
        }
        while (array[right] > pivot) {
            right--;
        }
        if (left <= right) {
            let a = array[left];
            let b = array[right];
            array[left] = b;
            array[right] = a;
            left++;
            right--;
        }
    }
    return left;
}

function quickSort(array, left, right) {
    if (array.length > 1) {
        let operator = quicksortChange(array, left, right); //index returned from partition
        if (left < operator - 1) { //more elements on the left side of the pivot
            quickSort(array, left, operator - 1);
        }
        if (right > operator) { //more elements on the right side of the pivot
            quickSort(array, operator, right);
        }
    }
    return array;
}