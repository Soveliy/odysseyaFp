const planet = () => {
    const planet = document.querySelector('.planet');

    if (!planet) return;

    const messages = planet.querySelectorAll('[data-message]');

    messages.forEach(elem => {
        const next = elem.querySelector('[data-message-next]');

        if (next !== null) {
            next.addEventListener('click', () => {
                let nextIndex = next.getAttribute('data-message-next');
    
                elem.classList.remove('is-active');
                elem.classList.add('is-no-active');
    
                const nextMessage = document.querySelector(`[data-message="${nextIndex}"]`);
                if (nextMessage !== null) {
                    nextMessage.classList.add('is-active');
                }
            });
        }
    });
}

export { planet };