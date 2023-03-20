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

function combine(input1:number | String, input2:number | String){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    }else {
        result = input1.toString()+input2.toString();
    }
    return result;
    
}

let result = combine('a', 'b');
console.log(result);
