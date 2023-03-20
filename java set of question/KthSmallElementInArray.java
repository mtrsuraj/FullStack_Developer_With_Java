import java.util.Scanner;

public class KthSmallElementInArray {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.println("Enter size of array");
            int n = sc.nextInt();
            int[] arr = new int[n];
            int smallestElementIs = 0;
            System.out.println("Enter element of array");
            for (int i = 0; i < arr.length; i++) {
                arr[i] = sc.nextInt();
            }

            for (int i = 0; i < arr.length; i++) {
                // System.out.println(arr[i]);
                if (arr[i] >= 0) {
                    int x = arr[i];
                    int y = arr[i + 1];
                    if (x > y) {
                        int temp = x;
                        x = y;
                        y = temp;
                    }

                    // System.out.println(y + " ");
                    smallestElementIs = y;

                }

            }
            System.out.println(smallestElementIs);
        }

    }

}
