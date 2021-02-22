var ball = 0;
var h2hV = document.getElementById('h2h');

function show() {
	
	if(ball === 1){
		q_text = " вопрос";
	}else if(ball > 1 && ball < 5){
		q_text = " вопросa";
	}else if(ball > 5){
		q_text = " вопросов";
	}else if(ball === 0){
		q_text = " вопросов";
	}

	document.getElementById('h4h').innerHTML = "Вы ответили на " + ball + q_text;
	if (ball < 4) {
		document.getElementById('h2h').innerHTML = "Вам стоит получше узнать нашу школу!";
		document.getElementById('h2h').style = "color:Crimson";
	} else if (ball > 4 && ball < 8) {
		document.getElementById('h2h').innerHTML = "Вы неплохо знаете нашу школу!";
		document.getElementById('h2h').style = "color:orange";
	} else if (ball > 8) {
		document.getElementById('h2h').innerHTML = "Вы знаете всё про нашу школу!";
		document.getElementById('h2h').style = "color:LightGreen";
	}
}
function Start() {
	document.getElementById("start_b").style = "display: none";
	document.getElementById("q1").style = "display: flex";
	document.getElementById("bodyID").style = "overflow-y: scroll";
}
function Verify2(nd,qq) {
	var radiosty;
	var radiodis;
	switch (nd) {
		case 1:
			alert('Неправильный ответ!');
			break;
		case 2:
			ball = ball + 1;
			alert('Правильный ответ!');
			break;
	}
	document.getElementById("qb" + qq).removeAttribute("disabled");
	document.getElementById("verno" + qq + "_s").style="color:LightGreen";
	radiodis = document.getElementsByName("q" + qq);
	radiosty = document.getElementsByClassName("q" + qq);
	for (let i = 0; i < 4; i++) {
		radiodis[i].disabled = "disabled";
		radiosty[i].style = "color:Crimson";
	}
	document.getElementById("qb" + qq).disabled = false;
}

function Next(a) {
	document.getElementById("q" + (a + 1)).style="display: flex";
}
 function disableButton() {
 	for (var i = 1; i <= 10; i++) {
 		document.getElementById("qb"+i).disabled = "disabled";
 	}
 }

 window.onload = disableButton;