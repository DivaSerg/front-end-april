$(document).ready(function() {
   $(':header.zzz').text('!!!')

    $('h3').css({
    	"font-size": "40px",
    	"color" : "blue"
    })


    $('li').each(function(i) {
    	$(this).text(i);
    })
});