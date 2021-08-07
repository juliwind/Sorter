function check(array) {
    for (i = 0; i <= array.length; i++) {
        for (j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                return array;
            } else {
                bubbleSort(array);
            }
        }
    }
}