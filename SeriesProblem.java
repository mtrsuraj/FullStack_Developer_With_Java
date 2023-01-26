public class SeriesProblem {
    public static void main(String[] ar){
        int t1=0, t2=1, t3;
        int [] arr = new int [100];
        for(int i=0; i<100;  i++){
            t3 = t1 + t2;
            t1=t2;
            t2 = t3+3;
            arr[i]=t3;
        }


        
    }
}
