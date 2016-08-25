console.log('1.');
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
console.log(generator2()); // 7
console.log(generator()); // 16
console.log(generator2()); // 8


console.log('2.');
function take(gen, x) {
	var array = [];
	for ( var i = 0; i < x; i++) {
		array[i] = gen();
	}
	return array;
};
var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]


console.log('3.');
function map(fn, array) {
	var array1 = [];
	for ( var i = 0; i < array.length; i++) {
		array1[i] = square(array[i]);
	}
	return array1;
}
function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []
var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]


console.log('4.');
function fmap(a, gen) {

	return function() {
		return 	a(gen());
	}	
}
var gen1 = sequence(1, 1);
function square(x) { return x * x; }
var squareGen = fmap(square, gen1);

console.log(squareGen()); // 1
console.log(squareGen()); // 4
console.log(squareGen()); // 9
console.log(squareGen()); // 16

function add(a, b) {
    return a + b;
}
var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2
