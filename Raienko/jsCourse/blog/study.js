(function() {


    var ALL_ARTICLES = [];
    var VIEW = document.getElementById('ui-view');

    function createsArticle(article) {
        var template = '<article> <h3 class="title"> <a href="/articles/' + article.id + '"> ' + article.title + ' </a></h3>' +
            '<div class="text-holder">' + '<p class="article-text">' + blog.Utils.formatArticleText(article.text) +
            '</p></div>' + '<div class="author-holder"><img src="' + article.photo + '" alt="">' +
            '<span class="author-name">' + article.author + '</span></div>' + '<div class="meta-data">' +
            '<span class="likes"><button data-article-id="' + article.id + '" >Likes :  ' + article.likes + '</button> </span>' +
            '<span class="data"> Date of post: ' + blog.Utils.formatDate(article.createdAt) + '</span></div></article>'
        return template;
    }

    function createArticle(article) {
        var template = '<article> <h3 class="title"> ' + article.title + ' </h3>' +
            '<div class="text-holder">' + '<p class="article-text">' + article.text +
            '</p></div>' + '<div class="author-holder"><img src="' + article.photo + '" alt="">' +
            '<span class="author-name">' + article.author + '</span></div>' + '<div class="meta-data">' +
            '<span class="likes"><button data-article-id="' + article.id + '" >Likes :  ' + article.likes + '</button> </span>' +
            '<span class="data"> Date of post: ' + blog.Utils.formatDate(article.createdAt) + '</span></div></article>'
        return template;
    }

    function renderArticles() {
        var params = {
            method: "GET",
            url: "/articles",
            async: true
        }

        blog.Utils.isLoading(true, 'spinner');

        blog.Utils.sendRequest(params, function(error, data) {

            if (error) {
                handlerError(error);
                return;
            }

            var articlesHolder = document.createElement('div');
            articlesHolder.id = 'articles';
            articlesHolder.addEventListener('click', setLike);

            VIEW.appendChild(articlesHolder);

            ALL_ARTICLES = data;

            var articles = ALL_ARTICLES.map(function(el) {
                return createsArticle(el);
            })

            setTimeout(function() {
                blog.Utils.isLoading(false, 'spinner');
                articlesHolder.innerHTML = articles.join('');
            }, 300);
        })
    }

    function renderArticle(id) {
        var params = {
            method: 'GET',
            url: '/articles/' + id,
            async: true
        };

        blog.Utils.isLoading(true, 'spinner');

        blog.Utils.sendRequest(params, function(error, data) {
            if (error) {
                handlerError(error);
                return;
            }

            var articleHolder = document.createElement('div');
            articleHolder.id = 'article';
            articleHolder.addEventListener('click', setLike);

            VIEW.appendChild(articleHolder);

            ALL_ARTICLES.push(data);

            blog.Utils.isLoading(false, 'spinner');
            articleHolder.innerHTML = createArticle(data);

        })

    }


    function setLike(e) {
        if (e.target.tagName !== 'BUTTON') return;

        var articleId = +e.target.dataset.articleId;

        var article = ALL_ARTICLES.filter(function(el) {
            return el.id === articleId;
        })[0];

        article.likes++;

        var options = {
            method: "PUT",
            url: "/articles/" + article.id,
            async: true,
            dataType: 'json',
            body: article
        }

        blog.Utils.sendRequest(options, function(error, data) {
            if (error) throw new Error(error);

            e.target.textContent = 'Likes :  ' + article.likes;

        })

    }

    function renderAbout() {
        var aboutHolder = document.createElement('div');
        aboutHolder.id = 'about';
        VIEW.appendChild(aboutHolder);
        blog.Utils.isLoading(false, 'spinner');
        aboutHolder.innerHTML = " HELLO FROM ABOUT ";

    }

    function renderContacts() {
        var contactsHolder = document.createElement('div');
        contactsHolder.id = 'contacts';
        VIEW.appendChild(contactsHolder);
        blog.Utils.isLoading(false, 'spinner');
        contactsHolder.innerHTML = " HELLO FROM CONSTACTS ";
    }


    function init() {



        var route = window.location.pathname.match(/\/[a-z]+/i);

        if (!route) {
            window.location = 'http://192.168.1.74:8000/blog';
            return;
        }

        switch (route[0]) {
            case '/blog':
                renderArticles();
                break;
            case '/about':
                renderAbout();
                break;
            case '/contacts':
                renderContacts();
                break;
            case '/articles':
                var id = route.input.match(/[0-9]+/);
                renderArticle(id);
                break;
            default:
                window.location = 'http://192.168.1.74:8000/blog';
        }
    }

    init();

})();
