document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const loginContainer = document.getElementById('login-container');
    const homepageContainer = document.getElementById('homepage-container');

    // Show loader for 2 seconds, then reveal login form
    setTimeout(() => {
        loader.style.display = 'none';
        loginContainer.classList.remove('hidden');
    }, 2000);

    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const phone = document.getElementById('phone').value;
        let isAdmin = false;

        // Check for admin login
        if (phone === '0740035058') {
            isAdmin = true;
        }

        // Hide login form and display homepage
        loginContainer.classList.add('hidden');
        loader.style.display = 'block'; // Show loader during transition

        setTimeout(() => {
            loader.style.display = 'none';
            homepageContainer.classList.remove('hidden');

            if (isAdmin) {
                document.getElementById('admin-panel').classList.remove('hidden'); // Show admin panel
            }
        }, 2000); // Simulate loading
    });

    // Sliding Screen Feature
    let index = 0;
    const slidingScreen = document.getElementById('sliding-screen');
    const images = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg'];

    function showSlide() {
        slidingScreen.style.backgroundImage = `url(${images[index]})`;
        index = (index + 1) % images.length;
    }

    setInterval(showSlide, 3000);

    // Admin: Post content (this is only visible to admins)
    document.getElementById('post-content').addEventListener('click', function() {
        const fileInput = document.getElementById('image-upload');
        const description = document.getElementById('bot-description').value;
        
        if (fileInput.files.length === 0 || description.trim() === '') {
            alert('Please upload an image and write a description.');
            return;
        }

        // Simulate posting content (this would require server-side handling)
        alert('Content posted successfully!');
        fileInput.value = '';
        document.getElementById('bot-description').value = '';
    });
});
