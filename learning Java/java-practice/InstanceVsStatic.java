/**
 * Instance vs Static — the big idea
 *
 * Instance = belongs to ONE object (each car has its own color)
 * Static   = belongs to the CLASS (shared by all cars, like a brand name)
 */
public class InstanceVsStatic {

    // --- INSTANCE field: each object gets its own copy ---
    String name;
    int score;

    // --- STATIC field: one copy shared by the whole class ---
    static int playerCount = 0;
    static String gameName = "Java Quest";

    // Constructor runs when you create a new object with "new"
    public InstanceVsStatic(String name) {
        this.name = name;   // instance: this player's name
        this.score = 0;     // instance: this player's score
        playerCount++;      // static: increase the shared counter
    }

    // --- INSTANCE method: needs an object to call it ---
    // You write: player1.addPoints(10);
    public void addPoints(int points) {
        score += points;
        System.out.println(name + " now has " + score + " points.");
    }

    // --- STATIC method: call it on the class, no object needed ---
    // You write: InstanceVsStatic.showGameInfo();
    public static void showGameInfo() {
        System.out.println("Game: " + gameName);
        System.out.println("Players so far: " + playerCount);
        // NOTE: static methods cannot use instance fields like "name" or "score"
        // because they don't know WHICH object's name/score you mean.
    }

    public static void main(String[] args) {
        System.out.println("--- Before creating any players ---");
        InstanceVsStatic.showGameInfo();  // static: use ClassName.method()

        System.out.println("\n--- Create two players (two instances) ---");
        InstanceVsStatic player1 = new InstanceVsStatic("Ada");
        InstanceVsStatic player2 = new InstanceVsStatic("Linus");

        System.out.println("\n--- Each player has their OWN score (instance) ---");
        player1.addPoints(10);  // only Ada's score changes
        player2.addPoints(25);  // only Linus's score changes

        System.out.println("\n--- playerCount is SHARED (static) ---");
        InstanceVsStatic.showGameInfo();  // both players share one counter

        System.out.println("\n--- Same static field, two ways to read it ---");
        System.out.println("Via class:  " + InstanceVsStatic.playerCount);
        System.out.println("Via object: " + player1.playerCount); // works, but ClassName is clearer
    }
}
