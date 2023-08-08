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

// console.log(fibs(8));


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

// console.log(fibRec(8))