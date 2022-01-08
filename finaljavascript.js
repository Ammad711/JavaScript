// Author:Ammad
/* This way also comments can be added */
// document.write("This is an external js");
// document.getElementById('th').innerHTML="This is a para";
// var a1=4;
// var a2=90;
// var a3="this string in javascript";
// document.write("a1= "+a1+"<br>");
// document.write(a3+"<br>");
// document.write("Sum of a1 and a2= "+a1+a2+"<br>");
// a1=a1+4;
// document.write(a1);
// document.write(a1,a2," a1,a2 will concatenate <br>");
// document.write(a1+a2," a1+a2 will add <br>")
console.log("This is console");
// console.log is used for debugging purposes
// var age=prompt("Tell me your age");
// var name=prompt("Tell me your name","Ammad");
// alert("Your age is "+age);
// alert("Your name is "+name);
// document.write("<br>Your age is ",age);
// var foodcost=prompt("What is the total amount ");
// var no=prompt("Total number of persons");
// document.write("The total cost of foodcost was ",foodcost,"<br>");
// document.write("Each one of you have to pay ",(foodcost/no).toFixed(2),"<br>");
// document.write("2^2 = ",Math.pow(2,2),"<br>");
// document.write("abs(-34) = ",Math.abs(-34),"<br>");
// document.write("abs(-10) = ",(-1)*(-10),"<br>");
// document.write("sqrt(36) = ",Math.sqrt(36),"<br>");

// String functions
// var str1="Hello World ";
// document.write(str1,"<br>");
// document.write(str1.length,"<br>");
// document.write(str1.indexOf("o"),"<br>");
// document.write(str1.slice(4,8),"<br>");
// document.write(str1.slice(4),"<br>");
// document.write(str1.substr(4,3),"<br>");
// document.write(str1.substr(4),"<br>");
// document.write(str1.replace("World","Earth"),"<br>");
// document.write(str1.toUpperCase(),"<br>");
// document.write(str1.toLowerCase(),"<br>");

// Relational Operators : ==, !=, <, >, >=
// Logical Operators : &&, ||

// var age=prompt("What is your age? ");
// if(age<20 && age>10)
// {
// 	document.write("You go to school");
// }
// else if(age>3 && age<10)
// {
// 	document.write("You also go to school");
// }
// else
// {
// 	document.write("Do what you want to do");
// }


// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }
// document.write(new Date()+"<br>");
// document.write(day);

// var i=1;
// while(i<=100)
// {
// 	document.write(i+"<br>");
// 	i++;
// }

// var i=101;
// do
// {
// 	document.write(i+"<br>");
// 	i++;
// }while(i<=100)

// for(var i=0;i<10;i++)
// {
// 	document.write(i+1,"<br>");
// }

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   document.write(numbers[x]);
//   // document.write(x);
// }

// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   // text += x;
//   document.write(x+"<br>");
// }

// let language = "JavaScript";

// let text = "";
// for (let x of language) {
// 	document.write(x+"<br>");
// }

// var books=["java","c","c++"];

// document.write(books,"<br>");
// document.write(books[1]);

function test()
{
	document.write("We are calling test function");
	console.log("We have executed test function");
}

test();

var x="John"+' '+"Do";
document.write("<br>"+x);

var myobj={firstname:"john",lastname:"do"};
console.log(myobj);

var myarr=["orange","apple"];
console.log(myarr);

var person=prompt("Please enter your name","Ammad");
document.write("<br>"+person);

alert("name of person "+person);
alert(location.hostname);

function multiply(p1,p2)
{
	return p1*p2;
}
var p1=10,p2=20;
var a=multiply(p1,p2);
document.write("<br>"+a);

// Arrow functions
var hello;
 hello = function(){
	return "hello world";
} 
document.write("<br>"+hello());

var h2;
h2=()=>{
	return "hello world 2";
}
document.write("<br>"+h2());

var h3;
h3=()=>"hello world 3";
document.write("<br>"+h3())

