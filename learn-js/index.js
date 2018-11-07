// При помощи цикла for выведите чётные числа от a до 100.

function OutputEvenNumbersFor(){
    var  a = prompt('Введите число от которого выводяться четные числа');
    for (a; a <= 100; a++) {
        if (a % 2 === 0) {
            alert( a );
        }
    }
}

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.


// for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }

function RewriteForOnWhile(){
    var i = 0;
    while (i < 3) {
        alert( "номер " + i + "!" );
        i++;
    }
}
//
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
//
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC).
//
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

function RepeatIfinputIsIncorrect(){
    var number;

    do {
        number = prompt("Введите число больше 100");
    } while (number <= 100 && number != null);
}

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
//
// Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
//
// Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
//
// P.S. Код также должен легко модифицироваться для любых других интервалов.

// function NaturalNumber(){
//   nextNumber:
//   for (var a = 2; a <= 10; a++) {
//
//     for (var b = 2; b < a; b++) {
//       if (a % b == 0) continue nextNumber;
//     }
//
//     alert( a ); // простое
//   }
// }


// Напишите if..else, соответствующий следующему switch:
function SwitchIfElse() {
    var browser = prompt('Введите название браузера');
    if(browser == 'IE') {
        alert('О, да у вас '+ browser);
    } else if (browser == 'Chrome'
        || browser == 'Firefox'
        || browser == 'Safari'
        || browser == 'Opera') {
        alert('Да, и ' + browser + 'мы поддерживаем');
    } else {
        alert('Мы надеемся, что и в вашем браузере все ок!');
    }
}

// Переписать if'ы в switch
function IfElseSwitch() {
    var a = +prompt('a?', '');
    switch (a) {
        case 0:
            alert( 0 );
            break;

        case 1:
            alert( 1 );
            break;

        case 2:
        case 3:
            alert( '2,3' );
            break;
    }
}


// Перепишите функцию, используя оператор '?' или '||'

// оператор '?'
function chekAgeFirst(age) {
    return(age < 18) ? true : confirm('Родители разрешили?');
}


// оператор ||

function chekAgeSecond(age) {
    return (age< 18) || confirm ('родители разрешили?')
}
// Сравнение чисел РАБОТАЕТ ТОЛЬКО В КОНСОЛИ
function minNum(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}


// функция pow(x,n) возведение x в n-степень

var x = prompt("Введите число", "");
var n = prompt("Введите степень", "");
if (n < 0) {
    alert('Степень ' + n + ' не используется, нужна степень больше нуля');
} else {
    alert(pow(x, n));
}

function pow(x, n) {
    var result = 1;
    for (var i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}