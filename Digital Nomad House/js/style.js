$(function(){
	// 轮播背景图
	var num=1;
	var timer=setInterval(function(){
		if(num<7){
			$('.box .header').css({'background':'url(./images/bg'+num+'.jpg) no-repeat center center / 100% 800px'})
			num++;
		}else{
			num=1;
		}
	},2000)


	// 导航条
	$(window).scroll(function(){
		if($(window).scrollTop()>=120){
			$('.box .nav').css({'background':'#fff'});
			$('.box .nav span').show();
			$('.box .nav1').css({'background':'#fff'});
			$('.box .nav1 .btn').show();
		}else{
			$('.box .nav').css({'background':'transparent'})
			$('.box .nav span').hide();
			$('.box .nav1').css({'background':'transparent'});
			$('.box .nav1 .btn').hide();
		}
	})

	var a=true;
	$('.box .nav1 .btn').on('click',function(){
		if(a==true){
			$('.box .nav1 .subnav').show();
			a=false;
		}else{
			a=true;
			$('.box .nav1 .subnav').hide();
		}
	})


	// 图片
	$('.box .main .two .box2 .change').on('mouseenter',function(){
		$('.box .main .two .box2 img').css({'transform':'rotateZ(10deg) scale(0.8)'});
	})
	$('.box .main .two .box2 .change').on('mouseleave',function(){
		$('.box .main .two .box2 img').css({'transform':'rotateZ(0deg) scale(1)'});
	})
	$('.box .main .three .box .change').on('mouseenter',function(){
		$('.box .main .three .box img').css({'transform':'rotateZ(-10deg) scale(0.8)'});
	})
	$('.box .main .three .box .change').on('mouseleave',function(){
		$('.box .main .three .box img').css({'transform':'rotateZ(0deg) scale(1)'});
	})


	// 轮播图
	/*var index=0;
		var timer=setInterval(run,2000);
		function run(){
			// console.log($('.box .main .box ul li'));
			if($('.box .main .box ul li').eq(index).next().length ==0){
				$('.box .main .box ul li').first().show();
				$('.box .main .box ul li').last().hide();
				index =0;
			}else{
				$('.box .main .box ul li').eq(index).hide().next().show();
				index ++;
			}
		}
*/
		var index = 1;
		var timer1=setInterval(fun,2000);
		function fun(){
			if(index<6){
				$('.box .main .box2 ul').css({'left':-34*index+'%'})
				index++;
			}else{
				index=0;
				$('.box .main .box2 ul').css({'left':-34*index+'%'})
			}
		}
		$('.box .main .box2 ul li').on('mouseenter',function(){
			clearInterval(timer1);
		})
		$('.box .main .box2 ul li').on('mouseleave',function(){
			timer1=setInterval(fun,1000);
		})

	
		$('.box .main .box1 .circle .circle_one').on('click',function(){
			$(this).css('border','2px solid #ccc').siblings().css('border','2px solid #eee');
			$('.box .main .box1 .img #one').show().siblings().hide();
		})
		$('.box .main .box1 .circle .circle_two').on('click',function(){
			$(this).css('border','2px solid #ccc').siblings().css('border','2px solid #eee');
			$('.box .main .box1 .img #two').show().siblings().hide();
		})
		$('.box .main .box1 .circle .circle_three').on('click',function(){
			$(this).css('border','2px solid #ccc').siblings().css('border','2px solid #eee');
			$('.box .main .box1 .img #three').show().siblings().hide();
		})
		$('.box .main .box1 .circle .circle_four').on('click',function(){
			$(this).css('border','2px solid #ccc').siblings().css('border','2px solid #eee');
			$('.box .main .box1 .img #four').show().siblings().hide();
		})
		$('.box .main .box1 .circle .circle_five').on('click',function(){
			$(this).css('border','2px solid #ccc').siblings().css('border','2px solid #eee');
			$('.box .main .box1 .img #five').show().siblings().hide();
		})
		$('.box .main .box1 .circle .circle_six').on('click',function(){
			$(this).css('border','2px solid #ccc').siblings().css('border','2px solid #eee');
			$('.box .main .box1 .img #six').show().siblings().hide();
		})
		$('.box .main .box1 .circle .circle_seven').on('click',function(){
			$(this).css('border','2px solid #ccc').siblings().css('border','2px solid #eee');
			$('.box .main .box1 .img #seven').show().siblings().hide();
		})
		$('.box .main .box1 .circle .circle_eight').on('click',function(){
			$(this).css('border','2px solid #ccc').siblings().css('border','2px solid #eee');
			$('.box .main .box1 .img #eight').show().siblings().hide();
		})
		$('.box .main .box1 .circle .circle_nine').on('click',function(){
			$(this).css('border','2px solid #ccc').siblings().css('border','2px solid #eee');
			$('.box .main .box1 .img #nine').show().siblings().hide();
		})
})