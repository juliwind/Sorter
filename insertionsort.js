function insertionSort(array) {
    for (i = 0; i < array.length; i++) {
        let pointer = array[i];
        let j = i-1;
        while (array[j] > pointer && j >= 0) {
            array[j + 1] = array[j];
            j--;
        }
        array[j+1] = pointer;
    }
    return array;
}

/*
array
fängt vorne mit einem pointer an und geht immer weiter
für jeden pointer 
er geht alle array einträge davor durch
wenn davor kleiner ist als jetzt
platzieren
pointer weiter


*/