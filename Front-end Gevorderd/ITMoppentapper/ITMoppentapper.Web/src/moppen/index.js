var moppen;
var divMop = document.getElementById("mopText");
var volgendeB = document.getElementById("mopB");
var scoreB = document.getElementById("score");
var opmerkingenT = document.getElementById("opmerkingen");
var checkfeedback = true;
var feedbackB = document.getElementById("feedbackB");

startMoppen();
volgendeB.addEventListener("click", VolgendeMop);
scoreB.addEventListener("click", ScoreCheck);
feedbackB.addEventListener("click", StuurFeedback);

function startMoppen() {
    HaalMoppenOp();
}

function HaalMoppenOp() {
    fetch("/Moppen/LaatMeLachen")
        .then((response) => {
            return response.json();
        })
        .then((feedback) => {
            moppen = feedback;
            ToonMop();
        });
}

function ToonMop() {
    divMop.innerHTML = moppen.mopTekst;
}

function VolgendeMop() {
    HaalMoppenOp();
    scoreB.value = 5;
    ScoreCheck();
}

function ScoreCheck() {
    if (scoreB.value < 5) {
        opmerkingenT.style.backgroundColor = '#ffa500';
        checkfeedback = false;
    }
    if (scoreB.value >= 5) {
        opmerkingenT.style.backgroundColor = '#FFFFFF';
        checkfeedback = true;
    }
}

//Dit is nog niet 100% afgewerkt. Vermoedelijk fout in mijn data object voor door te sturen.
function StuurFeedback() {
    var data = JSON.stringify({
        'Score': scoreB.value
    });

    if (checkfeedback = false) {
        if (opmerkingenT.value.length > 5) {
            fetch("/Tevredenheid/Registreer?tevredenheid=" + data)
                .then((response) => {
                    return response.json();
                })
                .then((feedback) => {
                    alert(feedback);
                });
        }
    } else {
        fetch("/Tevredenheid/Registreer?tevredenheid=" + data)
            .then((response) => {
                return response.json();
            })
            .then((feedback) => {
                alert(feedback);
            });
    }
}