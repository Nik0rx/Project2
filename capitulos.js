const CAPITULOS = [
  {
    id: 1,
    numero: "Capítulo I",
    titulo: "El libro de las anécdotas",
    tituloClase: "cap-titulo--acento",
    descripcion: "Diego empezará a escribir un libro sobre sus anécdotas.",
    contenido: `
      <p>En el primer capítulo nos habla que empezará a escribir un libro de sus anécdotas, aparte nos cuenta sobre como se sentía, el porque piensan que los jóvenes ya no leen y de porque desperdiciaba su talento.</p>
    `
  },
  {
    id: 2,
    numero: "Capítulo II",
    titulo: "La promoción y la chica plantada",
    tituloClase: "",
    descripcion: "Habla de su libro, su promoción y cómo dejó plantada a una chica.",
    contenido: `
      <p>En el segundo capítulo habla de su libro, en especial de como fue su promoción y como dejó plantada a una chica.</p>
    `
  },
  {
    id: 3,
    numero: "Capítulo III",
    titulo: "La discusión y el libro",
    tituloClase: "",
    descripcion: "Una discusión con amigos de Pavel y la decisión de escribir.",
    contenido: `
      <p>El tercer capítulo relata como tuvo una discusión con unos amigos de Pavel por un autor de un libro y porque tomó la decisión de escribir este libro.</p>
    `
  },
  {
    id: 4,
    numero: "Capítulo IV",
    titulo: "Muchachos Desnudos",
    tituloClase: "cap-titulo--acento",
    descripcion: "Cómo publicó su libro y la necesidad de la opinión de Pavel.",
    contenido: `
      <p>El cuarto capítulo el autor nos cuenta de como publicó un libro "Muchacho Desnudos". De como piensa que sus páginas de su libro son una aberración y que necesita la opinión de su amigo Pavel aunque destruya su impulso creativo.</p>
    `
  },
  {
    id: 5,
    numero: "Capítulo V",
    titulo: "Neruda y el rechazo",
    tituloClase: "",
    descripcion: "Se declaró con versos de Pablo Neruda y fue rechazado de la peor forma posible.",
    contenido: `
      <p>El quinto capítulo relata como se declaró con unos versos de Pablo Neruda y fue rechazado de la peor forma posible, siendo la mejor opción retirarse en el taxi pensaba que ella era una bruja por rechazarlo y porque cuando deseas demorar a la hora de llegar a casa no hay tráfico.</p>
    `
  },
  {
    id: 6,
    numero: "Capítulo VI",
    titulo: "El escenario diferente y Pavel",
    tituloClase: "cap-titulo--frio",
    descripcion: "Idealiza un escenario diferente y se centra en cómo lucía, vestía y actuaba Pavel.",
    contenido: `
      <p>El sexto capítulo idealiza un escenario completamente diferente de como pudo ese rechazo pudo ser diferente y se centra en Pavel como lucía, vestía y actuaba.</p>
      <p>Al sentirse menospreciado, Diego charla con Pavel conversando sobre como se siente con la vida reflejando su facción con la literatura. Comentando como es Pavel en realidad, siendo lo contrario que parece.</p>
      <p>Diego nos cuenta como conoció a Pavel, fue cuando el habló sobre un libro que le terminó interesando y al querer pedírselo se lo negó, haciendo que hagan un intercambio con otro libro que él quería, aunque Pavel no cumpliendo con su parte del trato.</p>
    `
  },
  {
    id: 7,
    numero: "Capítulo VII",
    titulo: "Las librerías y las pesas",
    tituloClase: "cap-titulo--acento",
    descripcion: "Diego describe su fascinación con la lectura y cómo su padre lo convenció de hacer ejercicio.",
    contenido: `
      <p>Diego describe su fascinación con la lectura, donde suele visitar librerías para hojear y explorar nuevas lecturas. Describe la experiencia de elegir un libro como un acto casi ritual, donde resalta su emoción, curiosidad y placer. Le enfurece no haber llegado a la creación de libros que le llaman la atención, reprochandose.</p>
      <p>Su padre lo convenció de darle un juego de pesas, así haciendo que empiece con el hábito del ejercicio. Tratando de convencer a su padre de inscribirlo a un gimnasio, diciendo que es para mejorar su autoestima.</p>
      <p>En el siguiente capítulo Diego le propone ver una película a Pavel, aunque por una broma terminan en una presentación de poemas, charlando para que al final Pavel le regalara un libro titulado "El hilo negro".</p>
    `
  },
  {
    id: 8,
    numero: "Capítulo VIII",
    titulo: "La mesa de trabajo y el libro robado",
    tituloClase: "cap-titulo--frio",
    descripcion: "La rutina de la mesa de trabajo, el libro robado de Pavel y el abandono de la universidad.",
    contenido: `
      <p>Nos habla de como Diego tiene una especie de rutina o tradición en su mesa de trabajo ya sea poniendo fotos, post-it, etc. Pero combinándolo cada cierto tiempo dependiendo de sus intereses. Además, una de esas noches Pavel fue a cambiar un libro, y Diego nos dice que para cambiar un libro es todo un ritual para él (se aprende todo), Pavel le comenta que el libro es robado y que según él tiene sus razones "El derecho a robar libros" (Una técnica en el que puedes robar unos libros pero si te descubren pagas un sobrecarga). Finalmente nos cuenta el porque dejó la universidad.</p>
      <p>Nos cuenta como un mediodía sus padres durante el almuerzo hablaban sobre una película derivando la conversación hacia Diego, en donde lo presionaron a hacer algo en las vacaciones ya que dejó la universidad, inscribiéndolo en clases de manejo pero que poco después dejaría por fallar tres veces el examen, posteriormente se inscribió a una academia preuniversitaria, en Letras y después ingresó a la escuela de Literatura de San Marcos pero dudando en que si realmente estaba interesado en su carrera.</p>
    `
  },
  {
    id: 9,
    numero: "Capítulo IX",
    titulo: "Polvos Azules",
    tituloClase: "",
    descripcion: "Un viaje imaginario, Polvos Azules y una llamada que nunca llegaría.",
    contenido: `
      <p>Nos dice sobre un viaje imaginario que tuvo, en el cual una chica iba delante de él pero él buscaba el pasaje 18 en Polvos Azules, siendo su objetivo adquirir algunas películas piratas, poco después perdió de vista a la chica que se juntó con la multitud pero llegó al lugar que quería, observando en el lugar a una pareja, que igualmente buscaba entre los catálogos buenas películas, él quiso ser cortés y les ayudó, recibiendo halagos de la chica pero que nadie le cree, dándole su número de teléfono, esperando una llamada que nunca llegaría.</p>
    `
  },
  {
    id: 10,
    numero: "Capítulo X",
    titulo: "El gimnasio y Pavel",
    tituloClase: "cap-titulo--acento",
    descripcion: "La rutina del gimnasio y Pavel que termina dormido después de entrenar.",
    contenido: `
      <p>Nos habla de como en algunos días se le hace difícil levantarse, y que en esos días su apetito es como el de un Dragón de Komodo devorando todo lo que está a su paso, posteriormente se ducha y se dirige al gimnasio en donde entrena como una bestia, teniendo la misma rutina efectiva durante cuatro años, también, dice que animó a Pavel para que entrara al gimnasio y aunque al principio se negó terminó aceptando, combinando la lectura con el esfuerzo físico (leer trotando). Cuando terminaron hablaron sobre el gimnasio de Antistenes (Cinasarges) en donde los hombres entrenaban desnudos y que Pavel pensaba venir así la próxima vez.</p>
      <p>Es una continuación de la experiencia anterior, en el cual al día siguiente Pavel estaba muy cansado y adolorido por el entrenamiento, echándole la culpa a Diego pero él le dijo que dependía de él si quería seguir o renunciar, pero Pavel volvió al gimnasio a entrenar pero más tarde se llevó una sorpresa para Diego ya que cuando este terminó su rutina fue a ver como le iba a Pavel, y se dio cuenta que se había quedado dormido, días posteriores regresó más motivado, incluso comentándole a Diego que lo inscriba a competencias y haciéndose amigo del Personal Trainer (Alejo) a quien le pidió algunos consejos.</p>
    `
  },
  {
    id: 11,
    numero: "Capítulo XI",
    titulo: "El parque de Surco y Pavel quiere ser profesor",
    tituloClase: "",
    descripcion: "Un desastre en el parque y una revelación que arma una pelea bien tensa.",
    contenido: `
      <p>En esta parte del libro, el protagonista, que odia los parques por traumas de niño, se deja convencer por su amigo Pavel para ir a un parque de diversiones en Surco de noche con dos universitarias, pero la salida es un desastre total porque se marea horrible, termina vomitando de lo lindo y lo atienden los paramédicos.</p>
      <p>Después de pasar días enfermo en cama pensando en fútbol y libros, Pavel reaparece de la nada con nuevo look diciendo que trabaja en una feria de San Isidro y que quiere ser profesor, lo que arma una pelea bien tensa porque el narrador no le cree su cuento de intelectual.</p>
      <p>Luego, el protagonista va al cine de la de Lima, se queda sin entrada y se topa con una chica idéntica a Vanessa; ven una peli de Tim Burton juntos y, aunque él está recontra confundido por el parecido, hablan de cine de lo más normal.</p>
      <p>Al final, se va caminando por Miraflores, se compra un libro de Vargas Llosa usado que lo inspira a escribir y termina en un bar antiguo de Barranco conversando y tomando algo mientras debaten sobre literatura, la felicidad, Bukowski y lo que es ser una persona estoica.</p>
    `
  },
  {
    id: 12,
    numero: "Capítulo XII",
    titulo: "La heladería y Galarza",
    tituloClase: "cap-titulo--frio",
    descripcion: "Diego y Pavel en una heladería. Luego Diego consigue una cita con Galarza.",
    contenido: `
      <p>Diego y Pavel se encuentran en una heladería hablan de Paco y Pavel le cuestiona el desagrado de Diego con sus bromas con el profesor pero después hacen un trato y en vez de darle la caja con libros solo le da la revista ya que habían hablado si publicará o no la revista, luego Diego se cuestiona de como es él.</p>
      <p>Diego después de la biblioteca consiguió una cita con Galarza el hombre pensó y comenzó a decir algunos de sus discursos luego lo comparó con Pavel era burlón también pero era grosero y simplón. Lo que recuerda que Pavel se le dijo que él no tuvo ninguna relación amorosa. Después investigan a Giacomo Casanova y sus libros.</p>
      <p>Nos cuenta su desventura con una chica de una quinta debido a que él le enviaba cartas de amor pero su hermana mayor lo engañó y se burló, la quinta de él o algo así. Pervivió con su amiga que gustaba de Pavel. Su experiencia para ser feliz. Y finalmente como estuvo con su tía.</p>
    `
  },
  {
    id: 13,
    numero: "Capítulo XIII",
    titulo: "Casanova y la librería",
    tituloClase: "",
    descripcion: "Diego lejos de ser como Casanova. Su tío le deja su estante de libros.",
    contenido: `
      <p>Comienza explicando las últimas líneas. Dice que está muy lejos de ser como Casanova y como él quiere escribir esta obra. También dice que su tío se le dejó su estante con sus libros antiguos y muy variados ordenados y Pavel le dice para que ocupe el trabajo de la librería ya que él ya tiene otro trabajo.</p>
      <p>Nos cuenta que una semana después comenzó a trabajar también que no sabe que nuevo trabajo tiene Pavel pero cree que puede ser algo relacionado con la música por sus comentarios y unas anécdotas. Pavel habla un poco del carácter de Pavel. Después de su encuentro con Galarza quien fue ahí para darles sus libros para la reseña que va a hacer Diego y hablaron un poco.</p>
    `
  },
  {
    id: 14,
    numero: "Capítulo XIV",
    titulo: "La reseña y la apuesta",
    tituloClase: "cap-titulo--acento",
    descripcion: "Diego hace la reseña, Pavel lo convence de publicarla y hacen una apuesta.",
    contenido: `
      <p>Comienza con Diego y Pavel hablando del encuentro de Diego con Galarza y Pavel convence a Diego que haga la reseña, Diego lo hace y se lo envía. Diego está nervioso pero Pavel le dijo que está bien y que ya no hablen de eso, discutieron cual de los dos está abrumado.</p>
      <p>Se fueron a un bar, ahí como Diego se había aburrido Pavel le hizo una apuesta que si lo publicaban que Diego y Ailín van a bailar en la universidad, de lo contrario si no lo publicaban Pavel iba a bailar en frente de todos. Y luego Pavel le dijo una grosería sobre Nietzsche y como Pavel con 22 años (la mitad de Nietzsche no hizo nada con su vida).</p>
    `
  },
  {
    id: 15,
    numero: "Capítulo XV",
    titulo: "La reseña publicada y el baile",
    tituloClase: "",
    descripcion: "Pavel se siente mal. La reseña se publica y Diego debe bailar en un festival.",
    contenido: `
      <p>Pavel se siente mal después de beber demasiado y escucha una antigua novela romántica escrita por Diego. Más tarde, una reseña de Diego es publicada y, por una apuesta, debe bailar en un festival donde conoce a una chica que le gusta. Aunque no le gusta el teatro, la acompaña a una función, pero su actitud crítica provoca un conflicto. Tras disculparse, mejora su relación con ella y continúa publicando su revista.</p>
    `
  },
  {
    id: 16,
    numero: "Capítulo XVI",
    titulo: "Halloween y la Familia Addams",
    tituloClase: "cap-titulo--frio",
    descripcion: "Una fiesta de Halloween, Pavel conoce a una chica y pierde su trabajo como profesor.",
    contenido: `
      <p>Tiempo después, Diego, Pavel y la chica participan en una fiesta de Halloween disfrazados de la Familia Addams. Allí, Pavel conoce a una joven disfrazada de Pippi Calzaslargas. Ambos conectan por experiencias personales, se enamoran y descubren que estudian en la misma universidad. Mientras Diego encuentra el amor y madura, Pavel inicia una nueva relación, aunque pierde su trabajo como profesor debido a sus opiniones.</p>
      <div class="sep">* * *</div>
      <p style="text-align:center; font-family: var(--fuente-display); font-style:italic; color: rgba(26,21,16,.45); font-size:.95rem;">Fin</p>
    `
  }
];
