let userRole = ["name", "gender", 22];
// console.log(userRole);
// console.log(userRole(0));
console.log(userRole[0]);
userRole.pop();
console.log(userRole);
// pop();
userRole[2] = "man";
console.log(userRole);
console.log(userRole.length);
if(userRole[0]==="name"){
    console.log("you are inside of if")
    console.log(`${userRole[0]}`);
}