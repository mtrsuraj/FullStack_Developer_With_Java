import java.util.Scanner;
import java.util.Vector;

public class SuperWheels {
    public static void main(String[] args) {
        //// Vector<Integer> v = new Vector<Integer>(100);
        // Scanner sc = new Scanner(System.in);
        // int n = sc.nextInt();
        int[] arr = new int[62];
        int t1, t2 = 1, t3 = 0, sum = 0, sum1 = 0, sum2 = 0;
        // System.out.println(t2);
        // arr[0] = t2;
        for (int i = 0; i < arr.length; i += 2) {

            t1 = t2 + i;
            t2 = t1;
            // t3 += 2;
            arr[i] = t1;
            t3++;
            // System.out.println(t1);
        }
        System.out.println("For D4: " + t3);
        // for (int i = 0; i < arr.length; i += 2) {
        // System.out.print(arr[i]);
        // }
        // System.out.println("for month april");
        for (int i = 0; i < 60; i += 2) {
            System.out.println("April :" + arr[i]);
            sum = sum + arr[i];
        }
        System.out.println("total sold for April month :" + sum);
        for (int i = 0; i < arr.length; i += 2) {
            // if (i == 0) {
            // continue;
            // }
            if (i % 4 == 0) {
                sum2 = sum2 + arr[i];
            } else if (i % 5 == 0) {
                sum1 = sum1 + arr[i];
            }

        }
        System.out.println("for April sold to retilers :" + sum);
        System.out.println("for April sold to corporate :" + sum1);

    }

}
