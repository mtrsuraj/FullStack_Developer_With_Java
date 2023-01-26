public class Maina {
    // 256 518 645
    public static void main(String[] args) {
        int arr[] = { 141, 256, 384, 497, 518, 645, 723, 824, 910 };
        int sum = 0;
        boolean flag = false;

        for (int i = 0; i < 9; ++i) {
            int num = arr[i];

            while (num > 0) {
                if (num % 10 == 5) {
                    flag = true;
                    break;
                }
                num /= 10;
            }

            if (flag) {
                System.out.print(arr[i] + " ");
            }
        }
    }
}
