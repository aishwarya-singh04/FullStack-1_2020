/*var a;
console.log(a);     //declaration hoisting only in case of VAR(only declaration is being hosted)
var a =20;
console.log(b);      //not in case of LET 
let b=3;              //redeclaration can't be done in LET
*/

function hello()
{
    window.a=10;
}
hello();
console.log(a);
console.log("hii");