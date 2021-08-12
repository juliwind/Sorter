
function mergeSort(array) {
    if(array.length < 2){
      return array;
    }
    const half = Math.ceil(array.length / 2);

    const left = array.slice(0, half);
    const right = array.slice(half);
    return merge(mergeSort(left),mergeSort(right))
}
 
function merge(array_left, array_right) {
    let new_array = []
    let left_pointer = 0;
    let right_pointer = 0;
    while (left_pointer < array_left.length && right_pointer < array_right.length) {
        if (array_left[left_pointer] < array_right[right_pointer]) {
            new_array.push(array_left[left_pointer])
            left_pointer++
        }
        else {
            new_array.push(array_right[right_pointer])
            right_pointer++
        }
    }
return new_array
        .concat(array_left.slice(left_pointer))
        .concat(array_right.slice(right_pointer));
}
