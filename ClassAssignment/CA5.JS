const userDetailsFromDatabase = {
    firstName:"Naif",
    lastName:"Ibrahim",
    mobileNumber:"03041025571",
    password:123456,
    DOB:"13/12/2003",
    gender:"male"
}
// console.log(userDetailsFromDatabase)

// const askDetail = prompt("which detail you want to ask?")

// console.log(userDetailsFromDatabase[askDetail])

const loginDetails = {
    userNumber:03041025571,
    userPw:123456
}

const mobileNumber = prompt("Enter your mobile number to login")
const userpw = prompt("Enter your password to login")

if( mobileNumber == userDetailsFromDatabase.mobileNumber,userpw == userDetailsFromDatabase.password){
 alert("login Successful")
}
else {
    alert("invalid mobilenumber or password")
}


