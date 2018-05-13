
$(document).ready(function(){

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
$("#about-footer").click(function() {
    console.log(
      "clicked"
    )
    $('html,body').animate({
        scrollTop: $(".about-main").offset().top},
        'slow');
});
$("#portfolio-footer").click(function() {
    $('html,body').animate({
        scrollTop: $(".skills-title-section").offset().top},
        'slow');
});
$("#contact-footer").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact-heading").offset().top},
        'slow');
});

//HIDE AND SHOW PROJECTS
// $('#travelDesignHover').hide();
$('#travelDesign, #travelDesignHover').mouseenter(function(){
  console.log("MOUSE ENTERED");
  $('#travelDesignHover').toggle();
}).mouseleave(function(){
  $('#travelDesignHover').hide();
});

$('.project-template, .project-template-hover').mouseenter(function(){
  console.log("MOUSE ENTERED");
  $('#travelDesignHover').toggle();
}).mouseleave(function(){
  $('#travelDesignHover').hide();
});




});
