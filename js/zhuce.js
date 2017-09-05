	function $(id){
		return document.getElementById(id);
	}
	window.onload=function(){
		//正则验证
		var isDown;
		var isDown1;
		var isDown2;
		var isDown3;
	//	$("inname").onblur=function(){
		function inname1(){
			var str1=$("inname").value;
			if((/^.{3,16}$/).test(str1)){
				    isDown=true;
			return	$("span1").innerHTML="√";
			}else{
			return	$("span1").innerHTML="×";
			        isDown=false;
			}				
		}
		$("inpass").onblur=function(){
			var  str2=$("inpass").value;
		    if((/^\d{3,16}$/).test(str2)){
				    isDown1=true;
			return	$("span2").innerHTML="√";
			}else{
			return	$("span2").innerHTML="×";
			        isDown1=false;
			}				
		}
		$("inpass1").onblur=function(){
			var  str2=$("inpass").value;
			var  str3=$("inpass1").value;	   
		    	if(str3==str2){
				    isDown2=true;
		    return		$("span3").innerHTML="√";	
			}else{
			return	$("span3").innerHTML="×";
			        isDown2=false;
			}				
		}
		
		//注册请求
			$("inname").onblur = function(){
				inname1();
				//1、创建XMLHttpRequest
				var xhr = new XMLHttpRequest();
				//2、设置请求参数
				xhr.open("get","zhuce.php?userName="+$("inname").value,true);
				
				//3、设置回调函数。
				xhr.onreadystatechange = function(){
					if(xhr.readyState==4 && xhr.status==200){
						var  str = xhr.responseText;
						if(str=="1"){
				            isDown3=false;
							$("span0").innerHTML = "用户名有了，赶紧换个名字！！";	
						}else{
							isDown3=true;
							$("span0").innerHTML = "用户名没人用，赶紧用吧";
						}
					}
				}
				
				//4、发送
				xhr.send();
			}
	    $("btn").onclick=function(){
	    	//console.log(str+"-"+str1+"-"+str2+"-"+str3)
	    	if(isDown==true && isDown1==true && isDown2==true && isDown3==true){
	    		location.href="denglu.html";
	    	}else{
	    		$("span4").innerHTML="注册失败";
	    	}
	    }
	}
