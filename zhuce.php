<?php
	//1、接收用户的输入（客户端的数据）
	$userName = $_GET['userName'];
	
	//2、处理
	if($userName=='www'){
		//3、响应
		echo "1";//用户名存在
	}else{
		//3、响应
		echo "0";//用户名不存在
	}
?>