function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
    let now = +new Date;
    //console.log(now);
    let dateOfBirth = +new Date(birthday);
    //console.log(dateOfBirth);
    let diff = now - dateOfBirth;
    let age = diff/31471200000;
    //console.log(age);
    if (age >= 18) {
	    return age;
    }
}

function initPrintAnimalSound() {
    const animal = {
	    sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
    const sound = animal.sound;
    if (animal == undefined){
	    return null
    } else {
	    return sound
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
	    const marks = document.getElementById('learner-' + idx).value.split(',');
	    const average = getAverageMark(marks);
	    document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
    let average = 0;
    for (let i in marks) {
    //console.log(marks[i])
	    average += marks[i];
    }
    let roundedAverage = average/marks.length;
    return roundedAverage;
}
