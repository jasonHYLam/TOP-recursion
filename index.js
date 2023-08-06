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