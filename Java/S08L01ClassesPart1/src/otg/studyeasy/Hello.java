package otg.studyeasy;

public class Hello {
	public static void main(String[] args) {
		Car car = new Car("closed", "off", "seated", 10);
//		car.speed = 2;
//		System.out.println(car.speed);
//		car.setSpeed(10);
//		System.out.println(car.getSpeed());
		
//		car.setDoors("open");
//		car.setDriver("seated");
//		car.setEngine("on");
//		car.setSpeed(10);
//		System.out.println(car.getDoors());
		System.out.println( car.run());
		
	}

}
