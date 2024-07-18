let slideIndex = 0;

    function showSlides() {
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;
        if (slideIndex >= totalSlides) {
            slideIndex = 0;
        }
        if (slideIndex < 0) {
            slideIndex = totalSlides - 1;
        }
        slides.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
    }

    function moveSlides(n) {
        slideIndex += n;
        showSlides();
    }

    function autoSlide() {
        slideIndex++;
        showSlides();
        setTimeout(autoSlide, 5000); // Change slide every 3 seconds
    }

    showSlides();
    autoSlide();


    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      
        ga('create', 'UA-46156385-1', 'cssscript.com');
        ga('send', 'pageview');
      