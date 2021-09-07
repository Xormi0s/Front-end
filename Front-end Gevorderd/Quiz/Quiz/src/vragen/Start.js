var VraagTop = document.getElementById("VragenTop");
var VraagBot = document.getElementById("VragenBot");
var bodyKeuzes = document.getElementById("Keuzes");
var start = document.getElementById("StartB");
var next = document.getElementById("volgende");
var VolgendeKnop = document.getElementById("VolgendeKnop")
var teller = 0;
var lijst;
var antwoord;
var score = 0;
var aantalVragen = 20;
var AantalVragenT = 20;
var randomNummer = 0;
var NummerQ = 0;
var lijstAntwoorden = [];
var AntwoordenDiv = document.getElementById("Antwoorden")

var bar = document.getElementById("progressBar");
var percentage = document.getElementById("percentage");
var slider = 0;

var count;
var countTijd;


start.addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("Start").style.display = 'none';
    VraagTop.style.display = 'block';
    VraagBot.style.display = 'block';
    HaalVragenOp();
}

next.addEventListener("click", VolgendeVraag);

function HaalVragenOp() {
    fetch("/Vragen/Vragenlijst")
        .then((response) => {
            return response.json();
        })
        .then((feedback) => {
            lijst = feedback;
            document.getElementById("Timer").style.display = 'block';
            ToonVraag();
        });
}

function ToonVraag() {
    countTijd = 31;
    count = setInterval(myTimer, 1000);
    randomNummer = Math.floor(Math.random() * aantalVragen);
    VraagTop.innerHTML = '<h1>Vraag nummer ' + (teller + 1) + '</h1><br/><br/>';
    VraagBot.innerHTML += '<h3>' + lijst[randomNummer].vraag + '</h3><br/>'
    VraagBot.innerHTML += '<p><input class="form-check-input" type="radio" id="Keuze1" name="keuzes" checked> ' + lijst[randomNummer].keuze1 + '</p>';
    VraagBot.innerHTML += '<p><input class="form-check-input" type="radio" id="Keuze2" name="keuzes"> ' + lijst[randomNummer].keuze2 + '</p>';
    VraagBot.innerHTML += '<p><input class="form-check-input" type="radio" id="Keuze3" name="keuzes"> ' + lijst[randomNummer].keuze3 + '</p>';
    VraagBot.innerHTML += '<p><input class="form-check-input" type="radio" id="Keuze4" name="keuzes"> ' + lijst[randomNummer].keuze4 + '</p>';
    NummerQ = lijst[randomNummer].nummer;
    VolgendeKnop.style.display = 'block';
    bar.style.display = 'flex';
}

function VolgendeVraag() {
    teller++;
    var nummer1 = document.getElementById("Keuze1").checked;
    var nummer2 = document.getElementById("Keuze2").checked;
    var nummer3 = document.getElementById("Keuze3").checked;
    var nummer4 = document.getElementById("Keuze4").checked;
    if (nummer1) {
        antwoord = 1;
    }
    if (nummer2) {
        antwoord = 2;
    }
    if (nummer3) {
        antwoord = 3;
    }
    if (nummer4) {
        antwoord = 4;
    }
    updateScore();

    VraagTop.innerHTML = '';
    VraagBot.innerHTML = '';
    if (teller < AantalVragenT) {
        lijst.splice(randomNummer, 1);
        aantalVragen--;
        clearInterval(count);
        ToonVraag();
    } else {
        VolgendeKnop.style.display = 'none';
        bar.style.display = 'none';
        document.getElementById("Timer").style.display = 'none';
        clearInterval(count);
        VraagTop.innerHTML = "U heeft alle vragen beantwoord. U score word nu berekend !";
        VraagBot.innerHTML = '';
        setTimeout(EindeQuiz, 5000);
    }
}

function updateScore() {
    var tempN = NummerQ;
    GetLijstMetResultaten(tempN);
    fetch("/Vragen/UpdateScore?keuze=" + antwoord + "&positie=" + tempN)
        .then((response) => {
            return response.json();
        })
        .then((feedback) => {
            score += feedback;
            AddPercentage();
        });
}

function EindeQuiz() {
    VraagTop.innerHTML = '';
    VraagBot.style.display = 'none';
    VolgendeKnop.style.display = 'none'
    var perc = Math.round((score / AantalVragenT) * 100);
    document.getElementById("AntwoordenB").style.display = 'block';
    VraagTop.innerHTML = "Dit is het einde van de Quiz !"
    if (perc >= 60) {
        VraagTop.innerHTML += "<p>Proficiat, u heeft gewonnen met een score van " + perc + "%.</p>" + "<p>" + "<img src='win.jpg' style='height: 50%; width: 50%'/>" + "</p>"
    } else {
        VraagTop.innerHTML += "<p>Jammer, maar u heeft een score behaalt van " + perc + "%. U moet minstens 60% score behalen om te winnen !</p>"
    }
    document.getElementById("AntwoordenB").addEventListener("click", ToonJuisteAntwoorden);
}

function AddPercentage() {
    let totaalLengte = parseInt(window.getComputedStyle(bar).width);
    slider = slider + Math.round(totaalLengte / AantalVragenT);
    percentage.style.width = slider + "px";
}

function myTimer() {
    countTijd--;
    document.getElementById("Timer").innerHTML = "Resterende tijd<br />" + countTijd;
    if (countTijd <= 0) {
        clearInterval(count);
        VolgendeVraag();
    }
}

function randomVraag() {
    var randomNummer = randomNummer = Math.floor(Math.random() * aantalVragen);


    return randomNummer;
}

function GetLijstMetResultaten(vraag) {
    fetch("/Vragen/LijstCorrect?vraag=" + vraag)
        .then((response) => {
            return response.json();
        })
        .then((feedback) => {
            AntwoordenDiv.innerHTML += "<p><div id='VraagT'>Vraag " + teller + ": </div>";
            AntwoordenDiv.innerHTML += feedback[0].vraag + "<br/><br/>";
            AntwoordenDiv.innerHTML += "<div id='Groen'>Antwoord:</div>" + " " + feedback[0].keuze1 + "</p>";
        });
}

function ToonJuisteAntwoorden() {
    document.getElementById("AntwoordenB").style.display = 'none';
    VraagTop.innerHTML = "";
    AntwoordenDiv.style.display = "block";
}