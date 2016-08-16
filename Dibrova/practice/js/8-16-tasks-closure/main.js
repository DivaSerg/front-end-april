function sequence(start, step) {
    start = start || 0;
    step = step || 1;
    start -= step;
    return function() {
        return start += step;
    };
};

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2());

console.log(generator());

console.log(generator2());
