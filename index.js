let n = Math.floor(Math.random() * 1000);
console.log('Загадано число - ', n);
    
while (true) {
    let numberFromUser = prompt('Введите число от 0 до 999');
    console.log('Введено число - ', +numberFromUser);

    if (numberFromUser == 'q') {
        alert('До скорых встреч!');
        break;
    } else if (+numberFromUser === n) {
        alert('Вы угадали!');
        break;
    }

    if (isNaN(numberFromUser)){
        alert('Вы ввели не число!')
    } else if (numberFromUser - n > 0) {
        alert ('Загаданное число меньше Вашего числа!')
    } else if (numberFromUser - n < 0) {
        alert ('Загаданное число больше Вашего числа!')
    } 
}