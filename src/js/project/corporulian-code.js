const corporulianCode = () => {
    const corporulianCode = document.querySelector('.corporulian-code');

    if (!corporulianCode) return;
    
    const questionsCounting = corporulianCode.querySelector('[data-game-counting]');
    const questionsMain = corporulianCode.querySelector('[data-game-question]');
    const questions = corporulianCode.querySelectorAll('[data-question]');
    const questionNumber = corporulianCode.querySelector('#question-number');

    questions.forEach(question => {
        const answers = question.querySelectorAll('[data-answer]');
        const character = question.querySelector('[data-question-character]');
        const buttonNext = question.querySelector('[data-question-next]');
        
        answers.forEach(answerItem => {
            const answerImage = answerItem.querySelector('[data-answer-image]');
            const answerClose = answerItem.querySelector('[data-answer-close]');
            const answerSelect = answerItem.querySelector('[data-answer-select]');

            if (answerImage !== null) {
                answerImage.addEventListener('click', () => {
                    const answerItemActive = question.querySelector('[data-answer].is-active')

                    if (answerItemActive !== null) {
                        answerItemActive.classList.remove('is-active');
                    }
                    
                    answerItem.classList.add('is-active');
                });
            }

            if (answerClose !== null) {
                answerClose.addEventListener('click', () => {
                    answerItem.classList.remove('is-active');
                });
            }

            if (answerSelect !== null) {
                answerSelect.addEventListener('click', () => {
                    const questionResult = question.querySelector(`[data-question-result="${answerSelect.getAttribute('data-answer-select')}"]`);
                    answerItem.classList.remove('is-active');
                    question.classList.add('is-answered');

                    if (questionResult !== null) {
                        setTimeout(() => {
                            questionResult.classList.add('is-active');
                        }, 100);
                    }

                    if (character !== null) {
                        //data-select-character
                        character.setAttribute('data-state', answerSelect.getAttribute('data-select-character'));
                    }
                });
            }
        });
        
        if (buttonNext !== null) {
            buttonNext.addEventListener('click', () => {
                const delay = 400;
                const nextIndex = buttonNext.getAttribute('data-question-next');
                const nextQuestion =  corporulianCode.querySelector(`[data-question="${nextIndex}"]`);

                question.classList.remove('is-active');

                if (questionsCounting !== null) {
                    questionsCounting.classList.remove('is-active');
                }

                setTimeout(() => {
                    
                    if (questionsMain !== null) {
                        questionsMain.setAttribute('data-game-question', nextIndex);
                    }
                    setTimeout(() => {
                        if (questionNumber !== null) {
                            questionNumber.textContent = nextIndex;
                        }
                       if (nextQuestion !== null) {
                            nextQuestion.classList.add('is-active');
                       }
                       if (questionsCounting !== null) {
                            questionsCounting.classList.add('is-active');
                        }
                        
                    }, delay * 3 + 200);
                }, delay + 200);
                /*
                question.classList.add('is-no-active');
    
                const nextMessage = document.querySelector(`[data-message="${nextIndex}"]`);
                if (nextMessage !== null) {
                    nextMessage.classList.add('is-active');
                }
                */
            });
        }
        
    });
    

    // Start game
    const buttonGameStart = corporulianCode.querySelector('#button-game-start');
    if (buttonGameStart !== null) {
        buttonGameStart.addEventListener('click', () => {
            const blockWelcome = corporulianCode.querySelector('#block-welcome');
            const blockGame = corporulianCode.querySelector('#block-game');
            
            if (blockWelcome !== null && blockGame !== null) {
                blockWelcome.classList.remove('is-active');
                blockGame.classList.add('is-active');
            }
        });
    }

  
    // Game exit
    const buttonTermination = document.querySelector('#button-questions-game-exit');
    if (buttonTermination !== null) {
        buttonTermination.addEventListener('click', () => {
            const blockTermination = corporulianCode.querySelector('#block-termination');

            if (blockTermination !== null) {
                blockTermination.classList.add('is-active');
            }
        });
    }
   
    // Game Return
    const buttonReturn = corporulianCode.querySelector('#button-return');
    if (buttonReturn !== null) {
        buttonReturn.addEventListener('click', () => {
            const blockTermination = corporulianCode.querySelector('#block-termination');

            if (blockTermination !== null) {
                blockTermination.classList.remove('is-active');
            }
        });
    }
 
    // Запуск падающих кругов
    const blockResult = corporulianCode.querySelector('.corporulian-code__block_result');

    if (blockResult.classList.contains('is-active')) {
        fallingCircles();
    }
   
    function fallingCircles() {
        const pageWrapper = document.querySelector('.page__border');
        const particlesBlock = corporulianCode.querySelector('.corporulian-code__particles');
        const number = 13; //Число снежинок
        let pageWidth;
        let pageHeight;
        let isEnabled = 1; // Запускать скрипт 1 - да, 0 - нет

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
                //Здесь задается позиция снежинок за счет z-index
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


    // Получение артефакта
    const buttonGetArtifact = corporulianCode.querySelector('#button-get-artifact');

    if (buttonGetArtifact !== null) {
        buttonGetArtifact.addEventListener('click', () => {
            const particlesBlock = corporulianCode.querySelector('.corporulian-code__particles');
            const blockArtifact = corporulianCode.querySelector('.corporulian-code__block_artifact');

            if (particlesBlock !== null) {
                particlesBlock.classList.add('hidden');
                particlesBlock.remove();
            }

            if (blockArtifact !== null) {
                blockArtifact.classList.add('is-active');

                setTimeout(() => {
                    getArtifact();
                }, 1000);
            }
            
        });
    }

    function getArtifact () {
        const blockGetArtifact = corporulianCode.querySelector('.get-artifact');

        const titleMain = blockGetArtifact.querySelector('.get-artifact__title_main');
        const titleResult = blockGetArtifact.querySelector('.get-artifact__title_result');

        const box = blockGetArtifact.querySelector('.get-artifact__box');
        const astronaut = blockGetArtifact.querySelector('.get-artifact__astronaut');
        const button = blockGetArtifact.querySelector('.get-artifact__button');
        const message1 = blockGetArtifact.querySelector('.get-artifact__message_1');
        const message2 = blockGetArtifact.querySelector('.get-artifact__message_2');
        const light = blockGetArtifact.querySelector('.get-artifact__light');
        const rays = blockGetArtifact.querySelector('.get-artifact__rays');
        const brightRays = blockGetArtifact.querySelector('.get-artifact__bright-rays');
        const crystal = blockGetArtifact.querySelector('.get-artifact__crystal');

        if (blockGetArtifact !== null) {
            blockGetArtifact.classList.add('is-active');
        }

        if (light !== null) {
            light.classList.add('is-active');
        }

        if (rays !== null) {
            rays.classList.add('is-active');
        }

        setTimeout(() => {
            if (message1 !== null) {
                message1.classList.add('is-active');
            }
        }, 400);

        box.addEventListener('click', () => {

            if (!blockGetArtifact.classList.contains('is-opened')) {
                blockGetArtifact.classList.add("is-opened");

                if (message1 !== null) {
                    message1.classList.remove('is-active');
                }

                if (astronaut !== null) {
                    astronaut.classList.remove('is-active');
                }

                setTimeout(() => {
                    if (brightRays !== null) {
                        brightRays.classList.add('is-active');
                    }
                    if (crystal !== null) {
                        crystal.classList.add('is-active');
                    }
                    if (light !== null) {
                        light.classList.add('is-scale');
                    }
                    if (box !== null) {
                        box.classList.add('is-hidden');
                    }

                    setTimeout(() => {
                        if (titleMain !== null) {
                            titleMain.classList.remove('is-active');
                        }
                       
                        if (titleResult !== null) {
                            titleResult.classList.add('is-active');
                        }
                       
                        if (message2 !== null) {
                            message2.classList.add('is-active');
                        }
                       
                        if (astronaut !== null) {
                            astronaut.classList.add('is-active');
                        }
                       
                        if (button !== null) {
                            button.classList.add('is-active');
                        }
                    }, 1000);
                }, 1000);
            }
        });
    }
}

export { corporulianCode };