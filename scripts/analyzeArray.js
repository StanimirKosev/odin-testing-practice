function analyzeArray(arr) {
    const { length } = arr
    let sum = 0
    let average = 0
    let min = arr[0]
    let max = arr[0]

    for (let i = 0; i < length; i++) {
        sum += arr[i]
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }

    average = sum / length

    return {
        average,
        min,
        max,
        length,
    }
}

export default analyzeArray
