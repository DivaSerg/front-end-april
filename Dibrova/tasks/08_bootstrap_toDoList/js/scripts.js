(function() {

    $(document).ready(function() {
        if (location.hash) {
            $('.bs-header').addClass('hidden');
            $('to-do-hoder').removeClass('hidden');
            $('h1 .name').text(location.hash.slice(1));
        }
        $('.start-to-do').click(function() {
            if (!location.hash) {
                var toDoKey = (Math.round(Math.random() * 100000000)).toString(36);
                location.hash = toDoKey;
                $('to-do-hoder').removeClass('hidden');
                $('.bs-header').addClass('hidden');
                $('h1 .name ').text(toDoKey);
            }

            return false;
        })
    });

    $('btn').click(function() {
    	console.log('hello');
    })

})();
