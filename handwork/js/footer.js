$(function(){
	var a=true;
	$(window).scroll(function(){
		if($(window).scrollTop()>=2600){
			if(a==true){
				$('.footer  p').animate({left:'150px'},300).animate({left:'100px'},300);
				$('.footer .right ul').animate({left:'100px'},300).animate({left:'80px'},300);
				$('.footer .right img').fadeIn(1000);
				a=false;
			}
		}	
	})
	//返回顶部
	$('.footer .top a img').on('click',function(){
		$('html,body').animate({scrollTop: '0px'}, 2000);
	})	
})