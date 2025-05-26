const rolesButton = document.getElementById('roles');

const wikiContent = document.getElementById('wikiContent');
rolesButton.addEventListener('click', () => {
    wikiReader.style.display = 'flex';
    fetch('https://raw.githubusercontent.com/SpriteFlopa3456/peticion/refs/heads/push/wiki/roles.txt')
        .then(response => response.text())
        .then(data => {
            wikiContent.innerHTML = data;

        })
        .catch(error => {
            console.error('Error fetching roles:', error);
            wikiReader.innerHTML = 'Error al cargar los roles.';
        }); 
    
    if (document.body.classList.contains('metro-theme')) {
        wikiContainer.style.animation = 'slide-body-out 0.5s ease';
        wikiReader.style.animation = 'slide-body-in 0.5s forwards';
    } else if (document.body.classList.contains('classic-theme') || document.body.classList.contains('modern-theme')) {
        wikiContainer.style.animation = 'slide-out 0.5s ease';
        setTimeout(() => {
            wikiContainer.style.animation = 'none';
            wikiContainer.style.display = 'none';
        }, 500);
    }
    currentMenu.innerHTML = 'Roles de los mijos';

});
const lifecycle = document.getElementById('lifeCycle');
lifecycle.addEventListener('click', () => {
    wikiReader.style.display = 'flex';
    fetch('https://raw.githubusercontent.com/SpriteFlopa3456/peticion/refs/heads/push/wiki/ciclo.txt')
        .then(response => response.text())
        .then(data => {
            wikiContent.innerHTML = data;

        })
        .catch(error => {
            console.error('Error fetching roles:', error);
            wikiReader.innerHTML = 'Error al cargar los roles.';
        }); 
    
    if (document.body.classList.contains('metro-theme')) {
        wikiContainer.style.animation = 'slide-body-out 0.5s ease';
        wikiReader.style.animation = 'slide-body-in 0.5s forwards';
    } else if (document.body.classList.contains('classic-theme') || document.body.classList.contains('modern-theme')) {
        wikiContainer.style.animation = 'slide-out 0.5s ease';
        setTimeout(() => {
            wikiContainer.style.animation = 'none';
            wikiContainer.style.display = 'none';
        }, 500);
    }
    currentMenu.innerHTML = 'Ciclo de vida filosofico';

});
const core = document.getElementById('core');
core.addEventListener('click', () => {
    wikiReader.style.display = 'flex';
    fetch('https://raw.githubusercontent.com/SpriteFlopa3456/peticion/refs/heads/push/wiki/nucleo.txt')
        .then(response => response.text())
        .then(data => {
            wikiContent.innerHTML = data;

        })
        .catch(error => {
            console.error('Error fetching roles:', error);
            wikiReader.innerHTML = 'Error al cargar los roles.';
        }); 
    
    if (document.body.classList.contains('metro-theme')) {
        wikiContainer.style.animation = 'slide-body-out 0.5s ease';
        wikiReader.style.animation = 'slide-body-in 0.5s forwards';
    } else if (document.body.classList.contains('classic-theme') || document.body.classList.contains('modern-theme')) {
        wikiContainer.style.animation = 'slide-out 0.5s ease';
        setTimeout(() => {
            wikiContainer.style.animation = 'none';
            wikiContainer.style.display = 'none';
        }, 500);
    }
    currentMenu.innerHTML = 'Ciclo de vida filosofico';

});
const specs = document.getElementById('specs');
specs.addEventListener('click', () => {
    wikiReader.style.display = 'flex';
    fetch('https://raw.githubusercontent.com/SpriteFlopa3456/peticion/refs/heads/push/wiki/esp.txt')
        .then(response => response.text())
        .then(data => {
            wikiContent.innerHTML = data;

        })
        .catch(error => {
            console.error('Error fetching roles:', error);
            wikiReader.innerHTML = 'Error al cargar los roles.';
        }); 
    
    if (document.body.classList.contains('metro-theme')) {
        wikiContainer.style.animation = 'slide-body-out 0.5s ease';
        wikiReader.style.animation = 'slide-body-in 0.5s forwards';
    } else if (document.body.classList.contains('classic-theme') || document.body.classList.contains('modern-theme')) {
        wikiContainer.style.animation = 'slide-out 0.5s ease';
        setTimeout(() => {
            wikiContainer.style.animation = 'none';
            wikiContainer.style.display = 'none';
        }, 500);
    }
    currentMenu.innerHTML = 'Ciclo de vida filosofico';

});