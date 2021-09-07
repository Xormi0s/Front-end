function getDagenMaand(x) {
    var aantalDagen = [31,29,31,30,31,30,31,31,30,31,30,31];
    
    return aantalDagen[x];
}

function getDagenWeek(y) {
    var dagen = ["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"];
    
    return dagen[y];
}

function laadDagen() {
    var vandaag = new Date();
    var intMaand = vandaag.getMonth();
    var intJaar = vandaag.getFullYear();
    var maand = document.getElementById('gegevens').value;
    
    if (maand == '' || maand == null){
        maand = intMaand;
    }
    
    if(isNaN(maand) || maand < 1 || maand > 12){
        document.getElementById('warning').innerHTML = 'De maand moet een geldig getal zijn van 1 - 12 !';
    } else {
        var popup = window.open();
        for(intDag = 1; intDag <= getDagenMaand(maand -1); intDag++){
            var tDatum = new Date(intJaar, maand -1, intDag);
            intDagWeek = tDatum.getDay();
            popup.document.write(getDagenWeek(intDagWeek) + " " + intDag + "/" + maand + "/" + intJaar + '<br>')
        }
    }
}