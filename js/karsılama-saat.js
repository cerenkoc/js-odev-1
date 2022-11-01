let days = ["Pazar", "Pazartesi", "Salı" ,"Çarşamba", "Persembe", "Cuma", "Cumartesi"];
let userName = prompt("Lütfen adınızı giriniz");
let myName = document.querySelector("#myName");
myName.innerHTML = userName ;

function showTime(){
    let time = new Date();
    let day = days[time.getDay()];
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let secs = time.getSeconds();
    document.getElementById("myClock").innerHTML =`${hours}: ${minutes}: ${secs} ${day}`;
}
setInterval(showTime,1000);









