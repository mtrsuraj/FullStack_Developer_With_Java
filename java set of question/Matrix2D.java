import java.util.Scanner;

public class Matrix2D {
    public static void main(String[] args) {
        System.out.println("enter matrix size ");
        Scanner sc = new Scanner(System.in);
        int num;
        num = sc.nextInt();
        int[][] matrix = new int[num][num];

        for (int i = 0; i < num; i++) {
            for (int j = 0; j < num; j++) {
                matrix[i][j] = sc.nextInt();
            }
            System.out.println();
        }

        for (int i = 0; i < num; i++) {
            for (int j = 0; j < num; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }

    }

}
