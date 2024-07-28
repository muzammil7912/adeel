    // Initialize Lenis
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);


     // Check if it's a touch device
     const isTouchDevice = 'ontouchstart' in window;
     const createCursorFollower = () => {
       const $el = document.querySelector('.bannermouse');
       const $img = $el.querySelector('img');
       const imgWidth = $img.clientWidth / 2;
       const imgHeight = $img.clientHeight / 2;

       // Each time the mouse coordinates are updated,
       // we need to pass the values to gsap in order
       // to animate the element
       window.addEventListener('mousemove', (e) => {
         const { target, clientX, clientY } = e;
         // Check if target is inside the banner
         const isTargetInsideBanner = target.closest('.banner');
         if (isTargetInsideBanner) {
           $img.src = 'webImages/bannermouse.svg';
          } else {
            $img.src = 'webImages/bannermouse2.svg';
          }
         // GSAP config
         gsap.to($el, {
           x: clientX - imgWidth,
           y: clientY - imgHeight,
           duration: 0.1,
           ease: 'power4',
         });
       });

       // Hiding the cursor element when the mouse cursor
       // is moved out of the page
       document.addEventListener('mouseleave', () => {
         gsap.to($el, {
           duration: 0.7,
           opacity: 1,
         });
       });
     };

     // Only invoke the function if isn't a touch device
     if (!isTouchDevice) {
       createCursorFollower();
     }



     initScrolltriggerNav()
function initScrolltriggerNav() {
    
  ScrollTrigger.create({
    start: 'top -30%',
    onUpdate: self => {
      $("body").addClass('scrolled');
    },
    onLeaveBack: () => {
      $("body").removeClass('scrolled');
    },
  });

}