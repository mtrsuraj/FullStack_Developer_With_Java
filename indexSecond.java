public class indexSecond {
    public static void main(String ar[]){
        
        int retailer =0;
        int corporate =0;
        int x=1;
        int d=2;
        int totalSoldCount =0;
        String month[] = new String[6];
        month[0]="April";
        month[1]="May";
        month[2]="June";
        month[3]="July";
        month[4]="August";
        month[5]="september";

        for(int i=0; i<31; i++){
            for(int j=1; j<=31; j++){
                if(j%5==0){
                    corporate+=x;
                }else {
                    retailer +=x;
                }
                x+=d;
                d+=2;
            }
            int soldCount = corporate + retailer;

            System.out.println("Number of vehicles sold each month: " + month[i] + "and sold count" + +soldCount );
            System.out.println("number of vehicles sold to retailer customer:" + retailer);
            System.out.println("number of vehicles sold to corporate customer:" + corporate );
            System.out.println(" ");
            totalSoldCount = totalSoldCount+soldCount;
        }
        // System.out.println("Total sold count is :" + totalSoldCount);

    }
    
}
