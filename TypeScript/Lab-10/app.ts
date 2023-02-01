//Interfaces 
var message="Typesript lab 10"
console.log(message);
//enum declaration
//Define enum RestaurantType to store the type of restaurants
enum RestaurantType{'fastfood','cafeteria','coffehouse','Bistros'};


//Restaurant Interface declaration
interface Restaurantinfo{
    Name:String,
    Address:String,
    phone:Number,
    type:String,
}

//Declaring Restaurant using the contract
let subwayRestaurant: Restaurantinfo={
    Name:'subway',
    Address:'124/A',
    phone:4565774,
    type: RestaurantType[RestaurantType.cafeteria],
}

//Modify the function RestaurantDetails to accepts a type of the contract defined, to view the restaurant details.
   let RestaurantDetails = (rest:Restaurantinfo) =>{
	//display the restaurant details
    console.log(`Name:${rest.Name} Address:${rest.Address} Phone: ${rest.phone}  Restaurant Type: ${rest.type}`)
}

//call the function to view the result
RestaurantDetails(subwayRestaurant);

