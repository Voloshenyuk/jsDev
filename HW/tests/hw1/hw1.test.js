describe('multiplyOrSum', function () {
    let arrData = [
        {discriber: 'a+b', a: 1, b: 2, expected: 3},
        {discriber: 'a*b', a: 2, b: 3, expected: 6}
    ]

    arrData.forEach(data => {
        const {
                discriber, a, b, expected
            } = data;
        it(`${discriber}`, function () {

            const actual = multiplyOrSum(a, b);
            assert.equal(actual, expected);
        });
    });
//    it('should return a + b', function () {
//       const a = 1;
//       const b = 2;
//       const expected = 3;

//       const actual = multiplyOrSum(a, b);

//        assert.equal(actual, expected);
//    });

//    it('should return a * b', function () {
//        const a = 2;
//        const b = 3;
//        const expected = 6;

//        const actual = multiplyOrSum(a, b);

//        assert.equal(actual, expected);
//    })
});


describe('minInArr', function () {
    let arrData = [
        {discriber: 'empty array ', arr: [], expected: 'empty array'},
        {discriber: 'array with 1 element', arr: [1], expected: 1},
        {discriber: 'array with 3 element', arr: [2.6, -15, 20], expected: -15},
        {discriber: 'array with 4 element', arr: [2.6, 3, 20, 2], expected: 2}
    ]

    arrData.forEach(data => {
        const {discriber, arr, expected} = data;
        it(`${discriber}`, function () {
            const actual = minInArr(arr);
            assert.equal(actual, expected);
        });
    });

});

describe('maxInArr', function () {
    let arrData = [
        {discriber: 'empty array ', arr: [], expected: 'empty array'},
        {discriber: 'array with 1 element', arr: [1], expected: 1},
        {discriber: 'array with 3 element', arr: [2.6, -15, 20], expected: 20},
        {discriber: 'array with 4 element', arr: [2.6, 3, 30, 2], expected: 30}
    ]

    arrData.forEach(data => {
        const {discriber, arr, expected} = data;

        it(`${discriber}`, function () {
            const actual = maxInArr(arr);
            assert.equal(actual, expected);
        });
    });
});

describe('minInArrInd', function () {
    let arrData = [
        {discriber: 'empty array ', arr: [], expected: 'empty array'},
        {discriber: 'array with 1 element', arr: [1], expected: 0},
        {discriber: 'array with 3 element', arr: [2.6, -15, 20], expected: 1},
        {discriber: 'array with 4 element', arr: [2.6, 3, 30, 2], expected: 3}
    ]

    arrData.forEach(data => {
        const {discriber, arr, expected} = data;

        it(`${discriber}`, function () {
            const actual = minInArrInd(arr);
            assert.equal(actual, expected);
        });
    });
});


describe('maxInArrInd', function () {
    let arrData = [
        {discriber: 'empty array ', arr: [], expected: 'empty array'},
        {discriber: 'array with 1 element', arr: [1], expected: 0},
        {discriber: 'array with 3 element', arr: [2.6, -15, 20], expected: 2},
        {discriber: 'array with 4 element', arr: [2.6, 3, 30, 2], expected: 2}
    ]

    arrData.forEach(data => {
        const {discriber, arr, expected} = data;
        it(`${discriber}`, function () {
            const actual = maxInArrInd(arr);
            assert.equal(actual, expected);
        });
    });
});


describe('arrSumma', function () {
    let arrData = [
        {discriber: 'empty array ', arr: [], expected: 'empty array'},
        {discriber: 'array with 1 element', arr: [1], expected: 0},
        {discriber: 'array with 6 element', arr: [2.6, -15, 20, 34, -12, 56], expected: 75},
        {discriber: 'array with 8 element', arr: [2.6, -15, 20, 34, -12, 56, 3, -5], expected: 70}
    ]

    arrData.forEach(data => {
        const {discriber, arr, expected} = data;
        it(`${discriber}`, function () {
            const actual = arrSumma(arr);
            assert.equal(actual, expected);
        });
    });
});


describe('reverseInArr', function () {
    let arrData = [
        {discriber: 'empty array ', arr: [], expected: []},
        {discriber: 'array with 1 element', arr: [1], expected: [1]},
        {discriber: 'array with 6 element', arr: [2.6, -15, 20, 34, -12, 56], expected: [56, -12, 34, 20, -15, 2.6]},
        {discriber: 'array with 8 element', arr: [2.6, -15, 20, 34, -12, 56, 3, -5], expected: [-5, 3, 56, -12, 34, 20, -15, 2.6]}
    ]
        arrData.forEach(data => {
        const {discriber, arr, expected} = data;
        it(`${discriber}`, function () {
            const actual = reverseInArr(arr);
            assert.deepEqual(actual, expected);
        });
    });
});


describe('arrSummaOdd', function () {
    let arrData = [
        {discriber: 'empty array ', arr: [], expected: []},
        {discriber: 'array with 1 element', arr: [1], expected: [1]},
        {discriber: 'array with 6 element', arr: [2, 15, 20, 10, 12, 56], expected: 1},
        {discriber: 'array with 8 element', arr: [6, 17, 21, 34, 12, 57, 3, -5], expected: 5}
    ]
        arrData.forEach(data => {
        const {discriber, arr, expected} = data;
        it(`${discriber}`, function () {
            const actual = arrSummaOdd(arr);
            assert.equal(actual, expected);
        });
    });
});


