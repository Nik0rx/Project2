// ============================================================
//  CAPÍTULOS — "Diego: Anécdotas de un Lector"
// ============================================================
const CAPITULOS = [
  {
    id: 1,
    numero: "Capítulo I",
    titulo: "El libro que nadie escribió aún",
    tituloClase: "cap-titulo--acento",
    descripcion: "Diego decide escribir. También reflexiona sobre el tiempo perdido y la juventud que ya no lee.",
    contenido: `
      <p>Diego lo ha decidido: escribirá un libro. No uno cualquiera —uno hecho de
      anécdotas, de esas historias menores que acumuló sin saber para qué.
      Se sienta ante su mesa y la primera pregunta que llega no es cómo comenzar,
      sino <strong>por qué</strong> comenzar.</p>

      <span class="tag-lugar tag-lugar--casa">📚 En casa</span>

      <p>Hay algo que lo incomoda: la idea de que los jóvenes ya no leen. Lo escucha
      en conversaciones de familia, en columnas de periódico, en el tono condescendiente
      de los adultos. Diego no sabe si es cierto, pero sabe que él sí lee —y también
      sabe que ha desperdiciado parte de su talento. Eso duele más.</p>

      <div class="cita-bloque" onclick="mostrarCita('La escritura es el único oficio en que nadie te considera un fraude mientras no publicas.', 'Reflexión de Diego')">
        "La escritura es el único oficio en que nadie te considera
        un fraude mientras no publicas."
        <span class="cita-autor">— Reflexión de Diego</span>
      </div>

      <p>El libro será honesto. Eso, por lo menos, lo tiene claro.</p>

      <div class="personaje-card">
        <span class="personaje-card__icono">🖊️</span>
        <div>
          <div class="personaje-card__nombre">Diego</div>
          <div class="personaje-card__desc">Escritor joven, lector compulsivo.
          Orgulloso de haber publicado <em>Muchachos Desnudos</em>, aunque cree que
          algunas páginas son una aberración. Busca validación —la de Pavel, sobre todo.</div>
        </div>
      </div>
    `
  },
  {
    id: 2,
    numero: "Capítulo II",
    titulo: "Muchachos Desnudos y la chica que no esperó",
    tituloClase: "",
    descripcion: "La presentación del libro, una chica abandonada y una discusión literaria que lo cambia todo.",
    contenido: `
      <p>La presentación de <em>Muchachos Desnudos</em> fue, en palabras del propio Diego,
      un éxito y un desastre al mismo tiempo. Hubo gente. Hubo aplausos.
      Y hubo una chica a quien dejó plantada sin proponérselo del todo.</p>

      <span class="tag-lugar tag-lugar--lima">📍 Lima</span>

      <p>Pero lo que más lo marcó esa semana fue la discusión con los amigos de Pavel.
      Alguien dijo algo incorrecto sobre un autor —Diego ya no recuerda quién exactamente—
      y él no pudo callarse. La pelea fue breve y violenta en el sentido literario:
      <strong>palabras que cortan</strong>, silencios que acusan.</p>

      <p>Cuando todo se calmó, Diego entendió por qué había escrito el libro.
      No para publicarlo. No para que lo leyeran. Sino para poder estar
      en esa discusión con algo propio que defender.</p>

      <div class="cita-bloque" onclick="mostrarCita('Publicar un libro es exponerse a que alguien te diga en voz alta lo que tú ya sabes en silencio.', 'Diego')">
        "Publicar un libro es exponerse a que alguien te diga
        en voz alta lo que tú ya sabes en silencio."
        <span class="cita-autor">— Diego</span>
      </div>

      <p>Pavel aún no había leído <em>Muchachos Desnudos</em>. Diego necesitaba que lo hiciera.
      No porque buscara elogios —sino porque necesitaba la opinión de alguien
      que no le mintiera para protegerlo.</p>
    `
  },
  {
    id: 3,
    numero: "Capítulo III",
    titulo: "Neruda y el rechazo más poético de la historia",
    tituloClase: "cap-titulo--acento",
    descripcion: "Diego se declara con versos prestados. El resultado: una lección sobre la diferencia entre la poesía y la vida.",
    contenido: `
      <p>Había ensayado los versos durante días. Neruda, claro.
      Porque si alguien sabe hablar de amor con la precisión de un cirujano
      y la desmesura de un borracho, es Neruda.</p>

      <span class="tag-lugar tag-lugar--lima">📍 Lima, noche</span>

      <div class="cita-bloque" onclick="mostrarCita('Puedo escribir los versos más tristes esta noche.', 'Pablo Neruda — Veinte poemas de amor y una canción desesperada')">
        "Puedo escribir los versos más tristes esta noche."
        <span class="cita-autor">— Pablo Neruda</span>
      </div>

      <p>Ella lo escuchó. Asintió una vez. Y luego dijo que no con una amabilidad
      tan perfecta que casi dolía más que si hubiera sido cruel.
      Diego se subió al taxi convencido de que Neruda le había fallado.
      Tardó el trayecto entero en concluir que quizás el problema era él.</p>

      <p>Camino a casa imaginó cómo habría sido la escena si las cosas
      hubieran salido distintas. Esa capacidad —la de reescribir la realidad
      en tiempo real— es, sospecha, la única ventaja real de ser escritor.</p>

      <div class="personaje-card">
        <span class="personaje-card__icono">🌙</span>
        <div>
          <div class="personaje-card__nombre">La chica sin nombre</div>
          <div class="personaje-card__desc">Educada. Amable. Devastadoramente clara.
          Diego la recuerda como una prueba de que la poesía y el cortejo
          son disciplinas distintas.</div>
        </div>
      </div>
    `
  },
  {
    id: 4,
    numero: "Capítulo IV",
    titulo: "Pavel: el amigo que no es lo que parece",
    tituloClase: "cap-titulo--frio",
    descripcion: "Diego describe a Pavel: su apariencia, su filosofía y la brecha entre cómo se muestra y cómo es.",
    contenido: `
      <p>Pavel viste como alguien que no piensa en cómo viste.
      Eso, según Diego, requiere un esfuerzo considerable.</p>

      <span class="tag-lugar tag-lugar--casa">🏠 Casa de Diego</span>

      <div class="personaje-card">
        <span class="personaje-card__icono">📖</span>
        <div>
          <div class="personaje-card__nombre">Pavel</div>
          <div class="personaje-card__desc">El mejor amigo de Diego. Proyecta indiferencia,
          pero esconde una curiosidad voraz. Tiene una teoría sobre el derecho a robar libros.
          Quiere ser profesor, lo que le genera a Diego una irritación que no sabe bien cómo explicar.</div>
        </div>
      </div>

      <p>Lo que Diego no esperaba era que Pavel, en una de sus conversaciones
      sobre la vida y la literatura, resultara ser una persona completamente diferente
      a la imagen que proyecta. La frialdad calculada se diluye.
      Aparece alguien <strong>genuinamente confundido</strong> por las mismas cosas.</p>

      <p>Diego se sintió menos solo. Y un poco traicionado —porque nadie
      debería descubrir a los treinta que su amigo más cercano también
      tiene miedo de no saber para qué sirve todo esto.</p>

      <div class="cita-bloque" onclick="mostrarCita('Los libros que más importan no son los que uno elige, sino los que uno encuentra cuando no los está buscando.', 'Pavel, según Diego')">
        "Los libros que más importan no son los que uno elige,
        sino los que uno encuentra cuando no los está buscando."
        <span class="cita-autor">— Pavel, según Diego</span>
      </div>
    `
  },
  {
    id: 5,
    numero: "Capítulo V",
    titulo: "Cómo se conoce a alguien por un libro negado",
    tituloClase: "",
    descripcion: "El origen de la amistad con Pavel: un título curioso, una negativa y un intercambio que no se cumplió del todo.",
    contenido: `
      <p>Escuchó hablar del libro antes de conocer a Pavel.
      Alguien mencionó el título en una conversación y Diego necesitó tenerlo
      con la urgencia irracional que solo entienden los lectores compulsivos.</p>

      <span class="tag-lugar tag-lugar--libreria">📚 Librería de Lima</span>

      <p>Pavel se negó a prestarlo. Sin rodeos, sin disculpas.
      Dijeron que intercambiarían: uno de Diego por uno de Pavel.
      El intercambio se realizó a medias —Pavel cumplió su parte,
      Diego demoró la suya lo suficiente como para que quedara
      una deuda suspendida entre los dos.</p>

      <p>Esa deuda los hizo seguir hablando. Las amistades, sospecha Diego,
      funcionan así: <strong>un libro no devuelto, una conversación que queda a medias,
      una cuenta pendiente que nadie salda del todo</strong>.</p>

      <div class="cita-bloque" onclick="mostrarCita('Elegir un libro es casi un ritual. Hay emoción, curiosidad y el extraño placer de saber que estás a punto de habitar otra mente.', 'Diego')">
        "Elegir un libro es casi un ritual. Hay emoción, curiosidad
        y el extraño placer de saber que estás a punto de habitar otra mente."
        <span class="cita-autor">— Diego</span>
      </div>
    `
  },
  {
    id: 6,
    numero: "Capítulo VI",
    titulo: "El ritual de las librerías",
    tituloClase: "cap-titulo--acento",
    descripcion: "Diego hojea libros sin comprarlos, envidia a sus autores y siente culpa por no haber escrito lo que admira.",
    contenido: `
      <p>Hay librerías que Diego no visita para comprar.
      Las visita para <em>estar</em>. Para hojear. Para leer las primeras líneas
      de libros que tal vez no leerá nunca y decidir, en diez segundos,
      si el autor merece su tiempo.</p>

      <span class="tag-lugar tag-lugar--libreria">📚 Librerías de Lima</span>

      <p>A veces cierra un libro, lo devuelve al estante y siente
      algo parecido al reproche: <strong>¿por qué no lo escribí yo?</strong>
      No envidia al autor. Envidia la frase.
      Envidia ese momento preciso en que alguien encontró las palabras exactas
      para decir lo que él también había sentido y no había podido nombrar.</p>

      <div class="cita-bloque" onclick="mostrarCita('El problema de leer mucho es que a veces uno se pregunta si no hubiera sido mejor escribir menos y vivir más. O al revés.', 'Diego')">
        "El problema de leer mucho es que a veces uno se pregunta
        si no hubiera sido mejor escribir menos y vivir más. O al revés."
        <span class="cita-autor">— Diego</span>
      </div>

      <p>Esa tarde volvió a casa con tres libros que no pensaba comprar.
      Es un defecto que, a estas alturas, ya no intenta corregir.</p>
    `
  },
  {
    id: 7,
    numero: "Capítulo VII",
    titulo: "Las pesas del padre y el gimnasio de Pavel",
    tituloClase: "",
    descripcion: "El padre regala unas pesas. Un hábito se instala. Y Pavel, después de resistirse, termina obsesionado con el ejercicio.",
    contenido: `
      <p>El padre de Diego no lee. O no lee lo que Diego lee, que es casi lo mismo.
      Pero tiene una teoría sólida sobre la autoestima y los músculos:
      están relacionados. Por eso le regaló unas pesas.</p>

      <span class="tag-lugar tag-lugar--casa">🏠 En casa / Gimnasio</span>

      <p>Diego empezó a entrenar sin convicción y terminó haciéndolo con disciplina.
      Años después, tiene una rutina que mantiene incluso en los días
      en que levantarse de la cama es un acto de voluntad.</p>

      <p>Convencer a Pavel de unirse fue más difícil.
      Pavel resistió, argumentó, cuestionó la validez cultural del ejercicio físico
      y finalmente cedió. El primer entrenamiento lo dejó adolorido durante días.
      Culpó a Diego. Diego le dijo que era su decisión continuar o no.</p>

      <p>Pavel continuó. Con el tiempo, <strong>ganó más motivación que el propio Diego</strong>
      y empezó a hablar de competencias. Hay algo desconcertante en ver
      al amigo más intelectual del grupo convertirse en el más entusiasta del gimnasio.</p>
    `
  },
  {
    id: 8,
    numero: "Capítulo VIII",
    titulo: "El parque de Surco y los paramédicos",
    tituloClase: "cap-titulo--acento",
    descripcion: "Diego odia los parques. Lo sabe. Y aun así acepta ir. El resultado fue exactamente el que esperaba.",
    contenido: `
      <p>Los parques le producen una incomodidad que se remonta a la infancia.
      No sabe explicarla bien. Hay algo en la combinación de espacio abierto,
      ruido controlado y obligación de divertirse que le resulta insoportable.</p>

      <span class="tag-lugar tag-lugar--lima">📍 Surco, Lima</span>

      <p>Pero Pavel insistió. Y había dos universitarias.
      Y Diego, como suele ocurrir en las malas decisiones, dijo que sí.</p>

      <p>El parque de diversiones en Surco terminó con Diego
      mareado, vomitando y siendo atendido por paramédicos.
      Mientras lo revisaban, pensó en escribir sobre esto.
      Luego pensó que nadie le creería.</p>

      <div class="cita-bloque" onclick="mostrarCita('Hay experiencias que uno tiene no porque quiera sino para poder contarlas. El problema es que en el momento no lo sabe.', 'Diego')">
        "Hay experiencias que uno tiene no porque quiera
        sino para poder contarlas. El problema es que en el momento no lo sabe."
        <span class="cita-autor">— Diego</span>
      </div>

      <p>Pasó varios días recuperándose en casa.
      Fue, curiosamente, uno de los periodos más productivos que recuerda.</p>
    `
  },
  {
    id: 9,
    numero: "Capítulo IX",
    titulo: "Pavel quiere ser profesor",
    tituloClase: "cap-titulo--frio",
    descripcion: "Una revelación que desata una discusión. Diego no entiende por qué le molesta tanto.",
    contenido: `
      <p>Pavel reapareció después de los días de recuperación de Diego
      con una nueva apariencia y una noticia: trabajaba en una feria de San Isidro.
      Hasta ahí, bien. Pero después dijo que quería ser profesor.</p>

      <span class="tag-lugar tag-lugar--lima">📍 San Isidro / Casa de Diego</span>

      <p>La discusión fue fuerte. Diego no supo, en el momento,
      exactamente por qué le molestaba tanto.
      Quizás porque un profesor es alguien que <em>sabe lo que quiere ser</em>,
      y eso es algo que Diego no puede decir de sí mismo.</p>

      <div class="personaje-card">
        <span class="personaje-card__icono">🏫</span>
        <div>
          <div class="personaje-card__nombre">El conflicto del profesor</div>
          <div class="personaje-card__desc">Pavel con vocación clara vs. Diego que cuestiona la suya.
          La literatura como refugio y como trampa.
          ¿Se puede querer la literatura sin saber para qué sirve?</div>
        </div>
      </div>

      <p>No llegaron a ninguna conclusión. Pero Diego tardó días en
      dejar de pensar en esa conversación, lo cual —en su escala personal—
      significa que fue <strong>importante</strong>.</p>
    `
  },
  {
    id: 10,
    numero: "Capítulo X",
    titulo: "La chica de Tim Burton y Vargas Llosa en Miraflores",
    tituloClase: "",
    descripcion: "Un cine, una cara familiar, una película y un libro usado que termina en Barranco con Bukowski y el estoicismo.",
    contenido: `
      <p>La vio en el cine del centro de Lima y por un momento creyó
      que era Vanessa. No lo era. Se parecía, pero no lo era.
      Terminaron viendo juntos una película de Tim Burton —no recuerda cuál,
      lo cual dice algo sobre el estado en que estaba.</p>

      <span class="tag-lugar tag-lugar--lima">📍 Centro de Lima → Miraflores → Barranco</span>

      <p>Hablaron de cine con esa facilidad que tienen las conversaciones
      con desconocidos cuando ninguno de los dos tiene nada que perder.
      Al salir, caminó solo hasta Miraflores.</p>

      <p>En una librería de usados encontró a Mario Vargas Llosa.
      No a él, sino a uno de sus libros. Lo compró.
      Lo hojeó caminando. Algo en las páginas lo impulsó a escribir.</p>

      <div class="cita-bloque" onclick="mostrarCita('Escribir sobre lo que uno ha vivido es la única forma de entender por qué valió la pena haberlo vivido.', 'Diego, en un bar de Barranco')">
        "Escribir sobre lo que uno ha vivido es la única forma
        de entender por qué valió la pena haberlo vivido."
        <span class="cita-autor">— Diego, en un bar de Barranco</span>
      </div>

      <p>Terminó la noche en un bar de Barranco hablando con alguien
      sobre literatura, felicidad, Bukowski y el estoicismo.
      No sabe exactamente con quién. Pero fue una buena conversación.</p>

      <p>Al día siguiente, abrió su cuaderno y empezó a escribir.</p>

      <div class="sep">* * *</div>

      <p style="text-align:center; font-family: var(--fuente-display); font-style:italic; color: rgba(26,21,16,.45); font-size:.95rem;">
        Fin del primer capítulo
      </p>
    `
  }
];
