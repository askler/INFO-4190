import java.util.Arrays;

public class SortableArray {
    public static void main(String[] args) {
        
        int[] numbers = {5, 8, 6, 4, 3, 2, 10, 9, 1, 7};

        Arrays.sort(numbers);
        
        System.out.println("Numbers in ascending order:");
        for (int number : numbers) {
            System.out.println(number);
        }
    }
}
