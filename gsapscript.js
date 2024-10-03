// GSAP animation template

// Incoming animation for anchor tags
gsap.from("#nav a", {
    opacity: 0,
    y: 50,
    delay:5.6,
    duration: 1.5,
    ease: "power4.out",
    stagger: 0.15
});

// Animation for paragraphs
gsap.from("p", {
    opacity: 0,
    x: -100,
    duration: 1.8,
    delay:5.6,
    ease: "power3.out"
});

// Alternative paragraph animations
gsap.from(".elem", {
    opacity: 0,
    y: 100,
    duration: 1.8,
    delay:5.6,
    ease: "power3.out"
});

gsap.from("button, #back", {
    opacity: 0,
    scale: 0.5,
    duration: 2,
    delay:5.6,
    ease: "elastic.out(1, 0.75)"
});

// Animation for image moving from back to front along the z-axis
// gsap.from("#back", {
//     opacity: 0,
//     z: -500,
//     duration: 1,
//     ease: "power3.out"
// });

// Animation for images
gsap.from(".logo", {
    opacity: 0,
    scale: 0.8,
    duration: 2.2,
    ease: "back.out(1.5)"
});

// Animation for image container
gsap.from("#imagediv", {
    opacity: 0,
    y: -100,
    duration: 2.5,
    ease: "power4.out"
});

// huuman_official feature 
gsap.to("#page2 h1", {
    transform: "TranslateX(-270%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 5,
        pin: true
    }
})
// huuman_official feature ends


// bottom section animations 
gsap.from(".help a", {
    // opacity: 0,
    x: -150,
    duration: 1,
    ease: "power4.out",
    stagger: 0.05,
    scrollTrigger: {
        trigger: ".help a",
        scroller: "body",
        scrub: 5,
        start: "top 95%",
        end: "top 90%"
    }

});

gsap.from(".ig h2", {
    // opacity: 0,
    x: 150,
    duration: 1,
    ease: "power4.out",
    stagger: 1,
    scrollTrigger: {
        trigger: ".ig h2",
        scroller: "body",
        scrub: 5,
        start: "top 95%",
        end: "top 90%"
    }

});

// gsap.from(".ig a", {
//     // opacity: 0,
//     x: 150,
//     duration: 0.3,
//     ease: "power4.out",
//     stagger: 0.10,
//     scrollTrigger:{
//         trigger:".ig a",
//         scroller:"body",
//        scrub:5,
//        markers:true,
//        start:"top 99%",
//        end:"top 95%"
//     }

// });

gsap.from(".ig a", {
    opacity: 0,
    x: -250,
    duration: 1,
    ease: "power4.out",
    stagger: 0.10,
    scrollTrigger: {
        trigger: ".ig a",
        scroller: "body",
        scrub: 5,
        start: "top 98%",
        end: "top 94%"
    }
});







gsap.from(".sleft h2", {
    opacity: 0,
    x: -250,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".sleft h2",
        scroller: "body",
        scrub: 5,
    }
});

gsap.from(".sright .simage", {
    opacity: 0,
    x: 250,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".sright .simage",
        scroller: "body",
        scrub: 5,
    }
});
// bottom section animation ends 


gsap.from(".shopnow h1", {
    opacity: 0,
    x: -250,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".shopnow h1",
        scroller: "body",
        scrub: 5,
    }
});


// gsap.from(".testimonial",{
//     x:-200,
//     duration:1,
//     opacity:0,
//     ease:"power4.out",
//     scrollTrigger: {
//         trigger: ".testimonials-grid",
//         scroller: "body",
//         scrub: 5,
//     }

// })



gsap.from(".title", {
    // opacity: 0,
    x: 250,
    duration: 1,
    ease: "power4.out",
    stagger: 1,
    scrollTrigger: {
        trigger: ".title",
        scroller: "body",
        scrub: 5,
        start: "top 70%",
        end: "top 40%"
    }

});

gsap.from(".subtitle", {
    // opacity: 0,
    x: -250,
    duration: 1,
    ease: "power4.out",
    stagger: 1,
    scrollTrigger: {
        trigger: ".subtitle",
        scroller: "body",
        scrub: 5,
        start: "top 70%",
        end: "top 40%"
    }

});