
$("#about").click(function() {
    $('html,body').animate({
        scrollTop: $(".about-main").offset().top},
        'slow');
});
$("#portfolio").click(function() {
    $('html,body').animate({
        scrollTop: $(".skills-title-section").offset().top},
        'slow');
});
$("#contact").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact-heading").offset().top},
        'slow');
});
