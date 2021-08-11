function addNums(num1,num2){
    return (+num1) + (+num2);
}
function subNums(num1,num2){
    return (+num1) - (+num2);
}

function multiNums(num1,num2){
    return (+num1) * (+num2);
}

function divideNums(num1,num2){
    return (+num1) / (+num2);
}

function clear(){
    display.innerText = '0';
    num1 = '';
    num2 = '';
    ans = '';
    operator = '';
    isNum1 = true;
}



var num1 = "";
var num2 = "";
var ans = "";
var operator = "";
var isNum1 = true;
var sciMode = true;
var sinBtn = document.getElementById("sin");
var cosBtn = document.getElementById("cos");
var tangBtn = document.getElementById("tan");
var bracBtn = document.getElementById(")");
var modeBtn = document.getElementById("mode");
var equalButton = document.getElementById("equals");
var clearButton = document.getElementById("clear");
var numButtons = document.getElementsByClassName("number");
var decimalBtn = document.getElementById("decimal");
var display = document.getElementsByClassName('calculator__display')[0];
var opsButtons = document.getElementsByClassName("operator");
var minusBtn = document.getElementById("minus");
var keys = document.getElementById('keys');
var numButtonsArray = Object.assign([],numButtons);
numButtonsArray.push(minusBtn);
numButtonsArray.forEach(function(button){
    button.onclick = function(event){
        
            if(isNum1){
                if (num1 === "" ) {
                    if (event.target.value === "-") {
                     num1 += button.value;
                     console.log(num1); 
                     console.log('ddd');
                     display.innerText = num1; 
                    }
                    if (event.target.value === "Math.sin(" || event.target.value === "Math.cos("||event.target.value === "Math.tan(")
                    {
                        lastClickOprator = event.target.value;
                        num1 += button.value;
                        display.innerText = num1; 
                        
                    }
                    else {
                     num1 += button.value;
                     console.log(num1); 
                     console.log('sss');
                     display.innerText = num1; 
                    }
                      
                }
                else
                {
                   if ( event.target.value === ".") {
                    num1 += button.value;
                    console.log(num1);
                    console.log('zzz'); 
                    display.innerText = num1;
                    decimalBtn.disabled = true; 
                   }
                   else if ( event.target.value === ")"){
                    num1 += button.value;
                    num1 = eval(num1);
                    display.innerText = num1
                   }
                   else {
                    num1 += button.value;
                    console.log(num1); 
                    console.log('ppp');
                    display.innerText = num1;
                   }
                }
                
            }
            else
            {
                decimalBtn.disabled = false;
                if (num2 === "") {
                    if (event.target.value === "-") {
                        num2 += button.value;
                        console.log(num2); 
                        console.log('ddd');
                        display.innerText = num2; 
                       }
                    if (event.target.value === "Math.sin(" || event.target.value === "Math.cos("|| event.target.value === "Math.tan(")
                    {
                        
                        num2 += button.value;
                        display.innerText = num2; 
                        
                    }
                    else
                    {
                        num2 += button.value;
                        console.log(num2); 
                        console.log('nnn');
                        display.innerText = num2;   
                    }
                    
                }
                else
                {
                    if ( event.target.value === ".") {
                        num2 += button.value;
                        console.log(num2);
                        console.log('zzz'); 
                        display.innerText = num2;
                        decimalBtn.disabled = true; 
                       }
                   else if ( event.target.value === ")"){
                        num2 += button.value;
                        num2 = eval(num2);
                        display.innerText = num2;
                       }
                   else {
                    num2 += button.value;
                    console.log(num2); 
                    console.log('eee');
                    display.innerText = num2;
                   }
                }
            }
            
        
       
    }
});


var lastClickOprator = "";
var opsButtonsArray = Object.assign([],opsButtons);
opsButtonsArray.push(document.getElementById("minus"));

opsButtonsArray.forEach(function(button){
    button.onclick = function(event){
        if( event.target.innerText === "+" || event.target.innerText === "-" || event.target.innerText === "x" || event.target.innerText === "÷"){
           if (num1 !== "")
           {
            isNum1 = false;
            lastClickOprator = event.target.innerText;
           }
            
        }
    }
});




equalButton.onclick = function(event){
    if (lastClickOprator === "+") {
        ans = addNums(num1, num2);
        display.innerText = ans;
    }
    else if (lastClickOprator === "-") {
        ans = subNums(num1,num2);
        display.innerText = ans;
    }
    else if (lastClickOprator === "x") {
        ans = multiNums(num1,num2);
        display.innerText = ans;
    }
    else if (lastClickOprator === "÷") {
        if (num2 == "0") {
            console.log("fdsfdsf");
            display.innerText = 'ERR!';
            setTimeout(clear,3000);
        }
        else 
        {
        ans = divideNums(num1,num2);
        display.innerText = ans;
         }
    }
    
    
    num1 = ans;
    num2 = "";
    decimalBtn.disabled = false;
    
};

clearButton.onclick = function(event) {
    clear();
}
modeBtn.onclick = function(event) {
    if (sciMode == true)
    {
        sinBtn.style.display = "none";
        cosBtn.style.display = "none";
        tangBtn.style.display = "none";
        bracBtn.style.display = "none";
        sciMode = false;
        console.log("pppppp");
        keys.style.gridTemplateColumns = "auto auto auto auto"
        keys.style.gridTemplateAreas = '". . . . " "seven eight nine equal " "four five six equal " "one two three equal " "zero decimal clear negative " "mode mode mode mode "'
    }
    else
    {
        sinBtn.style.display = "grid";
        cosBtn.style.display = "grid";
        tangBtn.style.display = "grid";
        bracBtn.style.display = "grid";
        sciMode = true;
        console.log("ppeeep");
        keys.style.gridTemplateColumns = "auto auto auto auto"
        keys.style.gridTemplateAreas = '". . . . ." "seven eight nine equal sin" "four five six equal cos" "one two three equal tan" "zero decimal clear negative mode"'
        
    }
    

}