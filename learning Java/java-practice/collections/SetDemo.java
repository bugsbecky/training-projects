import java.util.HashSet;
import java.util.Set;

public class SetDemo {
    public static void main(String[] args) {
        Set<String> tags = new HashSet<>();
        tags.add("java");
        tags.add("Ubuntu");
        tags.add("java");

        System.out.println(tags.size());
        System.out.println(tags.contains("ubuntu"));
        
        if (tags.contains("java")) {
            System.out.println(tags);
        }
    }
}