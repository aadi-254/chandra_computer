if( window.innerWidth >  800){
    gsap.registerPlugin(ScrollTrigger);


            gsap.from(".body", {
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