/** 
 * AI Adventskalender - Logic & Data
 * Fokus: Generative AI, LLMs & Practical Prompting
 */

// Die 24 Rätsel mit Learning-Fokus
const aiRiddles = [
    { 
        day: 1, 
        q: "Ich bin das 'Gehirn' hinter ChatGPT. Ich sage nicht die Wahrheit vorher, sondern nur das nächste wahrscheinlichste Wort. Was bin ich?", 
        a: "LLM (Large Language Model)", 
        e: "LLMs sind statistische Modelle, keine Wissensdatenbanken. **Pro-Tipp:** Behandle die KI wie einen sehr belesenen, aber manchmal flunkernden Praktikanten. Überprüfe wichtige Fakten immer!" 
    },
    { 
        day: 2, 
        q: "Du willst bessere Ergebnisse? Dann gib mir eine Rolle! Sag mir: 'Handle als erfahrener Marketing-Manager'. Wie nennt man diese Technik?", 
        a: "Persona Prompting", 
        e: "Wenn du der KI eine Rolle gibst, greift sie auf spezifischeres Vokabular und Fachwissen zu. **Pro-Tipp:** Starte Prompts oft mit: 'Du bist ein Experte für [Thema]. Deine Aufgabe ist...'" 
    },
    { 
        day: 3, 
        q: "Ich passiere, wenn die KI eine Antwort voller Überzeugung gibt, die aber komplett erfunden ist.", 
        a: "Halluzination", 
        e: "KIs wollen 'gefallen' und füllen Wissenslücken oft mit plausibel klingendem Unsinn. **Pro-Tipp:** Bitte die KI explizit: 'Wenn du die Antwort nicht weißt, sag es bitte, statt zu raten.'" 
    },
    { 
        day: 4, 
        q: "Ich bin die Währung der KI. Ich bin kein ganzes Wort, sondern eher eine Silbe. Je mehr ich werde, desto teurer wird die Anfrage.", 
        a: "Token", 
        e: "Ein Token sind ca. 4 Zeichen. **Pro-Tipp:** KIs können schlecht rechnen oder buchstabieren (z.B. 'Wörter mit 5 A'), weil sie in Tokens denken, nicht in Buchstaben." 
    },
    { 
        day: 5, 
        q: "Du willst, dass die KI logischer denkt? Dann fordere sie auf: 'Denke Schritt für Schritt'. Wie heißt diese Methode?", 
        a: "Chain-of-Thought", 
        e: "Zwingt die KI, Zwischenschritte zu machen, statt sofort zu raten. **Pro-Tipp:** Bei Mathe- oder Logikrätseln hilft der Zusatz: 'Erkläre deinen Rechenweg Schritt für Schritt'." 
    },
    { 
        day: 6, 
        q: "Ich bin ein Parameter (oft zwischen 0 und 1). Wenn du mich hochdrehst, werde ich kreativ und verrückt. Niedrig bin ich präzise und langweilig.", 
        a: "Temperature (Temperatur)", 
        e: "Steuert den Zufall. **Pro-Tipp:** Willst du Fakten/Code? Nutze eine niedrige Temperature (oder sag 'sei präzise'). Willst du Brainstorming? Sag 'sei kreativ'." 
    },
    { 
        day: 7, 
        q: "Ein Bild sagt mehr als 1000 Worte. Ich bin eine KI, die Textbeschreibungen in Kunstwerke verwandelt.", 
        a: "Text-to-Image (z.B. Midjourney)", 
        e: "KI kann Pixel genauso 'halluzinieren' wie Text. **Pro-Tipp:** Beschreibe nicht nur das Motiv, sondern auch den Stil, das Licht und die Kamera (z.B. 'Cinematic lighting, photorealistic, 8k')." 
    },
    { 
        day: 8, 
        q: "Du zeigst der KI ein Beispiel, damit sie versteht, was du willst. Statt 'Null Ahnung' hat sie nun 'Ein paar Ahnung'.", 
        a: "Few-Shot Prompting", 
        e: "Ohne Beispiele (Zero-Shot) raten KIs oft. **Pro-Tipp:** Gib 2-3 Beispiele für Input und gewünschten Output im Prompt mit, um die Qualität massiv zu steigern." 
    },
    { 
        day: 9, 
        q: "Ich kann nicht nur Text lesen, sondern auch Bilder sehen und Analysieren. ChatGPT 4o ist ein Beispiel für mich.", 
        a: "Multimodalität", 
        e: "Moderne Modelle verarbeiten Text, Bild und Audio gleichzeitig. **Pro-Tipp:** Fotografiere den Inhalt deines Kühlschranks und frag die KI: 'Was kann ich daraus kochen?'" 
    },
    { 
        day: 10, 
        q: "Dein Prompt war gut, aber das Ergebnis noch nicht perfekt? Dann gib nicht auf, sondern rede weiter mit mir!", 
        a: "Iteratives Prompting", 
        e: "Der erste Output ist selten der beste. **Pro-Tipp:** Behandle es wie ein Gespräch. Sag: 'Das ist gut, aber mach es kürzer und professioneller' oder 'Ändere den 2. Absatz'." 
    },
    { 
        day: 11, 
        q: "Ich sorge dafür, dass die KI aktuelle Informationen findet, indem ich sie mit einer Suchmaschine oder Datenbank verknüpfe.", 
        a: "RAG (Retrieval Augmented Generation)", 
        e: "Ein reines LLM weiß nur das, was im Training dran war (Wissen veraltet). **Pro-Tipp:** Wenn du aktuelle News brauchst, nutze KIs mit Web-Zugriff (wie Perplexity oder ChatGPT 'Browse')." 
    },
    { 
        day: 12, 
        q: "Du hast einen langen Text und keine Zeit? Ich bin die Superkraft der KI, Dinge auf den Punkt zu bringen.", 
        a: "Zusammenfassung (Summarization)", 
        e: "LLMs sind Meister im Verdichten. **Pro-Tipp:** Nutze 'TL;DR' (Too Long; Didn't Read) am Ende eines Textes oder fordere: 'Fasse die 3 Kernaussagen in Bulletpoints zusammen'." 
    },
    { 
        day: 13, 
        q: "Wenn du beim Bild-Generieren sagst, was du *nicht* sehen willst (z.B. 'keine unscharfen Gesichter').", 
        a: "Negative Prompt", 
        e: "Oft ist es leichter zu sagen, was weg soll. **Pro-Tipp:** Bei Bildern hilft oft der Zusatz: '--no text, blur, ugly, deformed hands' (je nach Tool)." 
    },
    { 
        day: 14, 
        q: "Ich begrenze, wie viel Text sich die KI merken kann. Wenn das Gespräch zu lang wird, vergisst sie den Anfang.", 
        a: "Kontext-Fenster (Context Window)", 
        e: "Das 'Kurzzeitgedächtnis' der KI ist begrenzt. **Pro-Tipp:** Wenn die KI vergesslich wird, fasse den bisherigen Stand kurz zusammen und starte einen neuen Chat." 
    },
    { 
        day: 15, 
        q: "Das Risiko, sensible Firmengeheimnisse in einen öffentlichen Chatbot zu kopieren. Tu es nicht!", 
        a: "Data Privacy / Datenschutz", 
        e: "Alles, was du in öffentliche KIs eingibst, *kann* zum Training genutzt werden. **Pro-Tipp:** Anonymisiere Daten vor dem Einfügen (Ersetze Namen durch 'Herr A' und Firmen durch 'Firma X')." 
    },
    { 
        day: 16, 
        q: "Ein mächtiger Befehl, um den Stil der Ausgabe zu steuern. Z.B. 'Schreibe wie Goethe' oder 'Erkläre es einem 5-Jährigen'.", 
        a: "Tone & Style Modifier", 
        e: "Du bestimmst die 'Stimme' der KI. **Pro-Tipp:** Wenn du E-Mails schreibst, probiere: 'Schreibe höflich aber bestimmt' oder 'Formuliere es lockerer'." 
    },
    { 
        day: 17, 
        q: "Du bist kein Programmierer, aber die KI kann für dich Code schreiben, um Excel-Probleme oder Webseiten zu lösen.", 
        a: "Code Generation", 
        e: "KIs sprechen fließend Python und HTML. **Pro-Tipp:** Frag bei Excel-Problemen nicht nach der Formel, sondern: 'Schreibe mir ein VBA Makro, das Spalte A und B vergleicht'." 
    },
    { 
        day: 18, 
        q: "Ein Rahmenwerk, um Prompts besser zu strukturieren. Es steht für Context, Action, Result, Example.", 
        a: "CARE (oder ähnliche Frameworks)", 
        e: "Struktur hilft der KI. **Pro-Tipp:** Gib immer Kontext (Wer bist du?), Aufgabe (Was tun?), Format (Tabelle/Text?) und Einschränkungen (Max 100 Wörter) an." 
    },
    { 
        day: 19, 
        q: "Wenn die KI unbewusst Vorurteile aus ihren Trainingsdaten übernimmt (z.B. sind CEOs immer männlich).", 
        a: "Bias (Verzerrung)", 
        e: "KIs spiegeln die Vorurteile des Internets wider. **Pro-Tipp:** Sei dir dessen bewusst und fordere bei Bildern z.B. explizit 'diverse Gruppe' an, wenn nötig." 
    },
    { 
        day: 20, 
        q: "Die Fähigkeit der KI, Text nicht nur Wort für Wort zu übersetzen, sondern kulturelle Nuancen anzupassen.", 
        a: "Lokalisierung", 
        e: "Besser als Google Translate. **Pro-Tipp:** Gib Kontext mit: 'Übersetze das ins Englische für einen lockeren Blogpost in den USA' (anders als britisches Business-Englisch!)." 
    },
    { 
        day: 21, 
        q: "Eine Einstellung, mit der du ChatGPT dauerhaft sagst, wer du bist und wie du Antworten willst (z.B. 'Antworte immer kurz').", 
        a: "Custom Instructions", 
        e: "Spart Zeit bei jedem Prompt. **Pro-Tipp:** Hinterlege dort: 'Ich bin [Beruf]. Nenne mir immer Pro- und Contra-Argumente. Duze mich.'" 
    },
    { 
        day: 22, 
        q: "Das Format, das du fordern solltest, wenn du Daten aus der KI direkt in Excel weiterverarbeiten willst.", 
        a: "CSV oder Tabelle", 
        e: "KIs formatieren super. **Pro-Tipp:** Sag am Ende des Prompts: 'Gib das Ergebnis als Markdown-Tabelle aus' oder 'Erstelle einen CSV-Codeblock zum Kopieren'." 
    },
    { 
        day: 23, 
        q: "Die nächste Stufe: KI-Systeme, die nicht nur chatten, sondern Aufgaben autonom erledigen (z.B. E-Mails versenden).", 
        a: "AI Agents", 
        e: "Agents planen selbstständig Schritte. **Pro-Tipp:** Nutze Tools wie AutoGPT oder die GPT-Actions, um Workflows zu automatisieren." 
    },
    { 
        day: 24, 
        q: "Das wichtigste Prinzip: Die KI ist der Co-Pilot, aber du bist der Pilot. Du triffst die letzte Entscheidung.", 
        a: "Human-in-the-Loop", 
        e: "KI ist ein Werkzeug, kein Ersatz für dein Urteil. **Pro-Tipp:** Vertraue nie blind. Der beste Output entsteht durch die Kombination aus KI-Speed und deiner Erfahrung." 
    }
];

