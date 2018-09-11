$(function(){
	var a=true;
	$(window).scroll(function(){
		// console.log($(window).scrollTop());
		if($(window).scrollTop()>=900){
			if(a==true){
				$('.footer  p').animate({left:'150px'},300).animate({left:'100px'},300);
				$('.footer .right ul').animate({left:'100px'},300).animate({left:'80px'},300);
				$('.footer .right img').fadeIn(1000);
				a=false;
			}
		}	
	})
	//返回顶部
	$('.footer .top a img').click(function(){
		$('html,body').animate({scrollTop: '0px'}, 1000);
	}); 
})