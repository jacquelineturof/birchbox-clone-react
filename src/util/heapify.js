function heapify(arr, length, i) {
    let largest = i
    let left = i * 2 + 1
    let right = left + 1
    const leftRating = arr[left] ? arr[left].rating : arr[left]
    const rightRating = arr[right] ? arr[right].rating : arr[right]
    const largestRating = arr[largest] ? arr[largest].rating : arr[largest]
    
    if (left < length && leftRating > largestRating) {
        largest = left
    }

    if (right < length && rightRating > largestRating) {
        largest = right
    }

    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapify(arr, length, largest)
    }

    return arr
}

function heapSort(arr) {
    let length = arr.length
    console.log('length: ', length)
    let i = Math.floor(length / 2 - 1)
    let k = length - 1

    while(i >= 0) {
        heapify(arr, length, i)
        i--
    }

    while(k >= 0) {
        heapify(arr, length, i)
        i--
    }
    console.log('arr ', arr)
    return arr
}

module.exports = heapSort