describe('arrChange', function () {
    let arrData = [
        {discriber: 'empty array ', arr: [], expected: 'empty array'},
        {discriber: 'array with 1 element', arr: [1], expected: [1]},
        {discriber: 'array with 6 element', arr: [2, 15, 20, 10, 12, 56], expected: [10, 12, 56, 2, 15, 20]},
        {discriber: 'array with 7 element', arr: [6, 17, 21, 34, 12, 57, 3], expected: [12, 57, 3, 34, 6, 17, 21]}
    ]
        arrData.forEach(data => {
        const {discriber, arr, expected} = data;
        it(`${discriber}`, function () {
            const actual = arrChange(arr);
            assert.deepEqual(actual, expected);
        });
    });
});

describe('sortBubble', function () {
    let arrData = [
        {discriber: 'empty array ', arr: [], expected: []},
        {discriber: 'array with 1 element', arr: [1], expected: [1]},
        {discriber: 'array with 6 element', arr: [2, 15, 20, 10, 12, 56], expected: [2, 10, 12, 15, 20, 56]},
        {discriber: 'array with 7 element', arr: [6, 17, 21, 34, 12, 57, 3], expected: [3, 6, 12, 17, 21, 34, 57]}
    ]
        arrData.forEach(data => {
        const {discriber, arr, expected} = data;
        it(`${discriber}`, function () {
            const actual = sortBubble(arr);
            assert.deepEqual(actual, expected);
        });
    });
});

describe('sortSelection', function () {
    let arrData = [
        {discriber: 'empty array ', arr: [], expected: []},
        {discriber: 'array with 1 element', arr: [1], expected: [1]},
        {discriber: 'array with 6 element', arr: [2, 15, 20, 10, 12, 56], expected: [2, 10, 12, 15, 20, 56]},
        {discriber: 'array with 7 element', arr: [6, 17, 21, 34, 12, 57, 3], expected: [3, 6, 12, 17, 21, 34, 57]}
    ]
        arrData.forEach(data => {
        const {discriber, arr, expected} = data;
        it(`${discriber}`, function () {
            const actual = sortSelection(arr);
            assert.deepEqual(actual, expected);
        });
    });
});


describe('sortShell', function () {
    let arrData = [
        {discriber: 'empty array ', arr: [], expected: []},
        {discriber: 'array with 1 element', arr: [1], expected: [1]},
        {discriber: 'array with 6 element', arr: [2, 15, 20, 10, 12, 56], expected: [2, 10, 12, 15, 20, 56]},
        {discriber: 'array with 7 element', arr: [6, 17, 21, 34, 12, 57, 3], expected: [3, 6, 12, 17, 21, 34, 57]}
    ]
        arrData.forEach(data => {
        const {discriber, arr, expected} = data;
        it(`${discriber}`, function () {
            const actual = sortShell(arr);
            assert.deepEqual(actual, expected);
        });
    });
});


describe('sortHeap', function () {
    let arrData = [
        {discriber: 'empty array ', arr: [], expected: []},
        {discriber: 'array with 1 element', arr: [1], expected: [1]},
        {discriber: 'array with 6 element', arr: [2, 15, 20, 10, 12, 56], expected: [2, 10, 12, 15, 20, 56]},
        {discriber: 'array with 7 element', arr: [6, 17, 21, 34, 12, 57, 3], expected: [3, 6, 12, 17, 21, 34, 57]}
    ]
        arrData.forEach(data => {
        const {discriber, arr, expected} = data;
        it(`${discriber}`, function () {
            const actual = sortHeap(arr);
            assert.deepEqual(actual, expected);
        });
    });
});


describe('sortQuick', function () {
    let arrData = [
        {discriber: 'empty array ', arr: [], expected: []},
        {discriber: 'array with 1 element', arr: [1], expected: [1]},
        {discriber: 'array with 6 element', arr: [2, 15, 20, 10, 12, 56], expected: [2, 10, 12, 15, 20, 56]},
        {discriber: 'array with 7 element', arr: [6, 17, 21, 34, 12, 57, 3], expected: [3, 6, 12, 17, 21, 34, 57]}
    ]
        arrData.forEach(data => {
        const {discriber, arr, expected} = data;
        it(`${discriber}`, function () {
            const actual = sortQuick(arr);
            assert.deepEqual(actual, expected);
        });
    });
});

describe('calc', function () {
    let arrData = [
        {discriber: 'a+b', a: 1, b: 2, expected: 3},
        {discriber: 'a*b', a: 2, b: 3, expected: 6}
    ]
        arrData.forEach(data => {
        const {discriber, a, b, expected} = data;
        it(`${discriber}`, function () {

            const actual = calc(a, b);
            assert.equal(actual, expected);
        });
    });
});

describe('coord', function () {
    let arrData = [
        {discriber: '1 четверть', a: 1, b: 2, expected: 'первая четверть'},
        {discriber: '2 четверть', a: -2, b: 3, expected: 'вторая четверть'},
        {discriber: '3 четверть', a: -2, b: -3, expected: 'третья четверть'},
        {discriber: '4 четверть', a: 2, b: -3, expected: 'четвертая четверть'},
        {discriber: 'на оси ', a: 0, b: 3, expected: 'точка лежит на оси'}
    ]
        arrData.forEach(data => {
        const {discriber, a, b, expected} = data;
        it(`${discriber}`, function () {

            const actual = coord(a, b);
            assert.equal(actual, expected);
        });
    });
});

