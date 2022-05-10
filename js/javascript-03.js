		/*Image Slider-01*/
        var slides = document.querySelectorAll('.slide');
        var btns = document.querySelectorAll('.btn');
        let currentSlide = 1;

        // Javascript for image-slider-01 manual navigation
        var manualNav = function(manual){
        slides.forEach((slide) => {
        slide.classList.remove('active-event');
        

        btns.forEach((btn) => {
          btn.classList.remove('active-event');
        });
        });

        slides[manual].classList.add('active-event');
        btns[manual].classList.add('active-event');
        }

        btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
        });
        });

        // Javascript for image-slider-01 autoplay navigation
        var repeat = function(activeClass){
        let active = document.getElementsByClassName('active-event');
        let i = 1;

        var repeater = () => {
        setTimeout(function(){
        [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active-event');
        });

        slides[i].classList.add('active-event');
        btns[i].classList.add('active-event');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
        }, 5000);
        }
        repeater();
        }
        repeat();

        