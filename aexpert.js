$(document).ready(function(){
    var win_size = $(window).width();
    if (win_size < 768 ) {
      $('.nav_bar a').hide();
    }
    $(".hamburger").click(function(){
        $(".nav_bar a").toggle();
    });
});

$(window).resize(function(){
    var win_size = $(window).width();
    if (win_size > 768 ) {
      $('.nav_bar a').css('display', 'initial');
    }
});