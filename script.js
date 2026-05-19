const truths = [

    "What is your biggest fear?",

    "Have you ever lied to your best friend?",

    "What is your most embarrassing moment?",

    "Who was your first crush?",

    "What secret have you never told anyone?"
];

const dares = [

    "Sing a song for 10 seconds.",

    "Do 10 push-ups.",

    "Dance without music for 15 seconds.",

    "Speak in a funny voice for 1 minute.",

    "Act like your favorite celebrity."
];

function showTruth(){

    const randomTruth =
        truths[Math.floor(
            Math.random() * truths.length
        )];

    document.getElementById("output")
        .innerText = randomTruth;
}

function showDare(){

    const randomDare =
        dares[Math.floor(
            Math.random() * dares.length
        )];

    document.getElementById("output")
        .innerText = randomDare;
}