describe('summPositive', function () {
    let arrData = [
        {discriber: '1 отриц', a: 1, b: 2, c: -1, expected: 3},
        {discriber: '3 полож ', a: 2, b: 3, c: 1, expected: `5 3 4`},
        {discriber: '2 отриц', a: 2, b: -3, c: -1, expected: 2}
    ]
        arrData.forEach(data => {
        const {discriber, a, b, c, expected} = data;
        it(`${discriber}`, function () {

            const actual = summPositive(a, b, c);
            assert.equal(actual, expected);
        });
    });
});


describe('maxValue', function () {
    let arrData = [
        {discriber: 'a: 1, b:2, c: -1', a: 1, b: 2, c: -1, expected: 5},
        {discriber: 'a:2, b:3, c: 1', a: 2, b: 3, c: 1, expected: 9},
        {discriber: 'a:2, b:-3, c: -1', a: 2, b: -3, c: -1, expected: 9}
    ]
        arrData.forEach(data => {
        const {discriber, a, b, c, expected} = data;
        it(`${discriber}`, function () {

            const actual = maxValue(a, b, c);
            assert.equal(actual, expected);
        });
    });
});

describe('rating', function () {
    let arrData = [
        {discriber: 'a: 18', a: 18, expected: 'F'},
        {discriber: 'a: 19', a: 19, expected: 'F'},
        {discriber: 'a: 20', a: 20, expected: 'E'},
        {discriber: 'a: 21', a: 21, expected: 'E'},
        {discriber: 'a: 38', a: 38, expected: 'E'},
        {discriber: 'a: 39', a: 39, expected: 'E'},
        {discriber: 'a: 40', a: 40, expected: 'D'},
        {discriber: 'a: 41', a: 41, expected: 'D'},
        {discriber: 'a: 58', a: 58, expected: 'D'},
        {discriber: 'a: 59', a: 59, expected: 'D'},
        {discriber: 'a: 60', a: 60, expected: 'C'},
        {discriber: 'a: 61', a: 61, expected: 'C'},
        {discriber: 'a: 74', a: 74, expected: 'C'},
        {discriber: 'a: 75', a: 75, expected: 'B'},
        {discriber: 'a: 76', a: 76, expected: 'B'},
        {discriber: 'a: 89', a: 89, expected: 'B'},
        {discriber: 'a: 90', a: 90, expected: 'A'},
        {discriber: 'a: 100', a: 100, expected: 'A'}
    ]
        arrData.forEach(data => {
        const {discriber, a, expected} = data;
        it(`${discriber}`, function () {

            const actual = rating(a);
            assert.equal(actual, expected);
        });
    });
});

describe('summaDiapaz', function () {
    let arrData = [
        {discriber: 'просто вызов функции', a: 1, b: 2, c: -1, expected: `count = 49    summ=2450`}
    ]
        arrData.forEach(data => {
        const {discriber, a, b, c, expected} = data;
        it(`${discriber}`, function () {

            const actual = summaDiapaz();
            assert.equal(actual, expected);
        });
    });
});


describe('simple', function () {
    let arrData = [
        {discriber: 'a =17 ', a: 17, b: 2, c: -1, expected: 'число простое'},
        {discriber: 'a =18', a: 18, b: 2, c: -1, expected: 'не простое число'},
        {discriber: 'a =5', a: 5, b: 2, c: -1, expected: 'число простое'}
    ]
        arrData.forEach(data => {
        const {discriber, a, b, c, expected} = data;
        it(`${discriber}`, function () {

            const actual = simple(a);
            assert.equal(actual, expected);
        });
    });
});


describe('sq', function () {
    let arrData = [
        {discriber: 'a =17 ', a: 17, b: 2, c: -1, expected: 4},
        {discriber: 'a =18', a: 18, b: 2, c: -1, expected: 4},
        {discriber: 'a =5', a: 5, b: 2, c: -1, expected: 2}
    ]
        arrData.forEach(data => {
        const {discriber, a, b, c, expected} = data;
        it(`${discriber}`, function () {

            const actual = sq(a);
            assert.equal(actual, expected);
        });
    });
});


describe('factorialsq', function () {
    let arrData = [
        {discriber: 'a =5 ', a: 5, b: 2, c: -1, expected: 120},
        {discriber: 'a =7', a: 7, b: 2, c: -1, expected: 5040},
        {discriber: 'a =3', a: 3, b: 2, c: -1, expected: 6}
    ]
        arrData.forEach(data => {
        const {discriber, a, b, c, expected} = data;
        it(`${discriber}`, function () {

            const actual = factorial(a);
            assert.equal(actual, expected);
        });
    });
});


describe('digitSumma', function () {
    let arrData = [
        {discriber: 'a =578 ', a: 578, b: 2, c: -1, expected: 20},
        {discriber: 'a =734', a: 734, b: 2, c: -1, expected: 14},
        {discriber: 'a =315', a: 315, b: 2, c: -1, expected: 9}
    ]
        arrData.forEach(data => {
        const {discriber, a, b, c, expected} = data;
        it(`${discriber}`, function () {

            const actual = digitSumma(a);
            assert.equal(actual, expected);
        });
    });
});

