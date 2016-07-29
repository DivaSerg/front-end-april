// Color

(function() {
    var arrColor = ['MediumSpringGreen', 'MediumSeaGreen', 'LightGreen', 'DarkSeaGreen', 'Aquamarine'],
        ul = '<ul>';


    for (var i = 0; i < arrColor.length; i++) {
        for (var j = 0; j < arrColor.length; j++) {
            for (var q = 0; q < arrColor.length; q++) {

                console.log('document.getElementsByTagName(ul)[' + i + '].children[' + j + '].children[' + q + ']');
                console.log(document.getElementsByTagName('ul')[i].children[j].children[q]);

                if (document.getElementsByTagName('ul')[i].children[j].children[q].outerHTML.substr(0, 4) === ul) {
                    document.getElementsByTagName('ul')[i].children[j].children[q].style.background = arrColor[i];
                }
            }
        }

    }
})();

// for (let key in document.getElementsByTagName('ul')[4].children[1].children[0]) {console.log(key + ' + ' + document.getElementsByTagName('ul')[4].children[1].children[0][key]);}
