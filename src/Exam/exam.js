const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
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
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {
    ...user
};
//Проверка:
console.log(user === copyUser)
//- что должно быть в консоли? - false, т.к. первых 2 сво-ва примитивы скопируются, на 3 будет ссылка
console.log(user.friends === copyUser.friends)
// - что должно быть в консоли? - тру, т.к. в обоих огбъеках ссылка на 1 и тот же массив

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {
    ...user,
    friends: [...user.friends]
};

//Проверка:
console.log(user === deepCopyUser)
// - что должно быть в консоли? - false
console.log(user.friends === deepCopyUser.friends)
// - что должно быть в консоли? - false

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
console.log(copyStudents === students)
// - что должно быть в консоли? - false
console.log(copyStudents[0].age === students[0].age)
// - что должно быть в консоли? - true, т.к. в 2 массивах лежат одинаковые ссылки на объекты

//4*. Полная (глубокая) копия массива students (map)
// eslint-disable-next-line array-callback-return,no-unused-expressions
let deepCopyStudents = students.map(t => ({...t}));

//Проверка:
console.log(deepCopyStudents === students)
// - что должно быть в консоли? - false
console.log(deepCopyStudents[0] === students[0])
// - что должно быть в консоли? - false
console.log(deepCopyStudents[0].age === students[0].age)
// - что должно быть в консоли? - true, так как это примитивы

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
// eslint-disable-next-line array-callback-return
let sortedByName = deepCopyStudents
    .map(t => ({...t}))
    .sort(compare);
console.log(sortedByName);

function compare(a, b) {
    return a.name - b.name;
}

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort(compare)

console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = deepCopyStudents.filter(t => t.scores > 100)

console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.map(t => ({...t}))
    .splice(3, 5);
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [...deepCopyStudents, ...topStudents];
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = deepCopyStudents.filter(t => !t.isMarried);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = deepCopyStudents.map(t => (t.name));
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = studentsNames.join(" ");
console.log(namesWithSpace)
let namesWithComma = studentsNames.join(", ");
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = deepCopyStudents.map(t => ({...t, isStudent: true}));
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = trueStudents.map(el => el.name === "Nick" ? {...el, isMarried: true} : el)

console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = trueStudents.find(t => t.name.toLowerCase() === 'ann');
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent = deepCopyStudents.reduce((acc, b) => acc.scores < b.scores ? b : acc);
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
let sumScore = trueStudents.reduce((a, b) => a + b.scores, 0)
console.log(sumScore)

// И поднимаем руку!!!!


// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    //..............................
}
console.log(addFriends(students));







