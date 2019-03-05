//1 Найти минимальный элемент массива0

function minInArr(arr) {
    // return Math.min.apply(null,arr);
    if (arr.length == 0) {
        return 'empty array';
    }

    if (arr.length == 0) {
        return 'only 1 element';
    }    
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        continue;
    }
    return min;
}
//*******************************************
//2 Найти максимальный элемент массива

function maxInArr(arr) {
    if (arr.length == 0) return 'empty array';
    if (arr.length == 0) return 'only 1 element';
    //return Math.max.apply(null,arr);
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        continue;
    }

    return max;
}
//*******************************************
// 3 Найти индекс минимального элемента массива

function minInArrInd(arr) {
    //  return  arr.indexOf(Math.min.apply(null,arr));
    if (arr.length == 0) {
        return 'empty array';
    }
    if (arr.length == 0) return 'only 1 element';
    var min = arr[0];
    ind = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            ind = i;
        }
        continue;
    }
    return ind;
}
// console.log(minInArrInd([1,7,21,-5,2,-12]));
//*******************************************
// 4 Найти индекс максимального элемента массива


function maxInArrInd(arr) {
    // return  arr.indexOf(Math.max.apply(null,arr));
    if (arr.length == 0) {
        return 'empty array';
    }
        
    if (arr.length == 0) {
        return 'only 1 element';
    }
        
    var max = arr[0];
    ind = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            ind = i;
        }
        continue;
    }
    return ind;
}
//*******************************************
// 5 Посчитать сумму элементов массива с нечетными индексами

function arrSumma(arr) {
    if (arr.length == 0) {
        return 'empty array';
    }
        
    var summ = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) continue;
        summ += arr[i];
    }
    return summ;
}
//*******************************************
// 6 Сделать реверс массива (массив в обратном направлении) 

function reverseInArr(arr) {
    var reverceArr = [];
    for (var i = 0; i <= arr.length - 1; i++) {
        reverceArr[i] = arr[arr.length - 1 - i];
    }
    return reverceArr;
}
//*******************************************
// 7 Посчитать количество нечетных элементов массива

function arrSummaOdd(arr) {
    var summ = 0;
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) == 0) {
            continue;
        }  else {
           ++summ;
           }
    }
    return summ;
}
//*******************************************
// 8 Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2

function arrChange(arr) {

    if (arr.length == 0) {
        return 'empty array';
    }    
    if (arr.length == 1) {
        return arr;
    }    
    let midleIndex;
    var newArr, newArr1, newArr2;
    if (arr.length % 2 == 0) {
        newArr1 = arr.slice(arr.length / 2);
        newArr2 = arr.slice(0, arr.length / 2);
        newArr = newArr1.concat(newArr2);
        return newArr;
    }
    else {
        midleIndex = (arr.length + 1) / 2 - 1;
        newArr1 = arr.slice(arr.length / 2 + 1);
        newArr2 = arr.slice(0, arr.length / 2);
        newArr = newArr1.concat(arr[midleIndex], newArr2);
        return newArr;
    }
};
//*******************************************
// 9 Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

