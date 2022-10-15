$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		infinite: true,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 1
			}
		  }
		]
	  });

});

