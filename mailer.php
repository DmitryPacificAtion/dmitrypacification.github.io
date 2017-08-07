<?php
$name = $_POST['name'];
$email = $_POST['email'];
$quantity = $_POST['quantity'];

if((isset($name)&&$name!="")&&(isset($email)&&$email!="")&&(isset($quantity)&&$quantity!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
	$to = 'bruslik.dmitry@gmai.com';//Почта получателя, через запятую можно указать сколько угодно адресов
	$subject = "Новый заказ! Спекулы $quantity штук"; //Загаловок сообщения
	$message = "
	<html>
	<head>
		<title>{$subject}</title>
	</head>
	<body>
		<p>Клиент {$name} сделал заказ и ожидает Вашего ответа!</p>
		<p>Сохраните его данные:</p>
		<p>Имя: {$name}</p>
		<p>E-mail: {$email}</p>
		<p>Количество: {$quantity}</p>
	</body>
			</html>"; //Текст нащего сообщения можно использовать HTML теги
	$headers  = "Content-type: text/html; charset=utf-8 \n"; //Кодировка письма
	$send = mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
	if ($send == 'true'){
		echo '<center><h1>Спасибо за заказ!</h1><br><a href="/">На главную</a></center>';
	}
	else{
		echo '<center><h1>Письмо не отправлено!</h1><br><p>Вы можете вернуться <a href="/">на главную</a> и попробовать еще раз, <br>или позвонить менеджеру и оформить заказ по телефону</p></center>';
	}
}
else{
	echo '<center><h1>Форма не отправлена</h1><br><p>Заполните пожалуйста все поля формы.<br>Или вы можете позвонить менеджеру и оформить заказ по телефону</p></center>';
}
echo '<div style="width:100%; position:absolute; bottom:0;">';
include 'footer.php';
echo '</div>';
?>