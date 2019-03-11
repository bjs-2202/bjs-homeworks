function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    // код для задачи №1 писать здесь
	
	const newDate = new Date();
    const data = new Date(date);
    const month = new Date((data.getFullYear() - newDate.getFullYear()) * 12 + (data.getMonth() + 1) - (newDate.getMonth() + 1));
  
    const monthlyInterestRate = (percent / 12) / 100;
    const monthlyFee = amount * (monthlyInterestRate + monthlyInterestRate / ((Math.pow((1 + monthlyInterestRate), month) - 1)));
    const totalAmount = monthlyFee * month + amount - contribution;
    //console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
	
	let newUser = name;
	
	//console.log(typeof(parseInt(name)));
	
	if (newUser === 'undefined' || newUser === 'null' || newUser === '') {
		newUser = 'Аноним';
	}
	
	let greeting = `Привет, мир! Меня зовут ${newUser}`;
	
    return greeting;
}