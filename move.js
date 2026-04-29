let box = document.querySelector("div")
const body = document.querySelector("body")

let pos = "stop"
box.addEventListener("click", function () {
    if (pos == "stop") {
        pos = "move"
    } else {
        pos = "stop"
    }

})
let p = ["#fff", " radial-gradient(circle, #5c0067 0%, #00d4ff 100%)", "linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)", "#F08080", "#FF0000"]
let pp = 0
box.addEventListener("dblclick", function () {
    if (pp == p.length) {
        pp = 0
    }
    body.style.background = p[pp]
    pp++
})
body.addEventListener("mousemove", function (e) {

    if (pos == "move") {
        box.style.left = e.clientX - 50 + "px";
        box.style.top = e.clientY - 50 + "px";
       
    }
})
