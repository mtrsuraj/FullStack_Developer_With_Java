//Write your typescript code here
var message = " Lab-5";
function totalPrice(n1, n2, showRest) {
    if (showRest) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var itemPrice = 50;
var deliveryCharge = 15.7;
var showRest = false;
var result = totalPrice(itemPrice, deliveryCharge, showRest);
console.log("Total Price of Item = " + result);
//print the message in console
