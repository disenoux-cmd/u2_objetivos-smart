const smartData = {
  s: {
    title: 'Específico',
    copy: 'Define con precisión qué lograrán las y los estudiantes, sin dobles interpretaciones.',
    question: '¿Quién, qué, dónde, cuándo y por qué?',
    signal: 'La acción esperada se entiende de una sola manera.',
    panel: 'Un objetivo claro no deja margen a dobles interpretaciones. Precisa las acciones exactas que ocurrirán en el aula.',
    check: '¿Quién?, ¿cuándo?, ¿dónde?, ¿qué? y ¿por qué?'
  },
  m: {
    title: 'Medible',
    copy: 'Incluye una evidencia observable o un criterio claro para valorar el avance.',
    question: '¿Cuánto?, ¿qué cantidad? o ¿qué evidencia?',
    signal: 'Existe un rastro que permite comprobar el logro.',
    panel: 'Lo que no se mide no se puede mejorar. La evidencia permite valorar objetivamente el avance del punto A al punto B.',
    check: '¿Qué producción, desempeño o criterio demostrará el logro?'
  },
  a: {
    title: 'Alcanzable',
    copy: 'Es desafiante, pero factible según el punto de partida, los recursos y el contexto.',
    question: '¿Es posible con las condiciones disponibles?',
    signal: 'Exige esfuerzo sin poner la meta fuera de alcance.',
    panel: 'Separa lo posible de lo imposible. Exige esfuerzo y rigor cognitivo, pero responde a la realidad actual del grupo.',
    check: '¿Puede lograrse con el tiempo, los apoyos y los recursos disponibles?'
  },
  r: {
    title: 'Relevante',
    copy: 'Se conecta con necesidades reales, contextos locales y habilidades con propósito.',
    question: '¿Por qué importa para mi grupo y su contexto?',
    signal: 'El aprendizaje tiene sentido más allá de la actividad.',
    panel: 'La meta se relaciona con las necesidades del estudiantado, su contexto local y habilidades útiles para la vida y la comunidad.',
    check: '¿Qué propósito auténtico tiene este aprendizaje?'
  },
  t: {
    title: 'Temporalizado',
    copy: 'Establece un plazo concreto para alcanzar y demostrar la meta.',
    question: '¿Cuándo se espera alcanzar el logro?',
    signal: 'La meta tiene un límite temporal explícito.',
    panel: 'Define un plazo específico: al finalizar una sesión, una guía pedagógica o un periodo académico concreto.',
    check: '¿Cuál es el momento límite para demostrar el aprendizaje?'
  }
};

const compareData = {
  habilidad: {
    label: 'Habilidad / skill',
    title: 'El conocimiento puesto en acción',
    copy: 'Son acciones prácticas que las y los estudiantes realizan al usar activamente sus conocimientos en situaciones reales o simuladas.',
    image: 'assets/plates/skill-drawing.png',
    alt: 'Dibujo técnico de una mano que representa la habilidad de hacer.',
    examples: [
      ['Inglés', 'Utilizar preposiciones de lugar en una conversación con apoyo de un mapa.'],
      ['Matemáticas', 'Medir la longitud de objetos del entorno con herramientas estándar.'],
      ['Sociales', 'Ubicar acontecimientos de un periodo en una línea de tiempo.']
    ]
  },
  conocimiento: {
    label: 'Conocimiento',
    title: 'Los conceptos que dan sustento',
    copy: 'Son ideas, conceptos o contenidos de la materia con los que las y los estudiantes deben familiarizarse o que deben comprender intelectualmente.',
    image: 'assets/plates/knowledge-drawing.png',
    alt: 'Dibujo técnico de un cerebro que representa el conocimiento conceptual.',
    examples: [
      ['Inglés', 'El vocabulario y el concepto de las preposiciones de lugar.'],
      ['Matemáticas', 'El concepto teórico de longitud y las unidades de medida.'],
      ['Sociales', 'Las causas y acontecimientos de un proceso histórico.']
    ]
  }
};

