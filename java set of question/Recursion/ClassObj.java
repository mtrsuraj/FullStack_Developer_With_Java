package Recursion;

public class ClassObj {
    public class Demo {
        int a = 10;
        String b = "ankush";

        public void Show() {
            System.out.println(a + " " + b + " ");
        }
    }

    public static void main(String[] args) {
        Demo r = new Demo();
        r.Show();

    }

}
