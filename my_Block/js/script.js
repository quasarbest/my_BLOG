// // alert('Hello !!! its gulp project') - // для того что бы подключить любой файл в папке js к главному script.js
// // alert('Hello !!! its gulp project')


// function to change the new webp picture format do not delete=========================================
function testWebP(callback) {
var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});
// function to change the new webp picture format do not delete=========================================




// alert ('калькулятор для подсчета площади')
// let sideA = prompt('Введите число одной стороны')
// let sideB = prompt('Ведите число второй стороны')
// let result = sideA * sideB
// alert(result + ' m2')

// alert ('калькулятор для подсчета площади и периметра')
// let sideA = prompt('Введите число одной стороны')
// let sideB = prompt('Ведите число второй стороны')
// let result = sideA * sideB
// let reultPerimetr = (sideA * 2) + (sideB * 2)
// alert(result + ' m2 площадь' + ' ' + reultPerimetr + ' м/п периметр')

// let p = 3.14
// alert ('Введите радиус окружности в см')
// let radius = prompt('Введите число одной стороны')
// let b = radius * 2
// let L = b * p
// alert((p * b / 2 + ' см2 площадь круга') + " " + (L + ' см длина окружности'))

// let a = +prompt('vvedite a: ')
// let b = +prompt('vvedite b: ')
// let c = +prompt('vvedite c: ')
// let p = (a+b+c)/2
// let S =(Math.sqrt(p*((p-a)*(p-b)*(p-c)))).toFixed(2)
// alert(S)

// const palid = str =>
//     str === str.split('').reverse().join('');
//     alert(palid('негерек'))


// let fruits = ["Яблоко", "Апельсин"];
// fruits.push("Груша");// добавляет элемент в конец массива
// fruits.unshift('машина') // добавил элемент в начало массива 
// fruits[3] = 'qq'; // добвил третьй элемент по индексу массива
// fruits.pop();// удалил элемент грушша
// fruits.push("авто");// добавил элемент 
// alert(fruits)