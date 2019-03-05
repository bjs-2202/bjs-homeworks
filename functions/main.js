'use strict';

// lesson 1

function getSolutions(a, b, c) {
	let d = Math.pow(b, 2) - 4 * a * c;
	if (d < 0) {
		return {
			D: d
		};
	} else if (d == 0) {
		let x1 = -b / (2 * a);
		return {
			roots: [x1],
			D: d
		};
	} else if (d > 0) {
		let x1 = (-b - Math.sqrt(d)) / (2 * a);
		let x2 = (-b + Math.sqrt(d)) / (2 * a);
		return {
			roots: [x1, x2],
			D: d
		};
	}
}

//console.log(getSolutions(1, 2, 3));
//console.log(getSolutions(7, 20, -3));
//console.log(getSolutions(2, 4, 2));

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);

	if (result.D < 0) {
		console.log(`Уравнение не имеет вещественных корней.`);
	} else if (result.D == 0) {
		console.log(`Уравнение имеет один корень x1 = ${result.roots}.`);
	} else if (result.D > 0) {
		console.log(`Уравнение имеет два корня x1 = ${result.roots[0]}, x2 = ${result.roots[1]}`);
	}
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

// lesson 2

function getPersonData(secretData) {
	if (secretData.aaa == 0 && secretData.bbb == 0) {
		return {
			firstName: `Родриго`,
			lastName: `Родриго`
		}
	} else if (secretData.aaa == 1 && secretData.bbb == 0) {
		return {
			firstName: `Эмильо`,
			lastName: `Родриго`
		}
	} else if (secretData.aaa == 0 && secretData.bbb == 1) {
		return {
			firstName: `Родриго`,
			lastName: `Эмильо`
		}
	} else if (secretData.aaa == 1 && secretData.bbb == 1) {
		return {
			firstName: `Эмильо`,
			lastName: `Эмильо`
		}
	}
}

console.log(getPersonData({
	aaa: 0,
	bbb: 0
}));
console.log(getPersonData({
	aaa: 1,
	bbb: 0
}));
console.log(getPersonData({
	aaa: 0,
	bbb: 1
}));
console.log(getPersonData({
	aaa: 1,
	bbb: 1
}));

// lesson 3

function getAverageScore(data) {
	//console.log(data);
	let object = {};
	let average = 0;
	let count = 0;
	for (let key in data) {
		//console.log(data[key]);
		let sum = 0;
		for (let i = 0; i < data[key].length; i++) {
			sum = sum + data[key][i];
			//console.log(sum);
			object[key] = sum / data[key].length;
			//console.log(object[key]);
		}
		average += object[key];
		count++;
		//console.log(average);
	}
	object.average = average / count;
	//console.log(object);
	return object;
}

console.log(getAverageScore({
	algebra: [2, 4, 5, 2, 3, 4],
	geometry: [2, 4, 5],
	russian: [3, 3, 4, 5],
	physics: [5, 5],
	music: [2, 2, 6],
	english: [4, 4, 3],
	poetry: [5, 3, 4],
	chemistry: [2],
	french: [4, 4]
}));