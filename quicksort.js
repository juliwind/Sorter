async function quicksortChange(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)];
    while (left <= right) {
        while (array[left] < pivot) {
            left++;
        }
        while (array[right] > pivot) {
            right--;
        }
        if (left <= right) {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            draw(array, [left, right]);
            await sleep(speed);
            left++;
            right--;
        }
    }
    return left;
}

async function quickSort(array, left, right) {
    if (array.length > 1) {
        let operator = await quicksortChange(array, left, right);
        if (left < operator - 1) {
            await quickSort(array, left, operator - 1);
        }
        if (right > operator) {
            await quickSort(array, operator, right);
        }
    }
    draw(array);
}
