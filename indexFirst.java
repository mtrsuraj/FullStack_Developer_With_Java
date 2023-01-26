public class indexFirst {
    public static void main(String args[]){
     int a =1, value=1, count=0, temp=0, check=0, cunt=0;
        int arr[]= new int[100];
        int ar[]=new int[100];
        for(int i=0; i<100; i++){
            arr[i]=value;
            if(value%10==7){
                count++;
            }
            value=value+a;
            a+=2;
        }
        for(int b=0; b<100; b++){
            System.out.print(arr[b] + " ");
        }
        System.out.println("\n count of number end with seven:" + count);
        for(int i=0; i<100; i++){
            temp = ar[i];
            check=0;
            if(temp==1){
                continue;
            }
                for(int j=2; j<temp/2; j++){
                    if(temp%j==0){
                        check =1;
                    }
                }
                if(check ==0){
                    ar[cunt]=temp;
                    cunt++;
                }
                // check=0;
            
        }
        System.out.println("\n");
        System.out.print("prime numbers are : \n");
        for(int k=1; k<cunt; k++){
            System.out.print(ar[k] + " ");
        }
        System.out.println();
        System.out.println("count of prime numbers :" + cunt);
    }
}
