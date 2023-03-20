//object
// let person={
//     name: "John",
//     age:32,
//     address:"patliputra",
//     hobbies:['sports', 'cooking', 'food']
// }
// console.log(person.hobbies[1]);
// let students:any[];
// students = ["name", "ange", 32, '12/10/1223'];
// for(let stu of students){
//     console.log(stu);
// }
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var result = combine('a', 'b');
console.log(result);