function sortBubble(arr) {
    var n = arr.length;
    for (var i = 0;i < n - 1;i++) {
        for (var j = 0;j < n - 1 - i; j++) {
            if (arr[j + 1] < arr[j]) {
                var temp = arr[j + 1];
                arr[j + 1] =arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
//*******************************************
//выбором (Select)

function sortSelection(arr) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        var min = i;
        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        var temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;    
}
//*******************************************
// вставками (Insert)

function sortInsertion(arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        var temp = arr[i], j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}
//*******************************************
// 10  Отсортировать массив (Quick, Merge, Shell, Heap)
// Shell

function sortShell(arr) {
    var n = arr.length, i = Math.floor(n / 2);
    while (i > 0) {
        for (var j = 0; j < n; j++) {
            var k = j, t = arr[j];
            while (k >= i && arr[k - i] > t) {
                arr[k] = arr[k - i];
                k -= i;
            }
            arr[k] = t;
        }
        i = (i == 2) ? 1 : Math.floor(i * 5 / 11);
    }
    return arr;
}
//*******************************************
// Heap

function sortHeap(arr) {
    if (arr.length == 0) return [];
    var n = arr.length, i = Math.floor(n / 2), j, k, t;
    while (true) {
        if (i > 0) t = arr[--i];
        else {
            n--;
            if (n == 0) return arr;
            t = arr[n];
            arr[n] = arr[0];
        }
        j = i;
        k = j*2+1;
        while (k < n) {
            if (k + 1 < n && arr[k + 1] > arr[k]) k++;
            if (arr[k] > t) {
                arr[j] = arr[k];
                j = k;
                k = j*2+1;
            }
            else break;
        }
        arr[j] = t;
    }
}
//*******************************************
// Quick

function sortQuick(arr) {
    if (arr.length == 0) return [];
    var a = [], b = [], p = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < p) a[a.length] = arr[i];
        else b[b.length] = arr[i];
    }
    return sortQuick(a).concat(p, sortQuick(b));
}
//*******************************************
// 1 Если а – четное посчитать а*б, иначе а+б

function calc(a, b) {
    // if (a%2==0)
    //        return `а четное a=${a} b=${b}     a*b=${a*b}`;
    //        else return `а нечетное a=${a}  b=${b}    a+b=${a+b}`;
    return (a % 2 == 0) ? a * b : a + b;
}
//*******************************************
// 2 Определить какой четверти принадлежит точка с координатами (х,у)

function coord(x, y) {
    if (x == 0 || y == 0) return 'точка лежит на оси'
    if (x > 0) {
        if (y > 0) return 'первая четверть';
        else return 'четвертая четверть';
    } else {
        if (y > 0) return 'вторая четверть';
        else return 'третья четверть';
    }
}
//*******************************************
// 3 Найти суммы только положительных из трех чисел

function summPositive(a, b, c) {
    let arr = [];
    if (a > 0) arr.push(a);
    if (b > 0) arr.push(b);
    if (c > 0) arr.push(c);
    if (arr.length == 2) { 
        return  arr[0] + arr[1];
               
    }
               
    if (arr.length == 1) {
        return arr[0];
    }    
    if (arr.length == 3) {
        return `${
            arr[0] + arr[1]} ${arr[0] + arr[2]} ${arr[1] + arr[2]
        }`;

        return "положительных чисел нет";
    }
}
//*******************************************
// 4 Посчитать выражение макс(а*б*с, а+б+с)+3

function maxValue(a, b, c) {
    return Math.max(a * b * c, a + b + c) + 3
}
//*******************************************
// 5  Написать программу определения оценки студента по его рейтингу,
// на основе следующих правил
//Рейтинг  Оценка
//0-19      F
//20-39     E
//40-59     D
//60-74     C
//75-89     B
//90-100    A

function rating(item) {

    switch (true) {
        case (item < 20) :
            return 'F';
        case (item < 40) :
            return 'E';
        case (item < 60) :
            return 'D';
        case (item < 75) :
            return 'C';
        case (item < 90) :
            return 'B';
        case (item < 101) :
            return 'A';
    }

}
//*******************************************
// 1 Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function summaDiapaz() {
    var count = 0;
    var summ = 0;
    for (let i = 1; i < 100; ++i) {

        if (i % 2 == 0) {
            count++;
            summ += i
        }
        continue;
    }
    return (`count = ${count}    summ=${summ}`);
}

//*******************************************
// 2 Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function simple(a) {
    for (var i = 2; i < a; i++) {
        if (a % i == 0) return 'не простое число'
        continue;
    }
    return 'число простое';

};
//*******************************************
// 3 Найти корень натурального числа с точностью до целого 
function sq(a) {
    return Math.round(Math.sqrt(a));
}

//*******************************************
// 4 Вычислить факториал числа n. n! = 1*2*…*n-1*n;!

function factorial(a) {
    return (a != 1) ? a * factorial(a - 1) : 1;
}
//*******************************************
// 5  Посчитать сумму цифр заданного числа

function digitSumma(a) {
    let txt = String(a);
    let arr = txt.split('');
    return arr.reduce(function (result, number) {
        return result + +number;
    }, 0)
}

//*******************************************
// 6 Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

function digitRev(a) {
    let txt = String(a);
    let arr = txt.split('');
    return arr.reverse().join('');

}