describe('digitRev', function () {
    let arrData = [
        {discriber: 'a =578 ', a: 578, b: 2, c: -1, expected: 875},
        {discriber: 'a =734', a: 734, b: 2, c: -1, expected: 437},
        {discriber: 'a =3151', a: 3151, b: 2, c: -1, expected: 1513}
    ]
        arrData.forEach(data => {
        const {discriber, a, b, c, expected} = data;
        it(`${discriber}`, function () {
            const actual = digitRev(a);
            assert.equal(actual, expected);
        });
    });
});


describe('dayOfNumber', function () {
    let arrData = [
        {discriber: 'a =1 ', a: 1, b: 2, c: -1, expected: "понедельник"},
        {discriber: 'a =3', a: 3, b: 2, c: -1, expected: "среда"},
        {discriber: 'a =5', a: 5, b: 2, c: -1, expected: 'пятница'}
    ]
    arrData.forEach(data => {
        const {discriber, a, b, c, expected} = data;
        it(`${discriber}`, function () {

            const actual = dayOfNumber(a);
            assert.equal(actual, expected);
        });
    });
});


describe('decart', function () {
    let arrData = [
        {discriber: 'a = 578 b= 2 c = -1 d=11', a: 578, b: 2, c: -1, d: 11, expected: 579.0699439618672},
        {discriber: 'a =  b= 2 c = -1 d=17', a: 734, b: 2, c: -1, d: 17, expected: 735.1530452905707},
        {discriber: 'a = 3151 b= 2 c = -1 d=56', a: 3151, b: 2, c: -1, d: 56, expected: 3152.4625295156166}
    ]
    arrData.forEach(data => {
        const {discriber, a, b, c, d, expected} = data;
        it(`${discriber}`, function () {

            const actual = decart(a, b, c, d);
            assert.equal(actual, expected);
        });
    });
});


describe('convertTowords3Digit', function () {
    let arrData = [
        {discriber: 'a =114 ', a: 114, expected: "сто четырнадцать"},
        {discriber: 'a =423', a: 423, expected: "четыреста двадцать три"},
        {discriber: 'a =945', a: 945, expected: 'девятсот сорок пять'}
    ]

    arrData.forEach(data => {
        const { 
                discriber,
                a,
                expected
        } = data;

        it(`${discriber}`, function () {

            const actual = convertTowords3Digit(a);
            assert.equal(actual, expected);
        });
    });
});


describe('transformNumberToWord', function () {
    let arrData = [
        {    discriber: 'a =114',
             a: 114,
             b: 2,
             c: -1,
             expected: "сто четырнадцать"
        },

        {
            discriber: 'a =423 ',
            a: 423,
            b: 2,
            c: -1,
            expected: "четыреста двадцать три"
        },

        {
            discriber: 'a =94512',
            a: 94512,
            b: 2,
            c: -1,
            expected: 'девяносто четыре тысячи пятьсот двенадцать'
        }
    ]
    arrData.forEach(data => {
        const { discriber, a, b, c, expected } = data;
        it(`${ discriber }`, function () {

            const actual = transformNumberToWord(a);
            assert.equal(actual, expected);

        });
    });
});


describe('mainCovertToDigit', function () {
    let arrData = [
        {discriber: '  четыреста двадцать один миллиард сто двадцать два миллиона сто две тысяча триста девяносто один',
         a: 'четыреста двадцать один миллиард сто двадцать два миллиона сто две тысяча триста девяносто один',
         expected: 421122102391
        },

        {discriber: 'четыреста двадцать три тысячи',
         a: 'четыреста двадцать три тысячи',
         expected: 423000
        },

        {discriber: 'сто двадцать два миллиона',
         a: 'сто двадцать два миллиона',
         expected: 122000000
        }
    ]

    arrData.forEach(data => {
        const {discriber, a, expected} = data;
        it(`${discriber}`, function () {

            const actual = mainCovertToDigit(a);
            assert.equal(actual, expected);
        });
    });
});



describe('OOP  AlistSecond Push', function () {
    //let newarr = new AlistSecond(1);
    let arrData = [
        {discriber: 'push(23) ', a: 23, expected: "1,23"},
        {discriber: 'push(3)', a: 3, expected: "1,3"},
        {discriber: 'push(5)', a: 5, expected: '1,5'}
    ]

    

    arrData.forEach(data => {
        const {discriber, a, expected} = data;
        it(`${discriber}`, function () {
            let newarr = new AlistSecond(1);
            const actual = newarr.push(a);
            assert.equal(actual, expected);
        });
    });
});


describe('OOP  AlistSecond Pop', function () {
    let arrData = [
        {discriber: 'pop() ', a: 23, b: 54, c: 234, d: 'test', e: -15, f: 'proba',  expected: 'proba'},
        {discriber: 'pop()', a: 3, b: 4, c: 24, d: 'test12', e: -5, f: '23proba', expected: '23proba'},
        {discriber: 'pop()', a: 5, b: 51, c: 224, d: 'test', e: -14, f: 'gold', expected: 'gold'}
    ]

    

    arrData.forEach(data => {
        const {discriber, a, b, c, d, e, f, expected} = data;
        it(`${discriber}`, function () {
            let newarr = new AlistSecond(1);
            newarr.push(a);
            newarr.push(b);
            newarr.push(c);
            newarr.push(d);
            newarr.push(e);
            newarr.push(f);
            const actual = newarr.pop();
            assert.equal(actual, expected);
        });
    });
});


