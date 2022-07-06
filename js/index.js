// Function Declaration
// function getName () {
// 	let userName = prompt('Как тебя зовут?', 'Имя');

// 	alert(`Привет, ${userName}`);
// }

// стрелочная функция
// const getName = () => {
// 	let userName = prompt('Как тебя зовут?', 'Имя'); // input ввод

// 	alert(`Привет, ${userName}`); //div вывод
// };

const helloInput = document.querySelector('.hello__input');

function btnClick() {
	helloInput.style.display = 'block';
}

const input = document.querySelector('.input');
const outputUserName = document.querySelector('.output');


function getUserName() {
	const userName = input.value;
	outputUserName.textContent = `Твое имя: ${userName}`;
}

function changeBackgroundColor () {
	outputUserName.style.backgroundColor = '#fff';
}