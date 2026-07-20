public class StringBuilderDemo {
    public static void main(String[] args) {
        StringBuilder builder = new StringBuilder();
        builder.append("Items");
        builder.append(": ");
        builder.append(3);

        String message = "%s costs %s 2".formatted("Notebook", 4.5,);
        System.out.println(builder.toString());
        System.out.println(message);
    }
}