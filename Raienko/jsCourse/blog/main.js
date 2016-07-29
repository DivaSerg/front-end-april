(function(window) {
    var DEFAULT_URL = "http://localhost:3050/api/v1";
    var DAY_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    function getChildren(el) {
        var i = 0,
            children = [],
            child;
        while (child = el.childNodes[i++]) {
            if (child.nodeType === 1) children.push(child);
        }
        return children;
    }

    function Utils() {}


    Utils.prototype.getIndexOfElement = function(e) {
        var target = e.target,
            i = 0,
            items;
        if (target === this) return;
        items = getChildren(this);
        while (target.parentNode !== this) target = target.parentNode;
        while (items[i] !== target) i++;
        return i;
    }

    Utils.prototype.isLoading = function(isLoad, element) {
        var spinner = document.getElementById(element);
        spinner.style.display = isLoad ? 'block' : 'none';
    }

    Utils.prototype.sendRequest = function(params, callback) {

        var request = new XMLHttpRequest(),
            data, error, body;

        if (params.body) {
            body = JSON.stringify(params.body)
        }

        request.open(params.method, DEFAULT_URL + params.url, params.async);

        if (params.method === 'PUT' || params.method === 'POST') {
            request.setRequestHeader('Content-Type', 'application/' + params.dataType);
        }

        request.onload = function() {
            if (request.status === 200 || request.status === 304) {

                try {
                    data = JSON.parse(request.responseText);
                } catch (er) {
                    throw new Error(er);
                }
                callback(null, data);
            } else {
                error = request.statusText;
                callback(error, null);
            }
        }
        request.send(body);
    }

    Utils.prototype.formatArticleText = function(text) {
        if (text.length > 200) {
            return text.substring(0, 200) + "...";
        }

        return text;
    }

    Utils.prototype.formatDate = function (rawDate) {
        var date = new Date(rawDate);
        return DAY_OF_WEEK[date.getDay()] + ' ' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    }




    window.blog = window.blog || {};
    window.blog.Utils = new Utils();

})(window);
