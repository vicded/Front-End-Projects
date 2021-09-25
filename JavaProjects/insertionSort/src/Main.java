import java.util.Random;
import java.util.Scanner;

public class Main {


    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int[] arr = getInteger(5);
        int[] toSort = sorter(arr);

//        for (int i = 0; i < arr.length; i++) { ;
//            System.out.println(toSort[i]);
//        }

        System.out.println(toSort);
    }


    public static int[] getInteger(int elements) {
        int[] arr2 = new int[elements];
        System.out.println("Introduce " + elements + " integer elements");

        for (int i = 0; i < arr2.length; i++) {
            arr2[i] = scanner.nextInt();
        }

        return arr2;
    }


    public static int[] sorter(int[] unsortedArray) {
        int[] sortedArray = new int[unsortedArray.length];
        int swap_var;

        for (int i = 0; i < unsortedArray.length; i++) {
            unsortedArray[i] = sortedArray[i];
        }

        for(int i = 0; i < sortedArray.length; i++) {
            for(int j = 0; j < sortedArray.length;j++){
                if(sortedArray[j] < sortedArray[j+1]) {
                    swap_var = sortedArray[j];
                    sortedArray[j] = sortedArray[j+1];
                    sortedArray[j+1] = swap_var;
                }
            }
        }

        return sortedArray;
    }
}