// Elemente referenzieren
const modal = document.getElementById('riddle-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalResult = document.getElementById('modal-result');
const modalAnswer = document.getElementById('modal-answer');
const modalExplanation = document.getElementById('modal-explanation');
const solutionBtn = document.getElementById('solution-btn');
const closeBtn = document.querySelector('.close-btn');

// Kalender initialisieren
function initializeCalendar() {
    const today = new Date();
    // TEST-MODUS: Wenn heute nicht Dezember ist, tun wir so, als wäre der 24.
   // const currentDay = (today.getMonth() === 11) ? today.getDate() : 24; 

    for (let i = 1; i <= 24; i++) {
        const door = document.getElementById(`door-${i}`);
        if (!door) continue;

        if (i <= currentDay) {
            door.classList.add('active');
            door.classList.remove('locked');
            
            // Klick-Event
            door.addEventListener('click', (e) => {
                e.preventDefault();
                openRiddle(i);
            });
        } else {
            door.classList.add('locked');
        }
    }
}

// Rätsel öffnen
function openRiddle(day) {
    const riddle = aiRiddles.find(r => r.day === day);
    
    if(!riddle) {
        console.error("Kein Rätsel für Tag " + day + " gefunden.");
        return;
    }

    // Inhalte füllen
    modalTitle.innerText = `SYSTEM LOG: TAG ${day}`;
    modalText.innerText = riddle.q;
    
    // BILD LADEN: Pfad setzen
    modalImage.src = `images/tag${day}.png`;
    modalImage.alt = `Bild zu Tag ${day}`;
    
    // Antwort vorbereiten
    modalAnswer.innerText = ">> " + riddle.a;
    
    // Hier nutzen wir innerHTML, damit wir **Fettgedrucktes** in der Erklärung nutzen können
    modalExplanation.innerHTML = riddle.e;
    
    // Reset State
    modalResult.style.display = 'none';
    solutionBtn.innerText = "DECRYPT ANSWER";
    solutionBtn.style.display = "inline-block";
    
    // Anzeigen
    modal.style.display = 'flex';
}

// Antwort zeigen
solutionBtn.addEventListener('click', () => {
    modalResult.style.display = 'block';
    solutionBtn.style.display = 'none';
});

// Schließen
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalImage.src = ""; 
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        modalImage.src = "";
    }
});

document.addEventListener('DOMContentLoaded', initializeCalendar);