//*******************************************
// 1 Получить строковое название дня недели по номеру дня. 

function dayOfNumber(a) {
    if (a > 0 && a < 8)
        switch (a) {
            case 1:
                return 'понедельник';
                break;
            case 2:
                return 'вторник';
                break;
            case 3:
                return 'среда';
                break;
            case 4:
                return 'чеверг';
                break;
            case 5:
                return 'пятница';
                break;
            case 6:
                return 'суббота';
                break;
            case 7:
                return 'воскресение';
                break;
        }
    else return `не корректное число`
};


//*******************************************
// 2 Найти расстояние между двумя точками в двухмерном декартовом пространстве.

function decart(x1, y1, x2, y2) {
    let katet1, katet2;
    if (x1 == x2) return Math.abs(y1 - y2);
    else if (y1 == y2) return Math.abs(x1 - x2);
    else {
        katet1 = Math.abs(y1 - y2);
        katet2 = Math.abs(x1 - x2);
        return Math.sqrt(Math.pow(katet1, 2) + Math.pow(katet2, 2));
    }

}


//*******************************************
// Перевод числа в текстовое представление

function convertTowords3Digit(number) {
    var fullString1, fullString2, fullString3 = '';
    var stringFromNumber, words = ['0', '0', '0'];
        stringFromNumber = '' + number;

        for (var i = 0; i <= stringFromNumber.length; i++) {
            words[3 - i] = (stringFromNumber[stringFromNumber.length - i  ]);
        }

    words.length = words.length - 1;

    switch (words[0]) {
        case '9':
            fullString1 = "девятсот ";
            break;
        case '8':
            fullString1 = "восемсот ";
            break;
        case '7':
            fullString1 = "семсот ";
            break;
        case '6':
            fullString1 = "шестьсот ";
            break;
        case '5':
            fullString1 = "пятьсот ";
            break;
        case '4':
            fullString1 = "четыреста ";
            break;
        case '3':
            fullString1 = "триста ";
            break;
        case '2':
            fullString1 = "двести ";
            break;
        case '1':
            fullString1 = "сто ";
            break;
        case '0':
            fullString1 = "";
            break;

    }
    switch (words[1]) {
        case '9':
            fullString2 = "девяносто ";
            break;
        case '8':
            fullString2 = "восемьдесят ";
            break;
        case '7':
            fullString2 = "семьдесят ";
            break;
        case '6':
            fullString2 = "шестьдесят ";
            break;
        case '5':
            fullString2 = "пятьдесят ";
            break;
        case '4':
            fullString2 = "сорок ";
            break;
        case '3':
            fullString2 = "тридцать ";
            break;
        case '2':
            fullString2 = "двадцать ";
            break;
        case '1':
            fullString2 = "один ";
            break;
        case '0':
            fullString2 = "";
            break;

    }
    switch (words[2]) {
        case '9':
            fullString3 = "девять";
            break;
        case '8':
            fullString3 = "восемь";
            break;
        case '7':
            fullString3 = "семь";
            break;
        case '6':
            fullString3 = "шесть";
            break;
        case '5':
            fullString3 = "пять";
            break;
        case '4':
            fullString3 = "четыре";
            break;
        case '3':
            fullString3 = "три";
            break;
        case '2':
            fullString3 = "два";
            break;
        case '1':
            fullString3 = "один";
            break;
        case '0':
            fullString3 = "";
            break;

    }

    if (words[1] == '1') {
        switch (words[2]) {
            case '9':
                fullString2 = 'девятнадцать';
                fullString3 = '';
                break;
            case '8':
                fullString2 = 'восемьнадцать';
                fullString3 = '';
                break;
            case '7':
                fullString2 = 'семьнадцать';
                fullString3 = '';
                break;
            case '6':
                fullString2 = 'шестьнадцать';
                fullString3 = '';
                break;
            case '5':
                fullString2 = 'пятнадцать';
                fullString3 = '';
                break;
            case '4':
                fullString2 = 'четырнадцать';
                fullString3 = '';
                break;
            case '3':
                fullString2 = 'тринадцать';
                fullString3 = '';
                break;
            case '2':
                fullString2 = 'двенадцать';
                fullString3 = '';
                break;
            case '1':
                fullString2 = 'одинадцать';
                fullString3 = '';
                break;
            case '0':
                fullString2 = 'десять';
                fullString3 = '';
                break;
        }
    }

        if (words[2] == 0 && words[1] == 0 && words[0] == 0) {

            fullString3 = 'нуль';

        }    

    return fullString1 + fullString2 + fullString3;
}

