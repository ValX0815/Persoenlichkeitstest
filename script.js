document.addEventListener("DOMContentLoaded", function() {
    const quizContainer = document.getElementById("quiz-container");

    // 6 Fragen aus dem absurden Persönlichkeitstest
    const questions = [
        {
            question: "Welcher dieser Gegenstände spiegelt dein inneres Wesen am besten wider?",
            answers: [
                "Ein Löffel mit Identitätskrise (er glaubt, er sei eine Gabel)",
                "Eine Socke, die schon lange ihren Zwilling verloren hat",
                "Ein Kaugummi-Automat, der nur noch Kieselsteine ausspuckt",
                "Eine Tür, die sich immer schließt, aber nie öffnet"
            ]
        },
        {
            question: "Was ist das Erste, das du tun würdest, wenn du morgen als Pinguin aufwachst?",
            answers: [
                "Einen Anzug anziehen – jetzt bin ich wirklich schick",
                "Einen Fisch suchen und dann überlegen, ob ich ihn wirklich essen will",
                "Mich bei der Arbeit krankmelden – wird schwer, die Tastatur mit Flossen zu benutzen",
                "Eine Eisfabrik gründen"
            ]
        },
        {
            question: "Welche dieser Situationen bereitet dir am meisten Angst?",
            answers: [
                "Ein Kühlschrank, der dich beim Vorbeigehen anspricht",
                "Eine Tür, die sich öffnet, obwohl niemand sie berührt hat",
                "Eine Ente, die dich seit Stunden unverändert anstarrt",
                "Die Tatsache, dass dieser Test vielleicht doch tiefere Bedeutung hat"
            ]
        },
        {
            question: "Du betrittst einen Raum und alle schauen dich erwartungsvoll an. Was sagst du?",
            answers: [
                "„Ja, ich bin’s, euer neuer Chef. Wo ist mein Hut?“",
                "„Ich habe eine Vision: Mehr Kekse für alle!“",
                "„Keine Zeit zu erklären, aber ich brauche dringend ein Seil und einen Fön!“",
                "„Ich wollte eigentlich in den Supermarkt, aber gut…“"
            ]
        },
        {
            question: "Welches dieser Tiere wäre dein perfekter Kampfgefährte?",
            answers: [
                "Ein Huhn mit einem Masterplan",
                "Ein Koala mit Kampfsport-Erfahrung",
                "Ein Lachs, der in Zeitlupe kämpft",
                "Ein Eichhörnchen mit Sonnenbrille"
            ]
        },
        {
            question: "Du bekommst eine magische Fähigkeit. Welche wählst du?",
            answers: [
                "Die Macht, alle Ampeln auf Grün zu schalten",
                "Gedanken lesen, aber nur bei Waschbären",
                "Dinge in Gold verwandeln – aber nur, wenn sie aus Holz sind",
                "Nie wieder stolpern – es sei denn, du willst es"
            ]
        }
    ];

    // Die Ergebnisse des Tests
    const results = [
        "Du bist ein visionärer Denker, aber leider nur in Bezug auf unwichtige Dinge.",
        "Du hast das Herz eines Löwen, aber die Geduld einer überreifen Banane.",
        "Du bist der geborene Anführer… eines geheimen Clubs, der nie Mitglieder hat.",
        "Herzlichen Glückwunsch! Du bist offiziell der Meister des Zufalls!"
    ];

    let currentQuestionIndex = 0;

    function showQuestion() {
        if (currentQuestionIndex < questions.length) {
            const questionObj = questions[currentQuestionIndex];
            quizContainer.innerHTML = `<h2>${questionObj.question}</h2>`;
            
            questionObj.answers.forEach(answer => {
                const button = document.createElement("button");
                button.innerText = answer;
                button.onclick = () => {
                    currentQuestionIndex++;
                    showQuestion();
                };
                quizContainer.appendChild(button);
            });
        } else {
            showResult();
        }
    }

    function showResult() {
        const randomResult = results[Math.floor(Math.random() * results.length)];
        quizContainer.innerHTML = `<h2>${randomResult}</h2><p>Wurde von der KI geprüft – du bist ein Mensch... APRIL APRIL! 🎉</p>`;
    }

    showQuestion();
});
