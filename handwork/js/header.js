$(function(){
	//logo动画
	$('.header .title img').css('left','-200px').animate({left:'80px'},500).animate({left:'0px'},500)
	//轮播图
	var index=0;
	var timer=setInterval(run,2000);
	function run(){
		$('.header .circle li').eq(index).css('background','rgba(100,100,100,0.2)');
		if($('.header .img li').eq(index).next().length ==0){
			$('.header .img li').first().show();
			$('.header .img li').last().hide(500);
			index =0;
			$('.header .circle li').eq(index).css('background','rgba(100,100,100,0.6)');
		}else{
			$('.header .img li').eq(index).hide().next().show();
			index ++;
			$('.header .circle li').eq(index).css('background','rgba(100,100,100,0.6)');
		}
	}
	//鼠标移入小圆点
	$('.header .circle li').on('mouseenter',function(){
		clearInterval(timer);
		$('.header .circle li').eq(index).css('background','rgba(100,100,100,0.2)');
		index=$('.header .circle li').index(this);
		$('.header .img li').eq(index).show().next().hide();
		$('.header .circle li').eq(index).css('background','rgba(100,100,100,0.6)');
		$('.header .circle li').eq(index).next().css('background','rgba(100,100,100,0.2)');
	})
	//鼠标移出小圆点
	$('.header .circle li').on('mouseleave',function(){
		timer=setInterval(run,2000);
	})
})