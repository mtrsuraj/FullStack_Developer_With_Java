import java.util.Scanner;

public class SeriesPatter {
    public static void main(String[] args) {
        int t1, t2 = 1, flag = 0, t4, count = 0;
        int n;
        try (Scanner sc = new Scanner(System.in)) {
            System.out.println("Enter number");
            n = sc.nextInt();
        }
        // int max = n;
        int[] arr1 = new int[n];
        // int[] arr2 = new int[max];
        // System.out.println(t2);
        for (int i = 0; i < n; i++) {
            if (i == 0) {
                arr1[i] = t2;
                continue;
            }

            t1 = t2 + i * 3;
            t2 = t1;
            arr1[i] = t1;

            // t1 = t2 + t3;
            // t4 = t1;
            // arr[i] = t1;
            // t2 = t1;
            // t3 = t3 + 3;
            // System.out.println(t1);

        }
        for (int i = 0; i < n; i++) {
            System.out.println(arr1[i]);
        }

        for (int i = 0; i < n; i++) {
            t4 = arr1[i];
            // System.out.println(t4);
            if (t4 > 1) {
                for (int j = 2; j < t4; j++) {
                    if (t4 % j == 0) {
                        flag = 1;
                        break;
                    }
                }
                if (flag == 0) {
                    System.out.println("Is Prime Number" + arr1[i]);
                    count = count + 1;
                } else
                    flag = 0;
            }
        }
        System.out.println("Total prime number is" + " " + count);

        for (int i = 0; i < n; i++) {
            t4 = arr1[i];
            // int temp = t4/100;

        }

    }
}
