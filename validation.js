console.log("hello");


let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "mdanwarul064",
    "email": "mdanwarul064@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}



submit.addEventListener("click",  async(e) => {
    e.preventDefault()
    console.log("cliked");

resultcount.innerHTML = `<img src="loading.svg.svg" alt="loading svg" width="50px">`

    
let key = "ema_live_OizWoZ5bA6huT3ehXSdEwBVw8TzIyeZICBN6qtg0";
let email=document.getElementById("username").value;

let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

let res= await fetch(url);
let result= await res.json()

let str = '';
for (key of Object.keys(result)) {
    if(result[key] !=="" && result[key] !== " "){
    str = str + `<div> ${key} : ${result[key]}</div>`
}}
console.log(str);
resultcount.innerHTML=str;
})




