 // Smooth scrolling for navigation links
        $(document).ready(function() {
            $('a[href^="#"]').on('click', function(e) {
                e.preventDefault();
                var target = $(this.getAttribute('href'));
                if(target.length) {
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 80
                    }, 1000);
                }
            });

            // Add animation on scroll
            $(window).on('scroll', function() {
                $('.course-card, .highlight-card, .feature-box').each(function() {
                    if($(this).offset().top < $(window).scrollTop() + $(window).height()) {
                        $(this).addClass('animate__animated animate__fadeInUp');
                    }
                });
            });

            // Button hover effects
            $('.btn-primary-dark, .btn-learn-more').on('mouseenter', function() {
                $(this).css('transform', 'translateY(-2px)');
            }).on('mouseleave', function() {
                $(this).css('transform', 'translateY(0)');
            });
        });


       // University name rotation
    const svoUniversities = [
      "Princeton University",
      "Harvard University",
      "Stanford University",
      "Columbia University",
      "Brown University",
      "Monash University",
      "Dartmouth University",
      "University of California"   
     
    ];

    let svoIndex = 0;
    const svoNameEl = document.getElementById("svoUniversityName");

    setInterval(() => {
      svoNameEl.style.opacity = 0;
      setTimeout(() => {
        svoIndex = (svoIndex + 1) % svoUniversities.length;
        svoNameEl.textContent = svoUniversities[svoIndex];
        svoNameEl.style.opacity = 1;
      }, 500);
    }, 1500);


    // Initialize Top Scores Carousel
document.addEventListener('DOMContentLoaded', function() {
    const scoresContainer = document.querySelector('.scores-container');
    const prevBtn = document.querySelector('.scores-nav.prev-btn');
    const nextBtn = document.querySelector('.scores-nav.next-btn');

    if (!scoresContainer || !prevBtn || !nextBtn) return;

    const scrollAmount = 320; // Card width + gap

    // Scroll left
    prevBtn.addEventListener('click', function() {
        scoresContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // Scroll right
    nextBtn.addEventListener('click', function() {
        scoresContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            scoresContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        } else if (e.key === 'ArrowRight') {
            scoresContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });

    // Update button visibility based on scroll position
    function updateButtonVisibility() {
        const isAtStart = scoresContainer.scrollLeft === 0;
        const isAtEnd = scoresContainer.scrollLeft + scoresContainer.clientWidth >= scoresContainer.scrollWidth - 10;

        prevBtn.style.opacity = isAtStart ? '0.5' : '1';
        prevBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';
        nextBtn.style.opacity = isAtEnd ? '0.5' : '1';
        nextBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
    }

    scoresContainer.addEventListener('scroll', updateButtonVisibility);
    updateButtonVisibility();
});




// Initialize Top Universities Carousel
document.addEventListener('DOMContentLoaded', function() {
    const carouselRows = document.querySelectorAll('.carousel-row');
    
    carouselRows.forEach(row => {
        const track = row.querySelector('.carousel-track');
        
        // Pause animation on hover
        row.addEventListener('mouseenter', function() {
            track.style.animationPlayState = 'paused';
        });
        
        // Resume animation on mouse leave
        row.addEventListener('mouseleave', function() {
            track.style.animationPlayState = 'running';
        });
    });
});




  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".menu-overlay");
  const openBtn = document.querySelector(".custom-toggle");
  const closeBtn = document.querySelector(".close-menu");

  openBtn.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    overlay.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    overlay.classList.remove("show");
  });

  overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    overlay.classList.remove("show");
  });



      const modeSelect = document.getElementById("mode");
    const branchWrapper = document.getElementById("branchWrapper");

    // Hide branch on load
    branchWrapper.style.display = "none";

    modeSelect.addEventListener("change", function () {
        if (this.value === "in-person") {
            branchWrapper.style.display = "block";
        } else {
            branchWrapper.style.display = "none";
        }
    });