function transformNumberToWord(longNumber) {
    var fullString = '', stringFromLongNumber = '' + longNumber;
    console.log(stringFromLongNumber);
    var arrFromStringLongNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (var i = 1; i <= stringFromLongNumber.length; i++) {

        arrFromStringLongNumber[12 - i] = stringFromLongNumber[stringFromLongNumber.length - i];

    }

    var miliard = [
                    arrFromStringLongNumber[0],
                    arrFromStringLongNumber[1],
                    arrFromStringLongNumber[2]
                  ];
        miliard = +miliard.join('');
    var rightMiliard = "  миллиардов";
    var fromWord3Digit = convertTowords3Digit(miliard);
    if (arrFromStringLongNumber[0] == 0 && arrFromStringLongNumber[1] == 0 && arrFromStringLongNumber[2] == 0) {
        rightMiliard = '';
        fromWord3Digit = '';
    }

    switch (arrFromStringLongNumber[2]) {
        case '1':
            rightMiliard = ' миллиард';
            break;
        case '2':
            rightMiliard = ' миллиарда';
            break;
        case '3':
            rightMiliard = ' миллиарда';
            break;
        case '4':
            rightMiliard = ' миллиарда';
            break;
    }

    if (arrFromStringLongNumber[1] == 1) {
        rightMiliard = ' миллиардов';
    }

    fullString = fullString +  fromWord3Digit + rightMiliard;
    var milion = [
                    arrFromStringLongNumber[3],
                    arrFromStringLongNumber[4],
                    arrFromStringLongNumber[5]
                 ];

    milion = +milion.join('');
    var rightMilion = " миллионов";
    fromWord3Digit = convertTowords3Digit(milion);
    if (arrFromStringLongNumber[3] == 0 && arrFromStringLongNumber[4] == 0 && arrFromStringLongNumber[5] == 0) {
        fromWord3Digit = '';
        rightMilion = '';
    }

    switch (arrFromStringLongNumber[5]) {
        case '1':
            rightMilion = ' миллион';
            break;
        case '2':
            rightMilion = ' миллиона';
            break;
        case '3':
            rightMilion = ' миллиона';
            break;
        case '4':
            rightMilion = ' миллиона';
            break;
    }

    if (arrFromStringLongNumber[4] == 1) {
        rightMilion = 'миллионов';
    }

    fullString = fullString +' '+ fromWord3Digit + rightMilion;
    var thousands = [
                        arrFromStringLongNumber[6],
                        arrFromStringLongNumber[7],
                        arrFromStringLongNumber[8]
                    ];
    thousands = +thousands.join('');
    var rightThousands = "  тысяч";
    fromWord3Digit = convertTowords3Digit(thousands);
    if (arrFromStringLongNumber[6] == 0 && arrFromStringLongNumber[7] == 0 && arrFromStringLongNumber[8] == 0) {
        fromWord3Digit = '';
        rightThousands = '';
    }

    switch (arrFromStringLongNumber[8]) {
        case '1':
            rightThousands = ' тысяча';
            break;
        case '2':
            rightThousands = ' тысячи';
            break;
        case '3':
            rightThousands = ' тысячи';
            break;
        case '4':
            rightThousands = ' тысячи';
            break;
    }

    if (arrFromStringLongNumber[7] == 1) {
        rightThousands = ' тысяч';
    }

    fullString = fullString +''+ fromWord3Digit + rightThousands;

    var decad = [
                    arrFromStringLongNumber[9],
                    arrFromStringLongNumber[10],
                    arrFromStringLongNumber[11]
                ];

    decad = +decad.join('');
    fromWord3Digit = convertTowords3Digit(decad);
    fullString = fullString +' '+ fromWord3Digit;
    return fullString.trim();
}

