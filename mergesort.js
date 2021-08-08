/*function mergeSort(array) {
    let half = Math.ceil(array.length / 2);
    if (array.length < 2) {
        return array;
    }
    else {
        let left_half = list.slice(0, half);
        let right_half = list.slice(-half);
    }
}
function merge(array_left, array_right) {
    let new_list = [];
}
*/

function merge(array_left, array_right) {
    let new_array = []
    while (array_left.length && array_right.length) {
        if (array_left[0] < array_right[0]) {
            new_array.push(array_left.shift());
        }
        else if (array_right[0] < array_left[0]) {
            new_array.push(array_right.shift())
        }
        if (array_left.length == 0) {
            new_array.push(array_right);
        }
        if (array_right.length == 0) {
            new_array.push(array_right);
        }
    }
    return new_array;
}

function mergeSort(array) {
    let half = Math.ceil(array.length / 2);
    
    if(array.length < 2){
      return array;
    }

    let left = array.splice(0, half);
    let right = array.splice(half);
    return merge(mergeSort(left),mergeSort(right))
  }