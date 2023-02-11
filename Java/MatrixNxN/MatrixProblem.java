class MatrixProblem {

    public static void printArray(int arr1[]) {
        for (int i = 1; i < arr1.length - 1; i++) {
            System.out.print(arr1[i] + " ");
        }
    }

    public static void main(String[] args) {
        // int t1, t2 = 0, t3 = 1;
        int p1, p2 = 1, p3 = 0;
        int[][] arr = new int[20][20];
        int res = 0;
        for (int i = 0; i < arr.length; i++) {
            int t1, t2 = 0, t3 = 1;
            // int p1, p2 = 1, p3 = 1;
            for (int j = 0; j < arr.length; j++) {
                t1 = t2 + t3;
                t2 = t3;
                t3 = t1;
                res = res + t1;
                arr[i][j] = res;
                // System.out.print(res + " ");
            }
            // System.out.println();

            p1 = p2 * p2 + p3;
            // System.out.print(p1);
            res = p1;
            p3 = p1;
            t1 = p1;
            p2++;

        }
        for (int i = 0; i < arr.length; i++) {
            System.out.print(i + " ");
            for (int j = 0; j < arr.length; j++) {
                System.out.print(" " + arr[i][j]);
            }
            System.out.println();
        }
        System.out.println();
        System.out.println();
        System.out.println("------------------level-2---------------------");
        System.out.println();
        System.out.println();

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                if (i == 0) {
                    System.out.print(" " + arr[i][j]);
                }

            }
        }
        System.out.println();
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                if (i == j) {
                    System.out.print(" " + arr[i][j]);
                }

            }
        }
        System.out.println();
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                if (i == 19) {
                    System.out.print(" " + arr[i][j]);
                }

            }
        }
        System.out.println();
        int[] arr1 = new int[20];
        for (int i = 1; i < arr.length; i++) {
            for (int j = arr.length - 2; j > 0; j--) {
                if (i + j == 19) {
                    // System.out.print(" " + arr[i][j]);
                    arr1[i] = arr[i][j];
                }

            }
        }
        // System.out.println();
        // bubble sort
        for (int i = 1; i < arr1.length - 1; i++) {
            for (int j = 1; j < arr1.length - i - 1; j++) {
                // swap
                if (arr1[j] > arr1[j + 1]) {
                    int temp = arr1[j];
                    arr1[j] = arr1[j + 1];
                    arr1[j + 1] = temp;
                }
            }

        }
        printArray(arr1);

    }
}