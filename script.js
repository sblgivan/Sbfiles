document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const loginContainer = document.getElementById('login-container');
    const homepageContainer = document.getElementById('homepage-container');
    const adminPanel = document.getElementById('admin-panel');
    const slidingScreen = document.getElementById('sliding-screen');

    // Check if these elements exist
    if (!loader || !loginContainer || !homepageContainer || !slidingScreen) {
        console.error("Missing elements in the DOM.");
        return;
    }

    // Show loader for 2 seconds, then reveal login form
    setTimeout(() => {
        loader.style.display = 'none';
        loginContainer.classList.remove('hidden');
    }, 2000);

    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const phone = document.getElementById('phone').value;
        let isAdmin = false;

        // Admin login check
        if (phone === '0740035058') {
            isAdmin = true;
        }

        // Hide login form and show loader during transition to homepage
        loginContainer.classList.add('hidden');
        loader.style.display = 'block';

        setTimeout(() => {
            loader.style.display = 'none';
            homepageContainer.classList.remove('hidden');

            // Show admin panel if logged in as admin
            if (isAdmin) {
                adminPanel.classList.remove('hidden');
            }
        }, 2000); // Simulated loading time
    });

    // Sliding Screen Feature
    let index = 0;
    const images = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg'];

    if (slidingScreen && images.length > 0) {
        function showSlide() {
            slidingScreen.style.backgroundImage = `url(${images[index]})`;
            index = (index + 1) % images.length;
        }

        setInterval(showSlide, 3000); // Slide every 3 seconds
    } else {
        console.error("Sliding screen or images not found.");
    }

    // Admin: Post content (this is only visible to admins)
    if (document.getElementById('post-content')) {
        document.getElementById('post-content').addEventListener('click', function() {
            const fileInput = document.getElementById('image-upload');
            const description = document.getElementById('bot-description').value;

            if (!fileInput || !description) {
                console.error("Admin input fields missing.");
                return;
            }

            if (fileInput.files.length === 0 || description.trim() === '') {
                alert('Please upload an image and write a description.');
                return;
            }

            // Simulate posting content
            alert('Content posted successfully!');
            fileInput.value = '';
            document.getElementById('bot-description').value = '';
        });
    }
});
        
