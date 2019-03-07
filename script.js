const screen_div = document.querySelector(".screen > p"); //Accesing the calculator screen
var x = [];      // The data entered by the user will be stored here
var number = 0; // With his help the number will be formed
var ctr=0;     //With the help of it will be able to continue the operations after equal

//Formation number and add on the calculator screen
function formareNumar(nr) {
       number = number * 10 + nr;
       screen_div.innerHTML = number;
       document.getElementById(nr).classList.add("gray-glow");
       setTimeout(function(){document.getElementById(nr).classList.remove("gray-glow")},300);
       
    }

//Addition    
function plus(){
    ctr=0;
     var i = x.length - 1;
    if (typeof(x[i]) ==="number") {
         x.push('+');
    } else {
        x.pop();//Clean number=0;
        x.pop();//Clean the last sign
        x.push('+');
         }
       console.log('plus= ',x); 
   document.getElementById("plus").classList.add("gray-glow");
  setTimeout(function(){document.getElementById("plus").classList.remove("gray-glow")},300);    
}

//Minus
function minus(){
    ctr=0;
        var  i = x.length - 1;
    if (typeof(x[i]) === "number") {
         x.push('-');
    } else {
        x.pop();//Clean number=0;
        x.pop();//Clean the last sign
        x.push('-');
         }
       console.log('minus= ',x)
    document.getElementById("minus").classList.add("gray-glow");
    setTimeout(function(){document.getElementById("minus").classList.remove("gray-glow")},300);    
}

//Multiplication
function inmultit(){
   ctr=0;
    var  i = x.length - 1;
    if (typeof(x[i]) === "number") {
         x.push('*');
    } else {
        x.pop();//Clean number=0;
        x.pop();//Clean the last sign
        x.push('*');
         }
         console.log('inmultit= ',x);
    document.getElementById("inmultit").classList.add("gray-glow");
    setTimeout(function(){document.getElementById("inmultit").classList.remove("gray-glow")},300);   
}

//Division
function impartit(){
    ctr=0;
    var i = x.length - 1;
    if (typeof(x[i]) === "number") {
         x.push('/');
    } else {
        x.pop();//Clean number=0
        x.pop();//Clean the last sign
        x.push('/');
         }
       console.log('impartit= ',x);
 document.getElementById("impartit").classList.add("gray-glow");
 setTimeout(function(){document.getElementById("impartit").classList.remove("gray-glow")},300);           
}

//Equal
function egal() {
    ctr++; 
document.getElementById("egal").classList.add("gray-glow");
setTimeout(function(){document.getElementById("egal").classList.remove("gray-glow")},300);     
console.log('egal= ',x);
  var a=0;
  if (ctr === 1){
    while (x.length !== 1) {
   if (x[1] === "+") {
       a = x[0] + x[2];
       x.shift();
       x.shift();
       x.shift();
       x.unshift(a);
       console.log(x);
   } else if (x[1] === "-") {
       a = x[0] - x[2];
       x.shift();
       x.shift();
       x.shift();
       x.unshift(a);
       console.log(x);
   } else if (x[1] === "*") {
    a = x[0] * x[2];
    x.shift();
    x.shift();
    x.shift();
    x.unshift(a);
    console.log(x);
     }if (x[1] === "/") {
        a = x[0] / x[2];
        x.shift();
        x.shift();
        x.shift();
        x.unshift(a);
        console.log(x); 
        }
}  

    screen_div.innerHTML = Math.round(x*100)/100 ;
   x[0] = Math.round(x*100)/100;
}
   console.log(x);
}

//Operation for buttons : '+','-','*','/'
function operatie(op){
      
      if (ctr === 0){
        x.push(number);
      number = "0";
      } else {
          if (ctr === 1) { 
              x.push('=');
              x.push('0');}
          ctr = 1;
                   
      }
      
     switch (op) {
        case "+" :
         plus();
         break;
        case "-":
         minus();
         break;
        case "*":
        inmultit();
        break;
        case "/":
        impartit();
        break;
        case "=":
        egal();
        break;
      
      }  
};

//Button 'KM => Mile'
function kmtomile(){
document.getElementById("KM").classList.add("gray-glow");
setTimeout(function(){document.getElementById("KM").classList.remove("gray-glow")},300);   
   screen_div.innerHTML=Math.round( (number * 0.621371192)*100)/100;
   number="";
    }

 //Button Mile => KM   
function miletokm(){
    document.getElementById("miles").classList.add("gray-glow");
    setTimeout(function(){document.getElementById("miles").classList.remove("gray-glow")},300);   
    screen_div.innerHTML=Math.round( (number * 1.609344)*100)/100;
    number="";
    }

// Button Celsius => Kelvin
function celsiustokelvin(){
    document.getElementById("CtoK").classList.add("gray-glow");
    setTimeout(function(){document.getElementById("CtoK").classList.remove("gray-glow")},300);   
    screen_div.innerHTML=Math.round((number+273.15)*100)/100;
    number="";
}

// Button Celsius => Fahrenheit
function celsiustofahrenheit(){
    document.getElementById("CtoF").classList.add("gray-glow");
    setTimeout(function(){document.getElementById("CtoF").classList.remove("gray-glow")},300);       
    screen_div.innerHTML=Math.round(((number*(9/5))+32)*100)/100;
    number="";
}

//Button "C"
function again(){
    document.getElementById("C").classList.add("gray-glow");
    setTimeout(function(){document.getElementById("C").classList.remove("gray-glow")},300);   
    screen_div.innerHTML= "" ;
    number = 0;
    x = [];
}


