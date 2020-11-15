$("#clickdown").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow') ;
});

$("#shortcutslink").click(function() {
    $('html,body').animate({
        scrollTop: $("#shortcuts").offset().top},
        'slow') ;
});
