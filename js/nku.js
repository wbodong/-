// JavaScript Document
//传入一个id返回一个标签
//function $(id){
//	   return document.getElementById(id);
//	}
	
//返回给定数的阶乘
function nn(num1){
	 if(num1==1){
	     return 1;	  
	  }
	  return num1*nn(num1-1);
	}
/*
功能：在数组中查找某个元素
参数1：数组
参数2：目标元素
返回值：true-找到了；flase-没找到；
*/
function has(arr,n){
	for(var i=0;i<arr.length;i++){
	    if(arr[i]==n){
			return true;  
		   }  
	   }
	   return false;
	}
/*
功能：返回两个数之间的随机整数
参数1：开始数
参数2：结束数
返回值：随机整数
*/
function areaRandom(min,max){
	var num=max-min;
	num=parseInt(Math.random()*(num+1));
	return num+min;
	}
/*
功能：产生#ffff内的随机颜色
返回值：#开头的十六进制6位颜色值
*/
function randomColor(){
	var str="#";
	for(var i=0;i<6;i++){
		var num1=areaRandom(0,16);
		str=str+num1.toString(16);
		}
		return str;
	}
/*
功能：返回汉字星期
参数1：日期对象
返回值：字符串星期（汉字）
*/
function getweek(date){
	switch(date.getDay()){
		case 0:return "星期天";
		case 1:return "星期一";
		case 2:return "星期二";
		case 3:return "星期三";
		case 4:return "星期四";
		case 5:return "星期五";
		case 6:return "星期六";
		default:break;
		}
	}
/*
功能：返回日期（yyyy年mm月dd日）
参数1：日期对象
返回值：字符串日期（yyyy年mm月dd日）
*/
function formatDate(date){
	var year=date.getFullYear();
	var month=date.geyMonth()+1;
	var day=date.getDate();
	return year+"年"+month+"月"+day+"日";
	}
/*
功能：计算两个日期之间的天数
参数1：第一个日期对象
参数2：第二个日期对象
返回值：日期天数的差（整数）
*/
function dateDifference(date1,date2){
	var num1=date1.getTime();
	var num2=date2.getTime();
	return Math.ceil((num2-num1)/(1000*60*60*24));
	}
