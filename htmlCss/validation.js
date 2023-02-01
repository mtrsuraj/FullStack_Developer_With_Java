// function validate(){
//     if(document.myName.email.value==""){
//         alert("please prvide your email ID");

//         document.myName.email.focus()
//         return false;
//     }else if(document.myName.password.value==""){
//         alert("please provide your password");

//         document.myName.password.focus()
//         return false;
//     }
//     else{
//         return true;
//     }
// }



//let validate = ()=>{    //ARROW FUNCTION
let validate = function(){
    if(document.myForm.fname.value==""){
        alert("Please enter your name");

        document.myForm.email.value.focus();
        return false;
    }else if(document.myForm.email.value==""){
        alert("Please put your email");

        document.myForm.password.value.focus()
        return false;
    }else if(document.myForm.password.value==""){
        alert("Please give your password");

        document.myForm.password.value.focus()
        return false;
    }

    else return true;
}