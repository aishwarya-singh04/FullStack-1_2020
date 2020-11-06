//Selector
const time= document.getElementById("time");
const greeting= document.getElementById("greeting");
const name= document.getElementById("name");
const date= document.getElementById("date");        //shift+alt+down arrow to copy code

//Event Listener
//Function
function showtime()
{
    let today = new Date();
    let hour = today.getHours();                    //8
    let min = today.getMinutes();                   //32
    let sec = today.getSeconds();                   //23 sec
    let todaydate = today.toDateString();           //friday nov 6 2020

    //am pm format
    const ampm = hour>12 ?'PM':'AM';

    //12 hours format
    hour = hour%12 || 12;                           // hour=14%12=2 true->left false->right

    //output time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${ampm}`;
    date.innerHTML = `${todaydate}`;

    //hh:mm:ss(Required Time)
    setTimeout(showtime,1000);                      //1000ms=1s

    function addZero(n)                             //5
    {
        return ((parseInt(n,10)<10?'0':'')+n)       //05
    }
}
//Function Call
showtime();