var myEventUtil={
                 //添加事件函数,调用方法addEvent(btn1,'click',showmsg);
                addEvent:function(ele,event,func){
                    //用能力检测进行跨浏览器兼容处理
                    //DOM 2 事件处理
                    if(ele.addEventListener)
                    {
                        //false表示冒泡事件模型
                        ele.addEventListener(event,func,false);
                    }
                    else if(ele.attachEvent)
                    {
                        //若是click事件,IE为onclick
                        ele.attachEvent('on'+event,func);
                    }
                    else
                    {
                        //DOM 0级事件，兼容老浏览器
                        //not ele.'on'+event=func;
                        //js中.可以用[]进行代替
                        ele['on'+event]=func;
                    }
                },
                //删除事件函数
                delEvent:function(ele,event,func){
                    if(ele.removeEventListener)
                    {
                        ele.removeEventListener(event,func,false);
                    }
                    else if(ele.detachEvent){
                        ele.detachEvent('on'+event,func);//IE
                    }
                    else
                    {
                        //DOM 0级事件，兼容老浏览器
                        ele['on'+event]=null;
                    }
                },
                //获取触发事件的源DOM元素
                getSrcElement:function(event){
                    //如果event.target不为空，则返回event.target值
                    //否则返回event.srcElement
                    return event.target || event.srcElement;
                },
                //获取事件类型
                getType:function(event)
                {
                    return event.type;
                },
                //获取事件
                getEvent:function(event){
                    //window.event为兼容IE版本
                    return event?event:window.event;
                },
                //阻止事件冒泡
                stopBuble:function(event){
                    if(event.stopPropagation){
                        event.stopPropagation();
                    }
                    else{
                        event.cacelBuble=false;//IE
                    }
                },
                //禁用默认行为
                preventDefault:function(event){
                    if(event.preventDefault){
                        event.preventDefault();
                    }
                    else
                    {
                        event.returnValue=false;//IE为属性
                    }
                }
};
	/*
	功能：返回节点的某类型的子节点
	参数1：节点
	参数1：节点类型
	返回值：符合传入类型的子节点（数组）
	**/	
	function getElementChilds(node,type){
		var arr=[];
		for(var i in node.childNodes){
			if( node.childNodes[i].nodeType==type){
				arr.push(node.childNodes[i]);
			}
		}
		return arr;
	}
	function getElementNode(node,type){
		var arr=[];
		var arr1=node.childNodes;
		for(var i in arr1){
			if(arr1[i].nodeType==type){
				arr.push(arr1[i]);
			}
		}
		return arr;		
	}
	/*
	功能：取得样式的值
	参数1：元素
	参数2：样式名
	返回值：样式的值
	**/	
	function getAttr(obj,attrName){
		if(obj.currentStyle){
			return obj.currentStyle[attrName];
		}else{
			return window.getComputedStyle(obj,false)[attrName];
		}
	}
	/*
	功能：设置cookie
	参数1：键名
	参数2：值
	参数3：过期值（天数）
	返回值：true:false
	**/	
	function setCookie(key,value,time){
		if(isCookie()){
			var date=new Date();
			date.setDate(date.getDate()+time);
			document.cookie=key+"="+value+"; expires="+date.toGMTString();
			return true;
		}else{
			return false;
		}
	}
	/*
	功能：获取cookie
	参数1：键名
	返回值：string:null:undefined
	**/	
	function getCookie(key){
		if(isCookie()){
			var arr=document.cookie.split("; ");
			for(var i in arr){
				var item=arr[i].split("=");
				if(item[0]==key){
					return item[1];
				}
			}
			return null;
		}else{
			return undefined;
		}
	 }
	/*
	功能：判断浏览器是否禁用cookie
	返回值：true:false
	**/	
	 function isCookie(){
		return navigator.cookieEnabled?true:false;
	 }
	 /*
	功能：删除cookie
	参数1：键名
	返回值：true:false
	**/	
	function delCookie(key){
		if(isCookie()){
			var date=new Date();
			date.setDate(date.getDate()-1);
			document.cookie=key+"=1; expires="+date.toGMTString();
			return true;
		}else{
			return false;
		}	
	}
	 /*
	功能：正则验证
	参数1：验证类型
	参数2：验证的字符串
	返回值：true:false
	**/		
	function checkAll(type,value){ 		 //type是你要验证的类型（自定），value验证该值
		switch(type) {				//判断该类型       
		case 'Phone':   			//如果类型是Phone的话，就执行下面的判断  
			if((/^1[34578]\d{9}$/).test(value)){   //1开头后跟345678，后跟9个数字，结尾
				return true;   
			}else{  
				return false;
			}  
			break;  
		case 'Email':  
			if((/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(value)){   
				return true;   
			}else{  
				return false;
			}  
			break; 
		}  
	} 
	/**
	obj上下左右移动到target
	*/
	function move1(obj,target,attr){//"left" "top"
		clearInterval(timer);//消除抖动现象
		timer=setInterval(function(){
			let attrValue=parseInt(getStyle(obj,attr));
			let speed=(attrValue>target)?-10:10;
			//当前位置与目标位置的差小于速度
			//必须求绝对值保证运算正确
			if((Math.abs(attrValue-target))<Math.abs(speed)){
				obj.style[attr]=target+"px";
				//清除定时器
				clearInterval(timer);
			}else{
				//修改坐标实现运动
				obj.style[attr]=attrValue+speed+"px";	
			}				
		},30);
	}
	//缓冲运动
	function move4(obj,target,attr){
		clearInterval(timer);//消除抖动现象
		timer=setInterval(function(){
			//当前位置
			let attrValue=parseInt(getStyle(obj,attr));
			//算出的速度
			let speed=(target-attrValue>0)?Math.ceil((target-attrValue)/7):Math.floor((target-attrValue)/7);
			if(attrValue==target){
				clearInterval(timer);
			}else{
				obj.style[attr]=attrValue+speed+"px";
			}
		},30);
	}
	/*目标淡入淡出**/
	function move5(obj,target){
		clearInterval(timer);
		timer=setInterval(function(){
			let attrValue=getStyle(obj,"opacity")*100;//透明度要乘100，放大进行运算
			let speed=(target-attrValue)/7;
			speed=(speed>0)?Math.ceil(speed):Math.floor(speed);
			if(attrValue==target){
				clearInterval(timer);
			}else{
				//给元素赋值时，要考虑兼容性
				obj.style["filter"]=`alpha(opacity:${attrValue+speed})`;
				obj.style["opacity"]=(attrValue+speed)/100;
			}		
		},30);
	}
	/*多物体淡入淡出**/
	function move6(obj,target){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			let attrValue=getStyle(obj,"opacity")*100;//透明度要乘100，放大进行运算
			let speed=(target-attrValue)/7;
			speed=(speed>0)?Math.ceil(speed):Math.floor(speed);
			if(attrValue==target){
				clearInterval(obj.timer);
			}else{
				//给元素赋值时，要考虑兼容性
				obj.style["filter"]=`alpha(opacity:${attrValue+speed})`;
				obj.style["opacity"]=(attrValue+speed)/100;
			}		
		},30);
	}
