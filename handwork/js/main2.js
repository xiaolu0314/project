$(function(){
	var a=true;
	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if($(window).scrollTop()>=300){
			if(a==true){
				$('.main .title h2').animate({marginTop:'-20px'},500).animate({marginTop:'10px'},500);
				$('.main img').animate({marginTop:'0px'},500).animate({marginTop:'40px'},500);
				a=false;
			}
		}
	})
})