let usuario = "";
const preguntas = {
  deporte: [
    "¿Practicas algún deporte?",
    "¿Prefieres deportes individuales o en equipo?",
    "¿Cuál es tu deporte favorito?",
    "¿Has ido a un estadio a ver un partido?",
    "¿Qué deporte sigues más en TV?",
    "¿Has participado en torneos deportivos?",
    "¿Qué tan seguido haces ejercicio?",
    "¿Conoces las reglas del fútbol?",
    "¿Has jugado baloncesto alguna vez?",
    "¿Crees que el deporte mejora la salud mental?"
  ],
  cultura: [
    "¿Lees libros con frecuencia?",
    "¿Prefieres teatro o cine?",
    "¿Has visitado un museo en el último año?",
    "¿Te interesa la historia de tu país?",
    "¿Has asistido a una exposición cultural?",
    "¿Sabes quién pintó la Mona Lisa?",
    "¿Conoces alguna danza tradicional?",
    "¿Te interesa la arqueología?",
    "¿Prefieres arte moderno o clásico?",
    "¿Consideras importante preservar la cultura?"
  ],
  musica: [
    "¿Escuchas música a diario?",
    "¿Prefieres conciertos en vivo o grabaciones?",
    "¿Cuál es tu género musical favorito?",
    "¿Tocas algún instrumento?",
    "¿Te gusta cantar?",
    "¿Has ido a un festival de música?",
    "¿Prefieres música nacional o internacional?",
    "¿Escuchas música al trabajar/estudiar?",
    "¿Crees que la música influye en el estado de ánimo?",
    "¿Compartes playlists con amigos?"
  ]
};

function registrarUsuario() {
  const nombre = document.getElementById('nombre').value.trim();
  if (nombre === "") {
    alert("Por favor ingresa tu nombre");
    return;
  }
  usuario = nombre;
  document.getElementById('usuarioNombre').textContent = usuario;
  document.getElementById('registro').classList.add('hidden');
  document.getElementById('menu').classList.remove('hidden');
}

function mostrarEncuesta(tipo) {
  document.getElementById('menu').classList.add('hidden');
  document.getElementById('encuesta').classList.remove('hidden');
  var titulo = tipo.charAt(0).toUpperCase() + tipo.slice(1);
  document.getElementById('tituloEncuesta').textContent = 'Encuesta de ' + titulo;

  const form = document.getElementById('formEncuesta');
  form.innerHTML = "";
  preguntas[tipo].forEach(function(pregunta, i) {
    const div = document.createElement('div');
    div.classList.add('question');
    div.innerHTML = ''
      + '<label>' + (i+1) + '. ' + pregunta + '</label>'
      + '<br>'
      + '<input type="radio" name="q' + i + '" value="Si" required> Sí '
      + '<input type="radio" name="q' + i + '" value="No"> No';
    form.appendChild(div);
  });
}

function enviarEncuesta() {
  document.getElementById('encuesta').classList.add('hidden');
  document.getElementById('final').classList.remove('hidden');
  document.getElementById('finalNombre').textContent = usuario;
}

function volverMenu() {
  document.getElementById('final').classList.add('hidden');
  document.getElementById('menu').classList.remove('hidden');
}
