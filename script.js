let arr_1= [101, 202, 303, 404, 505];
let arr_2 = [606, 707, 808, 909];
console.log('задание 1');
let superArr = arr_1.concat(arr_2)
console.log(superArr);
console.log(Math.min(...superArr));
let obj = {width: 300, heigth: 550};
console.log(obj);
let objCoppy = new Object(obj);
console.log(objCoppy);
objCoppy.area = function() {
    return this.width * this.heigth
};
console.log(objCoppy.area());
function getSum(...args) {
    let result = 0;
    for(let num of args) {
        result += num
    }
    return result;
}
console.log(getSum(1,5,6,7,8,9,15,0,78,45,9,5));

console.log('задание 2');

// - Получить узел `html`
let html = document.documentElement;
// - Поменять фоновый цвет всего документа на синий
let body = document.body;
body.style.backgroundColor = 'aquamarine';
// - Пользуясь узлом `document.body` получить узлы `<b>` и `<i>`.
let bold = body.querySelector('b');
let bold2 = document.body.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling;    //второй вариант
let italics = body.querySelector('i');
let italics2 = document.body.firstChild.nextSibling.lastChild.previousSibling.firstChild.nextSibling;    //второй вариант
// - Поменять текст в обоих узлах
bold.innerHTML = 'новый текст в 1 блоке';
italics.innerHTML = 'новый текст во 2 блоке';
// - Задайте тегу `<b>` класс `bold`, а тегу `<i>` класс `cursive`
bold.classList = 'bold';
italics.classList = 'cursive';
// - Получить текстовый узел `Линкод` находящийся внутри тега `<title>`, и поменять его на 'Lincode’.
let titleLin = document.head.querySelector('title');
titleLin.innerHTML = 'LINCODE';
console.log(titleLin);
// - Удалить узел `<b>`**
body.querySelector('b').remove();

// 3
let newProm = new Promise((resolve, reject) => {
    let min = Math.ceil(1);
    let max = Math.floor(10);
    resolve(Math.floor(Math.random() * (max - min + 1)) + min)
});
newProm.then((result) => console.log(result));
function returnPromise(num) {
    return new Promise((resolve, reject) => {
        if(num < 10) {
            resolve('Успех')
        }else {
            reject('Ошибка!')
        }
    })
}
returnPromise(11)
    .then((result) => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
let timePromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Operation begin'), 2000);
})
timePromise
    .then(result => console.log(result))
    .then(setTimeout(() => console.log('All files were loaded'), 3000));

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Load begin'), 1000);
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Load continue'), 3000);
})
Promise.all([promise1, promise2])
    .then((values) => {
        let [promise1, promise2] = values;
        console.log(promise1);
        console.log(promise2);
    });
Promise.race([promise1, promise2])
    .then((value) => {
        console.log(value);
    });

console.log('задание 4');
let newArray = [1,2,3];
let [a, b, c] = newArray;
console.log(a);
console.log(b);
console.log(c);
let newObj = {
    name: 'Andrei',
    age: 25,
    city: 'Moscow',
}
let {name, age, city} = newObj;
console.log(name);
console.log(age);
console.log(city);
let newArr = ['a','b','c','d','e'];
let [first, second, ...rest] = newArr;
console.log(first);
console.log(second);
console.log(rest);
let newObject = {
    newName:'Andrei',
    newAge:25,
    address:{
        newCity:'Moscow',
        country:'Russia',
    },
}
let {newName, newAge, address:{newCity}, address:{country}} = newObject;
console.log(newName);
console.log(newAge);
console.log(newCity);
console.log(country);
console.log('задание 3');