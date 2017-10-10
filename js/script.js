$(document).ready(function(){
var scroll = $('.scroll');
$('.next').on('click',function(){
    $('html, body').animate({ scrollTop: $(scroll).offset().top }, 1000);
})


});






$('#show-button').click(function(){
  $('.hiden').show(100, function() {
	$(".hiden").css({'opacity' : '1'},1000);
	$('#show-button').hide(600);
  });
});


