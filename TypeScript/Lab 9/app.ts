const foodItems = ['sandwich','pasta','pizza','burger']

function sayHello(){
  console.log('It is working');
}

foodItems.forEach(function(item,index){
  console.log(`${index+1} -- ${item}`);
});

