function fibs(iterations) {
    let array = [];
    let previous2nd = 0;
    let previous1st = 1;
    let current = 0;
    for (let i = 0; i < iterations; i++) {

        if (i === 0) {
            array.push(previous2nd)
        } else if (i === 1) {
            array.push(previous1st)
        } else {
            current = previous2nd + previous1st;
            array.push(current);
            previous2nd = previous1st;
            previous1st = current;
        }
    }
    return array
}

console.log(fibs(8));


function fibRec(n) {
    if (n == 1) {return [0]}
    else {
        const recursiveValue = fibRec(n-1)
        let previous1st = Number(recursiveValue.slice(-1)) || 1;
        let previous2nd = Number(recursiveValue[recursiveValue.length-2]) || 0;
        let total = previous1st + previous2nd;
        recursiveValue.push(total)
        return recursiveValue;
    }
}

console.log(fibRec(8))

let testArray = [2,6,4,7,1,3,5,9,8]

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    else {
        const half = Math.ceil(array.length/2)
        // split array in half
        // call mergeSort on the left half
        const leftHalf = array.slice(0, half)
        let sortedLeftHalf = mergeSort(leftHalf)

        // call mergeSort on the right half
        const rightHalf = array.slice(half)
        let sortedRightHalf = mergeSort(rightHalf);

        console.log(sortedLeftHalf)
        console.log(sortedRightHalf)
        //for each element in left half and right half, see which is smaller

        // let mergedArray = [];
        // while (sortedLeftHalf[0] || sortedRightHalf[0]) {
        //     if (sortedLeftHalf[0] < sortedRightHalf[0]) {
        //         mergedArray.push(sortedLeftHalf[0])
        //         sortedLeftHalf.shift()
        //     } else if (sortedRightHalf[0] < sortedLeftHalf[0]) {
        //         mergedArray.push(sortedRightHalf[0])
        //         sortedRightHalf.shift()
        //     }
        // }
        // return mergedArray;
    }

    // TODO: fix infinite loop
}

// mergeSort(testArray)

function testSplit(array) {
    console.log(array)
    const half = Math.ceil(array.length/2)
        // split array in half
        // call mergeSort on the left half
    const leftHalf = array.slice(0, half)
    const rightHalf = array.slice(half)
    let mergedArray = [];
    while (leftHalf[0] || rightHalf[0]) {
        if (leftHalf[0] < rightHalf[0]) {
            mergedArray.push(leftHalf[0])
            leftHalf.shift()
        } else if (rightHalf[0] < leftHalf[0]) {
            mergedArray.push(rightHalf[0])
            rightHalf.shift()
        } else if (!leftHalf[0]) {
            mergedArray.push(rightHalf[0])
            rightHalf.shift()
        } else if (!rightHalf[0]) {
            mergedArray.push(leftHalf[0])
            leftHalf.shift()
        }
        // console.log(leftHalf)
        // console.log(rightHalf)
        // console.log(mergedArray)
    }
        console.log(mergedArray)
}

// testSplit(testArray)