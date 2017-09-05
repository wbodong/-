<?php
	//1、接收客户端的输入
	$userName = $_POST['userName'];
	$userPass = $_POST['userPass'];
	
	//2、处理(假定数据库中有一个用户：名字是jzm，密码是：123)
	if($userName=="aaa" && $userPass=="123"){
		echo "1";
	}else{
		echo "0";
	}
	//3、响应（0：表示登陆失败，1：登陆成功！）

?>