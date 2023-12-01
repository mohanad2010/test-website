function ttl() {
    var x = document.getElementById("hi");
    var r = document.getElementById("hello");
    var t = document.getElementById("vv");
    var e = document.getElementById("rr");
    
    if (x.style.display === "block") {
        x.style.display = "none";
        r.style.display = "block";
        t.style.background = "rgb(177, 169, 169)";
        e.style.background = "#222";
    }
}