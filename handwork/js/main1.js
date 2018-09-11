$(function(){
	var a=true;
	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if($(window).scrollTop()>=300){
			if(a==true){
				$('.main .title h2').animate({marginTop:'-25px'},300).animate({marginTop:'10px'},300);
				$('.main ul li p').show(2000);
				$('.main ul li h4').show(2000);
				a=false;
			}
		}
	})

	//鼠标移入移出 
	$('.main ul li a').mouseenter(function(){
		$(this).children('div').fadeIn(600);
	})
	$('.main ul li a').mouseleave(function(){
		$(this).children('div').fadeOut(600);
	})
})