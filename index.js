if( window.innerWidth > 800){
    gsap.registerPlugin(ScrollTrigger);


            gsap.from(".heading", {
                y: 100,
                opacity: 0,
                duration: 1.3,
                scrollTrigger: {
                    trigger: ".heading",
                    start: "top 100%",
                    toggleActions: "restart none none none",
                    markers: false
                }
            })
            gsap.from(".img_mama", {
                x: 300,
                opacity: 0,
                duration: 1.3,
                scrollTrigger: {
                    trigger: ".img_mama",
                    start: "top 100%",
                    toggleActions: "restart none none none",
                    markers:false,
                }
            });
            gsap.from(".page2h2", {
                x: -100,
                opacity: 0,
                duration: 1.3,
                scrollTrigger: {
                    trigger: ".page2h2",
                    start: "top 100%",
                    toggleActions: "restart none none none",
                    markers: false
                }
            })
            gsap.from(".para2", {
                x: 200,
                opacity: 0,
                duration: 1.3,
                scrollTrigger: {
                    trigger: ".para2",
                    start: "top 100%",
                    toggleActions: "restart none none none",
                    markers:false,
                }
            });

            gsap.from(".page3h3", {
                x: -100,
                opacity: 0,
                duration: 1.3,
                scrollTrigger: {
                    trigger: ".page3h3",
                    start: "top 100%",
                    toggleActions: "restart none none none",
                    markers: false
                }
            })
            gsap.from(".para3", {
                x: 200,
                opacity: 0,
                duration: 1.3,
                scrollTrigger: {
                    trigger: ".para3",
                    start: "top 100%",
                    toggleActions: "restart none none none",
                    markers:false,
                }
            });
            gsap.from(".footer-head", {
                y: 160,
                opacity: 0,
                duration: 1.70,
                scrollTrigger: {
                    trigger: ".footer-head",
                    start: "top 101%",
                    toggleActions: "restart none none none",
                    markers:false,
                }
            });
}

