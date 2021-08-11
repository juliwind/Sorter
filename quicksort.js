
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
        let operator = quicksortChange(array, left, right);
        if (left < operator - 1) {
            quickSort(array, left, operator - 1);
        }
        if (right > operator) {
            quickSort(array, operator, right);
        }
    }
    return array;
}