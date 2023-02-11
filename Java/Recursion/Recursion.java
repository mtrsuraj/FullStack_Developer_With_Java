package Recursion;

public class Recursion {

    public void print(int x) {
        if (x == 3) {
            return;
        }
        System.out.println("hi caller" + x);
        x++;
        print(x);
    }

    public static void main(String[] args) {
        Recursion rec = new Recursion();
        int i = 0;
        rec.print(i);

    }
}