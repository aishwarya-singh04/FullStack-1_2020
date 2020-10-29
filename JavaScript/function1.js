//function definition/declaration
function myfun(fname, lname){
    console.log("My name is "+fname+" "+lname);
}
//function calling
myfun("Aishwarya","Singh");
myfun();
myfun("Aishwarya","singh","ji");

function myfunt(fname, lname="named not mentioned"){
    console.log("My name is "+fname+" "+lname);
}
myfunt("Aish");

function myfun2(x,y){
    return (x+y);
}
console.log(myfun2(2,4));

function myfun3(){
    var sum = 0;
    for(i =0;i<arguments.length;i++)
    {
        sum=sum+arguments[i];
        
    }
    return sum;
}
var a= myfun3(2,5,6);
var b= myfun3(3,4,5,6,7);
console.log(a+" "+b);
