Hier sind 5 kleine, fokussierte Projekte, die jeweils 1-2 spezifische Konzepte trainieren, ohne dass du gleich in einem Code-Chaos versinkst. Keine davon ist eine Todo-App!

### 1. Der Charakter-Zähler (Wie bei Twitter/X)
*Ein Input-Feld, das live anzeigt, wie viele Zeichen man noch tippen darf und den Submit-Button deaktiviert, wenn das Limit erreicht ist.*

*   **Fokus-Konzepte:** `input` Event-Listener, String-Länge (`.length`), DOM-Manipulation (Klassen hinzufügen/entfernen für Farben), Button deaktivieren (`disabled`).
*   **HTML:** Ein `<textarea>`, ein `<p>` für die Zeichenanzahl und ein `<button>`.
*   **CSS:** Normale Farbe für den Zähler (z.B. grau), wird er rot, wenn man über dem Limit ist. Button optisch ausgegraut, wenn deaktiviert.
*   **JS:** Hänge an die Textarea ein `input` Event. Berechne `maxZeichen - aktuelleZeichen`. Aktualisiere den Text im `<p>`. Wenn der Wert unter 0 fällt, füge dem `<p>` eine rote CSS-Klasse hinzu und setze `button.disabled = true`, ansonsten entferne die Klasse und setze `button.disabled = false`.

### 2. Der Akkordeon-FAQ-Bereich
*Klassische Frage-Antwort-Boxen, bei denen man auf die Frage klickt und die Antwort darunter aufklappt.*

*   **Fokus-Konzepte:** Event Delegation (oder Closures in Loops), Toggle von CSS-Klassen, CSS Transitions (`max-height` Trick), `this` oder `event.currentTarget`.
*   **HTML:** Mehrere Container mit einem `<h3>` (Frage) und einem `<p>` (Antwort).
*   **CSS:** Dem `<p>` gibst du `max-height: 0; overflow: hidden; transition: max-height 0.3s ease;`. Wenn der Container eine Klasse `.active` hat, setzt du `max-height: 200px` (oder einen passenden Wert).
*   **JS:** Klick-Event auf die Fragen. Beim Klick wird beim übergeordneten Container die Klasse `.active` getoggelt (`container.classList.toggle('active')`). *Bonus:* Schließe die anderen Akkordeons, wenn ein neues geöffnet wird.

### 3. Der "Lichtschalter" (Dark Mode Toggle)
*Eine Seite mit einem Schalter, der das komplette Farbschema von Hell auf Dunkel umstellt.*

*   **Fokus-Konzepte:** CSS Custom Properties (Variablen), `classList.toggle` auf dem `<body>`, Local Storage (um den Modus beim Neuladen zu behalten).
*   **HTML:** Eine einfache Seite mit Text und einem Checkbox-Toggle oder Button.
*   **CSS:** Definiere Variablen im `:root` (z.B. `--bg-color: white; --text-color: black;`). Definiere sie im Selektor `body.dark-mode` um (z.B. `--bg-color: #222; --text-color: white;`). Weise diese Variablen den Elementen zu.
*   **JS:** Klick-Event auf den Button -> `document.body.classList.toggle('dark-mode')`. *Extra:* Speichere den Zustand in `localStorage.setItem('theme', 'dark')` und lese ihn beim Laden der Seite aus, damit der Dark Mode bleibt.

### 4. SteinscherePapier (Konsolen-Version)
*Du spielst gegen den Computer. Das Spiel läuft komplett in der Browser-Konsole (`console.log`), kein DOM-Manipulations-Stress.*

*   **Fokus-Konzepte:** Reine JS-Logik! `Math.random()`, Arrays, If/Else Bedingungen, Funktionen mit Return-Werten.
*   **HTML/CSS:** Fast nichts. Nur ein kurzer Text: "Öffne die Konsole (F12) um zu spielen!"
*   **JS:** 
    1. Nutze `prompt()`, um den User nach seiner Wahl zu fragen ("Stein", "Schere", "Papier").
    2. Lass den Computer wählen: Erstelle ein Array mit den 3 Optionen und nutze `Math.floor(Math.random() * array.length)`.
    3. Schreibe eine Funktion `bestimmeGewinner(spieler, computer)`, die mit If/Else das Ergebnis auswertet und "Gewonnen", "Verloren" oder "Unentschieden" zurückgibt.
    4. Gib das Ergebnis mit `console.log` aus.

### 5. Fahrkarten-Automat (Dynamisches Dropdown)
*Zwei Dropdown-Menüs. Wenn man im ersten ein Land auswählt, füllt sich das zweite mit den passenden Städten.*

*   **Fokus-Konzepte:** Datenstrukturen (Objekte/Arrays), Dynamisches Erstellen von DOM-Elementen (`document.createElement`), `change` Event.
*   **HTML:** Zwei `<select>` Elemente. Das erste hat Länder (z.B. Deutschland, Österreich), das zweite ist leer.
*   **CSS:** Nur das Nötigste zum Ausrichten.
*   **JS:** Erstelle ein Objekt:
    ```javascript
    const daten = {
      "Deutschland": ["Berlin", "München", "Hamburg"],
      "Österreich": ["Wien", "Graz", "Salzburg"]
    };
    Wenn sich das erste Dropdown ändert (`change` Event), nimm den gewählten Wert, such die passenden Städte aus dem Objekt, leere das zweite Dropdown (`innerHTML = ''`) und befülle es in einer Schleife mit neuen `<option>` Elementen.

**Tipp für den Start:** Mach immer erst das HTML (die Struktur), dann das CSS (damit es aussieht) und ganz zum Schluss das JS (damit es etwas tut). So verlierst du nicht den Überblick!