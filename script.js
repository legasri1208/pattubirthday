/* CREATE STARS */

const stars = document.getElementById("stars");

for(let i = 0; i < 120; i++){

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    stars.appendChild(star);
}


/* SCREEN NAVIGATION */

function show(id){

    document.querySelectorAll(".screen")
        .forEach(s => s.classList.remove("active"));

    document.getElementById(id)
        .classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* FILE */

function openFile(){

    show("file");

}


/* PASSWORD */

function checkPassword(){

    const value =
        document.getElementById("pass")
        .value
        .trim()
        .toLowerCase();

    if(value === "uppma"){

        show("quiz");

    }else{

        document.getElementById("error")
        .innerText =
        "Wrong password 😭 Hint: Chuchu calls you Uppma.";

    }

}


/* QUIZ */

function answer(button, correct){

    if(correct){

        button.classList.add("correct");

        document.getElementById("quizResult")
        .innerText =
        "Correct! 😂 You are officially verified.";

        setTimeout(() => {

            show("timeline");

        }, 1200);

    }else{

        button.classList.add("wrong");

        document.getElementById("quizResult")
        .innerText =
        "Nice try 👀 Try again.";

    }

}


/* MEMORIES */

const memories = {
    2018: {
        title: "The Beginning",
        image: "images/memory2018.png",
        heading: "Where it all started 🤍",
        text: "Somehow two people met and accidentally started an eight-year friendship."
    },
    2019: {
        title: "More Chaos",
        image: "images/memory2019.png",
        heading: "We were getting worse 😂",
        text: "The friendship was officially becoming a problem."
    },
    2020: {
        title: "Still Us",
        image: "images/memory2020.png",
        heading: "Distance couldn't change us",
        text: "Even when life changed, our friendship stayed."
    },
    2021: {
        title: "The Memories",
        image: "images/memory2021.png",
        heading: "More stories to tell",
        text: "Every year somehow gave us another reason to laugh."
    },
    2022: {
        title: "The Adventures",
        image: "images/memory2022.png",
        heading: "Trip without permission 👀",
        text: "One of those memories that probably should remain classified."
    },
    2023: {
        title: "Academic Crimes",
        image: "images/memory2023.png",
        heading: "Skipping classes 😭",
        text: "Attendance went down. Memories went up."
    },
    2024: {
        title: "Secret Missions",
        image: "images/memory2024.png",
        heading: "Our little secrets 🤫",
        text: "Some adventures were better kept between us."
    },
    2025: {
        title: "Eight Years",
        image: "images/memory2025.png",
        heading: "Still my PATTU KUNJU 🫂",
        text: "Eight years later, you're still one of the most important people in my life."
    }
};


function memory(year){

    const m = memories[year];
    if (!m) return;

    document.getElementById("memoryYear")
        .innerText = year;

    document.getElementById("memoryTitle")
        .innerText = m.title;

    document.getElementById("memoryImage").src = m.image;
    document.getElementById("memoryImage").alt = year + " friendship memory";
    document.getElementById("memoryImage").onerror = function () {
        this.alt = "Add " + this.src.split("/").pop() + " to the photos folder";
        this.style.display = "none";
    };
    document.getElementById("memoryImage").onload = function () {
        this.style.display = "block";
    };

    document.getElementById("memoryHeading")
        .innerText = m.heading;

    document.getElementById("memoryText")
        .innerText = m.text;

    show("memory");

}


/* CONSTELLATION */

function starMessage(message){

    document.getElementById("starMessage")
        .innerText = message;

}


/* BIRTHDAY */

function birthday(){

    show("final");

    const emojis = [
        "🤍",
        "✨",
        "💗",
        "🌸",
        "🎀",
        "⭐",
        "🎉"
    ];

    for(let i = 0; i < 100; i++){

        const confetti =
            document.createElement("div");

        confetti.className = "confetti";

        confetti.innerText =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            2 + Math.random() * 3 + "s";

        confetti.style.fontSize =
            12 + Math.random() * 18 + "px";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);

    }

}