// console.log(transformNumberToWord(94094512));
//************************************************************* */
// перевод текстового представления числа в цифровое

function searchWorldInElement(world) {
    switch (world) {
        case 'девятьсот':
            return 900;
        case 'восемьсот':
            return 800;
        case 'семьсот':
            return 700;
        case 'шестьсот':
            return 600;
        case 'пятьсот':
            return 500;
        case 'четыреста':
            return 400;
        case 'триста':
            return 300;
        case 'двести':
            return 200;
        case 'сто':
            return 100;
        case 'одинадцать':
            return 11;
        case 'двенадцать':
            return 12;
        case 'тринадцать':
            return 13;
        case 'четырнадцать':
            return 14;
        case 'пятьнадцать':
            return 15;
        case 'шестьнадцать':
            return 1
        case 'семьнадцать':
            return 17;
        case 'восемьнадцать':
            return 18;
        case 'девятнадцать':
            return 19;
        case 'двадцать':
            return 20;
        case 'тридцать':
            return 30;
        case 'сорок':
            return 40;
        case 'пятьдесят':
            return 50;
        case 'шестьдесят':
            return 60;
        case 'семьдесят':
            return 70;
        case 'восемьдесят':
            return 80;
        case 'девяносто':
            return 90;
        case 'один':
            return 1;
        case 'одна':
            return 1;
        case 'два':
            return 2;
        case 'две':
            return 2;
        case 'три':
            return 3;
        case 'четыре':
            return 4;
        case 'пять':
            return 5;
        case 'шесть':
            return 6;
        case 'семь':
            return 7;
        case 'восемь':
            return 8;
        case 'девять':
            return 9;
        case 'десять':
            return 10;

    }
}

function convertToNumber(arr) {
    var localSumm = 0;
    for (var i = 0; i < arr.length; i++) {
        localSumm = localSumm + searchWorldInElement(arr[i]);
    }
    return localSumm;
}

function mainCovertToDigit( phrase ){ 
            phrase = phrase.trim();
            phrase = phrase.replace(/\s+/g, " ");
            var wordInArr = phrase.split(' ');
            var globalSumm = 0;
            var summ = 1000000000 * convertToNumber(findBlock('миллиард'));
            globalSumm = globalSumm + summ;
            summ = 1000000 * convertToNumber(findBlock('миллион'));
            globalSumm = globalSumm + summ;
            summ = 1000 * convertToNumber(findBlock('тысяч'));
            globalSumm = globalSumm + summ;
            summ = convertToNumber(wordInArr);
            globalSumm = globalSumm + summ;
            console.log(globalSumm);
            return globalSumm; 

        function findBlock( block ) {
            for ( var i = 0; i < wordInArr.length; i++ ) {

                var stringFromElemArr = wordInArr[i];
                var resultSearch = stringFromElemArr.indexOf( block );
                if ( resultSearch !== -1 ) {
                    var edited = wordInArr.splice( 0, i );
                    wordInArr.shift();
                        return edited;
                } else {
                    continue;
                  }
            }

            return 0;
        }
}

// linkedList
//******************************************
function Node(value, next, prev) {
    this.value = value;
    this.next = next;    
    this.prev = prev;
}

function LList0() {
    this.root = null;
    this.last = null;
    this.length = 0;


    this.unshift = function (value) {
        var e = new Node(value, this.root, null)
        if(this.root) {
            this.root.prev = e;
            this.length++;

        } else {
            this.last = e;
            this.length++;

          }
        this.root = e;
    }

    this.shift = function () {
        
        if(this.root) {
            if (this.root.next == null) {
                this.root = null;
                this.last = null;
                return;
            }    
            this.root = this.root.next;
            this.root.prev = null;
            this.length--;

        } else {
            console.log('удаление из пустого списка');
        }
        
    } 

    this.push = function (value) {
        var e = new Node(value, null)
        if(this.last) {
            e.prev = this.last;
            this.last.next = e;
            this.length++;

        }  else {
            this.last = e;
            this.length++;

           }
        this.last = e;
    }

    this.pop = function () {
        
        if(this.last) {
            if (this.root.next == null) {
                this.root = null;
                this.last = null;
                return;
            }

            this.last.prev.next = null;
            this.length--;
        }  else {
                console.log('удаление из пустого списка');
                return;
           }
        this.last = this.last.prev;
    }


 
    this.some = function(colback){
        
        let current = this.root;
        
        while (current != null) {
            if (colback(current.value) ) {
                return  true;
            }  else {
                   current = current.next;
               }   
        }

        return false;   

    }

    this.every = function(colback){
            
            let current = this.root;
            let tempFlag = true;

            while (current != null){
                if  ( !colback(current.value) ) {
               
                    tempFlag = false;
                    return tempFlag;
                }
                current = current.next;
            }
            return tempFlag;   
    }



    this.isLinkedList = function(){
        return true;
    }

    this.remove = function(index){
        var i = 1;
        let current = this.root;
        let prevDel = null;

        while( i < index - 1 ){
            current = current.next;
            i++;
        }
        prevDel = current;
        current = current.next;
        prevDel.next = current.next;
        current = current.next;
        current.prev = prevDel;
        this.length--;
    }
}

