
var a = 1;
function sequence(start, step) {
		var start, step;

		start = start || 0;
		step = step || 1;

		// console.log('start1=', + start);

		return function () {

			if (a & 1) {
			start = start - step;
			console.log('>>');
		};

		a = a + 1;
		// console.log('a=', + a);
		// console.log('start=', + start);

			var startGenerator = start + step;
			start = start + step;
			return startGenerator;
		};
};

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2());

console.log(generator());

console.log(generator2());