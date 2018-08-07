$(document).ready(function(){
    'use strict'; 
    
	var myHeader = $('.header');
	
	myHeader.height($(window).height());

	
	$(window).resize(function()
	{		
		myHeader.height($(window).height());
	});

	
	$(".links li a").click(function()
	{
		$(this).parent().addClass('forcolor').siblings().removeClass('forcolor');
	});
	

	$('.links li a').click(function()
	{
		$("html , body").animate({
			scrollTop : $("#" + $(this).data("value")).offset().top 
		} , 1000);
	});






/*

	(function autoSlider(){
		$('.slider .active').each(function(){


			if($(this).is('first-child')){
				console.log('ss');
			}

			
		});

	}());


*/

	$('html').niceScroll({
		preservenativescrolling: false,
        cursorwidth: '8px',
        cursorborder: 'none',
        cursorborderradius:'0px',
        cursorcolor:"#39CCDB",
		background:"#999999" , 
       // autohidemode: false 
	});


});