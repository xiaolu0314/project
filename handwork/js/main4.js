$(function(){
	var a=true;
	$(window).scroll(function(){
		// console.log($(window).scrollTop());
		if($(window).scrollTop()>=300){
			if(a==true){
				$('.main .title h2').animate({marginTop:'-20px'},500).animate({marginTop:'10px'},500);
				a=false;
			}
		}
		if($(window).scrollTop()>=500){
			if(a==false){
				$('.main img').show(1000);
			}
		}
	})
})