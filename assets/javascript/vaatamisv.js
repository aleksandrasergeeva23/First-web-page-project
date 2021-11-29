var slide_index = 1;  //muutujaks määratakse slide_index
        displaySlides(slide_index);  
        function nextSlide(n) {  //funktsioon nextSlide võtab argumendiks 
            displaySlides(slide_index += n);  
        }  
        function currentSlide(n) {  
            displaySlides(slide_index = n);  
        }  
        function displaySlides(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide");  
            if (n > slides.length) { slide_index = 1 }  
            if (n < 1) { slide_index = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none"; // Elementi ei kuvata
            }  
            slides[slide_index - 1].style.display = "block"; // Element kuvatakse plokitaseme elemendina  
        }  

// Allikas: https://www.c-sharpcorner.com/article/creating-an-image-slider-using-javascript-html-and-css-only/