import java.util.Arrays;

 feature/strings
public class SortableArrayExample {
    public static void main(String[] args) {
        // Declare and initialize an array of integers
        int[] numbers = {5, 2, 9, 1, 7};

        // Sort the array in ascending order
        Arrays.sort(numbers);

        // Print the sorted array
        System.out.println("Sorted array in ascending order:");

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