const examples = {
  sociales: {
    parts: [
      ['t', 'Al finalizar la clase'],
      ['plain', ' las y los estudiantes '],
      ['s', 'comprenderán las causas del conflicto armado colombiano'],
      ['plain', ', '],
      ['r', 'para entender sus dinámicas y características'],
      ['plain', '. Por medio de la '],
      ['m', 'realización de una'],
      ['plain', ' '],
      ['a', 'línea de tiempo'],
      ['plain', '.']
    ],
    notes: {
      t: ['Temporalizado', '“Al finalizar la clase” define el límite de tiempo de la sesión.'],
      s: ['Específico', 'Delimita el foco conceptual: las causas del conflicto armado colombiano.'],
      r: ['Relevante', 'Conecta la meta con la comprensión de dinámicas del contexto del país.'],
      m: ['Medible', 'La realización deja un rastro visible que puede observarse y retroalimentarse.'],
      a: ['Alcanzable', 'Una línea de tiempo es una tarea procedimental realista para demostrar comprensión.']
    }
  },
  ingles: {
    parts: [
      ['t', 'Al finalizar la guía pedagógica'],
      ['plain', ', las y los estudiantes '],
      ['s', 'demostrarán su comprensión de diálogos cortos'],
      ['plain', ' '],
      ['r', 'en situaciones familiares'],
      ['plain', ' '],
      ['a', 'como la clase de inglés y conocer a un amigo'],
      ['plain', ', '],
      ['m', 'usando el quién, cuándo, dónde y qué'],
      ['plain', '.']
    ],
    notes: {
      t: ['Temporalizado', 'Acota el proceso al ciclo de entrega de la guía pedagógica.'],
      s: ['Específico', 'Define una habilidad clara: demostrar comprensión de diálogos cortos.'],
      r: ['Relevante', 'Sitúa el aprendizaje en contextos cotidianos y aplicables.'],
      a: ['Alcanzable', 'Propone interacciones familiares y viables para el nivel del grupo.'],
      m: ['Medible', 'Establece criterios concretos para verificar la suficiencia del logro.']
    }
  }
};

const quizQuestions = [
  {
    question: 'Un Eco planeó: “Los estudiantes entenderán la fotosíntesis en la sesión de hoy”. ¿Cuál es el principal reto?',
    answers: [
      'No tiene tiempo definido porque no dice cuándo lo harán.',
      '“Entenderán” no es observable ni medible; falta una acción o evidencia que demuestre la comprensión.',
      'La fotosíntesis nunca es relevante para estudiantes del territorio.'
    ],
    correct: 1,
    success: 'Los procesos internos como entender, comprender o saber no son observables de forma directa. Una acción como “esquematizarán el proceso” deja evidencia real.',
    retry: 'Mira la evidencia: “en la sesión de hoy” ya delimita el tiempo. La debilidad está en cómo se demostrará la comprensión.'
  },
  {
    question: '¿Cómo reduce la fricción operativa un objetivo SMART bien comunicado?',
    answers: [
      'Exige silencio absoluto durante toda la sesión.',
      'Da claridad desde el inicio sobre qué lograr y demostrar, facilita transiciones y aumenta la autonomía.',
      'Reduce los contenidos definidos por los lineamientos nacionales.'
    ],
    correct: 1,
    success: 'Al hacer explícita la meta, el estudiantado comprende qué busca y puede asumir un rol activo y autorregulado, reduciendo explicaciones repetitivas.',
    retry: 'Piensa en qué opción ayuda al grupo a actuar con claridad sin disminuir el rigor ni imponer pasividad.'
  }
];

