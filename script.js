document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('contactForm');
    const mensajeExito = document.getElementById('mensaje-exito');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const ubicacion = document.getElementById('ubicacion').value;
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('telefono').value;
        const servicio = document.getElementById('servicio').value;
        const descripcion = document.getElementById('descripcion').value;
        const detalles = document.getElementById('detalles').value;

        enviarFormulario(nombre, ubicacion, correo, telefono, servicio, descripcion, detalles, mensajeExito, formulario);
    });
});
function enviarFormulario(nombre, ubicacion, correo, telefono, servicio, descripcion, detalles, mensajeExito, formulario) {
    
    // Opción 1: Enviar por mailto (abre correo directamente)
    const asunto = `Nueva Solicitud de Servicio: ${servicio}`;
    const cuerpo = `
Nombre: ${nombre}
Ubicación: ${ubicacion}
Correo: ${correo}
Teléfono: ${telefono}
Servicio: ${servicio}

¿QUÉ QUIEREN QUE HAGAMOS?
${descripcion}

DETALLES ESPECÍFICOS:
${detalles}
    `;
    
    const enlaceCorreo = `mailto:oficialmegamente4@gmail.com?cc=contacto.empleo.co@gmail.com&subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    
    // Mostrar mensaje de éxito
    formulario.style.display = 'none';
    mensajeExito.style.display = 'block';
    
    // Abrir cliente de correo
    window.location.href = enlaceCorreo;
    
    // Reiniciar formulario después de 3 segundos
    setTimeout(() => {
        formulario.style.display = 'block';
        mensajeExito.style.display = 'none';
        formulario.reset();
    }, 3000);
}
// Efecto de scroll suave para links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});