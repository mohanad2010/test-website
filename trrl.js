function rrl() {
    var x = document.getElementById("hi");
    var r = document.getElementById("hello");
    var t = document.getElementById("vv");
    var e = document.getElementById("rr");

    if (x.style.display === "none") {
        x.style.display = "block";
        r.style.display = "none";
        e.style.background = "rgb(177, 169, 169)";
        t.style.background = "#222";
      }
}