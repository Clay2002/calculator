
const input1 = document.getElementById("userinput-1");
const input2 = document.getElementById("userinput2");
const enter = document.getElementById("enter");
const outcome = document.getElementById("display");



function clearInput(){

    const input1 = document.getElementById("userinput-1");
    const input2 = document.getElementById("userinput-2");

    if(input1.value !=""){
        input1.value = "";
  
    }
    if(input2.value !=""){
        input2.value = "";
  
    }

};


function numInputOne(){

document.querySelector("#num-1").addEventListener('click', function(){ input1.value =  "1"; });
document.querySelector("#num-2").addEventListener('click', function(){ input1.value =  "2"; });
document.querySelector("#num-3").addEventListener('click', function(){ input1.value =  "3"; });
document.querySelector("#num-4").addEventListener('click', function(){ input1.value =  "4"; });
document.querySelector("#num-5").addEventListener('click', function(){ input1.value =  "5"; });
document.querySelector("#num-6").addEventListener('click', function(){ input1.value =  "6"; });
document.querySelector("#num-7").addEventListener('click', function(){ input1.value =  "7"; });
document.querySelector("#num-8").addEventListener('click', function(){ input1.value =  "8"; });
document.querySelector("#num-9").addEventListener('click', function(){ input1.value =  "9"; });



};



function answer (){

const outcome = document.getElementById("display");

outcome.innerHTML =" outcome:"+ input1.value;


};


function calculat (){

const add = document.getElementById("add");
const sub = document.getElementById("sub");
const div = document.getElementById("divi");
const multi =document.getElementById("multi");

boxvalue = document.getElementById("userinput-1").value;
boxvalue2 = document.getElementById("input-2").value;


var items = [];

items.push(boxvalue);  
items.push(boxvalue2);  





console.log(items);

const outcome = document.getElementById("display");

outcome.innerHTML =" outcome:"+ items;


const add1 = items[0] + items[1];
const sub1 = (items[0] - items[1]);
const div1 = (items[0] / items[1]);
const multi1 = (items[0] * items[1]);


const multiItems = (items[0] * items[1]);

console.log (multiItems);

}


function add() {

    console.log(items[0] + items[1]);



    console.log("hello");



}

add();



calculat();
