public class string {
    public static void main(String[] args) {
        stringReverse("abc");
        
    }

    public static void stringReverse(String input) {
                    StringBuffer sr = new StringBuffer(input);
                    String reverse = sr.reverse().toString();
                    System.out.println(reverse);
    }
    
}
