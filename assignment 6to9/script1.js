// question no 1 
var num = 10;

document.write("<h2>Arithmetic Operations on " + num + "</h2>");
document.write("Original Number: " + num + "<br>");
document.write("After Addition ( + 5 ): " + (num + 5) + "<br>");
document.write("After Subtraction ( - 3 ): " + (num - 3) + "<br>");
document.write("After Multiplication ( * 2 ): " + (num * 2) + "<br>");
document.write("After Division ( / 2 ): " + (num / 2) + "<br>");
document.write("After Modulus ( % 3 ): " + (num % 3) + "<br>");
// Question no 2 
 var a=2;
var b=1;
document.write("<h3>" + "Solving Complex Equation" + "</h3>");
document.write('The value of a is :'+ a+'<br>');
document.write('The value of b is :'+ b+'<br>');
var result=  --a - --b + ++b + b--;
document.write('The result is '+result+'<br>'+'<br>');
document.write("<b>" + "Explainatory Solution" + "</b>" + "<br/>" );
document.write("a = 2, b = 1" + "<br/>");
document.write("--a  -  --b  +  ++b  +  b--"  + "<br/>");
document.write('--2 - --1 + ++1 + 1-- '+'<br>');
document.write('1 - 0 + 1 + 1 '+'<br>');
document.write('1+1+1'+'<br>');
document.write('The result is 3');


// // Pre-Increment
// let a = 8;

// document.write("<br>")
// document.write('The value of ++a is :' + ++a + '<br>');
// document.write('Now the value of a is :' + a);
// document.write("<br>");
// document.write("<br>");

// // Post- Increment
// document.write('The value of a++ is :' + a++ + '<br>');
// document.write('Now the value of a is :' + a);
// document.write("<br>");
// document.write("<br>");

// // Pre-Decrement

// document.write('The value of --a is :' + --a + '<br>');
// document.write('Now the value of a is :' + a);
// document.write("<br>");
// document.write("<br>");

// // Post-Decrement
// document.write('The value of a-- is :' + a-- + '<br>');
// document.write('Now the value of a is :' + a);

 // User se naam input lena
 
 
 // Question no 3 
 
 // Prompt the user to enter their name
let userName = prompt("Enter your name:");

// Check if the user entered a name
if (userName) {
    alert("Hello, " + userName + "! Welcome!");
} else {
    alert("Hello! Welcome!");
}
// question no 5 
 // a) Take three subjects' names from the user
 let subject1 = prompt("Enter first subject name:");
 let subject2 = prompt("Enter second subject name:");
 let subject3 = prompt("Enter third subject name:");

 // b) Total marks for each subject is 100
 let totalMarksEach = 100;
 let totalMarks = totalMarksEach * 3; // 3 subjects

 // c) Take obtained marks for each subject from the user
 let marks1 = parseFloat(prompt(`Enter obtained marks for ${subject1}:`));
 let marks2 = parseFloat(prompt(`Enter obtained marks for ${subject2}:`));
 let marks3 = parseFloat(prompt(`Enter obtained marks for ${subject3}:`));

 // d) Calculate total obtained marks and percentage
 let totalObtained = marks1 + marks2 + marks3;
 let percentage = (totalObtained / totalMarks) * 100;

 // e) Show result in browser using a table
 document.write(`
     <table border="1" cellpadding="10">
         <tr>
             <th>Subject</th>
             <th>Total Marks</th>
             <th>Obtained Marks</th>
         </tr>
         <tr>
             <td>${subject1}</td>
             <td>${totalMarksEach}</td>
             <td>${marks1}</td>
         </tr>
         <tr>
             <td>${subject2}</td>
             <td>${totalMarksEach}</td>
             <td>${marks2}</td>
         </tr>
         <tr>
             <td>${subject3}</td>
             <td>${totalMarksEach}</td>
             <td>${marks3}</td>
         </tr>
         <tr>
             <td colspan="2"><strong>Total Obtained Marks</strong></td>
             <td><strong>${totalObtained}</strong></td>
         </tr>
         <tr>
             <td colspan="2"><strong>Percentage</strong></td>
             <td><strong>${percentage.toFixed(2)}%</strong></td>
         </tr>
     </table>
 `);


// question no 4 

 const number = 5;
 const limit = 20;
 
 console.log(`Multiplication Table of ${number}`);
 for (let i = 1; i <= limit; i++) {
     console.log(`${number} x ${i} = ${number * i}`);
 }
 
