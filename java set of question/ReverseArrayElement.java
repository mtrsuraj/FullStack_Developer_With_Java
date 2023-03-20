import java.util.Scanner;

public class ReverseArrayElement {
    public static void main(String[] args) {
        int[] array = new int[5];
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter array element");
        for (int i = 0; i < array.length; i++) {
            array[i] = scanner.nextInt();

        }
        for (int i = array.length - 1; i >= 0; i--) {
            System.out.println(array[i]);

        }

    }

}
