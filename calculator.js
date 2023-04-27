






const add = document.getElementById("btn-1");
const sub = document.getElementById("btn-2");
const div = document.getElementById("btn-3");
const multi =document.getElementById("btn-4");
const input1 = document.getElementById("userinput-1");
const input2 = document.getElementById("userinput-2");
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




function test(){

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

test();

function answer (){



const outcome = document.getElementById("display");

outcome.innerHTML = input1.value;


};



answer ()