/*目标淡入淡出**/	
	function move7(obj,target){//运动对象和目标值
		clearInterval(timer);//清除定时器
		timer=setInterval(function(){//开启定时器
			let curt=getStyle(obj,"opacity")*100;//去的当前值
			let speed=(target-curt)/10;//计算速度
			speed=(speed>0)?Math.ceil(speed):Math.floor(speed);//速度取整
			if(target==curt){//判断目标是否达到
				clearInterval(timer);//清除定时器
			}else{
				obj.style["opacity"]=(curt+speed)/100;//赋值
				obj.style["filter"]=`alpha(opacity:${curt+speed})`;
			}
		},30);
	}
	/*多物体淡入淡出**/
	function move8(obj,target){//运动对象和目标值
		clearInterval(obj.timer);//清除定时器
		obj.timer=setInterval(function(){//开启定时器
			let curt=getStyle(obj,"opacity")*100;//去的当前值
			let speed=(target-curt)/10;//计算速度
			speed=(speed>0)?Math.ceil(speed):Math.floor(speed);//速度取整
			if(target==curt){//判断目标是否达到
				clearInterval(obj.timer);//清除定时器
			}else{
				obj.style["opacity"]=(curt+speed)/100;//赋值
				obj.style["filter"]=`alpha(opacity:${curt+speed})`;
			}
		},30);
	}
	/*多物体 单个属性**/
	function move9(obj,target,attr){
		clearInterval(obj.timer);//消除抖动现象
		obj.timer=setInterval(function(){
			//当前值
			obj.curt=0;
			if(attr=="opacity"){
				obj.curt=getStyle(obj,attr)*100;
				console.log(obj.curt+obj.innerHTML);
			}else{
				obj.curt=parseInt(getStyle(obj,attr));
			}
			//算出的速度
			let speed=(target-obj.curt>0)?Math.ceil((target-obj.curt)/7):Math.floor((target-obj.curt)/7);
			if(obj.curt==target){
				clearInterval(obj.timer);
			}else{
				if(attr=="opacity"){
					obj.style["opacity"]=(obj.curt+speed)/100;//赋值
					obj.style["filter"]=`alpha(opacity:${obj.curt+speed})`;
				}else{
					obj.style[attr]=obj.curt+speed+"px";
				}
			}
		},30);
	}
	/*多物体多属性同时运动**/
	function movex(obj,attrs){
		clearInterval(obj.timer);//消除抖动现象
		obj.timer=setInterval(function(){
			let isEnd=false;
			for(let attr in attrs){//遍历对象的属性
				//当前值
				obj.curt=0;
				if(attr=="opacity"){
					obj.curt=getStyle(obj,attr)*100;
				}else{
					obj.curt=parseInt(getStyle(obj,attr));
				}
				//算出的速度
				let speed=(attrs[attr]-obj.curt>0)?Math.ceil((attrs[attr]-obj.curt)/7):Math.floor((attrs[attr]-obj.curt)/7);
				if(obj.curt==attrs[attr]){
					isEnd=true;					
				}else{
					isEnd=false;
					if(attr=="opacity"){
						obj.style["opacity"]=(obj.curt+speed)/100;//赋值
						obj.style["filter"]=`alpha(opacity:${obj.curt+speed})`;
					}else{
						obj.style[attr]=obj.curt+speed+"px";
					}
				}				
			}
			if(isEnd){
				clearInterval(obj.timer);
			}
		},30);
	}
	/*链式运动
	缺少使用isEnd记录是否所有目标都达到
	isEnd==true关闭定时器
	**/
	function movel(obj,attrs,fun){
		clearInterval(obj.timer);//消除抖动现象
		obj.timer=setInterval(function(){
			for(let attr in attrs){//遍历对象的属性
				//当前值
				obj.curt=0;
				if(attr=="opacity"){
					obj.curt=getStyle(obj,attr)*100;
				}else{
					obj.curt=parseInt(getStyle(obj,attr));
				}
				//算出的速度
				let speed=(attrs[attr]-obj.curt>0)?Math.ceil((attrs[attr]-obj.curt)/7):Math.floor((attrs[attr]-obj.curt)/7);
				if(obj.curt==attrs[attr]){
					clearInterval(obj.timer);
					if(fun){fun();}
				}else{
					if(attr=="opacity"){
						obj.style["opacity"]=(obj.curt+speed)/100;//赋值
						obj.style["filter"]=`alpha(opacity:${obj.curt+speed})`;
					}else{
						obj.style[attr]=obj.curt+speed+"px";
					}
				}				
			}
		},30);
	}



	function getStyle(obj,attrName){
		if(obj.currentStyle){
			return obj.currentStyle[attrName];
		}else{
			return window.getComputedStyle(obj,false)[attrName];
		}
	}
