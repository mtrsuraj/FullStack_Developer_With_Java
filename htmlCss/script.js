// var trainer ={
//     name : "xyz",
//     location : "bangalore",
//     age : 22,
//     salary : 10000,
//     isAvailable : true
// };

// window.alert("Your age is_" + trainer.age);
// document.write(trainer);

// let customers = {
//     id : 1009,
//     name : "abc",
//     registerDate : 10/02/2022,
//     type : {
//         action : "regular",
//         actions : "register",
//     },
//     actives : true

// }

// var order={
//     id : 2202,
//     date : 20/03/2022,
//     totalOrder : 20,
//     customer : {
//         fname : "first_name",
//         lname :"Last_name",
        

//     }

// }
// window.alert("fullname" + "=" + order.customer.fname +" "+ order.customer.lname);

// let item = {
//     id : "a1b3c",
//     name : "man",
//     type : [ "you are in array" +"\n" +"fname" + "\n"+ "lname"],


// };

// window.alert(item.type);
// console.log(item);
// console.log(order);
// console.log(customer);
// console.log(trainer);

// let Employee = function(){
//    this.name = "suraj";
//     age = 22;
//     gender = "Male";

// }

// // let objEmployee = new Employee();
// // console.log(objEmployee.name);

// // let Employee = function(){
    
// //     this.name = "suraj";
// //     this.age = 22;
// //     this.gender = "Male";
 
// //  }
 
// let objEmployee = new Employee();
//  console.log(objEmployee);
 
// let customer = fun

// function Employee(){
//     this.name = "";
//     this.age = 0;
//     this.gender = "";
//     let salary = 10000.00;
//     this.getPayment = function(){
//         // "You are inside of function";
//         return salary;
        
//     };
// };

// let employee1 = new Employee();
// let employee2 = new Employee();
// employee1.name = "abz";
// employee1.age = 20;
// employee1.gender = "male";


// console.log(employee1);
// employee2.name = "name";
// employee2.age = 22;
// employee2.gender = "female";

// console.log(employee1.getPayment);
// getPayment();
// console.log(Employee.getPayment());


function companyOrder(name, description, licence, active, branch, licenceDate, openingDate, closingDate){
    this.name =  prompt(`Write your company name ${name}`);
    this.description = prompt(`write about the company${description}`);
    this.licence=prompt(`press key ${licence}`);
    active=prompt(`you are active or not${active}`); //scopes remove 
    this.branch = prompt(`Which branch from you are ${branch}`);
    this.licenceDate=prompt(`licence issue date ${licenceDate}`);
    this.openingDate = prompt(` company opening date ${openingDate}`)
    this.closingDate=prompt(`closing date ${closingDate}`)
}

let companyOrderObj = new companyOrder();

let listOfCompanyOrder = [
    
]
console.log(companyOrderObj.name);
