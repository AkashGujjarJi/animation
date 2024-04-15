var crsr = document.querySelector("#cursor")
var blurr = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.x - 10 + "px";
    crsr.style.top = dets.y - 10 + "px";
    blurr.style.left = dets.x - 200 + "px";
    blurr.style.top = dets.y - 200 + "px";
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach((el) => {
    el.addEventListener("mouseover", () => {
        setTimeout(() => {
            
        crsr.style.width = "50px";
        crsr.style.height = "50px";
        crsr.style.border = "2px solid #ffffff";
        crsr.style.backgroundColor = "transparent";
        document.addEventListener("mousemove", (dets) => {
            crsr.style.left = dets.x - 25 + "px";
            crsr.style.top = dets.y - 25 + "px";
        })}, 200);
    })
    el.addEventListener("mouseout", () => {
        crsr.style.width = "20px";
        crsr.style.height = "20px";
        crsr.style.border = "0px";
        crsr.style.backgroundColor = "#95c11e"
        crsr.style.transition = "none";

        document.addEventListener("mousemove", (dets) => {
            dtts = dets;
            crsr.style.left = dets.x - 10 + "px";
            crsr.style.top = dets.y - 10 + "px";
        })

    })
})

gsap.to("#nav", {
    backgroundColor: "black",
    duration: 1.5,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -3%",
        end: "top -12%",
        scrub: 2
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -12%",
        end: "top -65%",
        scrub: 3,
    }
})

