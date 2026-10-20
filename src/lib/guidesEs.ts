import type { Guide } from './guides';

// Versión en español de src/lib/guides.ts. Los enlaces apuntan a /es/...
// Revisar con un hablante nativo de español de NYC antes de indexar.

const D = '2026-10-20';

export const guidesEs: Guide[] = [
  {
    slug: 'la-policia-abre-carros-gratis',
    title: '¿La policía o los bomberos abren su carro en Nueva York?',
    metaTitle: '¿La policía o los bomberos abren su carro en NYC?',
    metaDescription:
      '¿Se quedó fuera de su carro en NYC? Sepa cuándo ayudan la policía o los bomberos (solo emergencias), cuándo llamar al 911 y a quién llamar si es un caso normal.',
    summary:
      'Para un caso normal de carro cerrado, por lo general no. La policía y los bomberos atienden emergencias, así que lo indicado es llamar a un cerrajero o a la asistencia en carretera. Si hay un niño, una persona o un animal atrapados dentro, llame al 911 de inmediato.',
    datePublished: D,
    dateModified: D,
    sections: [
      {
        heading: 'La respuesta corta',
        paragraphs: [
          'En general, la policía y los bomberos no abren carros cuando solo se quedaron las llaves adentro. Su trabajo es atender emergencias, y unas llaves dentro del carro, sin nadie en peligro, no lo son. Las reglas pueden variar según el lugar y la situación, y un despachador puede manejar su caso de otra forma, pero no cuente con eso.',
          'Lo que cambia la respuesta es el riesgo. Si hay un niño, una persona que necesita ayuda o una mascota dentro del carro cerrado, trátelo como una emergencia y llame al 911 enseguida.',
        ],
      },
      {
        heading: 'Cuándo llamar al 911',
        list: [
          'Hay un niño o un bebé dentro del carro cerrado.',
          'Hay una mascota adentro, sobre todo si hace calor.',
          'Una persona dentro se siente mal, no responde o está en peligro.',
          'El motor está encendido en un espacio cerrado, o hay otro peligro inmediato.',
        ],
      },
      {
        heading: 'A quién llamar si es un caso normal',
        paragraphs: [
          'Si nadie está en peligro, estas son las opciones reales, más o menos en el orden en que la mayoría las prueba:',
        ],
        list: [
          'Asistencia en carretera: AAA, la aseguradora de su carro, el plan del fabricante o un beneficio de su tarjeta de crédito pueden incluir el servicio. Revise antes de pagar de su bolsillo, pero pregunte cuánto tardan.',
          'Un [cerrajero móvil](/es/abrir-carro-nyc): el cerrajero va hasta el carro y lo abre, normalmente sin daños. Con frecuencia es la opción más rápida cuando necesita irse ya.',
          'Una llave de repuesto: si alguien puede traerla, puede ser la solución más barata, según qué tan lejos esté esa persona.',
          'La agencia (dealer): normalmente no es el camino más rápido para un carro cerrado, porque habría que remolcarlo.',
        ],
      },
      {
        heading: 'Qué tener listo cuando llame a un cerrajero',
        list: [
          'La ubicación exacta, con las calles de la esquina y de qué lado de la calle está.',
          'El año, la marca y el modelo del vehículo.',
          'Una identificación con foto y la registración o la tarjeta del seguro a su nombre.',
          'Si la llave es de metal, con chip o de botón (push-to-start).',
        ],
      },
      {
        heading: 'Evite el truco del gancho de ropa',
        paragraphs: [
          'Los ganchos de alambre y herramientas parecidas pueden dañar el hule de la puerta, rayar la pintura o interferir con el cableado de la puerta y con componentes de las bolsas de aire. Si no puede esperar, llamar a un profesional casi siempre sale más barato que una reparación.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿La policía de NYC (NYPD) me abre el carro gratis?',
        a: 'En general no, si solo es un carro cerrado. Si hay alguien o algo atrapado y en peligro dentro, llame al 911 y dígalo.',
      },
      {
        q: '¿Los bomberos abren mi carro?',
        a: 'Los bomberos atienden emergencias, como un niño o una mascota atrapados. Para un carro cerrado sin riesgo, normalmente lo envían a un cerrajero o a la asistencia en carretera.',
      },
      {
        q: '¿A quién conviene llamar primero para un carro cerrado?',
        a: 'Un cerrajero móvil suele ser el más rápido, porque va hasta el carro. La asistencia en carretera también puede servir; pregunte el tiempo estimado antes de decidir.',
      },
    ],
    related: [
      { href: '/es/abrir-carro-nyc', label: 'Servicio de apertura de carro de emergencia en NYC' },
      { href: '/es/guias/deje-las-llaves-dentro-del-carro', label: 'Dejé las llaves dentro del carro: qué hacer ahora mismo' },
      { href: '/es/guias/cuanto-cuesta-abrir-un-carro-nyc', label: '¿Cuánto cuesta abrir un carro en NYC?' },
    ],
  },
  {
    slug: 'cuanto-cuesta-abrir-un-carro-nyc',
    title: '¿Cuánto cuesta abrir un carro en Nueva York?',
    metaTitle: '¿Cuánto cuesta abrir un carro en NYC? Guía de precios',
    metaDescription:
      'Cuánto cuesta abrir un carro en NYC, qué cambia el precio y cómo evitar cargos sorpresa. Nuestras aperturas estándar empiezan desde $55 y se cotizan antes de empezar.',
    summary:
      'Las aperturas estándar de Quick Car Unlock empiezan desde $55, y el precio exacto se cotiza antes de empezar el trabajo. Lo que usted pague depende del vehículo, del trabajo, de la hora y del lugar.',
    datePublished: D,
    dateModified: D,
    sections: [
      {
        heading: 'Nuestros precios desde',
        paragraphs: [
          'Son precios estimados de partida. El precio exacto depende de su vehículo y de su ubicación, y se le dice antes de empezar cualquier trabajo.',
        ],
        list: [
          'Apertura de carro de emergencia: desde $55',
          'Llave nueva: desde $120',
          'Programación de llave inteligente (fob): desde $145',
          'Reparación de encendido: desde $150',
        ],
      },
      {
        heading: 'Qué cambia el precio de abrir un carro',
        list: [
          'El vehículo: los carros viejos con seguros manuales suelen ser más sencillos que los modelos nuevos sin llave y con cerraduras de alta seguridad.',
          'El trabajo: abrir una puerta, abrir un baúl, sacar una llave rota y hacer una llave nueva son trabajos distintos.',
          'La hora: en muchas compañías las llamadas de madrugada, de noche y en días feriados cuestan más, así que pregunte.',
          'El lugar: un sitio de difícil acceso, un garaje con acceso restringido o un viaje largo pueden afectar la cotización.',
          'Si además necesita una llave: abrir el carro y cortar o programar una llave nueva se cobran por separado.',
        ],
      },
      {
        heading: 'Cómo evitar cargos sorpresa',
        list: [
          'Pida el precio total por teléfono, incluyendo cualquier cargo por llegada o distancia, antes de que envíen a nadie.',
          'Pregunte si el precio que le dan es fijo o es un precio de partida, y qué podría cambiarlo.',
          'Desconfíe de cualquier cerrajero que le dé un precio muy bajo por teléfono y lo suba al llegar.',
          'Desconfíe si el técnico insiste en perforar la cerradura para abrir un carro normal. Pregunte por qué y pida el precio por escrito antes.',
          'Pida un recibo, sobre todo si piensa reclamarlo al seguro o a un plan de asistencia en carretera.',
        ],
      },
      {
        heading: 'Opciones más baratas que conviene revisar primero',
        paragraphs: [
          'Antes de pagar por abrir el carro, revise si tiene asistencia en carretera con su aseguradora, un plan del fabricante, AAA o una tarjeta de crédito. Si la tiene, pregunte cuánto tardan. Si necesita irse ya, un cerrajero móvil con un precio firme puede valer la diferencia.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Cuánto cuesta abrir un carro en NYC?',
        a: 'Nuestras aperturas estándar empiezan desde $55. El precio exacto depende del vehículo, del trabajo y del lugar, y se le dice antes de empezar.',
      },
      {
        q: '¿El cerrajero cobra más de noche o en fin de semana?',
        a: 'Muchos sí. Pida el precio total por teléfono, incluyendo cualquier cargo por horario nocturno.',
      },
      {
        q: '¿Sale más barato llamar a la asistencia en carretera?',
        a: 'Puede ser, si su plan cubre este servicio. Revise el tiempo de espera además del costo.',
      },
    ],
    related: [
      { href: '/es/estimador-de-precios', label: 'Estimador de precios en línea' },
      { href: '/es/abrir-carro-nyc', label: 'Servicio de apertura de carro de emergencia en NYC' },
      { href: '/es/servicios/duplicado-de-llaves-de-carro', label: 'Llaves nuevas y programación de llaves' },
    ],
  },
  {
    slug: 'deje-las-llaves-dentro-del-carro',
    title: 'Dejé las llaves dentro del carro: qué hacer ahora mismo',
    metaTitle: 'Dejé las llaves dentro del carro: qué hacer ahora (NYC)',
    metaDescription:
      'Ayuda paso a paso si dejó las llaves dentro del carro en NYC: primero la seguridad, revisiones rápidas, qué no hacer y a quién llamar.',
    summary:
      'Primero asegúrese de que nadie esté en riesgo. Luego revise lo sencillo, no use el gancho de ropa y llame a la asistencia en carretera o a un cerrajero móvil con su ubicación y los datos del carro.',
    datePublished: D,
    dateModified: D,
    sections: [
      {
        heading: 'Paso 1: Revise la seguridad',
        paragraphs: [
          'Si hay un niño, una mascota o una persona dentro del carro, o si el motor está encendido en un espacio cerrado, llame al 911 de inmediato. Todo lo demás supone que nadie está en riesgo.',
        ],
      },
      {
        heading: 'Paso 2: Haga las revisiones rápidas',
        list: [
          'Pruebe todas las puertas y el baúl. Una puede estar sin seguro.',
          'Fíjese si hay una llave o un fob de repuesto cerca, o si alguien puede traérselo.',
          'Algunas marcas tienen una aplicación en el teléfono que abre el carro a distancia, si la configuró antes.',
          'Busque un plan de asistencia en carretera con su aseguradora, un programa del fabricante, AAA o una tarjeta de crédito.',
        ],
        ordered: true,
      },
      {
        heading: 'Paso 3: No fuerce el carro',
        paragraphs: [
          'Las cuñas, los ganchos de alambre y las herramientas dobladas pueden dañar el hule de la puerta, rayar la pintura e interferir con el cableado de la puerta o con componentes de las bolsas de aire. Una reparación casi siempre cuesta más que abrirlo con un profesional.',
        ],
      },
      {
        heading: 'Paso 4: Llame para pedir ayuda',
        paragraphs: ['Tenga esto listo, ya sea que llame a la asistencia en carretera o a un cerrajero móvil:'],
        list: [
          'Su ubicación exacta: dirección o calles de la esquina, y de qué lado de la calle está.',
          'El año, la marca y el modelo del vehículo.',
          'Si la llave es de metal, con chip o de botón (push-to-start).',
          'Una identificación con foto y la registración o la tarjeta del seguro a su nombre.',
        ],
      },
      {
        heading: 'Paso 5: Pida primero el precio y el tiempo estimado',
        paragraphs: [
          'Pida el precio total y un tiempo estimado antes de que envíen a nadie. Si el técnico llega y el precio cambió, pregunte por qué antes de que empiece el trabajo.',
        ],
      },
      {
        heading: 'Cómo evitar que vuelva a pasar',
        paragraphs: [
          'Guarde una llave de repuesto en un lugar seguro, pero no dentro del carro. Si usa una llave de botón (push-to-start), sepa dónde está antes de cerrar la puerta. Muchas llaves también tienen una llave mecánica escondida; revise el manual del dueño.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Cuánto tarda en abrirse un carro cerrado?',
        a: 'Una vez que el técnico está junto al carro, abrir una puerta normalmente es cuestión de minutos. Lo que varía es la espera hasta que llegue. Nuestro [servicio de apertura de emergencia](/es/abrir-carro-nyc) le da un tiempo estimado en la llamada.',
      },
      {
        q: '¿Un cerrajero puede abrir el carro sin dañarlo?',
        a: 'Normalmente sí. Las herramientas profesionales que no dañan abren la mayoría de los vehículos sin rayar la pintura ni afectar la cerradura.',
      },
      {
        q: '¿Y si las llaves quedaron dentro del baúl?',
        a: 'Vea nuestra guía de [llaves dentro del baúl](/es/guias/llaves-dentro-del-baul). Muchas veces un técnico puede abrir una puerta y usar el seguro interior del baúl.',
      },
    ],
    related: [
      { href: '/es/guias/llaves-dentro-del-baul', label: 'Llaves dentro del baúl' },
      { href: '/es/abrir-carro-nyc', label: 'Servicio de apertura de carro de emergencia en NYC' },
      { href: '/es/guias/la-policia-abre-carros-gratis', label: '¿La policía o los bomberos abren mi carro?' },
    ],
  },
  {
    slug: 'llaves-dentro-del-baul',
    title: 'Llaves dentro del baúl: cómo volver a entrar a su carro',
    metaTitle: '¿Llaves dentro del baúl? Cómo volver a entrar (NYC)',
    metaDescription:
      '¿Dejó las llaves o el fob dentro del baúl en NYC? Por qué pasa, qué probar primero sin riesgo y cuándo llamar a un cerrajero móvil.',
    summary:
      'Un problema de llaves dentro del baúl normalmente se resuelve entrando a la cabina y usando el seguro interior del baúl o abatiendo el asiento trasero. Si no puede hacerlo con seguridad, un cerrajero móvil puede abrir primero la puerta.',
    datePublished: D,
    dateModified: D,
    sections: [
      {
        heading: 'Por qué pasa',
        paragraphs: [
          'Las llaves terminan dentro del baúl cuando carga las bolsas, cierra la tapa y las puertas se cierran con seguro detrás de usted, sobre todo con una llave de botón (push-to-start) o con el cierre automático. El carro queda cerrado, la llave queda adentro y el baúl no abre.',
        ],
      },
      {
        heading: 'Qué probar primero',
        list: [
          'Revise cada puerta y el baúl. Alguna puede no haberse cerrado.',
          'Busque una llave de repuesto o una aplicación en el teléfono que abra su carro, si la tiene configurada.',
          'Si puede abrir una puerta con seguridad, use el seguro interior del baúl o abata los asientos traseros para llegar al baúl.',
          'Revise su plan de asistencia en carretera, porque a veces incluye este servicio.',
        ],
        ordered: true,
      },
      {
        heading: 'Qué no hacer',
        paragraphs: [
          'No haga palanca en la tapa del baúl ni fuerce la cerradura. Las tapas y los pestillos del baúl se doblan fácilmente, y la reparación puede costar más que el servicio de apertura.',
        ],
      },
      {
        heading: 'Cuándo llamar a un cerrajero móvil',
        paragraphs: [
          'Si no puede abrir ninguna puerta, un técnico puede abrir la cabina sin daños y luego usar el seguro interior para abrir el baúl. Tenga listos su ubicación, el año, la marca y el modelo del vehículo, y una identificación con foto más la registración o el seguro.',
        ],
      },
      {
        heading: 'Si además perdió la llave',
        paragraphs: [
          'Si la llave no está en el baúl y no la encuentra por ningún lado, tal vez haya que hacer una nueva. Vea nuestra guía sobre [perder la única llave del carro](/es/guias/perdi-la-llave-del-carro) y las [llaves nuevas para carros](/es/servicios/duplicado-de-llaves-de-carro).',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Un cerrajero puede abrir un baúl cerrado?',
        a: 'Muchas veces el método es abrir una puerta y usar el seguro interior del baúl. Dígale al despachador los datos de su vehículo para que le diga qué aplica.',
      },
      {
        q: '¿Abrir el baúl cuesta más que abrir una puerta?',
        a: 'Puede, según el vehículo y lo que se necesite. Pida el precio total cuando llame.',
      },
    ],
    related: [
      { href: '/es/guias/deje-las-llaves-dentro-del-carro', label: 'Dejé las llaves dentro del carro: qué hacer ahora mismo' },
      { href: '/es/guias/perdi-la-llave-del-carro', label: 'Perdí la única llave del carro' },
      { href: '/es/abrir-carro-nyc', label: 'Servicio de apertura de carro de emergencia en NYC' },
    ],
  },
  {
    slug: 'perdi-la-llave-del-carro',
    title: 'Perdí la única llave del carro: sus opciones en NYC',
    metaTitle: 'Perdí la única llave del carro: opciones y costos en NYC',
    metaDescription:
      '¿Perdió la única llave o el fob de su carro en NYC? Compare un cerrajero móvil con la agencia, qué necesitará y cómo evitar el problema la próxima vez.',
    summary:
      'Si no tiene llave de repuesto, se puede hacer una llave nueva sin remolcar el carro a la agencia. Un cerrajero móvil muchas veces puede cortar y programar en el lugar una llave con chip o un fob, según el vehículo.',
    datePublished: D,
    dateModified: D,
    sections: [
      {
        heading: 'Primero, confirme que de verdad se perdió',
        list: [
          'Repase sus pasos y revise el último lugar donde estacionó.',
          'Revise chaquetas, bolsos y el interior del carro, incluyendo el baúl.',
          'Pregunte a quien más haya manejado el carro.',
          'Si pudo haber sido robada, considere hacer la denuncia y avisar a su aseguradora.',
        ],
      },
      {
        heading: 'Opción 1: Cerrajero móvil',
        paragraphs: [
          'Un [cerrajero automotriz móvil](/es/servicios/duplicado-de-llaves-de-carro) va hasta su carro, confirma que es suyo y, en muchos vehículos, corta y programa en el lugar una llave o un fob de reemplazo. Que se pueda hacer en el momento depende de la marca, el modelo y el año, así que llame primero con sus datos.',
        ],
      },
      {
        heading: 'Opción 2: La agencia (dealer)',
        paragraphs: [
          'La agencia puede dar llaves de su marca, pero normalmente hay que remolcar el carro hasta allá y a veces hay que esperar a que pidan la llave. Para algunos vehículos puede tener sentido, así que compare el costo total y el tiempo.',
        ],
      },
      {
        heading: 'Qué necesitará',
        list: [
          'Una identificación con foto.',
          'Comprobante de que el carro es suyo: la registración o la tarjeta del seguro a su nombre.',
          'El VIN del vehículo, que aparece en la registración y se ve a través del parabrisas, del lado del conductor.',
          'El año, la marca y el modelo del carro.',
        ],
      },
      {
        heading: 'Cuánto cuesta',
        paragraphs: [
          'Nuestras llaves nuevas empiezan desde $120 y la programación de fobs desde $145. El precio exacto depende del vehículo y del tipo de llave, y se le dice antes de empezar el trabajo.',
        ],
      },
      {
        heading: 'Aproveche y haga una copia',
        paragraphs: [
          'Hacer una copia suele ser más barato y más fácil que reponer la única llave después. Pida una copia cuando hagan la llave nueva. Si lo que falla es la cerradura o el encendido, vea [reparación de encendido](/es/servicios/reparacion-de-encendido).',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Pueden hacer una llave de carro sin la original?',
        a: 'Para muchos vehículos, sí. Se puede generar una llave a partir del VIN o del código de la cerradura, después de confirmar que el carro es suyo. Llame con sus datos para confirmarlo.',
      },
      {
        q: '¿Tengo que remolcar el carro para tener una llave nueva?',
        a: 'No necesariamente. Un cerrajero móvil muchas veces puede hacerlo donde está estacionado el carro.',
      },
      {
        q: '¿Y si mi carro es de botón (push-to-start)?',
        a: 'Los fobs inteligentes muchas veces se pueden programar en el lugar, según la marca, el modelo y el año.',
      },
    ],
    related: [
      { href: '/es/servicios/duplicado-de-llaves-de-carro', label: 'Llaves nuevas y programación de llaves' },
      { href: '/es/guias/cuanto-cuesta-abrir-un-carro-nyc', label: '¿Cuánto cuesta abrir un carro en NYC?' },
      { href: '/es/guias/llaves-dentro-del-baul', label: 'Llaves dentro del baúl' },
    ],
  },
];

export const guideBySlugEs = Object.fromEntries(guidesEs.map(g => [g.slug, g]));
