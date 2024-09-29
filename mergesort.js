async function mergeSort(array) {
    if(array.length < 2){
      return array;
    }
    const half = Math.ceil(array.length / 2);

    const left = await mergeSort(array.slice(0, half));
    const right = await mergeSort(array.slice(half));
    return await merge(left, right, array);
}

async function merge(array_left, array_right, originalArray) {
    let new_array = [];
    let left_pointer = 0;
    let right_pointer = 0;
    while (left_pointer < array_left.length && right_pointer < array_right.length) {
        if (array_left[left_pointer] < array_right[right_pointer]) {
            new_array.push(array_left[left_pointer]);
            originalArray[left_pointer + right_pointer] = array_left[left_pointer];
            left_pointer++;
        }
        else {
            new_array.push(array_right[right_pointer]);
            originalArray[left_pointer + right_pointer] = array_right[right_pointer];
            right_pointer++;
        }
        draw(originalArray);
        await sleep(speed);
    }
    
    while (left_pointer < array_left.length) {
        new_array.push(array_left[left_pointer]);
        originalArray[left_pointer + right_pointer] = array_left[left_pointer];
        left_pointer++;
        draw(originalArray);
        await sleep(speed);
    }
    
    while (right_pointer < array_right.length) {
        new_array.push(array_right[right_pointer]);
        originalArray[left_pointer + right_pointer] = array_right[right_pointer];
        right_pointer++;
        draw(originalArray);
        await sleep(speed);
    }

    return new_array;
}
