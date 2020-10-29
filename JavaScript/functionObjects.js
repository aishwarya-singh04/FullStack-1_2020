function abc(){
    abc.x= 10;
    abc.y= 20;
    abc.hello=function()
    {
        console.log("hello i'm a function within a function");
    };
}
console.log(abc.x);
console.log(abc.y);
//console.log(abc.hello());