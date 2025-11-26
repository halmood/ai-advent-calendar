# 🤖 AI Advent Calendar - Mission Future v2.0

> Willkommen im neuronalen Netz. Vergiss Schokolade. Jeden Tag ein neues Datenpaket zu Generative AI, Prompting und LLMs.

![Project Screenshot](https://via.placeholder.com/800x400?text=Screenshot+des+AI+Kalenders+hier+einfuegen)
*(Hinweis: Ersetze diesen Platzhalter durch einen echten Screenshot deiner Anwendung, z.B. `images/screenshot.png`)*

## 📖 Über das Projekt

Dieses Projekt begann ursprünglich als klassischer Latein-Adventskalender. In einer umfassenden Transformation wurde der gesamte Tech-Stack und Inhalt modernisiert. Das Ergebnis ist ein **Cyberpunk-inspirierter Adventskalender**, der sich voll und ganz der Welt der Künstlichen Intelligenz widmet.

Statt Vokabeln zu pauken, öffnen die Nutzer jeden Tag ein "Datenpaket" (Türchen). Sie erhalten ein Rätsel zu aktuellen KI-Themen – von **Large Language Models (LLMs)** über **Bildgenerierung** bis hin zu ethischen Fragen wie **Bias** und **Halluzinationen**.

Das Ziel: Nicht nur Wissen abfragen, sondern durch integrierte "Pro-Tipps" echte Mehrwerte für den täglichen Umgang mit Tools wie ChatGPT zu liefern.

### ✨ Features

* **Cyberpunk UI/UX:** Ein vollständig überarbeitetes Design mit Neon-Farben (Cyan/Magenta), futuristischen Schriftarten und Glitch-Effekten.
* **24 Lern-Module:** Jeden Tag ein neues Thema rund um Generative AI.
* **Edutainment-Fokus:** Jede Lösung enthält eine Erklärung und einen praktischen "Lifehack" für Prompt-Engineering.
* **KI-Generierte Visuals:** Jedes Türchen enthüllt ein einzigartiges, thematisch passendes Bild, das mit modernen Bild-KIs erstellt wurde.
* **Responsive Design:** Funktioniert auf dem Desktop und mobilen Geräten.
* **Single Page Application (SPA) Ansatz:** Alle Inhalte werden dynamisch in einem modernen Modal-Fenster geladen, ohne die Seite neu zu laden.

## 🛠️ Technologie-Stack

Das Projekt wurde bewusst "lean" gehalten und verzichtet auf schwere Frameworks. Es ist eine reine **Static Site**.

* **HTML5:** Semantische Struktur.
* **CSS3:** Nutzung von CSS Custom Properties (Variablen) für das Cyberpunk-Theme, Flexbox und CSS Grid für das Layout.
* **Vanilla JavaScript (ES6+):** Die gesamte Logik (Türchen-Check, Modal-Steuerung, dynamisches Laden von Inhalten) ist in reinem JavaScript geschrieben.

## 🚀 Installation & Nutzung

Da es sich um eine statische Seite handelt, ist keine komplexe Installation (wie Node.js oder eine Datenbank) notwendig.

1.  **Repository klonen:**
    ```bash
    git clone [https://github.com/DEIN-USERNAME/DEIN-REPO-NAME.git](https://github.com/DEIN-USERNAME/DEIN-REPO-NAME.git)
    ```
2.  **Öffnen:**
    Öffne einfach die `index.html` Datei in einem modernen Webbrowser (Chrome, Firefox, Edge).

*Tipp für die Entwicklung:* Um Probleme mit dem Laden von lokalen Bildern zu vermeiden, empfiehlt es sich, die Seite über einen lokalen Server auszuführen (z.B. mit der "Live Server" Erweiterung in VS Code).

## ⚙️ Konfiguration & Test-Modus

Die Logik, welche Türchen geöffnet werden dürfen, basiert auf dem aktuellen Datum des Nutzers (Client-Side).

**Testen außerhalb vom Dezember:**

Um den Kalender zu testen, wenn nicht gerade Dezember ist, musst du eine kleine Änderung in der `script.js` vornehmen. Suche die Funktion `initializeCalendar`:

```javascript
// IN script.js

function initializeCalendar() {
    const today = new Date();
    // PRODUKTIV-MODUS:
    // const currentDay = (today.getMonth() === 11) ? today.getDate() : 0;

    // TEST-MODUS (z.B. um alle Türchen zu öffnen):
    const currentDay = 24; 

    // ...
}

Setze currentDay auf den Tag, den du simulieren möchtest (z.B. 24, um alles freizuschalten). Vergiss nicht, dies vor dem 1. Dezember wieder auf den Produktiv-Modus zurückzusetzen!

🤖 Credits & KI-Transparenz
Dieses Projekt ist ein Beispiel für AI-Assisted Development. Die Transformation vom alten Latein-Kalender zum neuen AI-Kalender erfolgte in enger Zusammenarbeit zwischen menschlicher Kuration und KI-Tools.

Konzept & Kuration: [Dein Name]

Code-Refactoring (HTML/CSS/JS): Unterstützt durch LLMs (ChatGPT).

Rätsel-Inhalte & Tipps: Generiert und kuratiert mit Hilfe von LLMs.

Bildmaterial: Alle 24 Tagesbilder wurden mit generativen Bild-KIs (z.B. DALL-E 3 / Midjourney) basierend auf spezifischen Cyberpunk-Prompts erstellt.

📄 Lizenz
Veröffentlicht unter der MIT License. Feel free to fork and learn!