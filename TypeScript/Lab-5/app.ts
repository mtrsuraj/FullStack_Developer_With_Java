//Write your typescript code here
var message:string = " Lab-5";
function totalPrice(n1:number,n2:number,showRest: boolean){
    if(showRest)
    {
      console.log(n1+n2);
    }
    else
    {
    return n1+n2;
    }
}

const itemPrice = 50;
const deliveryCharge= 15.7;
const showRest=false;

const result= totalPrice(itemPrice,deliveryCharge,showRest);
console.log("Total Price of Item = "+result)

//print the message in console