import '../libs/particles.min.js';

const particles = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const blockParticles = document.querySelector('#js-particles');

        if (!blockParticles) return;

        particlesJS.load('js-particles', 'json/particles.json', function() { 
            console.log('callback - particles.js config loaded');
        });

    });
}


export { particles };