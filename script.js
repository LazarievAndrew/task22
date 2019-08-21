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
	var count = target.parentElement.getElementsByClassName('counter')[0];
	
	if (getPlus(target)){
		
		count.innerText++;
	};

	if (getMinus(target)){

		count.innerText--;
	}

	return;
};

document.getElementById('activeZone').addEventListener('click', cLicker);