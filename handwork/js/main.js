$(function(){
	var a=true;
	var b=true;
	var c=true;
	var d=true;

	$('.main .introduce .introduce-img .introduce-img-1').mouseenter(function(){
		$(this).children('div').show();
		$(this).children('div').animate({left:'0px'},300);
	})
	$('.main .introduce .introduce-img .introduce-img-1').mouseleave(function(){
		$(this).children('div').animate({left:'-225px'},300);
	})
	$('.main .introduce .introduce-img .introduce-img-2').mouseenter(function(){
		$(this).children('div').show();
		$(this).children('div').animate({left:'695px'},300);
	})
	$('.main .introduce .introduce-img .introduce-img-2').mouseleave(function(){
		$(this).children('div').animate({left:'920px'},300);
	})

	// 动画的弹跳效果
	$(window).scroll(function(){
		// console.log($(window).scrollTop());
		if($(window).scrollTop()>=350){
			if(a==true){
				$('.main .introduce .introduce-img').animate({marginTop:'-60px'},300).animate({marginTop:'0px'},300);
				a=false;
			}
		}
		if($(window).scrollTop()>=650){
			if(a==false){
				$('.main .introduce h2').fadeIn(600);
				$('.main .introduce p').fadeIn(600);
			}
		}

		if($(window).scrollTop()>=1200){
			if(b==true){
				$('.main .products1 .title h2').animate({marginTop:'10px'},300).animate({marginTop:'60px'},300);
				b=false;
			}
		}
		if($(window).scrollTop()>=2000){
			if(c==true){
				$('.main .products2 .title h2').animate({marginTop:'10px'},300).animate({marginTop:'60px'},300);
				c=false;
			}
		}
		if($(window).scrollTop()>=2300){
			if(d==true){
				$('.main .products2 .right .bottom img').animate({marginTop:'-40px'},300).animate({marginTop:'10px'},300);
				$('.main .products2 .left img').fadeIn(1000);
				$('.main .products2 .right .top .top-left img').fadeIn(1000);
				$('.main .products2 .right .top .top-right img').fadeIn(1000);
				d=false;
			}
		}
	})

	//鼠标移入移出 
	$('.main .products1 .left').mouseenter(function(){
		$(this).children('div').fadeIn(600);
	})
	$('.main .products1 .left').mouseleave(function(){
		$(this).children('div').fadeOut(600);
	})

	$('.main .products1 .right .top .top-left').mouseenter(function(){
		$(this).children('div').fadeIn(600);
	})
	$('.main .products1 .right .top .top-left').mouseleave(function(){
		$(this).children('div').fadeOut(600);
	})

	$('.main .products1 .right .top .top-right').mouseenter(function(){
		$(this).children('div').fadeIn(600);
	})
	$('.main .products1 .right .top .top-right').mouseleave(function(){
		$(this).children('div').fadeOut(600);
	})

	$('.main .products1 .right .bottom .bottom-left').mouseenter(function(){
		$(this).children('div').fadeIn(600);
	})
	$('.main .products1 .right .bottom .bottom-left').mouseleave(function(){
		$(this).children('div').fadeOut(600);
	})

	$('.main .products1 .right .bottom .bottom-right').mouseenter(function(){
		$(this).children('div').fadeIn(600);
	})
	$('.main .products1 .right .bottom .bottom-right').mouseleave(function(){
		$(this).children('div').fadeOut(600);
	})

})