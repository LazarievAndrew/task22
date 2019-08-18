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

function onCounterCLick(event){

	var target = event.target;

	if(target.tagName != 'INPUT'){
		return;
	};

    getPlus(target) ? target.parentElement.getElementsByClassName('counter')[0].innerText++ : 0;

    getMinus(target) ? target.parentElement.getElementsByClassName('counter')[0].innerText-- : 0;
};

document.getElementById('activeZone').addEventListener('click', onCounterCLick);