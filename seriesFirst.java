import java.util.Scanner;

public class seriesFirst {
    public static void main(String args[]) {
        int t1 = 1, t2 = 3, t3, t4 = 6, n;
        try (// 1, 4, 10, 19...
                Scanner sc = new Scanner(System.in)) {
            n = sc.nextInt();
        }
        int[] arr = new int[n];
        arr[0] = t1;
        System.out.print(t1 + " ");
        for (int i = 1; i < arr.length; i++) {
            if (t4 == i) {
                // t4=i;
                t4 = t4 + 6;
                t2 = t2 + 3;
                // i=i+6;
                continue;
            }
            // t4=i;
            // flag=flag+1;
            t3 = t1 + t2;
            t1 = t3;
            t2 = t2 + 3;

            arr[i + 1] = t3;
            // System.out.print(t3 +" ");

        }
        System.out.println("Array Elements");
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);

        }
    }

}
