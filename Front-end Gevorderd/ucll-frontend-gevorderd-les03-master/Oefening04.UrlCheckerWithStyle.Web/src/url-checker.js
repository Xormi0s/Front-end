function checkUrl() {
    let urlString = document.getElementById("url").value;

    try {
        let url = new URL(urlString);
        if (url.protocol.toLowerCase().startsWith("http")) {
            document.getElementById("url").className = "bg-success"; // Dit is een Boostrap 4 class
            document.getElementById("urlParts").style.display = "unset";

            document.getElementById("schema").value = url.protocol;
            document.getElementById("host").value = url.hostname;
            document.getElementById("port").value = url.port;
            document.getElementById("path").value = url.pathname;
            document.getElementById("query").value = url.search;
            document.getElementById("fragment").value = url.hash;
        } else {
            document.getElementById("url").className = "bg-warning"; // Dit is een Boostrap 4 class
            document.getElementById("url").title = "De URL is geldig maar heeft geen http(s) schema/protocol.";
            document.getElementById("urlParts").style.display = "none";
        }
    } catch (ex) {
        // invalid URL
        document.getElementById("url").className = "bg-danger"; // Dit is een Boostrap 4 class
        document.getElementById("urlParts").style.display = "none";
    }
}

// De methode checkUrl() is momenteel niet bereikbaar: webpack heeft die afgeschermd.
// Je kan die 'globaal' beschikbaar maken via onderstaande werkwijze
// (Opgelet: functies, variabelen, ... globaal definiëren kan 'gevaarlijk' zijn en wordt soms afgeraden.)
window.checkUrl = checkUrl;

// Alternatief: je registreert een 'click' handler bij de 'Controleer' knop
// Je moet dan wel 'onclick="checkUrl()"' weghalen en een id="buttonCheck" toevoegen bij de 'Controleer' button in index.html.
// In les 4 gaan we daar dieper op in.
//document.getElementById("buttonCheck").addEventListener("click", function () {
//    checkUrl();
//});