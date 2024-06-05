if( window.innerWidth > 800){
    gsap.registerPlugin(ScrollTrigger);


            gsap.from(".b3para", {
                y: 100,
                opacity: 0,
                duration: 1.3,
                scrollTrigger: {
                    trigger: ".b3para",
                    start: "top 100%",
                    toggleActions: "restart none none none",
                    markers: false
                }
            })
            gsap.from(".list", {
                x: -300,
                opacity: 0,
                duration: 1.3,
                scrollTrigger: {
                    trigger: ".list",
                    start: "top 100%",
                    toggleActions: "restart none none none",
                    markers:false,
                }
            });
            gsap.from(".img", {
                x: -100,
                opacity: 0,
                duration: 1.3,
                scrollTrigger: {
                    trigger: ".img",
                    start: "top 100%",
                    toggleActions: "restart none none none",
                    markers: false
                }
            });
            gsap.from(".para", {
                x: 200,
                opacity: 0,
                duration: 1.3,
                scrollTrigger: {
                    trigger: ".para",
                    start: "top 100%",
                    toggleActions: "restart none none none",
                    markers:false,
                }
            });

            gsap.from(".img2", {
                x: -100,
                opacity: 0,
                duration: 1.3,
                scrollTrigger: {
                    trigger: ".img2",
                    start: "top 100%",
                    toggleActions: "restart none none none",
                    markers: false
                }
            });
            
}