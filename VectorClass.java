import java.util.Scanner;
import java.util.Vector;

public class VectorClass {
    public static void main(String argd[]){
       
        try (Scanner input = new Scanner(System.in)) {
            Vector<String> vec = new Vector<>();
            // do{
            // for(int i=0; i<10; i++){
            System.out.println("Type your name");
            String name = input.nextLine();
            vec.add(name);
            // }
            System.out.println("You are Type" + vec);
            // }while(name=="xyz");
        }
    }
}
