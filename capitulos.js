const CAPITULOS = [
  {
    id: 1,
    numero: "Capítulo I",
    titulo: "El libro de las anécdotas",
    tituloClase: "cap-titulo--acento",
    descripcion: "Diego empezará a escribir un libro sobre sus anécdotas.",
    contenido: `
      <p>En el primer capítulo se nos cuenta que Diego empezará a escribir un libro sobre sus anécdotas. Además, reflexiona sobre cómo se siente, por qué muchas personas creen que los jóvenes ya no leen y por qué considera que ha desperdiciado parte de su talento.</p>
    `
  },
  {
    id: 2,
    numero: "Capítulo II",
    titulo: "La presentación y la chica plantada",
    tituloClase: "",
    descripcion: "La presentación del libro, una chica abandonada y una discusión literaria.",
    contenido: `
      <p>Luego habla sobre su libro, especialmente sobre la presentación que realizó y cómo dejó plantada a una chica. Más adelante relata una discusión que tuvo con unos amigos de Pavel acerca de un autor. A partir de ese conflicto, reflexiona sobre la literatura y explica por qué decidió escribir este libro.</p>
    `
  },
  {
    id: 3,
    numero: "Capítulo III",
    titulo: "Muchachos Desnudos",
    tituloClase: "cap-titulo--acento",
    descripcion: "Cómo publicó su libro y la necesidad de conocer la opinión sincera de Pavel.",
    contenido: `
      <p>También cuenta cómo publicó su libro <em>Muchachos Desnudos</em>. Aunque se siente orgulloso de haberlo escrito, considera que algunas páginas son una aberración y siente la necesidad de conocer la opinión sincera de Pavel, aunque esta pueda afectar su impulso creativo.</p>
    `
  },
  {
    id: 4,
    numero: "Capítulo IV",
    titulo: "Neruda y el rechazo",
    tituloClase: "",
    descripcion: "Una declaración con versos de Neruda y un fracaso amoroso.",
    contenido: `
      <p>Posteriormente recuerda cómo se declaró a una chica utilizando versos de Pablo Neruda y fue rechazado de la peor manera posible. Mientras regresaba a casa en taxi, reflexionaba sobre lo ocurrido y trataba de entender aquel fracaso amoroso.</p>
      <p>Después imagina cómo habría sido la situación si las cosas hubieran sucedido de otra forma. En esas reflexiones también describe a Pavel, su apariencia, su forma de vestir y su manera de actuar.</p>
    `
  },
  {
    id: 5,
    numero: "Capítulo V",
    titulo: "Pavel",
    tituloClase: "cap-titulo--frio",
    descripcion: "Diego conversa con Pavel sobre la vida y la literatura y descubre su verdadera personalidad.",
    contenido: `
      <p>Al sentirse menospreciado, conversa con Pavel sobre cómo se siente respecto a la vida y la literatura. Durante la conversación reflexiona sobre la verdadera personalidad de su amigo, que resulta ser muy distinta de la imagen que suele proyectar.</p>
      <p>Más adelante cuenta cómo conoció a Pavel. Todo comenzó cuando escuchó hablar de un libro que le llamó la atención. Al intentar conseguirlo, Pavel se negó a prestárselo, por lo que acordaron un intercambio, aunque finalmente no cumplió completamente con su parte del trato.</p>
    `
  },
  {
    id: 6,
    numero: "Capítulo VI",
    titulo: "El ritual de las librerías",
    tituloClase: "cap-titulo--acento",
    descripcion: "Diego describe su fascinación por la lectura y el placer de elegir un libro.",
    contenido: `
      <p>Diego también describe su fascinación por la lectura. Suele visitar librerías para hojear libros y descubrir nuevas lecturas. Considera que elegir un libro es casi un ritual y siente emoción, curiosidad y placer al hacerlo. A veces se reprocha no haber sido él quien escribió algunas de las obras que tanto admira.</p>
      <p>Su padre lo convence de comenzar a hacer ejercicio regalándole unas pesas. Gracias a ello adquiere el hábito de entrenar e intenta persuadirlo para que le permita inscribirse en un gimnasio, argumentando que eso mejorará su autoestima.</p>
      <p>Posteriormente invita a Pavel a ver una película. Sin embargo, debido a una broma, terminan asistiendo a una presentación de poemas. Después de conversar durante un largo rato, Pavel le regala un libro titulado <em>El hilo negro</em>.</p>
    `
  },
  {
    id: 7,
    numero: "Capítulo VII",
    titulo: "La mesa de trabajo y el libro robado",
    tituloClase: "cap-titulo--frio",
    descripcion: "Pavel propone intercambiar un libro robado y Diego abandona la universidad.",
    contenido: `
      <p>Diego describe la organización de su mesa de trabajo, la cual modifica constantemente según sus intereses. También relata una visita de Pavel a su casa, donde este le propone intercambiar un libro robado y expone su peculiar teoría sobre el supuesto «derecho a robar libros». Finalmente, explica las razones por las que abandonó la universidad.</p>
      <p>Durante un almuerzo familiar, sus padres le insisten en que debe aprovechar mejor su tiempo. Primero intenta aprender a conducir, pero abandona las clases tras reprobar varias veces el examen. Más adelante estudia en una academia preuniversitaria e ingresa a la carrera de Literatura en San Marcos, aunque sigue cuestionándose si realmente es su vocación.</p>
    `
  },
  {
    id: 8,
    numero: "Capítulo VIII",
    titulo: "Polvos Azules y el gimnasio",
    tituloClase: "",
    descripcion: "Diego en Polvos Azules y Pavel en el gimnasio.",
    contenido: `
      <p>Mientras busca películas en Polvos Azules, ayuda a una pareja a elegir algunos títulos y logra llamar la atención de la mujer, a quien le entrega su número telefónico. Sin embargo, la llamada que esperaba nunca llega.</p>
      <p>Aunque algunos días le cuesta levantarse, mantiene una estricta rutina de ejercicios que ha seguido durante años. Además, convence a Pavel de unirse al gimnasio.</p>
      <p>Pavel termina agotado y adolorido después de su primer entrenamiento, por lo que culpa a Diego de su malestar. Sin embargo, este le responde que depende de él decidir si continúa o abandona. Con el tiempo, Pavel se adapta al ejercicio, gana motivación y hasta busca participar en competencias.</p>
    `
  },
  {
    id: 9,
    numero: "Capítulo IX",
    titulo: "El parque de Surco y Pavel quiere ser profesor",
    tituloClase: "cap-titulo--acento",
    descripcion: "Un desastre en el parque y una revelación que desata una fuerte discusión.",
    contenido: `
      <p>Más adelante, Diego, quien odia los parques debido a experiencias desagradables de su infancia, acepta acompañar a Pavel y a dos universitarias a un parque de diversiones en Surco. La salida termina siendo un desastre porque se marea, vomita y debe ser atendido por paramédicos.</p>
      <p>Después de varios días recuperándose en casa, Pavel reaparece con una nueva apariencia y comenta que trabaja en una feria de San Isidro. También expresa su deseo de convertirse en profesor, lo que provoca una fuerte discusión entre ambos.</p>
    `
  },
  {
    id: 10,
    numero: "Capítulo X",
    titulo: "Vargas Llosa en Miraflores y Bukowski en Barranco",
    tituloClase: "",
    descripcion: "Un libro inspira a Diego a escribir. La noche termina en un bar hablando de literatura y estoicismo.",
    contenido: `
      <p>Tiempo después, Diego va al cine en el centro de Lima. Allí conoce a una chica muy parecida a Vanessa y terminan viendo juntos una película de Tim Burton. Aunque él se siente confundido por el parecido, ambos conversan de manera natural sobre cine.</p>
      <p>Al finalizar la función, camina por Miraflores, compra un libro usado de Mario Vargas Llosa que lo inspira a escribir y termina en un bar de Barranco conversando sobre literatura, felicidad, Bukowski y el estoicismo.</p>
      <div class="sep">* * *</div>
      <p style="text-align:center; font-family: var(--fuente-display); font-style:italic; color: rgba(26,21,16,.45); font-size:.95rem;">Fin del primer capítulo</p>
    `
  }
];
