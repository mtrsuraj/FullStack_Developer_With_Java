public class Main {
    public static void main(String[] args) {				
		int i = 2;			
		int j = 1;			
		int k = 1;			
		int sign = 1;			
					
		for(;k<=100;){			
		    			
		    System.out.print(k * sign + " ");			
		    sign*=-1;			
		    k = i+j;			
		    			
		    ++i;			
		    j = j+i;			
	}				
}
