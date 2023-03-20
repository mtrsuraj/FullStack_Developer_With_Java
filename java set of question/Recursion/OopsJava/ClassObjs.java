package Recursion.OopsJava;

class Demo {
    int a = 10;
    String b = "ankush";

    void Show() {
        System.out.println(a + " " + b);
    }

}

class ClassObjs {
    public static void main(String[] args) {
        Demo r = new Demo();
        r.Show();
    }
}