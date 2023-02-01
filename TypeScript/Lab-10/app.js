//Interfaces 
var message = "Typesript lab 10";
console.log(message);
//enum declaration
//Define enum RestaurantType to store the type of restaurants
var RestaurantType;
(function (RestaurantType) {
    RestaurantType[RestaurantType["fastfood"] = 0] = "fastfood";
    RestaurantType[RestaurantType["cafeteria"] = 1] = "cafeteria";
    RestaurantType[RestaurantType["coffehouse"] = 2] = "coffehouse";
    RestaurantType[RestaurantType["Bistros"] = 3] = "Bistros";
})(RestaurantType || (RestaurantType = {}));
;
//Declaring Restaurant using the contract
var subwayRestaurant = {
    Name: 'subway',
    Address: '124/A',
    phone: 4565774,
    type: RestaurantType[RestaurantType.cafeteria]
};
//Modify the function RestaurantDetails to accepts a type of the contract defined, to view the restaurant details.
var RestaurantDetails = function (rest) {
    //display the restaurant details
    console.log("Name:".concat(rest.Name, " Address:").concat(rest.Address, " Phone: ").concat(rest.phone, "  Restaurant Type: ").concat(rest.type));
};
//call the function to view the result
RestaurantDetails(subwayRestaurant);
