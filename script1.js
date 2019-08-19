// Визуальный счетчик

// создать 5 квадратов  изначально в них отображается 0
// в каждом квадратов создать кнопки "+" и "-"
// при клике на кнопку "+" цифра внутри квадрата должна увеличиваться
// при клике на кнопку "-" цифра внутри квадрата должна уменьшаться


function getPlus(input){

	return input.classList.contains('plus');
};

function getMinus(input){

	return input.classList.contains('minus');
};

function cLicker(event){

	var target = event.target;

	if(target.tagName != 'INPUT'){
		return;
	};

	//можно сделать общую переменную, типа var count = target.parentElement.getElementsByClassName('counter')[0]
	// и в условии ниже написать count.innerText++ и count.innerText-- соответственно.
	
	if (getPlus(target)){
		
		target.parentElement.getElementsByClassName('counter')[0].innerText++;
	};

	if (getMinus(target)){

		target.parentElement.getElementsByClassName('counter')[0].innerText--;
	};
};

document.getElementById('activeZone').addEventListener('click', cLicker);