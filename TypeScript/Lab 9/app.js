var foodItems = ['sandwich', 'pasta', 'pizza', 'burger'];
function sayHello() {
    console.log('It is working');
}
foodItems.forEach(function (item, index) {
    console.log("".concat(index + 1, " -- ").concat(item));
});
