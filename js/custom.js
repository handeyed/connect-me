$(document).ready(function(){

  $('.testimonial-slide').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
    mobileFirst: true
  });

  $(".menu-opener").click(function(){
    $(".menu-opener-inner").toggleClass("active")
    $("#content").toggleClass("active");
  });
  $("#steps div").click(function(){
    $( "#steps div" ).removeClass('active');
    $(this).addClass(" active");
  });
});