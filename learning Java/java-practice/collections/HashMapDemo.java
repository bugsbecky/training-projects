import java.util.HashMap;
import java.util.Map;

public class HashMapDemo {
     public static void main(String[] args) {
        Map<String, Integer> scores = new HashMap<>();
        scores.put("Ada", 92);
        scores.put("Kai", 87);
        scores.put("Ada", 95);

        System.out.println(scores.toString());
        System.out.println(scores.get("Ada"));
        System.out.println(scores.getOrDefault("Mina", 0));
     }
}