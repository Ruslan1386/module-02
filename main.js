let sharm = 15;
let hurgada = 25;
let taba = 6;

let n = prompt("Введиде количество участников группы", ' ');

if (n > 0 && Math.ceil(n) - n === 0) {
	//if (n > 0 && n <= sharm + hurgada + taba){
		if (n > 0 && n <= sharm){
			confirm("Выберите sharm");
			sharm -= n;
			//prompt("Введиде количество участников группы", ' ');
		}
		if (n > 0 && n <= hurgada){
			confirm("Выберите hurgada");
			hurgada -= n;
			//prompt("Введиде количество участников группы", ' ');
		}
		if (n > 0 && n <= taba){
			confirm("Выберите taba");
			taba -= n;
			//prompt("Введиде количество участников группы", ' ');
		} else {
			alert("Мест нет");
		};

	//} else {
		//alert("Мест нет");
	//};
	} else {
		alert("Вы ввели не верное число");
		prompt("Введиде количество участников группы еще раз", ' ');
	};