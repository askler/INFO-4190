import java.util.Arrays;

public class StringSort {
    public static void main(String[] args) {
        String[] cars = {"BMW", "Volkswagen", "Ford","Mercedes", "Audi"};

        Arrays.sort(cars);

        System.out.println("Sorted Manufacturers in Alphabetical Order:");
        for (String car : cars) {
            System.out.println(car);
        }
    }
}
