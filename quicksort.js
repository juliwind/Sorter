async function quicksortChange(array, left, right, draw) {
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

async function quickSort(array, left, right, draw) {
    if (left < right) {
        let operator = await quicksortChange(array, left, right, draw);
        await quickSort(array, left, operator - 1, draw);
        await quickSort(array, operator, right, draw);
    }
    draw(array);
}
