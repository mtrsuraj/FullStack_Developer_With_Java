import java.util.Scanner;

public class palindrom_number {
    public static void main(String[] args) {

        System.out.println("Enter Target Number");
        try (Scanner sc = new Scanner(System.in)) {
            int num = sc.nextInt();
            int x, y = num;
            int rev = 0;
            while (num != 0) {
                x = num % 10;
                rev = rev * 10 + x;
                num /= 10;
            }
            if (rev == y) {
                System.out.println("that is palindrome number" + rev);
            } else
                System.out.println("not a palindrom number" + rev);
        }
    }
}
