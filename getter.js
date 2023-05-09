

let isim = "";



function getName(){
isim = prompt("Lutfen adinizi giriniz:")
document.querySelector("#myName").innerHTML=`${isim}`;
}



function showTime()
{
let dates= new Date();
let hour = dates.getHours();
let minute = dates.getMinutes();
let second = dates.getSeconds();
let day = dates.getUTCDay();

switch(day){
    case 1:
        day = "Pazartesi";
    break;
    
    case 2:
        day = "Salı";
    break;
    
    case 3:
        day = "Çarşamba";
    break;

    case 4:
        day = "Perşembe";
    break;
    
    case 5:
        day = "Cuma";
    break;
    
    case 6:
        day = "Cumartesi";
    break;
    
    case 7:
        day = "Pazar";
    break;   
}


hour=checkTime(hour);
minute=checkTime(minute);
second=checkTime(second);
document.querySelector("#myClock").innerHTML=`${hour}:${minute}:${second} ${day}`;
t=setTimeout('showTime()',1000);
}



function checkTime(i)
{
    if (i<10)
    {i="0"+i;}
    return i;
}

window.onload = showTime;
getName();

var myInput = document.createElement("input");

myInput.setAttribute("id","inputId");
myInput.setAttribute("type","text");
myInput.setAttribute("value","25");

var myDiv = document.createElement("div");
myDiv.appendChild(myInput);

var form = document.getElementById("formId");
function submitForm(event){

    event.preventDefault();

}

form.addEventListener('submit', submitForm);

function formAction() {
    var num = document.getElementById("num").value;
    window.alert(num + " success");
}

function changeMode() {
    var body = document.body;
    

    body.classList.toggle("dark-theme");
    let button = document.getElementById('button');
    
    if (button.innerHTML == "Dark Mode") {
       button.innerHTML = "Normal Mode";
    } else {
       button.innerHTML = "Dark Mode"
    }
 }