describe('OOP  AlistSecond shift', function () {
    let arrData = [
        {discriber: 'pop() ', a: 23, b: 54, c: 234, d: 'test', e: -15, f: 'proba',  expected: 23},
        {discriber: 'pop()', a: 3, b: 4, c: 24, d: 'test12', e: -5, f: '23proba', expected: 3},
        {discriber: 'pop()', a: 5, b: 51, c: 224, d: 'test', e: -14, f: 'gold', expected: 5}
    ]

    

    arrData.forEach(data => {
        const {discriber, a, b, c, d, e, f, expected} = data;
        it(`${discriber}`, function () {
            let newarr = new AlistSecond(1);
            newarr.push(a);
            newarr.push(b);
            newarr.push(c);
            newarr.push(d);
            newarr.push(e);
            newarr.push(f);
            const actual = newarr.shift();
            assert.equal(actual, expected);
        });
    });
});


describe('OOP  AlistSecond unshift', function () {
    let arrData = [
        {discriber: 'unshift() ', a: 23, b: 54, c: 234, d: 'test', e: -15, f: 'proba',  expected: '23,1,54,234,test,-15,proba'},
        {discriber: 'unshift()', a: 3, b: 4, c: 24, d: 'test12', e: -5, f: '23proba', expected: '3,1,4,24,test12,-5,23proba'},
        {discriber: 'unshift()', a: 5, b: 51, c: 224, d: 'test', e: -14, f: 'gold', expected: '5,1,51,224,test,-14,gold'}
    ]

    

    arrData.forEach(data => {
        const {discriber, a, b, c, d, e, f, expected} = data;
        it(`${discriber}`, function () {
            let newarr = new AlistSecond(1);
            
            newarr.push(b);
            newarr.push(c);
            newarr.push(d);
            newarr.push(e);
            newarr.push(f);
            const actual = newarr.unshift(a);
            assert.equal(actual, expected);
        });
    });
});


describe('OOP  AlistSecond remove', function () {
    let arrData = [
        {discriber: 'remove() ', a: 2, b: 54, c: 234, d: 'test', e: -15, f: 'proba',  expected1: '1,54,test,-15,proba', expected: 234},
        {discriber: 'remove()', a: 3, b: 4, c: 24, d: 'test12', e: -5, f: '23proba', expected1: '1,4,24,-5,23proba', expected: 'test12'},
        {discriber: 'remove()', a: 1, b: 51, c: 224, d: 'test', e: -14, f: 'gold', expected1: '1,224,test,-14,gold', expected: 51}
    ]

    

    arrData.forEach(data => {
        const {discriber, a, b, c, d, e, f, expected1, expected }  = data;
        it(`${discriber}`, function () {
            let newarr = new AlistSecond(1);
            
            newarr.push(b);
            newarr.push(c);
            newarr.push(d);
            newarr.push(e);
            newarr.push(f);
            const actual = newarr.remove(a);
            const actual1 = newarr.toString();
            assert.equal(actual, expected);
            assert.deepEqual(actual1, expected1);
        });
    });
});



describe('OOP  AlistSecond some', function () {
    let arrData = [
        {discriber: 'some() ', a: 2, b: 54, c: 234, d: 0, e: -15, f: -15, expected: true},
        {discriber: 'some()', a: 3, b: 4, c: 24, d: 0, e: -5, f: -20, expected: true},
        {discriber: 'some()', a: -1, b: -51, c: -224, d: -9, e: -14, f: -14, expected: false}
    ]

    

    arrData.forEach(data => {
        const {discriber, a, b, c, d, e, f, expected }  = data;
        it(`${discriber}`, function () {
            let newarr = new AlistSecond(-1);
            let tempFunc = function(item){
                if (item > 0) 
                return true;
                else false;
            }
            newarr.push(b);
            newarr.push(c);
            newarr.push(d);
            newarr.push(e);
            newarr.push(f);
            const actual = newarr.some(tempFunc);
            assert.equal(actual, expected);
        });
    });
});


describe('OOP  AlistSecond every', function () {
    let arrData = [
        {discriber: 'every() ', a: 2, b: 54, c: 234, d: 0, e: -15, f: -15, expected: false},
        {discriber: 'every()', a: 3, b: 4, c: 24, d: 0, e: -5, f: -20, expected: false},
        {discriber: 'every()', a: -1, b: -51, c: -224, d: -9, e: -14, f: -14, expected: true}
    ]

    

    arrData.forEach(data => {
        const {discriber, a, b, c, d, e, f, expected }  = data;
        it(`${discriber}`, function () {
            let newarr = new AlistSecond(-1);
            let tempFunc = function(item){
                if (item < 0) 
                return true;
                else false;
            }
            newarr.push(b);
            newarr.push(c);
            newarr.push(d);
            newarr.push(e);
            newarr.push(f);
            const actual = newarr.every(tempFunc);
            assert.equal(actual, expected);
        });
    });
});


describe('OOP  AlistSecond splice', function () {
    let arrData = [
        {discriber: 'splice() ', a: 2, b: 3, c: 234, d: 0, e: -15, f: -15, expected: [234, 0, -15]},
        {discriber: 'splice()', a: 3, b: 1, c: 24, d: 0, e: -5, f: -20, expected: [0]},
        {discriber: 'splice()', a: 1, b: 2, c: -224, d: -9, e: -14, f: -14, expected: [2, -224]}
    ]

    arrData.forEach(data => {
        const {discriber, a, b, c, d, e, f, expected }  = data;
        it(`${discriber}`, function () {
            let newarr = new AlistSecond(-1);

            newarr.push(b);
            newarr.push(c);
            newarr.push(d);
            newarr.push(e);
            newarr.push(f);
            const actual = newarr.splice(a,b);
            assert.deepEqual(actual, expected);
        });
    });
});

