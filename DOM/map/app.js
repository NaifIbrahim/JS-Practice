// MAP USE
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr)

// CALLBACK FUNCTION

const bakeryitems = ["jam","bun","eggs","milk","butter","biscuits"]

function myfunc(abc){
 console.log(bakeryitems)
 abc()
}

myfunc(myfunc2)

function myfunc2(){
    console.log("Ye sab available hai bakery me")
   }
   