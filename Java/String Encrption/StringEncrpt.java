public class StringEncrpt {
    public static void main(String[] args) {
        String str = "COVID crisis has taught us several lessons and together we will overcome this great challenge. Now there is a sense of introspection in people. India will emerge stronger from this.";
        // System.out.println(str);
        int x, k = 38, k1 = 96, y1, count = 0, sum = 0;
        char[] ch = new char[str.length()];
        for (int i = 0; i < str.length(); i++) {
            ch[i] = str.charAt(i);
            char c = ch[i];
            int q = (int) c;
            if (Character.isLetter(str.charAt(i))) {
                count++;
                // continue;
            } else
                count = 0;
            int pp = count;

            for (int j = 65; j <= 90; j++) {
                if (j == q) {
                    x = q - k;
                    int ss = 100 * pp + x;
                    sum = sum + ss;

                    System.out.println(ss);
                    // count += 1;
                } else if (q == 32 || q == 46) {
                    System.out.println(q);
                    // count = 0;
                    break;
                }
            }
            for (int p = 97; p <= 122; p++) {
                char ch3 = (char) p;
                if (ch3 == q) {
                    y1 = q - k1;
                    int sss = 100 * pp + y1;
                    sum = sum + sss;
                    System.out.println(sss);
                    // count += 1;
                }
            }

        }
        System.out.println("total sum" + sum);

    }

}