describe('OOP  AlistSecond isArray', function () {
    let arrData = [
        {discriber: 'isArray() ', a: 2, expected: false},
        {discriber: 'isArray()', a: 'f', expected: false},
        {discriber: 'isArray()', a: 1, expected: false}
    ]

    arrData.forEach(data => {
        const {discriber, a, expected }  = data;
        it(`${discriber}`, function () {
            let newarr = new AlistSecond(-1);

            newarr.push(a);
            const actual = newarr.isArray(a);
            assert.equal(expected, actual );
        });
    });
});

describe('OOP  AlistSecond isArray2', function () {
    let arrData = [
        {discriber: 'isArray() ', a: 2, expected: true}
    ]

    arrData.forEach(data => {
        const {discriber, a, expected }  = data;
        it(`${discriber}`, function () {
            let newarr = new AlistSecond(-1);
            let newarr1 = new AlistSecond(-1);

            const actual = newarr.isArray(newarr1);
            assert.equal(expected, actual );
        });
    });
});


describe('OOP  LinklistSecond Push', function () {
    let arrData = [
        {discriber: 'push() ', a: 23, b: 'wer', c: true, expected: [23, 'wer', true]},
        {discriber: 'push()', a: 3, b: 'cdr', c: 0, expected: [3, 'cdr', 0]},
        {discriber: 'push()', a: 5, b: '222', c: 'open', expected: [5, '222', 'open']}
    ]
    arrData.forEach(data => {
        const {discriber, a, b, c, expected} = data;
        it(`${discriber}`, function () {
            let newLink = new LinklistSecond();
            newLink.push(a);
            newLink.push(b);
            const actual = newLink.push(c);
            assert.deepEqual(actual, expected);
        });
    });
});


describe('OOP  LinklistSecond Pop', function () {
    let arrData = [
        {discriber: 'pop() ', a: 23, b: 'wer', c: true, expected: [23, 'wer']},
        {discriber: 'pop()', a: 3, b: 'cdr', c: 0, expected: [3, 'cdr']},
        {discriber: 'pop()', a: 5, b: '222', c: 'open', expected: [5, '222']}
    ]
    arrData.forEach(data => {
        const {discriber, a, b, c, expected} = data;
        it(`${discriber}`, function () {
            let newLink = new LinklistSecond();
            newLink.push(a);
            newLink.push(b);
            newLink.push(c);
            const actual = newLink.pop();
            assert.deepEqual(actual, expected);
        });
    });
});


describe('OOP  LinklistSecond shift', function () {
    let arrData = [
        {discriber: 'shift() ', a: 23, b: 'wer', c: true, expected: ['wer', true] },
        {discriber: 'shift()', a: 3, b: 'cdr', c: 0, expected: ['cdr', 0]},
        {discriber: 'shift()', a: 5, b: '222', c: 'open', expected: ['222', 'open']}
    ]
    arrData.forEach(data => {
        const {discriber, a, b, c, expected} = data;
        it(`${discriber}`, function () {
            let newLink = new LinklistSecond();
            newLink.push(a);
            newLink.push(b);
            newLink.push(c);
            const actual = newLink.shift();
            assert.deepEqual(actual, expected);
        });
    });
});


describe('OOP  LinklistSecond unshift', function () {
    let arrData = [
        {discriber: 'unshift() ', a: 23, b: 'wer', c: true, expected: [true, 23, 'wer', true] },
        {discriber: 'unshift()', a: 3, b: 'cdr', c: 0, expected: [0, 3, 'cdr', 0]},
        {discriber: 'unshift()', a: 5, b: '222', c: 'open', expected: ['open', 5, '222', 'open']}
    ]
    arrData.forEach(data => {
        const {discriber, a, b, c, expected} = data;
        it(`${discriber}`, function () {
            let newLink = new LinklistSecond();
            newLink.push(a);
            newLink.push(b);
            newLink.push(c);
            const actual = newLink.unshift(c);
            assert.deepEqual(actual, expected);
        });
    });
});


describe('OOP  LinklistSecond some', function () {
    let arrData = [
        {discriber: 'some() ', a: 2, b: 54, c: 234, d: 0, e: -15, f: -15, expected: true},
        {discriber: 'some()', a: 3, b: 4, c: 24, d: 0, e: -5, f: -20, expected: true},
        {discriber: 'some()', a: -1, b: -51, c: -224, d: -9, e: -14, f: -14, expected: false}
    ]

    arrData.forEach(data => {
        const {discriber, a, b, c, d, e, f, expected }  = data;
        it(`${discriber}`, function () {
            let newLink = new LinklistSecond();
            let tempFunc = function(item){
                if (item > 0) 
                return true;
                else false;
            }
            
            newLink.push(a);
            newLink.push(b);
            newLink.push(c);
            newLink.push(e);
            newLink.push(f);
            newLink.push(d);

            const actual = newLink.some(tempFunc);
            assert.equal(actual, expected);
        });
    });
});


