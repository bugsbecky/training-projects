public class StringEquality {
    public static void main(String[] args) {
        String first = "Ada";
        String second = new String("Ada");

        System.out.println(first == second);
        System.out.println(first.equals(second));
        System.out.println("Ada".equals(first));
    }
}