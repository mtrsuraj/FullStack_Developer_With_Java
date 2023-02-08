public class Assessment {
    public static void main(String[] args) {
        int[] arr = new int[31];
        int t1, t2 = 1, t3 = 0, t4 = 0, sum = 0;
        int sum1 = 0, sum2 = 0;
        int sum3 = 0;
        for (int i = 0; i < arr.length; i++) {
            t1 = t2 + t3;
            t2 = t1;
            t3 += 2;
            arr[i] = t1;
            t4 += 1;
            System.out.println(arr[i]);
        }
        System.out.println("element hold in array :" + t4);
        System.out.println("for April :");
        for (int i = 0; i < arr.length - 1; i++) {
            sum += arr[i];
            sum3 = sum;
            // i+=1;
            // totalSum=sum;

            if (i % 4 == 0) {
                sum1 = sum1 + arr[i];
            } else if (i % 5 == 0) {
                sum2 = sum2 + arr[i];
            }
        }
        System.out.println("total sold :" + sum3);
        System.out.println("retail :" + sum1);
        System.out.println("corporate :" + sum2);
        System.out.println("for April :");
        sum1 = 0;
        sum2 = 0;
        sum3 = 0;
        System.out.println("for may :");
        int x = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
            sum3 = sum;
            x = x + arr[i];
            // totalSum=totalSum+sum;

            if (i % 4 == 0) {
                sum1 = sum1 + arr[i];
            } else if (i % 5 == 0) {
                sum2 = sum2 + arr[i];
            }
        }
        System.out.println("total sold :" + x);
        System.out.println("retail :" + sum1);
        System.out.println("corporate :" + sum2);
        sum1 = 0;
        sum2 = 0;
        sum3 = 0;
        System.out.println("for June :");
        x = 0;
        for (int i = 0; i < arr.length - 1; i++) {
            sum += arr[i];
            sum3 = sum;
            x = x + arr[i];

            if (i % 4 == 0) {
                sum1 = sum1 + arr[i];
            } else if (i % 5 == 0) {
                sum2 = sum2 + arr[i];
            }
        }
        System.out.println("total sold :" + x);
        System.out.println("retail :" + sum1);
        System.out.println("corporate :" + sum2);
        sum1 = 0;
        sum2 = 0;
        sum3 = 0;
        System.out.println("for july :");
        x = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
            sum3 = sum;
            x = x + arr[i];

            if (i % 4 == 0) {
                sum1 = sum1 + arr[i];
            } else if (i % 5 == 0) {
                sum2 = sum2 + arr[i];
            }
        }
        System.out.println("total sold :" + x);
        System.out.println("retail :" + sum1);
        System.out.println("corporate :" + sum2);
        sum1 = 0;
        sum2 = 0;
        sum3 = 0;
        System.out.println("for august :");
        x = 0;
        int veh = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
            sum3 = sum;
            x = x + arr[i];

            if (i % 4 == 0) {
                sum1 = sum1 + arr[i];
            } else if (i % 5 == 0) {
                sum2 = sum2 + arr[i];
            }
            if (i >= 15 && i <= 31) {
                veh += arr[i];
            }
        }
        System.out.println("total sold :" + x);
        System.out.println("retail :" + sum1);
        System.out.println("corporate :" + sum2);
        sum1 = 0;
        sum2 = 0;
        sum3 = 0;
        System.out.println("for september :");
        x = 0;
        for (int i = 0; i < arr.length - 1; i++) {
            sum += arr[i];
            sum3 = sum;
            x = x + arr[i];

            if (i % 4 == 0) {
                sum1 = sum1 + arr[i];
            } else if (i % 5 == 0) {
                sum2 = sum2 + arr[i];
            }
            if (i <= 15) {
                veh += arr[i];
            }
        }
        System.out.println("total sold :" + x);
        System.out.println("retail :" + sum1);
        System.out.println("corporate :" + sum2);
        System.out.println("total sum of six month :" + sum);

        System.out.println("For Aug 15th to Sep 15th :" + veh);
        // for(int i=0; i < arr.length; i++) {
        // if()

        // }

    }

}
