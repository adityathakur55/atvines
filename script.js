
var blur= document.querySelector("#cursor-blur")
var crsr= document.querySelector("#cursor")
document.addEventListener("mousemove", function(dets){
    crsr.style.left= dets.x+30 +"px"
    crsr.style.top=dets.y+"px"
    blur.style.left= dets.x -100+"px"
    blur.style.top= dets.y -100+"px"
})

  var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid rgba(0, 195, 255, 0.471)";
    crsr.style.backgroundColor = "rgba(0, 195, 255, 0.471)";
  });
});

gsap.to("#nav",{
    backgroundColor: "lightblack",
    duration:0.5,
    height:"90px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        //markers: true,
        start: "top -40%",
        end:"top -30%",
        scrub: 1
    }
})

gsap.to("#page1 h1", {
    y:100,
    scrollTrigger:{
        trigger: "#page1 h1",
        scroller: "#main",
       // markers: true,
        start: "top 25%",
        end: "top 0",
        scrub: 3
    }
})

/*gsap.to("#main", {
    backgroundColor: "lightgrey",
    scrollTrigger:{
        trigger: "#main",
        scroller:"body",
        //markers: true,
        start: "top - 30%",
        end:"top -70%",
        scrub:1
    }

})*/

gsap.from("#about-us img,#about-us-in", {
    y:50,
    opacity:0,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger: "#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }

})
gsap.from(".card", {
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger: ".card",
        scroller:"body",
        start:"top 85%",
        end:"top 85%",
        scrub:3

    }
})
gsap.from("#colon1", {
    color: "skyblue",
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2", {
    color: "skyblue",
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("page4 h1", {
    y:70,
    scrollTrigger:{
        trigger:"page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:4
    }
})



