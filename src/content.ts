export const profile = {
  name: 'Íñigo Atela',
  linkedin: 'https://www.linkedin.com/in/i%C3%B1igoatelanavarro/',
  // Añade aquí la dirección confirmada por Íñigo. No se inventan datos de contacto.
  email: '',
};

export const articles = [
  {
    slug: 'aprender-sin-releer',
    title: 'Aprender no es releer: es intentar recordar.',
    topic: 'Aprendizaje',
    time: '4 min',
    intro: 'La sensación de conocer un tema y la capacidad de explicarlo sin mirar los apuntes son dos cosas distintas. Esa diferencia puede cambiar tu forma de estudiar.',
    sections: [
      { heading: 'El pequeño engaño de lo familiar', paragraphs: [
        'Lees una página. Subrayas una frase. La vuelves a leer y todo parece tener sentido. Pero al cerrar el libro, las ideas se vuelven menos claras. Reconocer una explicación mientras la tienes delante no es lo mismo que recuperarla de memoria.',
        'No significa que leer sea inútil. Es el primer contacto con una idea. El problema aparece cuando ese primer paso ocupa toda la sesión y no dejamos espacio para comprobar qué hemos entendido.'
      ] },
      { heading: 'Cierra el libro y hazte una pregunta', paragraphs: [
        'El recuerdo activo consiste en intentar recuperar una idea sin consultar la respuesta. Puedes hacerlo con una pregunta, un problema o una explicación en voz alta. La clave está en intentarlo antes de volver a los apuntes.',
        'Después de leer un apartado, cierra el libro y escribe tres ideas que recuerdes. Explica cómo se relacionan. Luego compara tu respuesta con el texto: ¿qué falta?, ¿qué has confundido?, ¿qué podrías explicar con un ejemplo?',
        'Esa comprobación importa. No se trata de repetir un error hasta memorizarlo, sino de detectar las lagunas y corregirlas. Una respuesta incompleta puede ser una buena señal de dónde centrar tu siguiente esfuerzo.'
      ] },
      { heading: 'Reparte el esfuerzo', paragraphs: [
        'La repetición espaciada añade otra pieza: volver a intentar recuperar lo aprendido en sesiones separadas. En lugar de concentrar todos los repasos en una tarde, deja pasar tiempo entre ellos.',
        'Como punto de partida, puedes revisar mañana, unos días después y la semana siguiente. No es un calendario universal: ajusta los intervalos a la dificultad del material y a lo que consigas recordar. Si un concepto se resiste, vuelve antes y busca otra forma de entenderlo.'
      ] },
      { heading: 'Una forma de probarlo hoy', paragraphs: [
        'Elige un concepto concreto. Dedica unos minutos a entenderlo y escribe una pregunta que te obligue a explicarlo. Aparta los apuntes, responde con tus palabras y comprueba la respuesta. Guarda la pregunta para otra sesión.',
        'Por ejemplo, en lugar de copiar la definición de coste de oportunidad, pregúntate: «¿A qué renuncio cuando elijo dedicar esta tarde a una actividad?». Un ejemplo propio te obliga a ir un paso más allá de la definición.',
        'Al terminar, cambia la pregunta habitual. En vez de «¿cuántas páginas he leído?», prueba con «¿qué puedo explicar ahora sin mirar?». Es una medida más exigente, pero también más útil.'
      ] },
    ],
    takeaway: 'No midas una sesión solo por lo que has leído. Pregúntate qué puedes recuperar y explicar.',
    source: { label: 'Roediger y Karpicke (2006), Test-Enhanced Learning', url: 'https://doi.org/10.1111/j.1467-9280.2006.01693.x' },
  },
  {
    slug: 'decidir-con-claridad',
    title: 'Mejores decisiones, menos respuestas automáticas.',
    topic: 'Decisiones',
    time: '4 min',
    intro: 'No siempre puedes saber cuál será el resultado de una decisión. Sí puedes prestar más atención al proceso que te lleva a tomarla.',
    sections: [
      { heading: 'Antes de buscar respuestas, define la pregunta', paragraphs: [
        'A veces dedicamos mucho tiempo a comparar alternativas sin haber aclarado qué queremos resolver. Buscamos el mejor máster, la mejor herramienta o el mejor trabajo como si «mejor» significara lo mismo en todas las circunstancias.',
        'Una pregunta más concreta cambia la conversación: «¿Qué opción me acerca al tipo de trabajo que quiero hacer sin asumir un coste que no puedo sostener?». Ya no estamos buscando una respuesta perfecta. Estamos haciendo visibles nuestros criterios.'
      ] },
      { heading: 'Separa lo que sabes de lo que supones', paragraphs: [
        'Prueba a dividir una hoja en dos columnas. En una, escribe los hechos que puedes comprobar. En la otra, las suposiciones que estás haciendo. El precio de un curso puede ser un hecho; que ese curso vaya a abrirte una puerta concreta es una expectativa.',
        'No necesitas eliminar todas las suposiciones. Necesitas reconocer cuáles sostienen tu decisión y cuáles merece la pena contrastar. A menudo, una conversación con alguien que conoce el contexto aporta más que otra tarde comparando listas.'
      ] },
      { heading: 'Pregunta qué tendría que salir mal', paragraphs: [
        'Imagina que han pasado unos meses y la elección no ha funcionado como esperabas. ¿Qué explicación darías? Quizá subestimaste el tiempo necesario, te faltaba información o aceptaste una condición que no encajaba contigo.',
        'Este ejercicio no pretende convencerte de renunciar. Sirve para encontrar problemas que todavía puedes prevenir. Si el principal riesgo es el tiempo, puedes ajustar tu agenda antes de comprometerte. Si es una expectativa poco clara, puedes hacer una pregunta más.'
      ] },
      { heading: 'Busca una prueba pequeña', paragraphs: [
        'No todas las decisiones requieren la misma cantidad de análisis. Si puedes probar algo de forma reversible y con poco coste, una experiencia breve puede darte información que no obtendrías pensando en abstracto.',
        'Antes de comprometerte con un proyecto largo, prueba una versión pequeña. Antes de comprar una herramienta, úsala para resolver una tarea real. Define de antemano qué observarás y cuándo revisarás la decisión.'
      ] },
      { heading: 'Deja una nota para tu yo del futuro', paragraphs: [
        'Escribe qué has elegido, por qué, qué esperas que ocurra y qué incertidumbres sigues teniendo. Cuando revises el resultado, esa nota te ayudará a recordar lo que sabías en el momento de decidir.',
        'Un buen resultado no demuestra por sí solo que el proceso fuera bueno, del mismo modo que un resultado desfavorable no convierte automáticamente la decisión en un error. Revisar el razonamiento te permite aprender algo más útil que «salió bien» o «salió mal».'
      ] },
    ],
    takeaway: 'Una buena decisión empieza por una pregunta clara, unos criterios explícitos y espacio para revisar lo que creías saber.',
  },
];
