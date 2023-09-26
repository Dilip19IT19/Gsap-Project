
let tl=gsap.timeline();

tl.from("nav>img,nav .nav-list li",{
    y:-100,
    duration:0.8,
    stagger:0.1
})

tl.from("#top-left,#bottom-right",{
    scale:0,
    stagger:0.1,
    opacity:0,
    duration:0.7
})

tl.from(".container h1",{
    stagger:0.1,
    y:70,
    x:-400,
    opacity:0,
    duration:1
})

gsap.from(".box",{
   opacity:0,
   stagger:0.3,
   duration:0.8,
   scale:2,
   scrollTrigger:{
    trigger:".box",
    scroller:"body",
    start:"top 90%",
    end:"top 50%",
   
   }
})