function checkurl() {
    var check = document.getElementById("input").value;
    var color = document.getElementById("input");
    var display = document.getElementById("output");
    try {
        var output = new URL(check);

        color.style.backgroundColor = "green";
        display.style.display = "block";

        document.getElementById("Schema").value = output.protocol;
        document.getElementById("Host").value = output.hostname;
        document.getElementById("Port").value = output.port;
        document.getElementById("Path").value = output.pathname;
        document.getElementById("Query").value = output.search;
        document.getElementById("Fragment").value = output.hash;
    }
    catch{
        document.getElementById("input").value = "";
        document.getElementById("input").placeholder = "Dit is geen geldige url";
        color.style.backgroundColor = "red";
        display.style.display = "none";
    }
}