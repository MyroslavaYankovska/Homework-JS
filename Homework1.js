// Task1

let Hamburger = 4;
let Fries = 1;

if(Hamburger >= 4 && Fries >= 1){
    console.log('ми поїли')
} else if (Hamburger < 4 && Fries < 1){
    console.log('Ми йдемо в інше кафе')
}


// Task2

let prise = 1900;
if (prise >=1000 && prise <= 1900){ 
    console.log('вираз істинний')
}

// Task3

if (!(price1 >= 1000 && price1 <= 1900))

if (price1 < 1000 || price1 > 1900)

// Task4

let season = 4;

if (season == 1)
  console.log("Winter")
else
if (season == 2)
  console.log("Spring")
else
if (season == 3)
  console.log("Summer")
else
if (season == 4)
  console.log("Autumn")


// Task5

let a = 3, b = 2, c = 1
let avg

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
  
  console.log("avg(" + a + ", " + b + ", " + c + ") = " + avg)

// Task6

let number = '3';

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

// Task7

let d = 3;
let e = 1;
let symbol = "/";

switch (symbol){
    case '+':
        console.log(d + e)
        break;
    case '-': 
        console.log(d - e)
        break;
    case '*':
        console.log(d * e)
        break;
   case '/':
        console.log(d / e)
        break; 
}

// Task8

let str = 'Myroslava';
let res = str.split('').filter(letter => !['y','o','a'].includes(letter.toLowerCase())).join('');
console.log(res);

// Task9

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

let answer = distanceinKm + " кілометр" + ending

console.log(answer)