var groceries = ["soap","shampoo","condtioner","hair dryer","lays","cold drinks"]

// adding grocery in start
var start_add = groceries.unshift("snacks")
console.log(groceries)
console.log(start_add)

// removing grocery from start
var remove_start = groceries.shift()
console.log(groceries)
console.log(remove_start)

// adding grocery in end
var add_end = groceries.push("fries")
console.log(groceries)
console.log(add_end)

// removing grocery from end 
var remove_end = groceries.pop()
console.log(groceries)
console.log(remove_end)



groceries.splice(2,2,"fruits")
console.log(groceries)



var myCopiedGrocery = groceries.slice(0,2)
console.log(myCopiedGrocery)