function activateButtons(selector, activeButton) {
  document.querySelectorAll(selector).forEach((button) => {
    const active = button === activeButton;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

document.querySelectorAll('[data-smart]').forEach((button) => {
  button.addEventListener('click', () => {
    activateButtons('[data-smart]', button);
    const key = button.dataset.smart;
    const item = smartData[key];
    document.querySelector('[data-detail-letter]').textContent = key.toUpperCase();
    document.querySelector('[data-detail-title]').textContent = item.title;
    document.querySelector('[data-detail-copy]').textContent = item.copy;
    document.querySelector('[data-detail-question]').textContent = item.question;
    document.querySelector('[data-detail-signal]').textContent = item.signal;
    document.querySelector('[data-detail-letter]').style.color = `var(--${key === 's' ? 'blue' : key === 'm' ? 'green' : key === 'a' ? 'orange' : key === 'r' ? 'purple' : 'gold'})`;
  });
});

document.querySelectorAll('[data-smart-panel]').forEach((button) => {
  button.addEventListener('click', () => {
    activateButtons('[data-smart-panel]', button);
    const key = button.dataset.smartPanel;
    const item = smartData[key];
    document.querySelector('[data-panel-kicker]').textContent = `Capa ${key.toUpperCase()}`;
    document.querySelector('[data-panel-title]').textContent = item.title;
    document.querySelector('[data-panel-copy]').textContent = item.panel;
    document.querySelector('[data-panel-check]').textContent = item.check;
  });
});

document.querySelectorAll('[data-compare]').forEach((button) => {
  button.addEventListener('click', () => {
    activateButtons('[data-compare]', button);
    const item = compareData[button.dataset.compare];
    document.querySelector('[data-compare-label]').textContent = item.label;
    document.querySelector('[data-compare-title]').textContent = item.title;
    document.querySelector('[data-compare-copy]').textContent = item.copy;
    document.querySelector('[data-compare-examples]').innerHTML = item.examples.map(([subject, text]) => `<article><span>${subject}</span><p>${text}</p></article>`).join('');
    const image = document.querySelector('.comparison-figure img');
    image.src = item.image;
    image.alt = item.alt;
  });
});

function selectPhrase(button, example) {
  document.querySelectorAll('.phrase').forEach((phrase) => phrase.classList.toggle('is-active', phrase === button));
  const key = button.dataset.key;
  const [title, copy] = example.notes[key];
  const badge = document.querySelector('[data-note-letter]');
  badge.textContent = key.toUpperCase();
  badge.style.background = `var(--${key === 's' ? 'blue' : key === 'm' ? 'green' : key === 'a' ? 'orange' : key === 'r' ? 'purple' : 'gold'})`;
  document.querySelector('[data-note-title]').textContent = title;
  document.querySelector('[data-note-copy]').textContent = copy;
}

function renderExample(name) {
  const example = examples[name];
  const sentence = document.querySelector('[data-objective-sentence]');
  sentence.innerHTML = example.parts.map(([key, text]) => key === 'plain' ? text : `<button class="phrase ${key}" data-key="${key}">${text}</button>`).join('');
  sentence.querySelectorAll('.phrase').forEach((button) => button.addEventListener('click', () => selectPhrase(button, example)));
  const first = sentence.querySelector('[data-key="t"]');
  selectPhrase(first, example);
}

document.querySelectorAll('[data-example]').forEach((button) => {
  button.addEventListener('click', () => {
    activateButtons('[data-example]', button);
    renderExample(button.dataset.example);
  });
});

const benefitDetails = [
  'Con un foco cognitivo y una evidencia definidos, disminuyen las actividades de relleno y las explicaciones que dan vueltas.',
  'Una meta explícita ayuda a sostener una relación 70/30: el estudiantado hace y piensa durante la mayor parte de la experiencia.',
  'Cuando el destino es claro, redactar instrucciones específicas, concretas, observables y secuenciales se vuelve más directo.'
];

document.querySelectorAll('[data-benefit]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-benefit]').forEach((item) => item.classList.toggle('is-active', item === button));
    document.querySelector('.benefit-detail').textContent = benefitDetails[Number(button.dataset.benefit)];
  });
});

let quizIndex = 0;
function renderQuiz() {
  const item = quizQuestions[quizIndex];
  document.querySelector('[data-question-count]').textContent = `Pregunta ${quizIndex + 1} de ${quizQuestions.length}`;
  document.querySelector('[data-question]').textContent = item.question;
  const progressValue = ((quizIndex + 1) / quizQuestions.length) * 100;
  document.querySelector('[data-quiz-progress]').style.transform = `scaleX(${progressValue / 100})`;
  document.querySelector('.quiz-progress').setAttribute('aria-valuenow', String(progressValue));
  const feedback = document.querySelector('[data-feedback]');
  feedback.hidden = true;
  feedback.className = 'feedback';
  const next = document.querySelector('[data-next]');
  next.hidden = true;
  next.textContent = quizIndex === quizQuestions.length - 1 ? 'Ver cierre' : 'Siguiente pregunta →';
  const answers = document.querySelector('[data-answers]');
  answers.innerHTML = item.answers.map((answer, index) => `<button class="answer" data-answer="${index}"><span>${String.fromCharCode(65 + index)}</span>${answer}</button>`).join('');
  answers.querySelectorAll('[data-answer]').forEach((button) => {
    button.addEventListener('click', () => {
      const selected = Number(button.dataset.answer);
      const correct = selected === item.correct;
      answers.querySelectorAll('button').forEach((answerButton) => {
        answerButton.disabled = true;
        if (Number(answerButton.dataset.answer) === item.correct) answerButton.classList.add('is-correct');
      });
      if (!correct) button.classList.add('is-wrong');
      feedback.hidden = false;
      feedback.classList.toggle('is-wrong', !correct);
      feedback.innerHTML = `<strong>${correct ? 'Análisis preciso' : 'Revisa la evidencia'}</strong>${correct ? item.success : item.retry}`;
      next.hidden = false;
    });
  });
}

document.querySelector('[data-next]').addEventListener('click', () => {
  if (quizIndex < quizQuestions.length - 1) {
    quizIndex += 1;
    renderQuiz();
  } else {
    document.querySelector('#cierre').scrollIntoView({ behavior: 'smooth' });
  }
});

const routeLinks = [...document.querySelectorAll('[data-route]')];
const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  const index = routeLinks.findIndex((link) => link.dataset.route === visible.target.dataset.section);
  routeLinks.forEach((link, linkIndex) => {
    link.classList.toggle('is-active', linkIndex === index);
    link.classList.toggle('is-complete', linkIndex < index);
  });
}, { rootMargin: '-25% 0px -55%', threshold: [0, .25, .5] });

document.querySelectorAll('[data-section]').forEach((section) => sectionObserver.observe(section));
renderExample('sociales');
renderQuiz();
