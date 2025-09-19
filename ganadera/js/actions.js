window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
});

const lastUpdatedElements = document.querySelectorAll('.last-updated');

function updateLastUpdatedTime() {
    const currentTime = new Date();
    const formattedTime = `Last updated ${currentTime.getMinutes()} mins ago`;
    lastUpdatedElements.forEach(element => {
        element.textContent = formattedTime;
    });
}

setInterval(updateLastUpdatedTime, 60000);
updateLastUpdatedTime();

function cargarMasResultados() {
    // Selecciona el contenedor de tarjetas
    const cardGroup = document.getElementById('cardGroupS');

    // Verifica si ya hay 6 tarjetas en el contenedor
    if (cardGroup.children.length < 6) {
        // Crea una nueva tarjeta con contenido
        const nuevaTarjeta = `
            <div class="card">
                <img src="../images/vaquitaNueva.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Nueva Tarjeta</h5>
                    <p class="card-text">Contenido de la nueva tarjeta.</p>
                    <p class="card-text"><small class="text-muted last-updated">Last updated 3 mins ago</small></p>
                </div>
            </div>
        `;

        // Agrega la nueva tarjeta al contenedor de tarjetas
        cardGroup.innerHTML += nuevaTarjeta;
    } else {
        console.log('Ya se han cargado 6 tarjetas.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    openPopup();
});
