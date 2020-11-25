//selector
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');

const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const back1 = document.getElementById('back1');
const back2 = document.getElementById('back2');

//Selectors
const firstname= document.getElementById('firstname');
const lastname= document.getElementById('lastname');
const email= document.getElementById('email');
const password1= document.getElementById('password1');
const password2= document.getElementById('password2');
const small= document.querySelector('small');
const mobile= document.getElementById('mobile');

const progress= document.getElementById('progress');
//form submission
//Event Handler
form1.addEventListener('next1', function(e){
    e.preventDefault();                     //to stop submission
    checkInput();
});
form3.addEventListener('submit',function(e){
    e.preventDefault();
    checkAgain();
});


//Functions
function checkInput()
{
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    
    if(emailValue==='')
    {
        showError(email, "Email Id can't be blank");
    }
    else if(!isEmailValid(emailValue))
    {
        showError(email, "Email Id is inavalid");
    }
    else{
        showSuccess(email);
    }
    if(password1Value===''){
        showError(password1, "Password can't be blank");
    }
    else {
        showSuccess(password1);
    }
    if(password2Value===''){
        showError(password2, "Re-enter password");
    }
    else if(password2Value != password1Value)
    {
        showError(password2, "Password not matched!")
    }
    else {
        showSuccess(password2);
    }
}
function checkAgain(){
    const firstnameValue = firstname.value.trim();    //trim() to remove whitespacesh
    const lastnameValue = lastname.value.trim(); 
    const mobileValue = mobile.value.trim(); 

    if(firstnameValue===''){
        showError(firstname, "Firstname can't be blank");
    }
    else if(!isUsernameValid(firstnameValue))
    {
        showError(firstname, "First Name can have small letters and underscores only");
    }
    else {
        showSuccess(firstname);
    }
    if(lastnameValue===''){
        showError(lastname, "First Name can't be blank");
    }
    else if(!isUsernameValid(lastnameValue))
    {
        showError(lastname, "Username can have small letters and underscores only");
    }
    else {
        showSuccess(lastname);
    }
    if(mobileValue===''){
        showError(mobile, "Mobile no. can;t be empty");
    }
    else if(!isvalidnumber(mobileValue))
    {
        showError(mobile, "Mobile no. can;t be empty");
    }
    else{
        showSuccess(mobile);
    }
}
function showError(input, msg)
{
    const formControl = input.parentNode;
    formControl.className = 'form-control error';
    const small= formControl.querySelector('small');
    small.innerHTML= msg;
}
function showSuccess(input)
{
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
}
function isEmailValid(email)
{
    return /^([a-zA-Z0-9_\.\-\+]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}

function isFirstnameValid(firstname){
    return /^[a-zA-Z]+$/.test(firstname);
}
function isLsttnameValid(lastname){
    return /^[a-zA-Z]+$/.test(lastname);
}
function isvalidnumber(mobile)
{
    return /^[1-10]+$/.test(mobile);
}

next1.onclick = function(){
    form1.style.left="-450px";
    form2.style.left="40px";
    progress.style.width="240px";
}
back1.onclick = function(){
    form1.style.left="40px";
    form2.style.left="450px";
    progress.style.width="120px";
}
next2.onclick = function(){
    form2.style.left="-450px";
    form3.style.left="40px";
    progress.style.width="360px";
    
}
back2.onclick = function(){
    form2.style.left="40px";
    form3.style.left="450px";
    progress.style.width="240px";
}

