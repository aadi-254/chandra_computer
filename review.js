if( window.innerWidth > 800){
    gsap.registerPlugin(ScrollTrigger);


            gsap.from(".reviewpara", {
                y: 100,
                opacity: 0,
                duration: 1.3,
                scrollTrigger: {
                    trigger: ".reviewpara",
                    start: "top 100%",
                    toggleActions: "restart none none none",
                    markers: false
                }
            });
            gsap.from(".reviewpara2", {
                x: 100,
                opacity: 0,
                duration: 1.3,
                scrollTrigger: {
                    trigger: ".reviewpara2",
                    start: "top 100%",
                    toggleActions: "restart none none none",
                    markers: false
                }
            });
            gsap.from(".body2-head", {
                y: 100,
                opacity: 0,
                duration: 1.3,
                scrollTrigger: {
                    trigger: ".body2-head",
                    start: "top 110%",
                    toggleActions: "restart none none none",
                    markers: false
                }
            });
            
}