public class StringMethods {
    public static void main(String[] args){
    String raw = " Java Basics ";
    String cleaned = raw.trim().toLowerCase();

    System.out.println(cleaned);
    System.out.println(cleaned.contains("java"));
    System.out.println(cleaned.substring(0, 4));
    System.out.println(raw);
    }
}