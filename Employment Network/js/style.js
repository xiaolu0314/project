$(function(){
	// 导航条
	var flag=false;
	var a=false;
	$('.wrap .header .select').on('click',function(){
		if(flag==true){
			$('.wrap .header .content').hide();
			flag=false;
		}else{
			flag=true;
			$('.wrap .header .content').show();
		}
	})
	// 吸顶导航
	$(window).on('scroll',function(){
       // console.log($('.wrap .header .nav').offset().top);
       if($('.wrap .header .nav').offset().top>40){
       		$('.wrap .header .nav').css({'top':'0px','transition':'all 0.1s linear'});
       		// $('.wrap #top').show();
       }else if($('.wrap .header .nav').offset().top<=40){
       		$('.wrap .header .nav').css({'top':'40px','transition':'all 0.1s linear'});
       		// $('.wrap .header .nav .tit').hide();       		
       }
	})
	// 登录图标点击事件
	$('.wrap .header .nav .tit').on('click',function(){
		if(a==true){
			$('.wrap .header .nav .tit a').show();
			a=false;
		}else{
			a=true;
			$('.wrap .header .nav .tit a').hide();
		}
	})
	//向上
	$(window).scroll(function(){
		if($(window).scrollTop()>=500){
			$('.wrap #top').show();
			$('.wrap #top').on('click',function(){
				$('html,body').animate({'scrollTop': '40px'},2000);
			})
		}else{
			$('.wrap #top').hide();
		}
	})	
})