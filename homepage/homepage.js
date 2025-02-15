document.addEventListener("DOMContentLoaded", function () {
    // Carousel functionality
    const carouselContent = document.querySelector(".carousel-content");
    const prevButton = document.querySelector(".carousel-nav.prev");
    const nextButton = document.querySelector(".carousel-nav.next");
    
    let currentIndex = 0;
    const totalSlides = 3; // Assuming 3 slides as example
    
    // Add sample content to carousel (you can modify based on your needs)
    const slides = Array(totalSlides).fill().map((_, index) => {
        const slide = document.createElement("div");
        slide.classList.add("carousel-slide");
        slide.style.width = "100%";
        slide.style.height = "100%";
        slide.style.position = "absolute";
        slide.style.transition = "opacity 0.3s ease-in-out";
        slide.style.opacity = index === 0 ? "1" : "0";
        return slide;
    });
    
    slides.forEach(slide => carouselContent.appendChild(slide));
    
    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.style.opacity = index === currentIndex ? "1" : "0";
        });
    }
    
    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
        updateNavigationButtons();
    });
    
    nextButton.addEventListener("click", function () {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateCarousel();
        }
        updateNavigationButtons();
    });
    
    function updateNavigationButtons() {
        prevButton.style.opacity = currentIndex === 0 ? "0.5" : "1";
        prevButton.style.cursor = currentIndex === 0 ? "default" : "pointer";
        
        nextButton.style.opacity = currentIndex === totalSlides - 1 ? "0.5" : "1";
        nextButton.style.cursor = currentIndex === totalSlides - 1 ? "default" : "pointer";
    }
    
    // Initialize navigation buttons state
    updateNavigationButtons();
    
    // Navigation buttons functionality
    const expertBtn = document.getElementById("experts-btn");
    const programsBtn = document.getElementById("programs-btn");
    
    function setActiveButton(activeButton, inactiveButton) {
        activeButton.style.background = "#1d3c0c";
        activeButton.style.opacity = "1";
        inactiveButton.style.background = "#1d3c0c";
        inactiveButton.style.opacity = "0.7";
    }
    
    expertBtn.addEventListener("click", function() {
        setActiveButton(expertBtn, programsBtn);
        // Add your experts content loading logic here
    });
    
    programsBtn.addEventListener("click", function() {
        setActiveButton(programsBtn, expertBtn);
        // Add your programs content loading logic here
    });
    
    // Grid items hover effect
    const gridItems = document.querySelectorAll(".grid-item");
    
    gridItems.forEach(item => {
        item.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });
        
        item.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
        });
    });
    
    // Initialize the interface with Experts view active
    setActiveButton(expertBtn, programsBtn);
});