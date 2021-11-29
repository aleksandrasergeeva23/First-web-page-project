var slide_index = 1;  //muutujaks määratakse slide_index
        displaySlides(slide_index);  
        function nextSlide(n) {  //funktsioon nextSlide (järgmine slaid) võtab argumendiks arvu n
            displaySlides(slide_index += n); // näidatakse järgmine slaid
        }  
        function currentSlide(n) {  // funktsioon currentSlide (praegune slaid) võtab argumendiks arvu n
            displaySlides(slide_index = n);  // näidatakse praegune slaid
        }  
        function displaySlides(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide"); // Võetakse elemendid klassinimega "showSlide" 
            if (n > slides.length) { slide_index = 1 }  
            if (n < 1) { slide_index = slides.length }  
            for (i = 0; i < slides.length; i++) {   // Tsükkel, mis vaatab üle galerii
                slides[i].style.display = "none"; // Elementi ei kuvata
            }  
            slides[slide_index - 1].style.display = "block"; // Element kuvatakse plokitaseme elemendina  
        }  

// Allikas: https://www.c-sharpcorner.com/article/creating-an-image-slider-using-javascript-html-and-css-only/