

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
        setTimeout(autoSlide, 4500); // Change slide every 3 seconds
    }

    showSlides();
    autoSlide();


    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      
        ga('create', 'UA-46156385-1', 'cssscript.com');
        ga('send', 'pageview');
      
        let slideIndex1 = 0;

        function showSlides1() {
            const slides1 = document.querySelector('.services-slides');
            const totalservicesSlides = document.querySelectorAll('.services-slide').length;
            if (slideIndex1 >= totalservicesSlides) {
                slideIndex1 = 0;
            }
            if (slideIndex1 < 0) {
                slideIndex1 = totalservicesSlides - 1;
            }
            slides1.style.transform = 'translateX(' + (-slideIndex1 * 100) + '%)';
        }
    
        function moveSlides1(n) {
            slideIndex1 += n;
            showSlides1();
        }
    
        function autoSlide1() {
            slideIndex1++;
            showSlides1();
            setTimeout(autoSlide1, 4500); // Change slide every 3 seconds
        }
    
        showSlides1();
        autoSlide1();
        /*whatsapp hyperlink 
        document.addEventListener('DOMContentLoaded', function() {
            const whatsappIcon = document.getElementById('whatsapp-icon');
            whatsappIcon.addEventListener('click', function() {
              window.location.href = "https://wa.me/918054610002?text=I'm%20Your%20Travel%20Guide%20S.%20Harjit%20Singh";
            });
          });*/
/*this make the amritsar tour section button "book now" button to make a call */