var mul = document.getElementById('multiplication-matrix');
var setTable = document.getElementById('set-matrix');
var batterfly = document.getElementById('batterfly');
var pascalTriangle = document.getElementById('pascal-triangle');

setTable.innerHTML = render(setMatrix(10));
mul.innerHTML = render(setMulMatrix(10));
batterfly.innerHTML = render(setBatterfly(10));
pascalTriangle.innerHTML = render(setPascalTriangle(10));


function setMatrix(size) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array[i] = [];
        for (var j = 0; j < size; j++) {
            array[i][j] = j + 1;
        }
    }
    return array;
}

function setMulMatrix(size) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array[i] = [];
        for (var j = 0; j < size; j++) {
            array[i][j] = (j + 1) * (i + 1);
        }
    }
    return array;
}

function setBatterfly(size) {
    var matrix = [];
    for (var i = 0; i < size; i++) {
        matrix[i] = [];
        for (var j = 0; j < size; j++) {
            if (i == j) {
                matrix[i][j] = 1;
            } else if ((i + j) == (size - 1)) {
                matrix[i][j] = 2;
            } else if (i + j < (size - 1)) {
                matrix[i][j] = 6;
            } else if (i < j) {
                if (i + j < (size - 1)) {
                    matrix[i][j] = 3;
                } else {
                    matrix[i][j] = 4;
                }
            } else
                matrix[i][j] = 5;
        }
    }

    return matrix;
}

function setPascalTriangle(size) {
    var triangle = [],
        number;

    for (var i = 0; i < size; i++) { //строка
        triangle[i] = [];

        for (var j = 0; j < size; j++) { //место в строке

            function iterator(i, j) {
                function factor(f) {
                    for (q = k = 1; q <= f; q++)
                        k *= q;
                    return k;
                }
                return factor(i) / factor(j) / factor(i - j);
            }
            if (iterator(i, j) >= 1) {
                triangle[i][j] = iterator(i, j);
            }
        }
    }
    triangle[0].length = 1;
    return triangle;
}


function render(array) {
    var rowsQty = array.length;
    var result = [];
    for (var i = 0; i < rowsQty; i++) {
        var row = ['<tr><td>', array[i].join('</td><td>'), '</td></tr>'].join('');
        result.push(row);
    }

    return result.join('');
}
