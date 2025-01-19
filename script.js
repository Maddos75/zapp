document.addEventListener('DOMContentLoaded', () => {
    const accessBtn = document.getElementById('access-btn');
    const accessScreen = document.getElementById('access-screen');
    const mainContent = document.getElementById('main-content');

    accessBtn.addEventListener('click', () => {
        accessScreen.style.animation = 'fadeOut 1s forwards';
        setTimeout(() => {
            accessScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
            mainContent.style.animation = 'fadeIn 1s forwards';
        }, 1000);
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
}); 