const corporulia = () => {
    const corporulia = document.querySelector('.corporulia');

    if (!corporulia) return;

    const messages = corporulia.querySelectorAll('[data-message]');

    messages.forEach(elem => {
        const next = elem.querySelector('[data-message-next]');
        const close = elem.querySelector('[data-message-close]');

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

        if (close !== null) {
            close.addEventListener('click', () => {
                elem.classList.remove('is-active');
                elem.classList.add('is-no-active');
            });
        }
    });

    // Show latitudeus
    const buttonVisibleLatitudeus = corporulia.querySelector('[data-visible-latitudeus]');
    const characterLatitudeus = corporulia.querySelector('.character_latitudeus');
    const layerLatitudeus = corporulia.querySelector('.latitudeus__layer_normal');

    if (buttonVisibleLatitudeus !== null) {
        buttonVisibleLatitudeus.addEventListener('click', () => {
            if (characterLatitudeus !== null) {
                characterLatitudeus.setAttribute('data-state', 'normal');
            }
            if (layerLatitudeus !== null) {
                layerLatitudeus.classList.add('is-active');
            }
        });
    }

    // Go to latitudeus
    const buttonMoveLatitudeus = corporulia.querySelector('[data-move-latitudeus]');
    const characterAnswerus = corporulia.querySelector('.character_answerus');
    const latitudeus = corporulia.querySelector('.latitudeus');
    
    if (buttonMoveLatitudeus !== null) {
        buttonMoveLatitudeus.addEventListener('click', () => {
            if (characterAnswerus !== null) {
                characterAnswerus.setAttribute('data-state', 'disabled');
            }
            if (latitudeus !== null) {
                latitudeus.classList.add('is-active');
            }
        }); 
    }

    // Hover on character
    const charactersHover = corporulia.querySelectorAll('[data-character-hover]');

    charactersHover.forEach(element => {
        const layerActive = corporulia.querySelector(element.getAttribute('data-character-hover-layer'));

        element.addEventListener('mouseenter', () => {
            element.setAttribute('data-state', 'active');
            layerActive.classList.add('is-active');
        });
        element.addEventListener('mouseleave', () => {
            element.setAttribute('data-state', 'normal');
            layerActive.classList.remove('is-active');
        });
    });

}

export { corporulia };