//функция копирования объекта
//******************************************
function copyObject(obj){
    var newArr = {};
    for (key in obj){
        newArr[key] = obj[key];
    }
    return newArr;
}
//ArrayList
//******************************************
function Alist(arr){

        this.arr=[];
        this.length = 0;
        if (arr) {
            this.arr=[arr];
            ++this.length;    
        }
        

        this.push = function(item){
            this.arr[this.length]=item;
            ++this.length;
        }

        this.pop = function (){
            var tempArr = this.arr[this.length-1];
            --this.length;
            this.arr.length = this.length;
            return tempArr;
        }

        this.shift = function(){
            var tempArr = [];

                for (var i = 0; i < this.length ; i++){
                    var tempArr = this.arr[ 0 ];
                    this.arr[ i ] = this.arr[ i + 1 ];
                }
                      
            this.length--; 
            this.arr.length = this.length;
            return tempArr;
        }

        this.unshift = function(item){
            for (var i = 0; i < this.length ; i++){
                this.arr[ this.length - i ] = this.arr[this.length - 1 - i];
            }
            
            this.arr[0] = item;
            this.length++; 
        }

        this.remove = function(index){
            let removedValue = this.arr[index];
            let tempArr =[];    

            for ( let i = index + 1 ; i <  this.length; ++ i ){
                 tempArr.push( this.arr[ i ] ) ;
            }
            
            this.length = index;
            this.arr.length = this.length;

            for ( let i = 0 ; i < tempArr.length ; ++ i ){
                this.arr.push(tempArr[i]);
                ++this.length;
            }
            this.length = this.arr.length;

          return removedValue;
        }

        this.some = function (colback){
                for ( let i = 0; i < this.length; ++i  ){
                    if (colback(this.arr[i])) 
                    return true;
                }
             return false;   
        }

        this.every = function (colback){
            let tempFlag = true;

            for ( let i = 0; i < this.length; ++i  ){
                if  ( !colback( this.arr[i] ) ) {
                    tempFlag = false;
                    return tempFlag;
                }
            }

           return tempFlag;   
        }

        this.splice =  function(index, forDel) {
                if (!forDel) forDel = this.length - index;
                    let removeArr = [];
                    for(let i = index ; i < index + forDel ; ++i  ){
                        removeArr.push(this.arr[i]);
                    }

                    for(let y = i = index ; i < index + forDel ; ++i  ){
                        this.remove(y);
                    }
                
                    if (arguments.length > 2) {
                        let firstPart = [];
                        let lastPart = [];

                        for(  let i = 0 ; i < index ; i++  ){
                            firstPart.push(this.arr[i]);
                        }
                    
                        for ( let i = index ; i < this.length ; i++ ){
                            lastPart.push(this.arr[i]);
                        }
                    
                        for (let i = 2 ; i < arguments.length; ++i ){
                            firstPart.push(arguments[i]); 
                        }    

                        for( let i = 0 ; i < lastPart.length ; ++i  ){
                            firstPart.push(lastPart[i]);
                        }

                        for (let i = 0 ; i < firstPart.length  ; ++i ){
                            this.arr[i] = firstPart[i] ;
                        }
                    }
        }
        this.isArray = function(){
            return true;
        }
}



