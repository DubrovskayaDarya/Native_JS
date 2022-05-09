const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
//создаем новый массив
const names = []
//проходимся по нему циклом
for (let i = 0; i < students.length; i++) {
    let result = students[i].name
    names[i] = result
}


//метод массива reduce()
let nums = [1,2,3,4,5,6]
let sum = nums.reduce((acc,el)=>acc+el,0)
console.log(sum)

