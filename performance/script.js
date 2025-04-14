document.addEventListener('DOMContentLoaded', () => {
    const requestButton = document.getElementById('requestButton');
    const messageInput = document.getElementById('messageInput');
    const estado = document.getElementById('estado');
    const remoteButton = document.getElementById('remoteButton');
    const adminButton = document.getElementById('adminButton');
    const settingsContainer = document.querySelector('.settings-container');
    const closeButton = document.querySelector('.close-button');
    const dperf = document.getElementById('dperf');
    const energy = document.getElementById('energy');

    // Fetch server status
    async function checkServerStatus() {
        try {
            const response = await fetch('https://api.mcsrvstat.us/bedrock/2/shopping-turtle.gl.at.ply.gg:49732');
            const data = await response.json();

            if (data.online) {
                estado.textContent = "El server esta activo... No hay necesidad de peticion";
                estado.style.color = "green";
                requestButton.disabled = true;
                requestButton.style.cursor = "not-allowed";
                requestButton.style.background = "gray";
            } else {
                estado.textContent = "El server esta apagado... Realizar peticion";
                estado.style.color = "red";
                requestButton.disabled = false;
                requestButton.style.background = "linear-gradient(124deg, deepskyblue, blue)";
            }
        } catch (error) {
            console.error("Error fetching server status:", error);
        }
    }

    // Update energy status
    function updateEnergyStatus() {
        const currentHour = new Date().getHours();
        if (currentHour >= 3 && currentHour < 7) {
            energy.textContent = "Modo de energia: Ahorro de energia";
            energy.style.color = "red";
        } else {
            energy.textContent = "Modo de energia: Rendimiento";
            energy.style.color = "green";
        }
    }

    // Event Listeners
    adminButton.addEventListener('click', () => {
        const password = prompt('Introduce la contraseña para acceder a la configuracion:');
        if (password === 'debian') {
            settingsContainer.style.display = 'block';
        } else {
            alert('Acceso denegado.');
        }
    });

    closeButton.addEventListener('click', () => {
        settingsContainer.style.display = 'none';
    });

    dperf.addEventListener('change', () => {
        const statusText = dperf.checked ? 'Modo de energia activado' : 'Modo de energia desactivado';
        energy.textContent = statusText;
        energy.style.color = dperf.checked ? 'green' : 'red';
    });

    // Initial calls
    checkServerStatus();
    updateEnergyStatus();

    // Set intervals
    setInterval(checkServerStatus, 60000);
    setInterval(updateEnergyStatus, 10000);
});