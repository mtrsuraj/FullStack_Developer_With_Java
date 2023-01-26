public class Main {

    // 139 367 569

    public static void main(String[] args) {
        int arr[] = { 139, 252, 367, 495, 569, 629, 789, 834, 935 };
        boolean isPrime = true;
        boolean isAscending = true;

        for (int i = 0; i < 9; ++i) {
            int num = arr[i];
            isPrime = true;

            // Prime
            for (int j = 2; j < (int) Math.sqrt(num) && isPrime; ++j) {
                if (num % j == 0) {
                    isPrime = false;
                }
            }

            // Ascending
            int p = 10;
            int c = 0;
            isAscending = true;

            while (num > 0 && isAscending) {
                c = num % 10;

                if (c > p) {
                    isAscending = false;
                } else {
                    p = c;
                    num /= 10;
                }
            }
            // if (arr[i] == 789) {
            // continue;
            // }

            if (isAscending && isPrime) {
                System.out.print(arr[i] + " ");

            }
        }
    }
}
