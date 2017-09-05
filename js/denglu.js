	function $(id){
		return document.getElementById(id);
	}
		window.onload = function(){
		
			$("btn").onclick = function(){
				//1、创建XMLHttpRequest
				var xhr = new XMLHttpRequest();
				//2、设置请求参数
				xhr.open("post","denglu.php",true);
				
				//3、设置回调函数。
				xhr.onreadystatechange = function(){
					if(xhr.readyState==4 && xhr.status==200){
						var str = xhr.responseText;
						if(str=="1"){
							//1、保存cookie
//							addCookie("userName",$("inname").value,7);				
							//setCookie("userName",$("inpass").value,7);				
							//2、跳转到首页，
							location.href = "shouye.html";
						}else{
							$("span1").innerHTML="登陆失败，用户名或者密码不对！";
						}



					}
				}
				xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				let postStr="userName="+$("inname").value+"&userPass="+$("inpass").value;
				//4、发送
				xhr.send(postStr);
			}

        }
