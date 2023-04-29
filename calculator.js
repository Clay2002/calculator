
const input1 = document.getElementById("userinput-1");
const input2 = document.getElementById("userinput2");
const enter = document.getElementById("enter");
const outcome = document.getElementById("display");



function clearInput(){

    const input1 = document.getElementById("userinput-1");
    const input2 = document.getElementById("input-2");

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

outcome.innerHTML ="outcome:" + items;




if (operation.innerText == "*"){
const multiItems = (items[0] * items[1]);

console.log (multiItems);
outcome.innerHTML =" outcome:"+ multiItems;
}
if (operation.innerText == "+"){
    const addItems = (items[0] + items[1]);
    
    console.log (addItems);
    outcome.innerHTML =" outcome:"+ addItems;
    }
    if (operation.innerText == "-"){
        const subItems = (items[0] - items[1]);
        
        console.log (subItems);
        outcome.innerHTML =" outcome:"+ subItems;
        }
        if (operation.innerText == "/"){
            const diviItems = (items[0] / items[1]);
            
            console.log (diviItems);
            outcome.innerHTML =" outcome:"+ diviItems;
            }

}



function addOperation(){

    let operation = document.getElementById("operation");
    operation.innerText = "+";
}
function subOperation(){

    let operation = document.getElementById("operation");
    operation.innerText = "-";
}
function multiOperation(){

    let operation = document.getElementById("operation");
    operation.innerText = "*";
}
function diviOperation(){

    let operation = document.getElementById("operation");
    operation.innerText = "/";
}



calculat();
numInputOne();