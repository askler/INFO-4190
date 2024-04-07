import java.util.Arrays;

public class StringSort {
    public static void main(String[] args) {
        String[] instruments = {"BMW", "Volkswagen", "Ford","Mercedes", "Audi"};

        Arrays.sort(instruments);

        System.out.println("Sorted Instruments:");
        for (String instrument : instruments) {
            System.out.println(instrument);
        }
    }
}
