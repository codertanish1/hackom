var tl = gsap.timeline()
tl.from("h2", {
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
    
})

tl.from("h4", {
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.5
    
    
})


// gsap.from("img",{
//     y:-30,
//     x:1000,
//     rotate:360,
//     opacity:0,
//     duration:2,
//     delay:0.5
    
// })