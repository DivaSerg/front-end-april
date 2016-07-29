// Task 1

console.log('Task 1');

function task1(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + ' > ' + num2);
    } else if (num1 < num2) {
        console.log(num1 + ' < ' + num2);
    } else {
        console.log(num1 + ' = ' + num2);
    }
}
task1(5, 10);
task1(534, 4524524);
task1(7, 7);

// Task 2

console.log('Task 2');

function helloWorld(lang) {
    switch (lang) {
        case 'kha':
            console.log('Molo Lizwe');
            break;
        case 'sr':
            console.log('Здраво Свете');
            break;
        case 'pus':
            console.log('سلام نړی');
            break;
        default:
            console.log('Error');
    }
}

helloWorld('kha');
helloWorld('sr');
helloWorld('pus');

// Task 3

console.log('Task 3');

function assignGrade(mark) {
    switch (mark) {
        case '1':
            console.log('A');
            break;
        case '2':
            console.log('B');
            break;
        case '3':
            console.log('C');
            break;
        case '4':
            console.log('D');
            break;
        case '5':
            console.log('F');
            break;
        default:
            console.log('Error');
    }
}

assignGrade('5');
assignGrade('3');
assignGrade('1');
assignGrade('0');

// Task 4

console.log('Task 4');

function pluralize(noun, number) {
    if ((number > 0) && (number != 1) && (noun != 'cats') && (noun != 'dogs')) {
      console.log(+number + ' ' + noun + 's');
    } else if ((number > 0) && (number == 1) && (noun != 'cats') && (noun != 'dogs')) {
      console.log(+number + ' ' + noun);
    } else if ((number > 0) && (number == 1) && (noun == 'cats')) {
      console.log(+number + ' cat');
    } else if ((number > 0) && (number == 1) && (noun == 'dogs')) {
      console.log(+number + ' dog');
    } else {
      console.log('Error');
    }
}
pluralize('cat', 5);
pluralize('cats', 1);
pluralize('dogs', 0);
pluralize('dog', 666);

// Task 5

console.log('Task 5');

function task5(a) {
    var output = (a === 0) ? 'Верно!' : 'Неверно!';
    console.log(output);
}

task5(1);
task5(0);
task5(-3)

// Task 6

console.log('Task 6');

function task6(a) {
    var output = (a > 0) ? 'Верно!' : 'Неверно!';
    console.log(output);
}

task6(1);
task6(0);
task6(-3)

// Task 7

console.log('Task 7');

function task7(a) {
    var output = (a < 0) ? 'Верно!' : 'Неверно!';
    console.log(output);
}

task7(1);
task7(0);
task7(-3)

// Task 8

console.log('Task 8');

function task8(a) {
    var output = (a >= 0) ? 'Верно!' : 'Неверно!';
    console.log(output);
}

task8(1);
task8(0);
task8(-3)

// Task 9

console.log('Task 9');

function task9(a) {
    var output = (a <= 0) ? 'Верно!' : 'Неверно!';
    console.log(output);
}

task9(1);
task9(0);
task9(-3);

// Task 10

console.log('Task 10');

function task10(a) {
    var output = (a !== 0) ? 'Верно!' : 'Неверно!';
    console.log(output);
}

task10(1);
task10(0);
task10(-3);


// Task 11

console.log('Task 11');

function task11(a) {
    var output = ((a === 'test') && (typeof a === 'string' )) ? 'Верно!' : 'Неверно!';
    console.log(output);
}

task11('test');
task11('тест');
task11(3);

// Task 12

console.log('Task 12');

function task12(a) {
    var output = ((a === '1') && (typeof a === 'string')) ? 'Верно!' : 'Неверно!';
    console.log(output);
}

task12('1');
task12(1);
task12(3);

// Task 13

console.log('Task 13');

function task13(test1) {
    var output = test1  ? 'Верно!' : 'Неверно!';
    console.log(output);
}
task13(false);

// Task 14

console.log('Task 14');

function task14(test) {
    var output = test ? 'Неверно!' : 'Верно!';
    console.log(output);
}
task14(true);

// Task 15

console.log('Task 15');

function task15(a, b) {
    var result = ((+a + +b) > 5) ? 5 : (+a + +b) * 10;
    console.log(result);
}

task15(2, 5);
task15(3, 1);

// Task 16

console.log('Task 16');

function task16(a) {
    if ((a > 0) && (a < 5)) {
        console.log('Верно!');
    } else {
        console.log('Неверно!');
    }
}

task16(5);
task16(0);
task16(-3);

// Task 17

console.log('Task 17');

function task17(a) {
    if ((a === 0) || (a == 2)) {
        console.log('a / 10 = ' + (+a / 10));
    } else {
        console.log('a + 7 = ' + (+a + 7));
    }
}
task17(5);
task17(0);
task17(-3);
task17(-2);

// Task 18

console.log('Task 18');

function task18(a) {
    if ((a != 1) && (a != 3)) {
        console.log('Верно!');
    } else {
        console.log('Неверно!');
    }
}

task18(1);
task18(0);
task18(3);
task18(2);

// Task 19

console.log('Task 19');

function task19(a, b) {
    if ((a <= 1) && (b >= 3)) {
        console.log('a + b = ' + (+a + +b));
    } else {
        console.log('Неверно!');
    }
}

task19(1, 3);
task19(0, 6);
task19(3, 5);
// Task 20

console.log('Task 20');

function task20(a) {
    if ((a > 0) && (a < 5)) {
        console.log('a + 1 = ' + (+a + 1));
    } else {
        console.log('a + 5 = ' + (+a + 5));
    }
}
task20(5);
task20(0);
task20(-3);
task20(9);
// Task 21

console.log('Task 21');

function task21(a, b) {
    if ((a > 2) && (a < 11) || (b >= 6) && (b < 14)) {
        console.log('a + 2 = ' + (+a + 2));
    } else {
        console.log('a + 5 = ' + (+a + 5));
    }
}

task21(1, -6);
task21(0, 5);
task21(5, 5245);