describe('OOP  LinkListSecond every', function () {
    let arrData = [
        {discriber: 'every() ', a: 2, b: 54, c: 234, d: 0, e: -15, f: -15, expected: false},
        {discriber: 'every()', a: 3, b: 4, c: 24, d: 0, e: -5, f: -20, expected: false},
        {discriber: 'every()', a: -1, b: -51, c: -224, d: -9, e: -14, f: -14, expected: true}
    ]

    arrData.forEach(data => {
        const {discriber, a, b, c, d, e, f, expected }  = data;
        it(`${discriber}`, function () {
            let newLink = new LinklistSecond();
            let tempFunc = function(item){
                if (item < 0) 
                return true;
                else false;
            }
            
            newLink.push(a);
            newLink.push(b);
            newLink.push(c);
            newLink.push(e);
            newLink.push(f);
            newLink.push(d);

            const actual = newLink.every(tempFunc);
            assert.equal(actual, expected);
        });
    });
});

describe('OOP  LinklistSecond isListSecond1', function () {
    let arrData = [
        {discriber: 'isListSecond1() ', a: 2, expected: false},
        {discriber: 'isListSecond1()', a: 3,  expected: false},
        {discriber: 'isListSecond1()', a: "-1",  expected: false}
    ]

    arrData.forEach(data => {
        const {discriber, a, expected }  = data;
        it(`${discriber}`, function () {
            let newLink = new LinklistSecond();
                        
            newLink.push(a);
            const actual = newLink.isLinkListSecond(a);
            assert.equal(actual, expected);
        });
    });
});

describe('OOP  LinklistSecond isListSecond2', function () {
    let arrData = [
       {discriber: 'isListSecond2() ', a: 2, expected: true}
    ]

    arrData.forEach(data => {
        const {discriber, a, expected }  = data;
        it(`${discriber}`, function () {
            let newLink = new LinklistSecond();
            let tempLink = new LinklistSecond();
                        
            newLink.push(a);
            tempLink.push(a);

            const actual = newLink.isLinkListSecond(tempLink);
            assert.equal(actual, expected);
        });
    });
});

describe('OOP  LinklistSecond remove1()', function () {
        let arrData = [
        {discriber: 'remove() ', a: 2, b: 54, c: 234, d: 'test', e: -15, f: 'proba',  expected1: ' ', expected: 234},
        {discriber: 'remove()', a: 0, b: 4, c: 24, d: 'test12', e: -5, f: '23proba', expected1: ' ', expected: 0},
        {discriber: 'remove()', a: 3, b: 51, c: 224, d: 'test', e: -14, f: 'gold', expected1: ' ', expected: 'test'}
    ]

         arrData.forEach(data => {
            const {discriber, a, b, c, d, e, f, expected1, expected }  = data;
            it(`${discriber}`, function () {
            
            let newLink = new LinklistSecond();
            
            newLink.push(a);
            newLink.push(b);
            newLink.push(c);
            newLink.push(d);
            newLink.push(e);
            newLink.push(f);
            const actual = newLink.remove(a);
           assert.equal(actual, expected);
        });
    });
});

describe('OOP  LinklistSecond remove2()', function () {
    let arrData = [
    {discriber: 'remove2() ', a: 2, b: 54, c: 234, d: 'test', e: -15, f: 'proba',  expected1: ' ', expected: '2 54 test -15 proba'},
    {discriber: 'remove2()', a: 0, b: 4, c: 24, d: 'test12', e: -5, f: '23proba', expected1: ' ', expected: '4 24 test12 -5 23proba'},
    {discriber: 'remove2()', a: 3, b: 51, c: 224, d: 'test', e: -14, f: 'gold', expected1: ' ', expected: '3 51 224 -14 gold'}
]
     arrData.forEach(data => {
        const {discriber, a, b, c, d, e, f, expected1, expected }  = data;
        it(`${discriber}`, function () {
        let newLink = new LinklistSecond();

        newLink.push(a);
        newLink.push(b);
        newLink.push(c);
        newLink.push(d);
        newLink.push(e);
        newLink.push(f);
        newLink.remove(a);
        const actual = newLink.toString();
       assert.equal(actual, expected);
    });
});
});

describe('OOP  LinkListSecond toString', function () {
    let arrData = [
        {discriber: 'toString() "2 54 234 -15 -15 0 " ', a: 2, b: 54, c: 234, d: 0, e: -15, f: -15, expected: '2 54 234 -15 -15 0'},
        {discriber: 'toString()"3 4 24 -5 -20 0 "', a: 3, b: 4, c: 24, d: 0, e: -5, f: -20, expected: '3 4 24 -5 -20 0'},
        {discriber: 'toString()"-1 -51 -224 -14 -14 -9 "', a: -1, b: -51, c: -224, d: -9, e: -14, f: -14, expected: '-1 -51 -224 -14 -14 -9'}
    ]

    arrData.forEach(data => {
        const {discriber, a, b, c, d, e, f, expected }  = data;
        it(`${discriber}`, function () {
            let newLink = new LinklistSecond();
            
            newLink.push(a);
            newLink.push(b);
            newLink.push(c);
            newLink.push(e);
            newLink.push(f);
            newLink.push(d);

            const actual = newLink.toString(newLink);
            assert.equal(actual, expected);
        });
    });
});

