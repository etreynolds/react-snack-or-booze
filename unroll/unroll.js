const squareArray = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
];


function unroll(squareArray) {

    let unrolled = [];

    while (squareArray.length > 0) {

        // grab top row
        unrolled.push(...squareArray.shift());

        // grab right column
        for (let i = 0; i < squareArray.length; i++) {
            const lastElement = squareArray[i].pop();
            if (lastElement !== undefined) {
                unrolled.push(lastElement);
            }
        }

        // grab bottom row, reverse it
        const lastRow = squareArray.pop();
        if (lastRow) {
            unrolled.push(...lastRow.reverse());
        }

        // grab left column, reverse it
        for (let i = squareArray.length - 1; i >= 0; i--) {
            const firstElement = squareArray[i].shift();
            if (firstElement !== undefined) {
                unrolled.push(firstElement);
            }
        }
    }
    return unrolled;
};

unroll(squareArray);

module.exports = unroll;
