/*
 * Archivo de scripts JavaScript para el portafolio.
 * Aquí puedes agregar funcionalidades interactivas a tu página.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Actualiza el año actual en el footer.
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