describe('Binary Tree  add', function () {
    let arrData = [
        {discriber: 'add() "2 54 234 -15 -15 0 " ', a: 2, b: 54, c: 234, d: 0, e: -15, f: -15, expected: '-15 -15 0 2 54 234 '},
        {discriber: 'add()"3 4 24 -5 -20 0 "', a: 3, b: 4, c: 24, d: 0, e: -5, f: -20, expected: '-20 -5 0 3 4 24 '},
        {discriber: 'add()"-1 -51 -224 -14 -14 -9 "', a: -1, b: -51, c: -224, d: -9, e: -14, f: -14, expected: '-224 -51 -14 -14 -9 -1 '}
    ]

    arrData.forEach(data => {
        const {discriber, a, b, c, d, e, f, expected }  = data;
        it(`${discriber}`, function () {
            let newTree = new BinTree();
            newTree.add(a);
            newTree.add(b);
            newTree.add(c);
            newTree.add(e);
            newTree.add(f);
            newTree.add(d);

            const actual = newTree.toString(newTree.root);
            assert.equal(actual, expected);
        });
    });
});


describe('Binary Tree  find', function () {
    let arrData = [
        {discriber: 'find() "2 54 234 -15 -15 0 " ', a: 2, b: 54, c: 234, d: 0, e: -15, f: -15, expected: 'do not find'},
        {discriber: 'find()"3 4 24 -5 -20 0 "', a: 3, b: 4, c: 24, d: 0, e: -5, f: -20, expected: -5},
        {discriber: 'find()"-1 -51 -224 -14 -14 -9 "', a: -1, b: -51, c: -224, d: -9, e: -14, f: -14, expected: 'do not find'}
    ]

    arrData.forEach(data => {
        const {discriber, a, b, c, d, e, f, expected }  = data;
        it(`${discriber}`, function () {
            let newTree = new BinTree();
            newTree.add(a);
            newTree.add(b);
            newTree.add(c);
            newTree.add(e);
            newTree.add(f);
            newTree.add(d);

            const actual = newTree.find( - 5, newTree.root);
            assert.equal(actual, expected);
        });
    });
});


describe('Binary Tree  toString', function () {
    let arrData = [
        {discriber: 'toString() "2 54 234 -15 -15 0 " ', a: 2, b: 54, c: 234, d: 0, e: -15, f: -15, expected: '-15 -15 0 2 54 234 '},
        {discriber: 'toString()"3 4 24 -5 -20 0 "', a: 3, b: 4, c: 24, d: 0, e: -5, f: -20, expected: '-20 -5 0 3 4 24 '},
        {discriber: 'toString()"-1 -51 -224 -14 -14 -9 "', a: -1, b: -51, c: -224, d: -9, e: -14, f: -14, expected: '-224 -51 -14 -14 -9 -1 '}
    ]

    arrData.forEach(data => {
        const {discriber, a, b, c, d, e, f, expected }  = data;
        it(`${discriber}`, function () {
            let newTree = new BinTree();
            newTree.add(a);
            newTree.add(b);
            newTree.add(c);
            newTree.add(e);
            newTree.add(f);
            newTree.add(d);

            const actual = newTree.toString(newTree.root);
            assert.equal(actual, expected);
        });
    });
});


describe('Binary Tree  toArray', function () {
    let arrData = [
        {discriber: 'toArray() "2 54 234 -15 -15 0 " ', a: 2, b: 54, c: 234, d: 0, e: -15, f: -15, expected: [ -15, -15, 0, 2, 54, 234 ]},
        {discriber: 'toArray()"3 4 24 -5 -20 0 "', a: 3, b: 4, c: 24, d: 0, e: -5, f: -20, expected: [ -20, -5, 0, 3, 4, 24 ]},
        {discriber: 'toArray()"-1 -51 -224 -14 -14 -9 "', a: -1, b: -51, c: -224, d: -9, e: -14, f: -14, expected: [ -224, -51, -14, -14, -9, -1 ]}
    ]

    arrData.forEach(data => {
        const {discriber, a, b, c, d, e, f, expected }  = data;
        it(`${discriber}`, function () {
            let newTree = new BinTree();
            newTree.add(a);
            newTree.add(b);
            newTree.add(c);
            newTree.add(e);
            newTree.add(f);
            newTree.add(d);

            const actual = newTree.toArray(newTree.root);
            assert.deepEqual(actual, expected);
        });
    });
});


describe('Binary Tree  remove', function () {
    let arrData = [
        {discriber: 'remove() "2 54 234 -15 -15 0 " ', a: 2, b: 54, c: 234, d: 0, e: -15, f: -15, expected: [ -15, -15, 0, 2, 54, 234 ]},
        {discriber: 'remove()"3 4 24 -5 -20 0 "', a: 3, b: 4, c: 24, d: 0, e: -5, f: -20, expected: [ -20, -5, 0, 3, 4, 24 ]},
        {discriber: 'remove()"-1 -51 -224 -14 -14 -9 "', a: -1, b: -51, c: -224, d: -9, e: -14, f: -14, expected: [ -224, -51, -14, -14, -9, -1 ]}
    ]

    arrData.forEach(data => {
        const {discriber, a, b, c, d, e, f, expected }  = data;
        it(`${discriber}`, function () {
            let newTree = new BinTree();
            newTree.add(a);
            newTree.add(b);
            newTree.add(c);
            newTree.add(e);
            newTree.add(f);
            newTree.add(d);
            newTree.remove(e ,newTree.root);
            const actual = newTree.toString(newTree.root);
            assert.equal(actual, expected);
        });
    });
});


