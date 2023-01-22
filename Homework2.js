// Task1

function checkAvailability(Hamburger, Fries) {
    if (Hamburger >= 3 && Fries >= 1) {
      return ('ми поїли');
    } else if (Hamburger < 3 && Fries < 1){
      return ('Ми йдемо в інше кафе');
    }
  }

  console.log(checkAvailability(3,1));

// Task2

function checkPrise(prise) {
    if (prise >=100 && prise <= 1900) {
      return ('вираз істинний');
  }
}
console.log(checkPrise(1800));


// Task3 

function CheckPriceValue1(prise1) {
    if (prise1 >= 1900 && prise1 <= 1000) {
      return;
    }
}

console.log(true) 
console.log(!true);


// Task4

function Season() {

let season = 2

if (season == 1)
      console.log("Winter")
 else if (season == 2)
      console.log("Spring")
else if (season == 3)
      console.log("Summer")
 else if (season == 4)
      console.log("Autumn")

return season;

}

Season();


// Task5 

  function Avg (a, b, c) {
    if (a > b) {
        if (a > c) {
          
          if (b > c)
            avg = b
          else
            avg = c
        }
        else 
          avg = a
      }
      else {
        
        if (b > c) {
          if (a > c)
            avg = a
          else
            avg = c
        }
        else
          avg = b
      }

  return avg;

}

console.log(Avg(3,2,1));


// Task6 

function WeekDay() {

    let number = '4';

    switch(number){
        case '1':
            console.log('Monday')
            break;
        case '2': 
            console.log('Tuesday')
            break;
        case '3':
            console.log('Wednesday')
            break;
        case '4':
            console.log('Thursday')
            break;
        case '5':
            console.log('Friday')
            break;
         case '6':
            console.log('Saturday')
            break;
         case '7':
            console.log('Sunday')
            break;
    }
        return number

}

WeekDay();


// Task7

1. 
function Calculation(a, b){
   
    let c1 = (a + b);  
    let c2 = (a - b); 
    let c3 = (a / b); 
    let c4 = (a * b);
    return c3

}

console.log(Calculation(30, 10));

2.
function Calculation1(a, b){
   
    let symbol = "/";

    switch (symbol){
        case '+':
            console.log(a + b)
            break;
        case '-': 
            console.log(a - b)
            break;
        case '*':
            console.log(a * b)
            break;
       case '/':
            console.log(a / b)
            break; 

    }
}

Calculation1(30, 10);

// Task8

function Name () {
    let str = 'Myroslava';
    let res = str.split('').filter(letter => !['y','o','a'].includes(letter.toLowerCase())).join('');

    return res;
}

console.log(Name())

// Task9

function calculationinKm () {

let distanceinM = 15
let distanceinKm = distanceinM / 1000
let mod = distanceinKm % 10

let ending = ""
if (mod == 1) {
    ending = ""
} else if ([2,3,4].includes(mod)) {
    ending = 'и';
} else if ([5,6,7,8,9,0].includes(mod)) {
    ending = 'ів';
} else if(!Number.isInteger(mod)) {
    ending = 'и';

}

    return distanceinKm + " кілометр" + ending;
}

console.log(calculationinKm())