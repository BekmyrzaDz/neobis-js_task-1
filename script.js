// JS Tasks Study Plan

// Part 1

/*
#1
for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }
};
What will the console display and why?
*/

// Solution

// Output: Uncaught SyntaxError: missing ) after argument list
// Синтаксическая ошибка. Не задан второй аргумент для setTimeout и после цикла for поставлена ';'.
// Syntax error. The second argument for setTimeout was not specified and ';' was placed after the for loop

/*
#2
Write a JavaScript program to display the current day and time in the following format.  
Sample Output : 
Today is: Friday. 
Current time is: 4PM:50:22
*/

// Solution

const now = new Date();

const days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];

const n = now.getDay();

let hour = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

console.log(`Today is: ${days[n]}`);
console.log(`Current time is: ${hour}:${minutes}:${seconds}`);

/*
#3
Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223
*/

// Solution

let x = 32243;

function reverseNum(num) {
  return num.toString().split('').reverse().join('');
}

console.log(reverseNum(x));

/*
#4
Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 
For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 
*/

// Solution

const factorial = (n) => {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

console.log(factorial(5));

/*
#5
Write a JavaScript program that accepts two integers in prompt() and alert the larger one.
*/

// Solution

const a = +prompt('a?');
const b = +prompt('b?');

function compare() {
  if (a > b) {
    return '"a" is greater than "b"';
  } else {
    return '"b" is greater than "a"';
  }
}

alert(compare());

/*
#6
Write a simple JavaScript program to join all elements of the following array into a string. 
Sample array: myColor = ["Red", "Green", "White", "Black"];
Expected Output : 
"Red,Green,White,Black"
"Red+Green+White+Black"
*/

const myColor = ["Red", "Green", "White", "Black"];

function joinFunc1(item) {
  return item.join();
}

function joinFunc2(item) {
  return item.join('+');
}

console.log(joinFunc1(myColor));
console.log(joinFunc2(myColor));

/*
#7
Write a JavaScript function to get the month name from a particular date. 
Test Data :
console.log(month_name(new Date("10/11/2009"))); 
console.log(month_name(new Date("11/13/2014")));
Output :
"October" 
"November" 
*/

// Solution

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function month_name(date) {
  const month = date.getMonth();
  return months[month];
}

console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));

/*
#8
Write a JavaScript program to test the first character of a string 
is uppercase or not
*/

function name(params) {
  if (params[0] != params[0].toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

/*
#9
Write a JavaScript program to draw a smile
*/

// Solution

console.log(name('hello'));

const c = document.getElementById('canvas').getContext('2d');
c.lineWidth = 5;
c.strokeStyle = '#000';

const draw = () => {
  c.arc(200, 200, 70, 0, Math.PI, false);

  c.stroke();
};

draw();

/*
Part 2

#1
На странице есть верстка:
<div id="string-1">Ядра в вёдра, выдру в тундру!</div>
<div id="string-2">Выдрав с выдры в тундре гетры</div>
<div id="string-3">В недрах тундры, выдры в гетрах </div>
<div id="string-4">Вытру гетрой выдре морду </div>
<div id="string-5">Тырят в вёдра ядра кедров!</div>
<div id="string-6">Вытру выдрой ядра кедров</div>
  
Необходимо поочередно обратиться к каждому тэгу в нужном порядке, и вывести их содержимое в консоль, чтобы получилась осмысленная скороговорка.

Вывод в консоли:
В недрах тундры, выдры в гетрах
Тырят в вёдра ядра кедров!
Выдрав с выдры в тундре гетры
Вытру выдрой ядра кедров
Вытру гетрой выдре морду
Ядра в вёдра, выдру в тундру!
*/

// Solution

console.log(document.querySelector("#string-3").innerHTML);
console.log(document.querySelector("#string-5").innerHTML);
console.log(document.querySelector("#string-2").innerHTML);
console.log(document.querySelector("#string-6").innerHTML);
console.log(document.querySelector("#string-6").innerHTML);
console.log(document.querySelector("#string-1").innerHTML);

/*
#2
На странице есть верстка

<div class="element">Element 1</div>
<div class="element">Element 2</div>
<div class="element">Element 3</div>
<div class="element">Element 4</div>
<div class="element">Element 5</div>
<div class="element">Element 6</div>

С помощью JS необходимо первым трем  элементам задать красный цвет текста, а остальным трем - зеленый.

*/

// Solution

const elements = document.querySelectorAll('.element');

for (let i = 0; i < 6; i++) {
  if (i < 3) {
    elements[i].style.color = 'red';
  }
  if (i >= 3) {
    elements[i].style.color = 'green';
  }
}

/*
#3

На странице есть контейнер <ol id="todo-list"></ol>, необходимо с помощью цикла добавить в него пять задач (элементов <li>) с классом task и текстом, взятым из массива задач из пяти элементов: 

const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

Ожидаемый результат в инспекторе после выполнения скрипта:

<ol id="todo-list">
  <li class="task">Buy lemonade</li>
  <li class="task">Make toasts</li>
  <li class="task">Repair car</li>
  <li class="task">Play games</li>
  <li class="task">Pet a cat</li>
</ol>

*/

// Solution

const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

const todoList = document.querySelector('#todo-list');

for (let i = 0; i < tasks.length; i++) {
  const li = document.createElement('li');
  li.textContent = tasks[i];
  li.classList.add('task');

  todoList.appendChild(li);
}

/*
#4
На странице есть следующая разметка:

<article>
<h3>What is Lorem Ipsum?</h3>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
<h3>Where does it come from?</h3>
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. from "The Extremes of Good and Evil" by Cicero</p>
<h3>Why do we use it?</h3>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
</article>

Вам необходимо с помощью JavaScript вставить после каждого тега <p> тег <hr>, для визуального отделения абзацев друг от друга.
  
Указания:
Подразумевается, что вышеуказанная разметка находится внутри тега <body>.
Нельзя модифицировать указанную разметку.
За использование цикла дополнительные баллы.

*/

// Solution

const p = document.querySelectorAll("article p");

p.forEach(item => {
  let hr = document.createElement('hr');

  item.insertAdjacentElement('afterend', hr);

  item.append(hr);
});

/*
#5
Дана такая разметка:

<div id="cart-items">
  <div class="item">Milk 1 l.<span class="qty">x 2</span></div>
  <div class="item">Cola 1.5 l. <span class="qty">x 1</span></div>
  <div class="item">Bread <span class="qty">x 2</span></div>
  <div class="item">Cheese <span class="qty">x 1</span></div>
  <div class="item">Chocolate bar <span class="qty">x 3</span></div>
</div>

Необходимо с помощью JavaScript удалить элемент "Cola 1.5 l" и заменить товар "Chocolate bar" на "Canned Fish", количеством 4 штуки.

Указания:
Для удаления использовать .remove()
Для замены использовать .replaceChild()
Подразумевается, что вышеуказанная разметка находится внутри тега <body>.

*/

// Solution

const item = document.querySelectorAll('.item');

item[1].remove();
item[4].innerHTML = '';
item[4].innerHTML = 'Canned Fish <span class="qty">x 4</span>';

/*
#6
Напишите программу для создания списка, которые будет вводить пользователь.
Для каждого пункта:
Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте пункт и добавляйте его к <ul>.
Процесс прерывается, когда пользователь нажимает "Отмена" или вводит пустую строку.

*/

// Solotion

const list = document.querySelector('.list');

let input;

while (input = prompt('?')) {
  list.insertAdjacentHTML("beforeend", `<li>${input}</li>`);
}