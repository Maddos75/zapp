document.addEventListener('DOMContentLoaded', () => {
    const accessBtn = document.getElementById('access-btn');
    const accessScreen = document.getElementById('access-screen');
    const mainContent = document.getElementById('main-content');

    accessBtn.addEventListener('click', () => {
        const glitchTransition = document.querySelector('.glitch-transition');
        const scanlines = document.createElement('div');
        scanlines.className = 'glitch-scanlines';
        document.body.appendChild(scanlines);
        
        glitchTransition.style.display = 'block';
        scanlines.style.opacity = '1';
        
        // Effet de glitch intense
        let glitchCount = 0;
        const glitchInterval = setInterval(() => {
            document.body.style.filter = `
                hue-rotate(${Math.random() * 360}deg) 
                blur(${Math.random() * 1}px)
            `;
            glitchTransition.style.transform = `
                translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px) 
                skew(${Math.random() * 20 - 10}deg)
            `;
            glitchCount++;
            
            if (glitchCount > 30) {
                clearInterval(glitchInterval);
                document.body.style.filter = '';
            }
        }, 50);
        
        setTimeout(() => {
            accessScreen.style.animation = 'fadeOut 1s forwards';
            setTimeout(() => {
                accessScreen.classList.add('hidden');
                mainContent.classList.remove('hidden');
                mainContent.style.animation = 'fadeIn 1s forwards';
                glitchTransition.style.display = 'none';
                scanlines.remove();
                document.body.style.animation = '';
            }, 1000);
        }, 2000);
    });

    // Effet de glitch aléatoire sur le texte
    const glitchTexts = document.querySelectorAll('.glitch-text');
    setInterval(() => {
        glitchTexts.forEach(text => {
            if (Math.random() > 0.9) {
                text.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
                setTimeout(() => {
                    text.style.transform = 'translate(0)';
                }, 100);
            }
        });
    }, 200);

    // Effet de scan sur le texte
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.textShadow = '0 0 5px var(--matrix-green)';
        });
        section.addEventListener('mouseout', () => {
            section.style.textShadow = 'none';
        });
    });

    // Effet de glitch sur les fragments de texte
    const fragments = document.querySelectorAll('.fragment, .temoignage');
    fragments.forEach(fragment => {
        fragment.addEventListener('mouseover', () => {
            fragment.style.transform = 'skew(2deg)';
            fragment.style.transition = 'transform 0.3s';
        });
        
        fragment.addEventListener('mouseout', () => {
            fragment.style.transform = 'skew(0)';
        });
    });

    // Effet de corruption aléatoire du texte
    const corruptText = (element) => {
        const original = element.textContent;
        const chars = '01█▓▒░';
        let corrupted = '';
        
        for(let i = 0; i < original.length; i++) {
            if(Math.random() > 0.99) {
                corrupted += chars[Math.floor(Math.random() * chars.length)];
            } else {
                corrupted += original[i];
            }
        }
        
        element.textContent = corrupted;
        setTimeout(() => {
            element.textContent = original;
        }, 100);
    };

    const textElements = document.querySelectorAll('.dossier-content p');
    setInterval(() => {
        textElements.forEach(el => {
            if(Math.random() > 0.99) {
                corruptText(el);
            }
        });
    }, 100);

    // Animation de l'écran d'accès
    const loadingTexts = document.querySelectorAll('.loading-sequence p');
    loadingTexts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = '1';
        }, index * 500);
    });

    // Effet de glitch sur les titres
    const titles = document.querySelectorAll('h2, h3');
    titles.forEach(title => {
        title.addEventListener('mouseover', () => {
            title.style.textShadow = `
                ${Math.random() * 10}px 0 var(--matrix-green),
                ${-Math.random() * 10}px 0 var(--error-red)
            `;
        });
        
        title.addEventListener('mouseout', () => {
            title.style.textShadow = 'none';
        });
    });

    // Effet de glitch supplémentaire sur l'image
    const entityImage = document.querySelector('.entity-image');
    setInterval(() => {
        if (Math.random() > 0.7) {
            entityImage.style.transform = `
                translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)
                scale(${1 + Math.random() * 0.1})
                skew(${Math.random() * 10 - 5}deg)
            `;
            
            setTimeout(() => {
                entityImage.style.transform = 'none';
            }, 100);
        }
    }, 2000);
}); 