"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
	
    let d = Math.pow(b,2) - 4 * a * c;
    let x = [];
	
    if(d == 0) {
	    x[0] = -b / (2 * a);
	console.log(`Дискриминант = ${d}, корень один. x = ${x[0]}`);
    } else if(d > 0) {
	    x[0] = (-b - Math.sqrt(d)) / (2 * a);
        x[1] = (-b + Math.sqrt(d)) / (2 * a);
	console.log(`Дискриминант = ${d}, существует 2 решения уравнения. x1 = ${x[0]}, x2 = ${x[1]}`);
    } else if(d < 0) {
	    console.log(`Дискриминант = ${d}, корней нету.`);
    }
	
    return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
	
    let nowDate = new Date();

    let year = nowDate.getFullYear();
	
    let age = year - dateOfBirthday.getFullYear();
	
    console.log(age);
	
    let result = (age < 18) ? `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!` : `Не желаете ли олд-фэшн, ${name}?`;
	
    console.log(result);
	
    return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
	
    let averageMark = 0;
    let sumMarks = 0;
    const numberOfValues = 5;
	
    if (marks.length > numberOfValues) {
	    console.log(`Количество введенных оценок ${marks.length}!`);
	    marks = marks.slice(0,numberOfValues);
    }
	
    for(let i = 0; i < marks.length; i++) {
            sumMarks += marks[i];
    }
	
    averageMark = sumMarks / marks.length;
	
    return averageMark;
}
