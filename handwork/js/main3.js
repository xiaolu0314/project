$(function(){
	var a=true;
	var b=true;
	var c=true;
	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if($(window).scrollTop()>=300){
			if(a==true){
				$('.main .title h2').animate({marginTop:'-20px'},500).animate({marginTop:'0px'},500);
				a=false;
			}
		}
		if($(window).scrollTop()>=600){
			if(b==true){
				$('.main img').animate({marginTop:'-20px'},500).animate({marginTop:'0px'},500);
				b=false;
			}
		}
		if($(window).scrollTop()>=800){
			if(c==true){
				$('.main div').fadeIn(2000);
				c=false;
			}
		}
	})
})