(function() {

    var request = new XMLHttpRequest(),
        data;

    request.open('GET', 'http://localhost:3050/articles', true);

    request.onload = function() {
        if (request.status === 200 || request.status === 304) {
            console.log(request);
            console.log(request.responseText);
        } else console.log(request);

    }

    request.send();

})();
