// for (var i = 0; i < 10; i++) {
//     setTimeout(function() {
//       console.log(i);
//     })
//   };
// В консоле будет выведено число 10, 10 раз

// Task2
// var today = new Date();
// var now = today.toLocaleString();
// console.log("Today is:", now);


// const todayIs = `Today is: ${dayOfWeek}`
// const timeIs = `Current time is: ${formattedHours}${period}:${minutes}:${seconds}`

// return `${todayIs}\n${timeIs}`

// Task3
// let num1 = 32243;
// let result = num1.toString().split('').reverse().join('');
// console.log(result)

// Task4

// function factorial(n){
//     if (n === 0){
//         return 1;
//     }else{
//         return n * factorial(n -1)
//     }
// }
// console.log(factorial(5));

// Task 5

// let x = parseInt(prompt("Enter first number:"));
// let y = parseInt(prompt("Enter second number:"));
// if (x == y) {
//     document.write(x + " is equal to " + y);
// } else if (x > y) {
//     document.write(x + " is larger than " + y);
// } else {
//     document.write(x + " is lesser than " + y);
// }

// Task6
//  let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join());
// console.log(myColor.join('+'));

// Task7

// let month_name = function(i){
//     monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//     return monthList[i.getMonth()]
// };
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));

// Task8

// let str = 'hello';
// console.log(/^[A-Z]/.test(str[0]));

// Task 9

//  let div1 =document.getElementById("string-6").childNodes[0].nodeValue;
// let div2= document.getElementById("string-6").innerHTML = document.getElementById("string-1").childNodes[0].nodeValue;
// let div3 =document.getElementById("string-1").innerHTML = document.getElementById("string-3").childNodes[0].nodeValue;
// let div4 = document.getElementById("string-3").innerHTML = document.getElementById("string-2").childNodes[0].nodeValue;
// let div5 = document.getElementById("string-2").innerHTML = document.getElementById("string-5").childNodes[0].nodeValue;
// let div6 = document.getElementById("string-5").innerHTML = document.getElementById("string-4").childNodes[0].nodeValue;
// let div7 = document.getElementById("string-4").innerHTML 
// console.log(div1,div2,div3,div4,div5,div6,div7);

// Task10

// let element  = document.querySelectorAll(".element")
// for (let i = 0; i < element.length; i++){
//     element[i].style.color = "red";
// }
// for (let i = 3; i < element.length; i++) {
//     element[i].style.color ="green";
    
// }

// task11

// const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
// let ol = document.querySelector('#todo-list');

// for (let i = 0; i < tasks.length; i++){
//     let li = document.createElement('li');
//     li.classList.add('task');
//     li.textContent = tasks[i]
//     ol.append(li);
// }

// Task12

// document.querySelectorAll('p').forEach((element) => {
//     element.insertAdjacentHTML('afterend', '<hr/>');
// });

// Task13

	// let list = document.querySelectorAll('.item');
	// list[0].remove();
	// let newElement = document.createElement("div");
	// newElement.className = "item";
	// newElement.textContent = "Canned Fish";
	// let qtySpan = document.createElement("span");
	// qtySpan.className = "qty";
	// qtySpan.textContent = "x 4";
	// newElement.appendChild(qtySpan);
	// let itemToReplace = list[list.length-1]
	// let cartItems = document.getElementById('cart-items')
	// cartItems.replaceChild(newElement, itemToReplace);

    // task14

    // let task = prompt('Введите таск');
    // let cartItems = document.getElementById('cart-items');
	// let li = document.createElement('li');
	// li.textContent = task;
	// cartItems.append(li);




