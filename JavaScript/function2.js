var a = 5;                              //Expression
var z = function(x){                    //Function Expression(Anonymous Function)
    return x*x;
};
console.log(z(7));

function multiply(x){
    return x*x;
}
console.log(multiply(7));

var y = (x)=>{ return (x*x); };                 //Arrow function
console.log(y(7));


//A function can call itself
(function(name){console.log(name)}) ("aish");