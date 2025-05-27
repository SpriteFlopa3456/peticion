async function fetchUptime() {
    try {
   const response = fetch('https://robin-pure-miserably.ngrok-free.app',
    {
method: 'GET',
headers: {
    'ngrok-skip-browser-warning': '67890'
}
    });
    // Check if the response is ok (status in the range 200-299)
    
    
    if (!response.ok) throw new Error('Network response was not ok');
    const html = await response.text();

    // Parse the fetched HTML to extract uptime
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const uptimeText = doc.querySelector('p')?.textContent || 'No se encontro';

    // Log the extracted uptime for debugging
    console.log('Extracted Uptime:', uptimeText);

    // Get the DOM elements
    const uptimeElement = document.getElementById('uptime');
    const uptimeBar = document.getElementById('uptime-bar');

    // Update the uptime text
    if (uptimeElement) {
        uptimeElement.textContent = 'Tiempo activo: ' + uptimeText;
    } else {
        console.error('Element with ID "uptime" not found');
    }

    // Uptime bar health calculation in reverse from 100% to 0%
    const uptimeParts = uptimeText.split(' ');
    const uptimeValues = uptimeParts.map(part => parseInt(part) || 0);
    const totalSeconds = (uptimeValues[0] * 86400) + (uptimeValues[1] * 3600) + (uptimeValues[2] * 60) + uptimeValues[3];
    const maxSeconds = 86400 * 4; // Assuming a maximum of 4 days for the bar
    const healthPercentage = Math.max(0, Math.min(100, ((maxSeconds - totalSeconds) / maxSeconds) * 100));
    const healthElement = document.getElementById('health');
    if (healthElement) {
        healthElement.textContent = 'Vida del server: ' + Math.round(healthPercentage) + '%';
        uptimeBar.style.width = healthPercentage + '%';
        uptimeBar.style.transition = 'width 1s ease-in-out';
        uptimeBar.style.backgroundColor = healthPercentage > 40 ? 'seagreen' : (healthPercentage > 20 ? 'yellow' : 'red');
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
     
        if (healthPercentage < 5) {
            const message = 'El server esta por apagarse, tiempo activo: ' + uptimeText;

            const data = {
                chat_id: chatId,
                text: message
            };
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    console.log('Mensaje enviado correctamente!');
                } else {
                    console.error('Error al enviar el mensaje:', data.description);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    } else {
        console.error('Element with ID "health" not found');
    }


    
    // Update the uptime bar
} catch (error) {
    console.error('Error fetching uptime:', error);
    const uptimeElement = document.getElementById('uptime');
    if (uptimeElement) {
        uptimeElement.textContent = 'No se pudo obtener la informacion...';
    }  
}
}

// Initial fetch
fetchUptime();

// Refresh uptime every 60 seconds
setInterval(fetchUptime, 60000);

// Update energy status every 10 seconds
function updateEnergyStatus() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    if (currentHour >= 3 && currentHour < 7) {
        energy.innerHTML = "Modo de energia: Ahorro de energia";
        energy.style.color = "red";
        energy.style.fontWeight = "bold";
    } else {
        energy.innerHTML = "Modo de energia: Rendimiento";
        energy.style.color = "green";
        energy.style.fontWeight = "bold";
    }
}
// Initial call
updateEnergyStatus();
// Set interval to update every 10 seconds
setInterval(updateEnergyStatus, 10000);
