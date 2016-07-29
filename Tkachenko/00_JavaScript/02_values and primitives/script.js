// Task 1

console.log('__________Task 1__________');

function task1(X, Y, Z, N) {
    console.log('You will be a ' + X + ' in ' + Y + ', and married to ' + Z + ' with ' + N + ' kids.');
}

task1('2200', 'Muckanaghederdauhaulia', 'Karen', '71');

// Task 2

console.log('__________Task 2__________');

function task2(currentMonth, currentYear, birthMonth, birthYear) {
    var age;
    if (currentMonth > birthMonth) {
        age = currentYear - birthYear - 1;
    } else {
        age = currentYear - birthYear;
    }
    console.log('You age ' + age + ' years.');

}

task2('5', '2016', '6', '1987');

task2('7', '2016', '6', '1987');

// Task 3

console.log('__________Task 3__________');

function task3(ageStart, ageFinish) {

    var cake = 5 /*for 1 day*/ ;
    var eat = (ageFinish - ageStart) * 365;
    console.log('For ' + (ageFinish - ageStart) + ' years you eat ' + eat + ' cake!');
}

task3('35', '215');

// Task 4

console.log('__________Task 4__________');

function task4(radius) {

    var circumference = radius * Math.PI * 2;
    var area = Math.PI + Math.pow(radius, 2);

    console.log('The circumference is ' + circumference);
    console.log('The area is ' + area);

}

task4('55');

// Task 5

console.log('__________Task 5__________');

function task5(value, direction) {

    var result;

    switch (direction) {
        case 'CtoF':
            result = (value * 1.8) + 32;
            break;
        case 'FtoC':
            result = (value - 32)/1.8;
            break;
        default:
            console.log('Error!!');
    }

    console.log(value + ' ' + direction + ' ' + result);

}

task5(2587, 'CtoF');
task5(25647, 'FtoC');
