(function(window) {

    var DEFAULT_URL = "http://localhost:3050/api/v1";
    var ALL_DATA = [];
    var VIEW = document.getElementById('view');

    function sendRequest(params, callback) {
        var request = new XMLHttpRequest();
        var data, error, body;

        if (params.body) {
            body = JSON.stringify(params.body);
        }

        request.open(params.method, DEFAULT_URL + params.url, params.async);

        if ((params.method === 'PUT' || params.method === 'POST')) {
            request.setRequestHeader('Content-Type', 'application/' + params.dataType)
        }

        request.onload = function() {
            if (request.status == 200 || request.status == 304 || request.status == 201) {
                data = JSON.parse(request.responseText);
                callback(null, data);
            } else {
                error = request.statusText;
                callback(error, null);
            }
        };

        request.onerror = function(data) {
            callback(data, null)
        };

        request.send(body);
    };


    function handlerError(error) {
        return new Error(error)
    };

    function renderArticles() {
        var params = {
            method: "GET",
            url: "/goods",
            async: true,
            dataType: "json"
        };

        sendRequest(params, function(error, data) {

            if (error) throw handlerError(error);
            ALL_DATA = data;

            console.log(data);

            createArticle(ALL_DATA);
        });

    };

    renderArticles();

    function createArticle(data) {

        var i,
            dataLen = data.length;

        if (!dataLen) return;

        for (i = 0; i < dataLen; i++) {

            var obj = data[i];
            // console.log(data[i].title);

            for (var key in obj) {

                var newLi = document.createElement('li'),
                    titleId = 'title' + i;
                newLi.setAttribute("id", titleId);

                if (key == 'title') {

                    newLi.innerHTML = '<span>' + obj[key] + '</span>';
                    list.appendChild(newLi);

                }
            };
        };


        for (i = 0; i < dataLen; i++) {

            var ul = document.createElement('ul');
            titleId.appendChild(ul);

            for (var key in obj) {

                var li = document.createElement('li'),
                    data = key + ' : ' + obj[key];
                li.appendChild(document.createTextNode(data));
                ul.appendChild(li);
            }
        }


    }

})();
