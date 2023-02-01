// function addNumbers(a: number, b: number) { 
//     return a + b; 
// } 
// var sum: number = addNumbers(10, 15) 
// console.log('Sum of the two numbers is: ' +sum); 
// let data = ["dsys","jony","name"];
// data.push("mans");
// data[3]="MN";
// data.push("werw");
// data.pop;
// data.pop();
// data.pop();
// console.warn(data);
// let value : string[] = ["xyz","abc","pqr","nmo"];
// value.push("10");
// console.warn(value);
// let user ={
//     name:"xyz",
//     age:20,
//     address:"usa"
// }
// user.name ="12";
// user.age=20;
// using interface
// interface userData{
//     name:string,
//     age:number,
//     address:string
// }
// let users:userData={
//     name:"banch",
//     age:200,
//     address:"kya hal hain"
// }
// any key 
// let userman:any={
//     name:"abc",
//     age:20,
//     address:"man is man"
// };
// userman.name=12;
// console.warn(userman);
// union type 
// let values:string|number|boolean="anil";
// values = 30;
// values="sjk";
// values=true;
// values=20.0909;
// console.warn(values);
// Function of typescript
// function cals(a:number, b:string) 
// {
// b;
// a;
// alert(`first value is ${b} and  second value is ${a}`);
// return a+b;
// }
// console.warn(cals(1, "hey"));
function returnSingleOne(a, b) {
    return a ? a + b : b;
}
console.warn(returnSingleOne(20));
