// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    console.log(nums)
    return nums.reduce((a, b) => a + b)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a === b && b === c) {
        return "10"
    } else if (a === b && a + b > c) {
        return "01"
    } else if (b === c && b + c > a) {
        return "01"
    } else if (a + b > c && b + c > a) {
        return "11"
    } else {
        return "00"
    }
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    return number.toString().split('').map(t => Number(t)).reduce((a, b) => a + b)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let res1 = 0;
    let res2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            res1 += arr[i];
        } else (res2 += arr[i])
    }
    return res1 > res2
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && Number.isInteger(array[i])) {
            res.push(array[i] * array[i])
        }
    }
    return res
}

getSquarePositiveIntegers([1, 6, -7, 0.5])

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

// export function sumFirstNumbers(N: number): number {
//     return N * (N + 1) / 2;
// }

export function sumFirstNumbers(N: number): number {
    if (N === 0) {
        return 0;
    }
    return N + sumFirstNumbers(N - 1)
}

console.log(sumFirstNumbers(4))
// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    let i = 0;
    const result = [];
    while (amountOfMoney > 0) {
        if (amountOfMoney >= banknotes[i]) {
            result.push(banknotes[i]);
            amountOfMoney -= banknotes[i];
        } else i++;
    }
    return result;
}
