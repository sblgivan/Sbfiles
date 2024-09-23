document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const phone = document.getElementById('phone').value;

    if (phone === '0740035058') {
        window.location.href = 'homepage.html'; // Redirect to admin homepage
    } else {
        alert('Invalid phone number.');
    }
});

// Admin features: Image upload and post description

const bots = [
    { name: 'Bot A', description: 'Highly efficient bot for scalping.', img: 'botA.jpg' },
    { name: 'Bot B', description: 'Best for swing trading.', img: 'botB.jpg' }
];

document.addEventListener('DOMContentLoaded', function() {
    const botContainer = document.getElementById('bots');
    bots.forEach(bot => {
        const botElement = document.createElement('div');
        botElement.classList.add('bot-item');
        botElement.innerHTML = `
            <img src="${bot.img}" alt="${bot.name}">
            <h3>${bot.name}</h3>
            <p>${bot.description}</p>
        `;
        botContainer.appendChild(botElement);
    });
});

// Sliding Screen Feature
let index = 0;
const slidingScreen = document.getElementById('sliding-screen');
const images = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg']; // Admin will upload these

function showSlide() {
    slidingScreen.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
}

setInterval(showSlide, 3000);
