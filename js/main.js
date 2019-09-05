function refresh() {
    var textcontent = document.getElementById("doccontent").value;
    var View = document.getElementById("viewer").srcdoc = textcontent;
}

function toggle() {
    var set = document.getElementById("set");
    if (set.style.display == "none") {
        set.style.display = "block";
    } else {
        set.style.display = "none";
    }
}

function change() {
    var inp = document.getElementById("input").value;
    if (inp > 40) {
        inp = 40
        document.getElementById("doccontent").style.fontSize = 40 + "px";
        alert("Max 40px");

    } else {
        document.getElementById("doccontent").style.fontSize = inp + "px";
    }
}