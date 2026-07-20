import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class ImportsExample {

    public static void main(String[] args) {
        List<String> tasks = new ArrayList<>();
        tasks.add("Learn imports");
        System.out.println(LocalDate.now() + ": " + tasks);
    }
}