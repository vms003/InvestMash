document.addEventListener('DOMContentLoaded', function() {
    // Fetch and insert the navbar content dynamically
    fetch('/static/templates/navbar.html') 
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error fetching navbar:', error));

    // Function to handle search input with debounce
    let debounceTimer;

    function handleSearchInput() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(fetchSuggestions, 300); // Adjust debounce delay as needed
    }

    // Function to fetch autocomplete suggestions
    function fetchSuggestions() {
        const query = document.getElementById('search-input').value.trim();
        if (query.length === 0) {
            clearSuggestions();
            return;
        }

        // Display loading indicator
        document.getElementById('suggestion-container').innerHTML = '<div>Loading...</div>';

        // Send AJAX request to backend for autocomplete suggestions
        fetch(`/autocomplete?query=${query}`)
            .then(response => response.json())
            .then(data => {
                displaySuggestions(data);
            })
            .catch(error => console.error('Error fetching autocomplete suggestions:', error));
    }

    // Function to clear suggestions
    function clearSuggestions() {
        document.getElementById('suggestion-container').innerHTML = '';
    }

// Function to display autocomplete suggestions
function displaySuggestions(suggestions) {
    // Clear previous suggestions
    clearSuggestions();

    // Display new suggestions
    const suggestionContainer = document.getElementById('suggestion-container');
    if (suggestions.length === 0) {
        suggestionContainer.innerHTML = '<div>No suggestions found</div>';
    } else {
        suggestions.forEach(suggestion => {
            const suggestionElement = document.createElement('div');
            suggestionElement.classList.add('suggestion');
            suggestionElement.textContent = suggestion.name;
            suggestionElement.addEventListener('click', () => {
                // Redirect to the root URL with the stock name as a query parameter
                window.location.href = `/?stock=${encodeURIComponent(suggestion.name)}`;
            });
            suggestionContainer.appendChild(suggestionElement);
        });
    }
}


    // Event listener for search input
    document.getElementById('search-input').addEventListener('input', handleSearchInput);

    // Keyboard navigation for suggestions
    document.addEventListener('keydown', e => {
        const suggestions = document.querySelectorAll('.suggestion');
        if (suggestions.length === 0) return;
        let selectedIndex = -1;
        suggestions.forEach((suggestion, index) => {
            if (suggestion.classList.contains('selected')) {
                selectedIndex = index;
                suggestion.classList.remove('selected');
            }
        });
        if (e.key === 'ArrowDown') {
            selectedIndex = Math.min(selectedIndex + 1, suggestions.length - 1);
        } else if (e.key === 'ArrowUp') {
            selectedIndex = Math.max(selectedIndex - 1, 0);
        }
        suggestions[selectedIndex].classList.add('selected');
        suggestions[selectedIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});






// Function to toggle the dropdown menu
function toggleDropdown(event) {
    console.log('Dropdown button clicked');
    var dropdown = event.currentTarget.nextElementSibling;
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

document.addEventListener("click", function(event) {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(function(dropdown) {
        const button = dropdown.querySelector(".button-plain");
        const menu = dropdown.querySelector(".dropdown-menu");
        if (button.contains(event.target) || menu.contains(event.target)) {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
});

// -------------------------------------------------testimonial--------------------------
document.addEventListener("DOMContentLoaded", function() {
    // Get the testimonial slides container
    const testimonialSlides = document.querySelector('.testimonial-slides');
    const testimonials = document.querySelectorAll('.testimonial');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    let currentIndex = 0;
    const intervalTime = 5000; // Interval time in milliseconds
    let slideInterval;

    // Function to start the slideshow
    function startSlide() {
        slideInterval = setInterval(() => {
            goToNextSlide();
        }, intervalTime);
    }

    // Function to pause the slideshow
    function pauseSlide() {
        clearInterval(slideInterval);
    }

    // Function to go to the next slide
    function goToNextSlide() {
        currentIndex++;
        if (currentIndex === testimonials.length) {
            currentIndex = 0;
        }
        updateSlide();
    }

    // Function to go to the previous slide
    function goToPrevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = testimonials.length - 1;
        }
        updateSlide();
    }
// Automatic scrolling animation
function scrollTestimonials() {
    let testimonialContainer = document.querySelector('.testimonial-container');
    let testimonials = document.querySelectorAll('.testimonial');
    let width = testimonials[0].offsetWidth;
    testimonialContainer.scrollLeft += width;
    if (testimonialContainer.scrollLeft + testimonialContainer.clientWidth >= testimonialContainer.scrollWidth) {
        testimonialContainer.scrollTo({ left: 0, behavior: 'smooth' });
    }
}

setInterval(scrollTestimonials, 5000); // Adjust interval for slow slideshow

    // Function to update the slide display
    function updateSlide() {
        testimonialSlides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Event listener for next button click
    nextBtn.addEventListener('click', () => {
        pauseSlide();
        goToNextSlide();
    });

    // Event listener for previous button click
    prevBtn.addEventListener('click', () => {
        pauseSlide();
        goToPrevSlide();
    });

    // Start the slideshow
    startSlide();

    // Pause the slideshow on hover
    testimonialSlides.addEventListener('mouseenter', pauseSlide);
    testimonialSlides.addEventListener('mouseleave', startSlide);
});
