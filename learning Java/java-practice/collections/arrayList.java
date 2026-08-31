import java.util.ArrayList;

public class arrayList {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Ada");
        names.add("Mina");
        names.add("Kai");
        //names.remove("Mina");

        for (String name : names) {
            System.out.println(name);
        }
    }
}