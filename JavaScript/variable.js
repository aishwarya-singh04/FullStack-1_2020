/*"use strict";                // Mode will be changed from "Sloppy" to "Strict"
var a = 20 , c =30, d= true;
b = 2.15;
var z;
a= 30;                      //redeclaration and reassignment of variable is allowed in javaScript
var d= 010;                 //octal representation is not allowed in strict mode
console.log(a);
console.log(b);
console.log(z);
console.log(d);             //put result on console screen
// document.write(a);       //put result on html document
*/

//"use strict";
var a=25;                   //global
function hello()
{
    var b=30;               //local
    c= 100;                 //acts as a global variable since it is not declared with var keyword
    let l =10;              //block scope
    const d =20;
    d++;
    console.log(d);
    console.log(l);
    console.log(a);
    console.log(b);
    console.log(c);
}
hello();
console.log(a);
//console.log(b);
console.log(c);
//console.log(d);