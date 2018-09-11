$(function(){
	//设置点击事件
	$('.box .content .register').on('click',function(){
		$('.box .content .register').css({'background':'#adadadc7','color':'#666'});
		$('.box .content .register a').css('color','#ffffffe8');
		$('.box .content .login').css({'background':'#ffffff4f','color':'black'});
		$('.box .content .login a').css('color','black');
		$('.box .content .write1').show(300);
		$('.box .content .write').hide();
	})
	$('.box .content .login').on('click',function(){
		$('.box .content .login').css('background','#adadadc7');
		$('.box .content .login a').css('color','#ffffffe8');
		$('.box .content .register').css('background','#ffffff4f');
		$('.box .content .register a').css('color','black');
		$('.box .content .write').show(300);
		$('.box .content .write1').hide();
	})

	//设置logo改变
	$('.write1 form  span a .one').on('mouseenter',function(){
		$('.write1 form  span a .one').hide();
		$('.write1 form  span a .one1').show();
	})
	$('.write1 form  span a .one1').on('mouseleave',function(){
		$('.write1 form  span a .one').show();
		$('.write1 form  span a .one1').hide();
	})
	$('.write1 form  span a .two').on('mouseenter',function(){
		$('.write1 form  span a .two').hide();
		$('.write1 form  span a .two1').show();
	})
	$('.write1 form  span a .two1').on('mouseleave',function(){
		$('.write1 form  span a .two').show();
		$('.write1 form  span a .two1').hide();
	})
	$('.write1 form  span a .three').on('mouseenter',function(){
		$('.write1 form  span a .three').hide();
		$('.write1 form  span a .three1').show();
	})
	$('.write1 form  span a .three1').on('mouseleave',function(){
		$('.write1 form  span a .three').show();
		$('.write1 form  span a .three1').hide();
	})
	

	var flag = false;
	// 当user聚焦时
	$('input[name=user]').on('focus',function(){
		this.nextSibling.innerHTML = '*由六位以上的数字、字母、下划线组成';
		$(this).next().css({'color':'#666','fontSize':'12px'})
	})
	// 绑定失焦事件
	$('input[name=user]').on('blur',function(){
		// 判断是否符合规范
		if(this.value == ''){
			this.nextSibling.innerHTML = '*用户名不能为空';
			$(this).next().css('color','#f00');
			flag = false;
		}else{
			// 判断用户名是否符合规范
			var pattern = /^\w{6,}$/;
			// console.log(pattern.test(this.value));
			if(pattern.test(this.value)){
				this.nextSibling.innerHTML = '√';
				$(this).next().css('color','green');
				// 判断用户名是否已存在   连接数据库
				flag = true;
			}else{
				this.nextSibling.innerHTML = '× 用户名不符合规范';
				$(this).next().css('color','red');
				flag = false;
			}
		}
	})

	// 当num聚焦时
	$('input[name=num]').on('focus',function(){
		this.nextSibling.innerHTML = '*请输入电话号码或者邮箱';
		$(this).next().css({'color':'#666','fontSize':'12px'})
	})
	// 绑定失焦事件
	$('input[name=num]').on('blur',function(){
		// 判断是否符合规范
		if(this.value == ''){
			this.nextSibling.innerHTML = '*号码/邮箱不能为空';
			$(this).next().css('color','#f00');
			flag = false;
		}else{
			// 判断用户名是否符合规范
			var pattern = /^\w{11,}$/;
			// console.log(pattern.test(this.value));
			if(pattern.test(this.value)){
				this.nextSibling.innerHTML = '√';
				$(this).next().css('color','green');
				// 判断用户名是否已存在   连接数据库
				flag = true;
			}else{
				this.nextSibling.innerHTML = '× 电话号码/邮箱不符合规范';
				$(this).next().css('color','red');
				flag = false;
			}
		}
	})

	// 当pass聚焦时
	$('input[name=pass]').on('focus',function(){
		this.nextSibling.innerHTML = '*由十位以上的数字、字母、下划线组成';
		$(this).next().css({'color':'#666','fontSize':'12px'})
	})
	// 绑定失焦事件
	$('input[name=pass]').on('blur',function(){
		// 判断是否符合规范
		if(this.value == ''){
			this.nextSibling.innerHTML = '*密码不能为空';
			$(this).next().css('color','#f00');
			flag = false;
		}else{
			// 判断用户名是否符合规范
			var pattern = /^\w{10,}$/;
			// console.log(pattern.test(this.value));
			if(pattern.test(this.value)){
				this.nextSibling.innerHTML = '√';
				$(this).next().css('color','green');
				// 判断用户名是否已存在   连接数据库
				flag = true;
			}else{
				this.nextSibling.innerHTML = '× 密码格式不符合规范';
				$(this).next().css('color','red');
				flag = false;
			}
		}
	})

	// 返回boolean值    
	$('form').on('submit',function(){
		return flag;
	})
	//重置提醒
	$('form').on('reset',function(){
		// 提示信息框
		var res = confirm('你确定要重置吗');
		return res;
	}) 
})		