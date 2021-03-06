const artifactParts = () => {
    const artifactParts = document.querySelector('.artifact-parts');

    if (!artifactParts) return;

    /*

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
    */

    // Start game
    const buttonGameStart = artifactParts.querySelector('#button-game-start');
    if (buttonGameStart !== null) {
        buttonGameStart.addEventListener('click', () => {
            const blockBlue = artifactParts.querySelector('.artifact-parts__block_game.is-blue');
            const blockWelcome = artifactParts.querySelector('#block-welcome');
            const blockGame = artifactParts.querySelector('#block-game');
            
            if (blockWelcome !== null && blockGame !== null) {
                blockWelcome.classList.remove('is-active');
                blockGame.classList.add('is-active');
            }
            if (blockBlue !== null) {
                blockBlue.classList.remove('is-blue');
            }
        });
    }

    // Game termination
    const buttonTermination = document.querySelector('#button-artifact-parts-exit');
    if (buttonTermination !== null) {
        buttonTermination.addEventListener('click', () => {
            const blockTermination = artifactParts.querySelector('#block-termination');

            if (blockTermination !== null) {
                blockTermination.classList.add('is-active');
            }
        });
    }

    // Game Return
    const buttonReturn = artifactParts.querySelector('#button-return');
    if (buttonReturn !== null) {
        buttonReturn.addEventListener('click', () => {
            const blockTermination = artifactParts.querySelector('#block-termination');

            if (blockTermination !== null) {
                blockTermination.classList.remove('is-active');
            }
        });
    }

    // ???????????? ???????????????? ????????????
    const blockResult = artifactParts.querySelector('.artifact-parts__block_result');

    if (blockResult.classList.contains('is-active')) {
        fallingCircles();
    }
   
    function fallingCircles() {
        const pageWrapper = document.querySelector('.page__border');
        const particlesBlock = artifactParts.querySelector('.artifact-parts__particles');
        const number = 13; //?????????? ????????????????
        let pageWidth;
        let pageHeight;
        let isEnabled = 1; // ?????????????????? ???????????? 1 - ????, 0 - ??????

        if (pageWrapper !== null) {
            pageWidth = pageWrapper.clientWidth;
            pageHeight = pageWrapper.clientHeight; 
        } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
            pageWidth = document.body.offsetWidth;
            pageHeight = document.body.offsetHeight; 
        } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
            pageWidth = document.documentElement.offsetWidth;
            pageHeight = document.documentElement.offsetHeight; 
        } else {
            pageWidth = 500;
            pageHeight = 500; 
        }

        let snow_dx = [];
        let snow_xp = [];
        let snow_yp = [];
        let snow_am = [];
        let snow_stx = [];
        let snow_sty = [];
        let snow_color = [];

        let circleElement;

        if (isEnabled == 1) {
            for (let i = 0; i < number; i++) {
                snow_color[i] = Math.floor(Math.random()*4) + 1;
                snow_dx[i] = 0;
                snow_xp[i] = Math.random()*(pageWidth-50);
                snow_yp[i] = 0;
                snow_am[i] = Math.random()*20;
                snow_stx[i] = 0.02 + Math.random()/10;
                snow_sty[i] = 0.7 + Math.random();
                //?????????? ???????????????? ?????????????? ???????????????? ???? ???????? z-index
                if (particlesBlock !== null) {
                    circleElement = document.createElement("div");

                    circleElement.classList.add("snow-flake");
                    circleElement.classList.add("snow-flake-" + i);
                    circleElement.setAttribute("data-color", snow_color[i]);
                    circleElement.id = "snow-flake-" + i;

                    particlesBlock.append(circleElement);
                }
               
            }
        }

        function SnowStart() {
            for (let i = 0; i < number; i++) {
                let isStartTop = false;
                snow_yp[i] += snow_sty[i];
                if (snow_yp[i] > pageHeight) {
                    isStartTop = true;
                    snow_color[i] = Math.floor(Math.random()*4) + 1;
                    snow_xp[i] = Math.random()*(pageWidth-snow_am[i] - 30);
                    snow_yp[i] = 0;
                    snow_stx[i] = 0.2 + Math.random()/10;
                    snow_sty[i] = 1.7 + Math.random();
                }
                //snow_dx[i] += snow_stx[i];

                if (document.getElementById("snow-flake-"+i) !== null) {
                    if (isStartTop) {
                        document.getElementById("snow-flake-"+i).setAttribute("data-color", snow_color[i]);
                    }

                    document.getElementById("snow-flake-"+i).style.top=snow_yp[i]+"px";
                    document.getElementById("snow-flake-"+i).style.left=snow_xp[i] + snow_am[i]*Math.sin(snow_dx[i])+"px";
                }
            }
            
            let snow_time = setTimeout(() => {
                SnowStart();
            }, 10); 
        }

        if (isEnabled == 1) { 
            SnowStart(); 
        }
    }
}

export { artifactParts };