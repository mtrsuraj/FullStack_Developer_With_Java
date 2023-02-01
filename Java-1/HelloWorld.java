package Java;


// import java.util.

class HelloWorld {
    public static void main(String[] args) {
        // System.out.println("Hello, World!");
        int t1=1, t2=3, t3=0;
        int t4=6;
        int n=100;
        int [] arr = new int[n];
        System.out.println(t1);
        for(int i=1; i<=100; i++){
            if(i==t4){
                t4=t4+6;
                t2=t2+3;
                continue;
            }
            t3 = t1 + t2;
            t2 = t2+3;
            t1 = t3;

            //store in element in array............

        for(int j=i; j<=i; j++){

            arr[j]=t3;

        }
            
            //  System.out.println(" " + t3);
        }
           
            // for(int i=0; i<=arr.length; i++){
            //     arr[i] = t3;
            // }
            for(int i=0; i<=arr.length; i++){
                System.out.println(arr[i]);
            }    
        
    }
}
