	 //Create a namespace PriceCalculator
     var message="TypeScript LAB 13"
     console.log(message);
     namespace PriceCalculator {
        export function OrderPrice(orderAmount:number, discount: number){
          return orderAmount- discount;
        }
       
    }
	//add a function OrderPrice(orderAmount, discount) to return the discounted order price

