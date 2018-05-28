
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
        scrollTop: $(".contact-section").offset().top},
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
  $('#travelDesignHover').toggle();
}).mouseleave(function(){
  $('#travelDesignHover').hide();
});

//TESLA CLONE SECTION
$('#teslaClone, #teslaCloneHover').mouseenter(function(){
  $('#teslaCloneHover').toggle();
}).mouseleave(function(){
  $('#teslaCloneHover').hide();
});

$('#fccJsApp, #fccJsAppHover').mouseenter(function(){
  $('#fccJsAppHover').toggle();
}).mouseleave(function(){
  $('#fccJsAppHover').hide();
});

$('#tripPlanner, #tripPlannerHover').mouseenter(function(){
  $('#tripPlannerHover').toggle();
}).mouseleave(function(){
  $('#tripPlannerHover').hide();
});

$('#belowTheSurface, #belowTheSurfaceHover').mouseenter(function(){
  $('#belowTheSurfaceHover').toggle();
}).mouseleave(function(){
  $('#belowTheSurfaceHover').hide();
});




});
