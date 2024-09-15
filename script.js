// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:0.5
// })

//---scrolltrigger


// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// })

// gsap.from("#page2 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     // scrollTrigger:"#page2 #box"
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 10%",
//         // scrub:true
//         scrub:2
//     }
// })


//----scrolltrigger pin property

gsap.to("#page2 h1",{
    transform: "translateX(-200%)",
    duration:1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        pin:true,
        scrub:2

    }

})