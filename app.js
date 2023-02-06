alert ("JavaScript Practice")

var name = "Naif"
var nationality = "Pakistani"
var jd = "Sales Manager"

alert (name)
alert (nationality)
alert (jd)

var age = 19
alert (age)

var ageAddedBySomeone = 6
alert (ageAddedBySomeone)

var totalAge =  age + ageAddedBySomeone
alert (totalAge)

// var a = 1;
// alert (a)  //1

// alert (a++)  //1
//2
// alert(a)  //2

// alert (++a)  // 3
// alert(a)  // 3

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
var age = prompt("Enter your age")
// var mobile_number = prompt("Enter your mobile number")

// alert ("Your Details" + " " + firstName + " " + lastName + " " + age + " " + mobile_number)
 
if(age >= 18){
  alert("Congratulations! You Are Hired")
}
else {
    alert("Sorry! You Are Not Hired")
}

var Days = prompt("Which Day Workout You Want To Know?")

if (Days == "Monday") {
    alert("Chest")
}
else if (Days == "Tuesday") {
    alert("Wings")
}
else if (Days == "Wednesday") {
    alert("Shoulder")
}
else if (Days == "Thursday") {
    alert("Biceps")
}
else if (Days == "Friday") {
    alert("Triceps")
}
else if (Days == "Saturday") {
    alert("Forearms+legs")
}
else  {
    alert("Holiday")
}