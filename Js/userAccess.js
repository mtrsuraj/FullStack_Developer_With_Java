//--------------Three ways to create function---------

// function userAccess(name, role){
    // let userRole = function(name, role){
        let userRole = (name, role) =>{
    switch (role) {
        case "admit":
            return `${name} is admin with all access`
            break;
        case "subadmit":
            return `${name} is subadmin with create and delet contant`       
            break;
        case "testing":
            return `${name} is check course for which year`        
            break;
        case "master":
            return `${name} is master of course`       
            break;
        default:
           return `${name} not part of course`
            break;
    }
}
// let result = userAccess("suman", "admit");
// console.log(result);
console.log(userRole("sunny", "testing"));