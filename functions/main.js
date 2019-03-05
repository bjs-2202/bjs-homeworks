'use strict'

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