import type { Borough } from './boroughs';

// Versión en español de src/lib/boroughs.ts. Misma estructura; los enlaces apuntan a /es/...
// Revisar con un hablante nativo de español de NYC antes de indexar.

export const boroughsEs: Borough[] = [
  {
    id: 'manhattan',
    name: 'Manhattan',
    label: 'Manhattan',
    metaDescription:
      '¿Se quedó fuera de su carro en Manhattan? Apertura de carros, llaves nuevas y reparación de encendido, desde el Distrito Financiero hasta Inwood, incluso en garajes. Llame las 24 horas.',
    intro: [
      `En Manhattan, casi nunca se queda uno fuera del carro en su propio estacionamiento. Pasa en la acera de Midtown, en la rampa de un garaje del Upper West Side o frente a un restaurante del West Village, con el tráfico pasando al lado. Quick Car Unlock envía un cerrajero móvil asegurado hasta su vehículo en cualquier punto de la isla, del Distrito Financiero a Inwood.`,
      `Llame al (347) 801-7119. El despachador le pide las calles de la esquina y el año, la marca y el modelo del carro, le da un tiempo estimado antes de enviar a nadie y le dice el precio antes de empezar el trabajo.`,
    ],
    audiences: [
      {
        title: 'Conductores que van al trabajo y estacionan en garajes o en la calle',
        text: `Si estaciona en Midtown, el Distrito Financiero o Hudson Yards, quedarse fuera del carro suele significar una reunión perdida o un tren que se va. Lo que más ayuda es un tiempo estimado claro y un precio que usted pueda aprobar antes de que salga el técnico. Dígale al despachador el nombre del garaje y el nivel, o la calle de la esquina y el lado de la calle. Vea también nuestra guía de [cuánto cuesta abrir un carro en NYC](/es/guias/cuanto-cuesta-abrir-un-carro-nyc).`,
      },
      {
        title: 'Dueños de carros de lujo europeos',
        text: `Manhattan tiene muchos Audi, BMW, Mercedes y otros modelos europeos con entrada sin llave y cerraduras de alta seguridad. A veces, después de quedarse fuera, también aparece el problema de la llave perdida. Dígale al despachador el año, la marca y el modelo exactos para que le explique qué se puede hacer en el lugar, incluyendo [llaves nuevas y programación de llaves](/es/servicios/duplicado-de-llaves-de-carro).`,
      },
      {
        title: 'Conductores de Uber, Lyft, entregas y servicio de carro',
        text: `Cuando el carro es su herramienta de trabajo, cada minuto cuenta. Pida primero el tiempo estimado y guarde una llave de repuesto en un lugar seguro que no sea dentro del vehículo. Si la llave no gira después de abrir la puerta, lea sobre la [reparación de encendido](/es/servicios/reparacion-de-encendido).`,
      },
      {
        title: 'Visitantes y personas con carro alquilado',
        text: `Si no conoce la zona, dé un punto de referencia y la calle de esquina más cercana. Si el carro es alquilado, llame también a la compañía de alquiler: algunos contratos o planes de asistencia en carretera cubren este problema. Pregunte al despachador qué comprobante de autorización necesita para un vehículo alquilado.`,
      },
    ],
    situations: [
      {
        title: 'Estacionado en una avenida concurrida o en una calle transversal',
        text: `Dígale al despachador la cuadra exacta y de qué lado de la calle está el carro. Si está en una zona donde no se puede detener, en una zona de carga o en un carril de autobuses, avíselo en la llamada para que el técnico sepa dónde parar.`,
      },
      {
        title: 'Llaves dentro del carro en un garaje',
        text: `Muchos carros de Manhattan están en garajes con empleados. Si el empleado tiene una llave, pregúntele primero. Si la llave quedó dentro del carro cerrado, dígale al despachador el nombre del garaje y el nivel. Cada garaje tiene sus propias reglas para proveedores externos, así que confirme con el empleado antes de que llegue el técnico.`,
      },
      {
        title: 'Después de un show, una cena o un partido',
        text: `El Theater District, Chelsea, el Village y la zona del Madison Square Garden se llenan de noche. Dé un punto de referencia cercano además de la dirección y deje el teléfono encendido para que el técnico pueda llamarle cuando esté cerca.`,
      },
      {
        title: 'Llave perdida o rota, no solo carro cerrado',
        text: `Aquí son comunes las llaves de botón (push-to-start) y las llaves con chip. Si no tiene copia, podemos hablar de hacer una llave nueva en el lugar. Vea nuestra [guía de llave perdida](/es/guias/perdi-la-llave-del-carro).`,
      },
      {
        title: 'Llaves dentro del baúl',
        text: `Si cargó el baúl y las puertas se cerraron detrás de usted, un técnico normalmente puede abrir una puerta y usar el seguro interior del baúl. Vea [llaves dentro del baúl](/es/guias/llaves-dentro-del-baul).`,
      },
      {
        title: 'Hay un niño o una mascota dentro del carro',
        text: `Es una emergencia. Llame primero al 911. Lea más sobre [cuándo ayudan la policía o los bomberos](/es/guias/la-policia-abre-carros-gratis).`,
      },
    ],
    access: [
      `Revise los letreros de la calle para ver el horario de estacionamiento alternado y avise al despachador si su carro tiene que moverse pronto.`,
      `Tenga a mano una identificación con foto y la registración o la tarjeta del seguro a su nombre. Confirmamos que el carro es suyo antes de abrirlo.`,
      `Si está en un garaje, tenga su ticket y el nivel o el número del espacio.`,
      `Diga si el carro es de botón de encendido (push-to-start), porque eso cambia la forma de trabajar.`,
      `Pida el precio total en la llamada, incluyendo cualquier cargo por horario nocturno.`,
    ],
    gettingAround: [
      {
        title: 'Avenidas, calles transversales y calles de un solo sentido',
        text: `El tráfico transversal de Midtown es lento a casi cualquier hora, y las calles de un solo sentido afectan por dónde puede llegar el técnico. El despachador usa las calles de su esquina para calcular el tiempo estimado.`,
      },
      {
        title: 'FDR Drive y West Side Highway',
        text: `Las dos autopistas que rodean la isla son la forma más rápida de subir y bajar por Manhattan cuando se mueven, y la más lenta cuando no. La hora pico y los accidentes cambian el tiempo estimado; por eso se da en la llamada y no se promete de antemano.`,
      },
      {
        title: 'Puentes y túneles',
        text: `El tráfico hacia los túneles Lincoln, Holland y Midtown y hacia los puentes del East River puede sumar tiempo cerca de los bordes de la isla. Si está cerca de un cruce, menciónelo.`,
      },
    ],
    neighborhoods: [
      { name: 'Distrito Financiero', note: 'Calles angostas y garajes estrechos; la ubicación exacta es importante.' },
      { name: 'Tribeca y SoHo', note: 'Cuadras de adoquín y zonas de carga; dé la calle de esquina más cercana.' },
      { name: 'Greenwich Village y West Village', note: 'Calles irregulares y cuadras con mucho movimiento de restaurantes de noche.' },
      { name: 'Chelsea y Hudson Yards', note: 'Tráfico de eventos y garajes grandes cerca del High Line y el Javits Center.' },
      { name: 'Midtown y Theater District', note: 'Penn Station, Grand Central y Times Square, donde casi no hay espacio en la acera.' },
      { name: 'Murray Hill y Gramercy', note: 'Mezcla de estacionamiento en la calle y garajes pequeños.' },
      { name: 'Upper East Side', note: 'Mayormente estacionamiento en la calle con reglas de lado alterno.' },
      { name: 'Upper West Side', note: 'Estacionamiento en la calle y muchos garajes residenciales.' },
      { name: 'Harlem', note: 'Estacionamiento en la calle cerca de Central Park North, el Apollo y la calle 125.' },
      { name: 'Washington Heights e Inwood', note: 'Cuadras con cuestas cerca del acceso al puente George Washington.' },
    ],
    faqs: [
      {
        q: `¿Pueden abrir un carro que está en un garaje de Manhattan?`,
        a: `En muchos casos sí, con el permiso del garaje. Dígale al despachador el nombre del garaje y su nivel. Cada garaje tiene sus propias reglas para proveedores externos, así que consulte primero con el empleado.`,
      },
      {
        q: `¿Qué pasa si mi carro está en doble fila o en una zona donde no se puede detener?`,
        a: `Avise cuando llame. Se puede abrir un carro en una zona restringida, pero el técnico necesita saber dónde puede parar con seguridad y cuánto tiempo puede quedarse el carro ahí.`,
      },
      {
        q: `¿Trabajan con carros de lujo europeos como Audi, BMW y Mercedes?`,
        a: `Muchos de estos modelos usan cerraduras de alta seguridad y sistemas sin llave. Dígale al despachador el año, la marca y el modelo exactos para que le explique qué se puede hacer en el lugar.`,
      },
      {
        q: `Perdí mi llave de botón (push-to-start). ¿Se puede hacer una nueva en la calle?`,
        a: `A menudo sí, según el vehículo. La programación depende de la marca, el modelo y el año, y algunos carros necesitan pasos adicionales. Llame con los datos de su carro para recibir una respuesta clara y un precio. Vea [llaves nuevas y programación de llaves](/es/servicios/duplicado-de-llaves-de-carro).`,
      },
      {
        q: `¿Qué debo mostrar antes de que abran el carro?`,
        a: `Una identificación válida con foto y un comprobante de que el vehículo es suyo, como la registración o una tarjeta de seguro con su nombre.`,
      },
      {
        q: `Soy visitante y tengo un carro alquilado. ¿Igual me pueden ayudar?`,
        a: `Llame también a la compañía de alquiler, porque algunos planes cubren este problema. Pregunte al despachador qué comprobante de autorización necesita para un vehículo alquilado.`,
      },
      {
        q: `¿Cómo doy mi ubicación si estoy en una zona llena de gente como Times Square?`,
        a: `Dé la calle de esquina más cercana, de qué lado de la calle está el carro y un punto de referencia. Deje el teléfono encendido para que el técnico pueda llamarle cuando esté cerca.`,
      },
      {
        q: `¿La policía o los bomberos abren mi carro?`,
        a: `En general no, cuando solo se trata de un carro cerrado. Si hay un niño, una persona o una mascota atrapados dentro, llame al 911 de inmediato. Vea [cuándo ayudan la policía o los bomberos](/es/guias/la-policia-abre-carros-gratis).`,
      },
    ],
    nearby: [
      { id: 'brooklyn', text: `¿Está estacionado justo al otro lado del East River? También atendemos [aperturas de carros en Brooklyn](/es/zonas/brooklyn), incluyendo DUMBO, Downtown Brooklyn y Williamsburg.` },
      { id: 'queens', text: `¿Al otro lado del río, en Long Island City o Astoria? Vea el [servicio en Queens](/es/zonas/queens).` },
      { id: 'bronx', text: `Al norte de Harlem, nuestra [zona del Bronx](/es/zonas/bronx) cubre el Concourse y el Yankee Stadium.` },
    ],
  },
  {
    id: 'brooklyn',
    name: 'Brooklyn',
    label: 'Brooklyn',
    metaDescription:
      '¿Carro cerrado en Brooklyn? Apertura de carros, llaves y reparación de encendido en Williamsburg, Park Slope, Flatbush, Bay Ridge y más. Técnicos asegurados, 24/7. Llame para un tiempo estimado.',
    intro: [
      `Brooklyn es el condado más poblado de la ciudad y la mayoría de los carros aquí viven en la calle. Por eso es común quedarse fuera del carro en cuadras angostas de casas adosadas, junto a Prospect Park, cerca del Barclays Center o en las largas avenidas que llegan hasta Coney Island. Quick Car Unlock envía un cerrajero móvil asegurado hasta su vehículo en cualquier parte de Brooklyn.`,
      `Llame al (347) 801-7119. El despachador le pide las calles de esquina más cercanas y los datos de su carro, le da un tiempo estimado y le dice el precio antes de empezar.`,
    ],
    audiences: [
      {
        title: 'Residentes que estacionan en la calle',
        text: `Si su carro vive en la cuadra, usted es quien más probablemente se quede fuera cerca de casa, muchas veces con las compras, con los niños o con prisa. Dígale al despachador la cuadra, el lado de la calle y el horario de estacionamiento alternado, y pida el precio desde el principio. Vea [cuánto cuesta abrir un carro](/es/guias/cuanto-cuesta-abrir-un-carro-nyc).`,
      },
      {
        title: 'Quienes salen de noche o van a eventos',
        text: `Williamsburg, Greenpoint, Bushwick y la zona del Barclays Center se llenan de noche. A las 2 de la mañana, la confianza importa tanto como la rapidez: pida el tiempo estimado y el precio total antes de que envíen a nadie.`,
      },
      {
        title: 'Padres y familias',
        text: `Si hay un niño dentro del carro, llame primero al 911. En otros casos, ayuda tener un plan: deje la llave de repuesto en un lugar conocido y vea nuestra [guía de llaves dentro del carro](/es/guias/deje-las-llaves-dentro-del-carro).`,
      },
      {
        title: 'Conductores de Uber/Lyft y camionetas de negocios pequeños',
        text: `Cada hora parada cuesta dinero. Si una llave se rompió o el encendido no gira, dígalo en la llamada, porque puede tratarse de una [reparación de encendido](/es/servicios/reparacion-de-encendido) y no solo de un carro cerrado.`,
      },
    ],
    situations: [
      {
        title: 'Estacionado en una cuadra residencial',
        text: `En Brooklyn es común que los carros estén pegados parachoques con parachoques. Dígale al despachador la cuadra, el lado de la calle y, si ayuda, qué carro está delante o detrás del suyo, para que el técnico lo encuentre rápido.`,
      },
      {
        title: 'Estacionamiento alternado y limpieza de calles',
        text: `Si su carro tiene que moverse a cierta hora, dígalo en la llamada. Es más fácil resolver el problema antes de la hora de limpieza que durante ella.`,
      },
      {
        title: 'Noches de salida y de eventos',
        text: `Dé una esquina y un punto de referencia, y deje el teléfono encendido para que el técnico pueda comunicarse con usted.`,
      },
      {
        title: 'Llave rota en la puerta o en el encendido',
        text: `Muchas veces se puede sacar una llave rota sin cambiar la cerradura. Describa lo que pasó y guarde los pedazos.`,
      },
      {
        title: 'Llave perdida y sin copia',
        text: `Si no encuentra su única llave, tal vez haya que hacer una nueva. Vea [qué hacer si perdió su única llave](/es/guias/perdi-la-llave-del-carro).`,
      },
      {
        title: 'Días de playa, parque y estadio',
        text: `Coney Island, Brighton Beach y Prospect Park se llenan en verano, y las calles también. Mencione la multitud cuando llame para que el tiempo estimado sea realista.`,
      },
    ],
    access: [
      `Dé la cuadra, el lado de la calle y la calle de esquina más cercana.`,
      `Tenga a mano una identificación con foto y la registración o la tarjeta del seguro a su nombre.`,
      `Dígale al despachador el año, la marca y el modelo de su carro, y si usa llave de botón (push-to-start).`,
      `Si el carro está en una entrada compartida o en un estacionamiento privado, dígalo y dé las instrucciones de acceso o del portón.`,
      `Pida el precio total en la llamada, antes de que envíen a nadie.`,
    ],
    gettingAround: [
      {
        title: 'El BQE y el Gowanus Expressway',
        text: `El Brooklyn-Queens Expressway y el Gowanus atraviesan buena parte del condado y suelen estar congestionados. Su tiempo estimado depende mucho de en qué lado de ellos se encuentre.`,
      },
      {
        title: 'Calles angostas y de un solo sentido',
        text: `En barrios de casas adosadas como Park Slope, Bed-Stuy y Crown Heights hay calles de un solo sentido y carros en doble fila que hacen más lenta la última cuadra.`,
      },
      {
        title: 'Cruces hacia Manhattan y Staten Island',
        text: `Los puentes de Brooklyn, Manhattan y Williamsburg y el túnel Battery jalan el tráfico hacia los bordes. En el sur, el acceso al Verrazzano afecta a Bay Ridge y Sunset Park.`,
      },
    ],
    neighborhoods: [
      { name: 'Williamsburg y Greenpoint', note: 'Cuadras de mucha vida nocturna cerca del río y de Bedford Avenue.' },
      { name: 'Bushwick y Bed-Stuy', note: 'Calles de casas adosadas, con estacionamiento mayormente en la calle.' },
      { name: 'Park Slope y Prospect Heights', note: 'Cuadras con árboles cerca de Prospect Park y del Barclays Center.' },
      { name: 'Crown Heights', note: 'Avenidas concurridas con mezcla de estacionamiento en la calle y en entradas.' },
      { name: 'Flatbush y Ditmas Park', note: 'Casas grandes con entradas de carro junto a calles con poco espacio.' },
      { name: 'Bay Ridge y Sunset Park', note: 'Avenidas largas y calles laterales con cuestas cerca del acceso al Verrazzano.' },
      { name: 'Coney Island y Brighton Beach', note: 'Estacionamientos y calles llenos en verano.' },
      { name: 'Downtown Brooklyn y DUMBO', note: 'Garajes, cuadras de adoquín y mucho tránsito de peatones.' },
      { name: 'Canarsie y East New York', note: 'Cuadras residenciales y estacionamientos más grandes en el este del condado.' },
      { name: 'Red Hook y Gowanus', note: 'Calles industriales y estacionamientos junto al agua con poco tránsito de peatones.' },
    ],
    faqs: [
      {
        q: `Dejé las llaves dentro del carro cerca de Williamsburg, ya de noche. ¿Pueden venir?`,
        a: `Atendemos las 24 horas. Llame, dé la esquina más cercana y un punto de referencia, y el despachador le dará un tiempo estimado antes de enviar a nadie.`,
      },
      {
        q: `¿Pueden llegar a un carro estacionado en una calle angosta de Brooklyn?`,
        a: `Sí. La apertura se hace junto al carro, así que una calle angosta no es problema. Dígale al despachador la cuadra y el lado de la calle para que el técnico pare lo más cerca posible.`,
      },
      {
        q: `¿Atienden zonas como Canarsie, East New York o Flatlands?`,
        a: `Cubrimos todo Brooklyn. Llame con su ubicación y el despachador le confirmará el tiempo estimado para esa zona.`,
      },
      {
        q: `Mi carro es viejo y tiene seguros manuales. ¿Es más difícil?`,
        a: `Normalmente no. Muchos vehículos antiguos con varillas de seguro manual se pueden abrir sin daños. Dígale al despachador el año y el modelo.`,
      },
      {
        q: `Se me rompió la llave dentro de la cerradura. ¿Me pueden ayudar?`,
        a: `En muchos casos se puede sacar una llave rota sin cambiar la cerradura. Llame y describa lo que pasó, y le diremos qué esperar. Vea [reparación de encendido](/es/servicios/reparacion-de-encendido) si la llave se rompió en el encendido.`,
      },
      {
        q: `¿Qué hago con el estacionamiento alternado mientras espero?`,
        a: `Dígale al despachador la hora de limpieza de su cuadra. La espera y las reglas de estacionamiento son dos problemas distintos, y el despachador le dirá si el tiempo estimado le alcanza.`,
      },
      {
        q: `¿Sale más barato llamar a la asistencia en carretera?`,
        a: `Puede ser, si su plan cubre este problema, pero revise el tiempo de espera. Vea [cuánto cuesta abrir un carro en NYC](/es/guias/cuanto-cuesta-abrir-un-carro-nyc).`,
      },
      {
        q: `¿Pueden hacerme una llave nueva si perdí la única que tenía?`,
        a: `Para muchos vehículos, sí. Depende de la marca, el modelo y el año. Vea [llaves nuevas para carros](/es/servicios/duplicado-de-llaves-de-carro).`,
      },
    ],
    nearby: [
      { id: 'manhattan', text: `¿Justo al otro lado de los puentes? Nuestra [zona de Manhattan](/es/zonas/manhattan) cubre el bajo Manhattan, Midtown y la parte alta.` },
      { id: 'queens', text: `¿En el límite con Queens, cerca de Greenpoint o Ridgewood? Vea el [servicio en Queens](/es/zonas/queens).` },
      { id: 'staten-island', text: `¿Al otro lado del Verrazzano? También atendemos [Staten Island](/es/zonas/staten-island).` },
    ],
  },
  {
    id: 'queens',
    name: 'Queens',
    label: 'Queens',
    metaDescription:
      '¿Se quedó fuera de su carro en Queens? Apertura de carros, llaves nuevas y reparación de encendido en Astoria, Flushing, Jamaica, LIC y cerca de JFK y LaGuardia. Técnicos asegurados, 24/7.',
    intro: [
      `Queens es el condado más grande de la ciudad por superficie y una de las zonas donde más se depende del carro. Quedarse fuera puede pasar en una calle de Astoria, en un estacionamiento de Flushing, en la entrada de una casa en Bayside o en un estacionamiento de larga estadía cerca de JFK o LaGuardia. Quick Car Unlock envía un cerrajero móvil asegurado hasta su vehículo en todo el condado.`,
      `Llame al (347) 801-7119. Como Queens es tan extenso, el tiempo estimado depende mucho de dónde esté usted. El despachador le da un tiempo estimado en la llamada, antes de enviar a nadie, y le dice el precio antes de empezar.`,
    ],
    audiences: [
      {
        title: 'Viajeros y conductores cerca de los aeropuertos',
        text: `Volver de un viaje y encontrar el carro cerrado, o sin llave, es un problema común en Queens. Dígale al despachador el nombre del estacionamiento, el nivel y el espacio, y confirme las reglas del operador para proveedores externos. Si perdió la llave, vea nuestra guía sobre [perder su única llave](/es/guias/perdi-la-llave-del-carro).`,
      },
      {
        title: 'Familias con carro en la entrada de la casa o en la calle',
        text: `En Bayside, Forest Hills y el sureste del condado, muchas aperturas son en casa. Comparta los datos del portón o del acceso. Una llave de repuesto guardada fuera del carro es la solución más barata; vea [qué hacer ahora mismo](/es/guias/deje-las-llaves-dentro-del-carro).`,
      },
      {
        title: 'Dueños de negocios y personas que van al trabajo en Flushing y Jackson Heights',
        text: `Los estacionamientos llenos y la poca disponibilidad en la calle hacen que la ubicación exacta sea importante. Dé la calle de esquina más cercana y el nombre del negocio junto al que estacionó. Para tener una cifra concreta, vea [cuánto cuesta abrir un carro](/es/guias/cuanto-cuesta-abrir-un-carro-nyc).`,
      },
      {
        title: 'Quienes van a eventos cerca de Citi Field y Flushing Meadows',
        text: `Los días de partido o de evento se llenan los estacionamientos y las calles se congestionan. Mencione el evento y su estacionamiento o puerta en la llamada para que el tiempo estimado sea realista.`,
      },
    ],
    situations: [
      {
        title: 'Estacionamientos de los aeropuertos JFK y LaGuardia',
        text: `Si se quedó fuera en un estacionamiento del aeropuerto, dígale al despachador el nombre del estacionamiento, el nivel y el espacio. Cada operador tiene sus propias reglas para proveedores externos, así que llame antes y confirme lo que se permite.`,
      },
      {
        title: 'Zonas de compras y restaurantes',
        text: `La zona de Main Street en Flushing, Astoria y Jackson Heights tienen estacionamientos llenos y poco espacio en la calle. Dé la calle de esquina más cercana y el nombre del negocio junto al que estacionó.`,
      },
      {
        title: 'Días de eventos cerca de Citi Field y Flushing Meadows',
        text: `Los días de partido o de evento se llenan los estacionamientos y las calles se congestionan. Mencione el evento y su estacionamiento o puerta en la llamada para que el tiempo estimado sea realista.`,
      },
      {
        title: 'Llave perdida después de un viaje',
        text: `Las llaves con chip y las llaves inteligentes son comunes. Si no tiene copia, llame con el año, la marca y el modelo de su carro para recibir un precio en el lugar. Vea [llaves nuevas para carros](/es/servicios/duplicado-de-llaves-de-carro).`,
      },
      {
        title: 'La llave no gira aunque el carro ya está abierto',
        text: `Un cilindro de encendido desgastado puede impedir que la llave gire. Vea [reparación de encendido](/es/servicios/reparacion-de-encendido).`,
      },
      {
        title: 'Playa y tráfico de temporada en los Rockaways',
        text: `El tráfico de verano hacia los Rockaways suma tiempo. Menciónelo en la llamada.`,
      },
    ],
    access: [
      `Dé la calle de esquina más cercana o, en un estacionamiento, el nombre del lugar y el número del espacio.`,
      `Tenga a mano una identificación con foto y la registración o la tarjeta del seguro a su nombre.`,
      `Dígale al despachador si está cerca de una autopista como la LIE, el Grand Central Parkway o la Van Wyck, porque el tráfico afecta el tiempo estimado.`,
      `En el estacionamiento de un aeropuerto, confirme las reglas del operador para proveedores externos antes de que llegue el técnico.`,
      `Pida el precio total en la llamada, incluyendo cualquier cargo por distancia.`,
    ],
    gettingAround: [
      {
        title: 'LIE, Grand Central Parkway y Van Wyck',
        text: `Varias autopistas importantes cruzan Queens y pueden estar libres o muy congestionadas. El tiempo estimado depende de si usted está cerca de una y de cómo está el tráfico en ese momento.`,
      },
      {
        title: 'Distancia entre barrios',
        text: `Ir de Astoria a los Rockaways es muy distinto a cruzar Astoria. El despachador le da un tiempo estimado para su ubicación exacta.`,
      },
      {
        title: 'Puentes y túneles en los bordes',
        text: `Los accesos al Queensboro, al Midtown Tunnel y al Triborough/RFK jalan el tráfico hacia Long Island City y Astoria en la hora pico.`,
      },
    ],
    neighborhoods: [
      { name: 'Astoria y Long Island City', note: 'Estacionamiento denso en la calle cerca de restaurantes y del río.' },
      { name: 'Sunnyside y Woodside', note: 'Cuadras estrechas debajo y alrededor del tren elevado.' },
      { name: 'Jackson Heights y Elmhurst', note: 'Avenidas comerciales muy concurridas con poco estacionamiento.' },
      { name: 'Flushing', note: 'Estacionamientos llenos y mucho tráfico alrededor de Main Street y Flushing Meadows.' },
      { name: 'Forest Hills y Kew Gardens', note: 'Mezcla de garajes y estacionamiento en la calle cerca de Queens Boulevard.' },
      { name: 'Jamaica', note: 'Gran centro de transporte con estacionamientos concurridos.' },
      { name: 'Bayside y Little Neck', note: 'Más entradas de casas y estacionamientos residenciales.' },
      { name: 'Howard Beach y Ozone Park', note: 'Cerca de JFK y del Belt Parkway.' },
      { name: 'Ridgewood y Maspeth', note: 'Calles residenciales e industriales mezcladas en el límite con Brooklyn.' },
      { name: 'Rockaway Beach', note: 'Trayectos largos desde el resto de la ciudad y tráfico de playa en verano.' },
    ],
    faqs: [
      {
        q: `¿Me pueden ayudar si me quedé fuera del carro en JFK o LaGuardia?`,
        a: `Muchas veces sí, pero los estacionamientos de los aeropuertos tienen sus propias reglas para proveedores externos. Dígale al despachador el estacionamiento, el nivel y el espacio, y confirme con el operador lo que se permite.`,
      },
      {
        q: `¿Por qué el tiempo estimado cambia tanto en Queens?`,
        a: `Queens es muy grande, y el tiempo de viaje entre Astoria y los Rockaways, por ejemplo, es muy distinto al de un trayecto corto dentro de Astoria. El despachador le da un tiempo estimado para su ubicación exacta.`,
      },
      {
        q: `Mi carro usa una llave con chip. ¿Qué tan rápido pueden hacerme una nueva?`,
        a: `Depende del vehículo. Algunas llaves se pueden cortar y programar en el lugar. Llame con el año, la marca y el modelo para recibir una respuesta clara. Vea [llaves nuevas para carros](/es/servicios/duplicado-de-llaves-de-carro).`,
      },
      {
        q: `¿Cobran extra por ir a los aeropuertos?`,
        a: `El precio se da antes de empezar el trabajo y depende del servicio y del lugar. Pregunte al despachador si hay algún cargo adicional para su ubicación cuando llame.`,
      },
      {
        q: `¿Atienden aperturas de madrugada?`,
        a: `Sí. El despacho está abierto las 24 horas.`,
      },
      {
        q: `Estoy en un estacionamiento grande de Citi Field o de Queens Center Mall. ¿Cómo hago para que me encuentren?`,
        a: `Dé el nombre del estacionamiento, la entrada o puerta más cercana y una fila o letrero cerca de su carro. Deje el teléfono encendido.`,
      },
      {
        q: `¿Atienden los Rockaways?`,
        a: `Cubrimos todo Queens, incluyendo Rockaway Beach. El tiempo estimado es mayor mientras más lejos esté del resto de la ciudad, y el despachador le da el dato real en la llamada.`,
      },
      {
        q: `¿Cuál es la diferencia entre un carro cerrado y un problema de encendido?`,
        a: `Un carro cerrado significa que no puede entrar. Un problema de encendido significa que la llave no gira una vez que ya está adentro. Vea [reparación de encendido](/es/servicios/reparacion-de-encendido).`,
      },
    ],
    nearby: [
      { id: 'brooklyn', text: `¿Del lado de Brooklyn de Greenpoint o Bushwick? Vea el [servicio en Brooklyn](/es/zonas/brooklyn).` },
      { id: 'manhattan', text: `¿Al otro lado del East River? También cubrimos [Manhattan](/es/zonas/manhattan), incluyendo Midtown y el Upper East Side.` },
      { id: 'bronx', text: `Pasando los puentes Whitestone o Throgs Neck, nuestra [zona del Bronx](/es/zonas/bronx) cubre Throgs Neck y Pelham Bay.` },
    ],
  },
  {
    id: 'bronx',
    name: 'El Bronx',
    label: 'el Bronx',
    metaDescription:
      '¿Carro cerrado en el Bronx? Apertura de carros, extracción de llaves rotas, llaves nuevas y reparación de encendido en Fordham, Riverdale, Pelham Bay y el sur del Bronx. Técnicos asegurados, 24/7.',
    intro: [
      `El Bronx tiene de todo: desde estacionamiento muy disputado en la calle cerca del Grand Concourse hasta entradas de casas en Riverdale y Throgs Neck. Aquí es común quedarse fuera del carro afuera del Yankee Stadium en noches de partido, en las cuadras llenas alrededor de Fordham Road y en los estacionamientos cerca de Pelham Bay Park. Quick Car Unlock envía un cerrajero móvil asegurado hasta su vehículo en cualquier parte del Bronx.`,
      `Llame al (347) 801-7119. El despachador le pide su ubicación y los datos de su carro, le da un tiempo estimado y le dice el precio antes de empezar.`,
    ],
    audiences: [
      {
        title: 'Aficionados del Yankee Stadium y quienes van a eventos',
        text: `El tráfico de las noches de partido puede causar mucho retraso. Dígale al despachador en qué estacionamiento, garaje o calle está y cerca de qué salida, para que el tiempo estimado sea realista.`,
      },
      {
        title: 'Quienes van al trabajo y residentes cerca del Concourse y Fordham',
        text: `En cuadras llenas, encontrar el carro es la mitad del trabajo. Dé la cuadra, el lado de la calle y un negocio cercano. Para tener un precio que pueda aprobar antes, vea [cuánto cuesta abrir un carro](/es/guias/cuanto-cuesta-abrir-un-carro-nyc).`,
      },
      {
        title: 'Conductores de servicio de carro, entregas y turnos de trabajo',
        text: `Una llave rota o un encendido que no gira puede acabar con un turno. Dígalo en la llamada, porque puede tratarse de una [reparación de encendido](/es/servicios/reparacion-de-encendido) y no solo de un carro cerrado.`,
      },
      {
        title: 'Compradores de carros usados con una sola llave',
        text: `Muchos carros usados vienen con una sola llave. Una copia sale más barata que reponer la llave después de perderla. Vea [llaves nuevas para carros](/es/servicios/duplicado-de-llaves-de-carro) y nuestra [guía de llave perdida](/es/guias/perdi-la-llave-del-carro).`,
      },
    ],
    situations: [
      {
        title: 'Días y noches de partido en el Yankee Stadium',
        text: `El tráfico de los partidos puede causar mucho retraso. Dígale al despachador que está cerca del estadio para que el tiempo estimado tome en cuenta la multitud, y dé el garaje, el estacionamiento o la calle donde está.`,
      },
      {
        title: 'Llave rota en la cerradura o en el encendido',
        text: `Una llave que se rompió en la puerta o en el encendido muchas veces se puede sacar sin cambiar la cerradura. Llame, describa lo que pasó y guarde los pedazos.`,
      },
      {
        title: 'Estacionamiento en la calle en cuadras llenas',
        text: `Alrededor de Fordham, Mott Haven y el Grand Concourse, dé la cuadra, el lado de la calle y un negocio cercano para que el técnico lo encuentre.`,
      },
      {
        title: 'City Island y Pelham Bay',
        text: `City Island tiene una sola calle principal de entrada y salida, así que el tráfico afecta el tiempo estimado. Menciónelo en la llamada.`,
      },
      {
        title: 'Llaves dentro del baúl',
        text: `Un técnico muchas veces puede abrir una puerta y usar el seguro interior. Vea [llaves dentro del baúl](/es/guias/llaves-dentro-del-baul).`,
      },
      {
        title: 'Hay un niño o una mascota dentro del carro',
        text: `Es una emergencia. Llame primero al 911. Vea [cuándo ayudan la policía o los bomberos](/es/guias/la-policia-abre-carros-gratis).`,
      },
    ],
    access: [
      `Dé la calle de esquina más cercana, el lado de la calle y un negocio o punto de referencia cercano.`,
      `Tenga a mano una identificación con foto y la registración o la tarjeta del seguro a su nombre.`,
      `Pida un recibo si piensa presentar el costo a su aseguradora o a su plan de asistencia en carretera.`,
      `Dígale al despachador el año, la marca y el modelo de su carro, y si la llave es con chip o de botón (push-to-start).`,
      `Pida el precio total en la llamada, antes de que envíen a nadie.`,
    ],
    gettingAround: [
      {
        title: 'Cross Bronx y Major Deegan Expressway',
        text: `El Cross Bronx Expressway y el Major Deegan llevan mucho tráfico y son cuellos de botella frecuentes. El tiempo estimado depende de en qué lado de ellos esté usted.`,
      },
      {
        title: 'El Grand Concourse y los desvíos de los días de partido',
        text: `El Concourse y las calles alrededor del estadio cambian en los días de partido. Mencione el evento cuando llame.`,
      },
      {
        title: 'Puentes en los bordes',
        text: `Los puentes de Third Avenue, Willis Avenue, Triborough/RFK, Whitestone y Throgs Neck jalan el tráfico hacia los bordes del Bronx en la hora pico.`,
      },
    ],
    neighborhoods: [
      { name: 'Sur del Bronx y Mott Haven', note: 'Cuadras densas y calles industriales concurridas.' },
      { name: 'Concourse y Yankee Stadium', note: 'Mucho tráfico los días de partido.' },
      { name: 'Hunts Point y Longwood', note: 'Mezcla de terrenos industriales y cuadras residenciales.' },
      { name: 'Fordham y Belmont', note: 'Cuadras comerciales llenas cerca de Fordham Road.' },
      { name: 'Kingsbridge y Riverdale', note: 'Calles con cuestas y más entradas de casas.' },
      { name: 'Pelham Bay y City Island', note: 'Parques, estacionamientos y una sola calle principal hacia City Island.' },
      { name: 'Throgs Neck y Co-op City', note: 'Grandes complejos con sus propios estacionamientos.' },
      { name: 'Morris Park y Parkchester', note: 'Cuadras residenciales cerca de grandes complejos médicos y de viviendas.' },
      { name: 'Wakefield y Williamsbridge', note: 'Calles residenciales en el norte del Bronx.' },
      { name: 'Woodlawn', note: 'Calles residenciales en el extremo norte del condado.' },
    ],
    faqs: [
      {
        q: `Estoy varado cerca del Yankee Stadium después de un partido. ¿Pueden llegar?`,
        a: `Llame y dígale al despachador la calle o el estacionamiento donde está. El tráfico de los partidos afecta el tiempo estimado, y el despachador le dirá la espera real antes de enviar a nadie.`,
      },
      {
        q: `¿Pueden sacar una llave rota de la puerta o del encendido?`,
        a: `En muchos casos sí. Con herramientas de extracción se puede sacar la parte rota sin cambiar el cilindro. Llame y describa lo que pasó.`,
      },
      {
        q: `¿Dan recibo para el seguro o la asistencia en carretera?`,
        a: `Pida el recibo cuando termine el trabajo. Revise su póliza o su plan de asistencia en carretera para saber qué le reembolsan.`,
      },
      {
        q: `¿Qué debo mostrar antes de que abran el carro?`,
        a: `Una identificación válida con foto y un comprobante de que el carro es suyo, como la registración o una tarjeta de seguro con su nombre.`,
      },
      {
        q: `Mi batería está muerta y las puertas no abren. ¿Igual me pueden ayudar?`,
        a: `Una batería muerta puede desactivar los seguros eléctricos. Menciónelo en la llamada. Abrir el carro y arreglar la batería son trabajos distintos, y el despachador le dirá qué aplica.`,
      },
      {
        q: `Compré un carro usado con una sola llave. ¿Pueden hacerme una copia?`,
        a: `Para muchos vehículos, sí. Una copia sale más barata que reponer la llave después de perderla. Vea [llaves nuevas para carros](/es/servicios/duplicado-de-llaves-de-carro).`,
      },
      {
        q: `¿Van hasta City Island?`,
        a: `Cubrimos todo el Bronx, incluyendo City Island. El tráfico en la única calle principal afecta el tiempo estimado, y el despachador le da el dato real en la llamada.`,
      },
      {
        q: `¿Cómo evito que me cobren de más?`,
        a: `Pida por teléfono el precio total, incluyendo cualquier cargo adicional, antes de que envíen a nadie. Vea [cómo evitar cargos sorpresa](/es/guias/cuanto-cuesta-abrir-un-carro-nyc).`,
      },
    ],
    nearby: [
      { id: 'manhattan', text: `¿Pasando el puente de Third Avenue o Willis Avenue? También cubrimos [Harlem y el resto de Manhattan](/es/zonas/manhattan).` },
      { id: 'queens', text: `Pasando los puentes Whitestone o Throgs Neck, vea el [servicio en Queens](/es/zonas/queens).` },
      { id: 'brooklyn', text: `¿Busca Brooklyn? Vea el [servicio en Brooklyn](/es/zonas/brooklyn).` },
    ],
  },
  {
    id: 'staten-island',
    name: 'Staten Island',
    label: 'Staten Island',
    metaDescription:
      '¿Se quedó fuera de su carro en Staten Island? Apertura de carros, llaves nuevas y reparación de encendido en St. George, New Dorp, Great Kills y Tottenville. Técnicos asegurados, 24/7.',
    intro: [
      `Staten Island es el condado donde más se depende del carro, así que quedarse fuera puede pasar en la entrada de una casa en Tottenville, en el estacionamiento del Staten Island Mall o en un estacionamiento de viajeros cerca de la terminal del ferry de St. George. Quick Car Unlock envía un cerrajero móvil asegurado hasta su vehículo en cualquier parte de la isla.`,
      `Llame al (347) 801-7119. El despachador le da un tiempo estimado antes de enviar a nadie, según su ubicación y el tráfico en el Staten Island Expressway, el West Shore Expressway o los puentes, y le dice el precio antes de empezar.`,
    ],
    audiences: [
      {
        title: 'Personas que dependen del carro para ir al trabajo',
        text: `Muchos vecinos de Staten Island manejan hasta el ferry, una parada de autobús exprés o un tren. Quedarse fuera ahí puede significar perder la conexión, así que dé el nombre del estacionamiento y dónde estacionó, y pida un tiempo estimado firme.`,
      },
      {
        title: 'Dueños de casa con entrada de carro',
        text: `Es común quedarse fuera en casa. Si el carro está en una entrada o en un camino privado, dígale al despachador cómo llegar y si hay portón. Para tener una copia de repuesto, vea [llaves nuevas para carros](/es/servicios/duplicado-de-llaves-de-carro).`,
      },
      {
        title: 'Familias en centros comerciales y estacionamientos grandes',
        text: `Los estacionamientos grandes como el del Staten Island Mall tienen muchas filas idénticas. Dé la entrada de tienda más cercana y la fila o el letrero cerca del que estacionó. Vea [qué hacer ahora mismo](/es/guias/deje-las-llaves-dentro-del-carro).`,
      },
      {
        title: 'Padres de conductores nuevos',
        text: `Los conductores nuevos dejan las llaves dentro del carro, las pierden y las rompen. Hacer una copia a tiempo sale más barato que una emergencia después. Vea [la guía de costos](/es/guias/cuanto-cuesta-abrir-un-carro-nyc) y la [guía de llave perdida](/es/guias/perdi-la-llave-del-carro).`,
      },
    ],
    situations: [
      {
        title: 'Estacionamientos de viajeros cerca del ferry y de las paradas de autobús',
        text: `Si se quedó fuera cerca de la terminal del ferry de St. George o de otro estacionamiento de viajeros, dé el nombre del lugar y dónde estacionó. El tráfico de la hora pico afecta el tiempo estimado.`,
      },
      {
        title: 'Centros comerciales y estacionamientos grandes',
        text: `Dé la entrada de tienda más cercana y la fila o el letrero cerca del que estacionó.`,
      },
      {
        title: 'Aperturas en la entrada de la casa y en zonas residenciales',
        text: `Muchas aperturas en Staten Island son en casa. Dígale al despachador cómo llegar al carro y si hay portón.`,
      },
      {
        title: 'Llaves perdidas y llaves con chip',
        text: `Si perdió la llave y no tiene copia, llame con el año, la marca y el modelo. Que se pueda cortar y programar una llave en el lugar depende del vehículo. Vea [llaves nuevas para carros](/es/servicios/duplicado-de-llaves-de-carro).`,
      },
      {
        title: 'La llave no gira',
        text: `Una llave que no gira puede ser un cilindro de encendido desgastado. Vea [reparación de encendido](/es/servicios/reparacion-de-encendido).`,
      },
      {
        title: 'Trabajos de cerradura y llaves más allá de abrir el carro',
        text: `En Staten Island también buscan duplicado de llaves y reparación de cerraduras. Llame y describa lo que necesita, y el despachador le dirá si es un servicio que ofrecemos.`,
      },
    ],
    access: [
      `Dé la calle principal o la calle de esquina más cercana o, en un estacionamiento, el nombre del lugar y la fila donde estacionó.`,
      `Tenga a mano una identificación con foto y la registración o la tarjeta del seguro a su nombre.`,
      `Mencione el tráfico de puentes o autopistas si está cerca de los accesos al Verrazzano, al Goethals o al Outerbridge, porque afecta el tiempo estimado.`,
      `Dígale al despachador el año, la marca y el modelo de su carro, y si la llave es con chip o de botón (push-to-start).`,
      `Pida el precio total en la llamada, incluyendo cualquier cargo por distancia.`,
    ],
    gettingAround: [
      {
        title: 'Staten Island Expressway y West Shore Expressway',
        text: `El SIE y el West Shore llevan la mayor parte del tráfico de norte a sur y de este a oeste. La congestión en cualquiera de los dos cambia el tiempo estimado.`,
      },
      {
        title: 'Cruces de puentes',
        text: `Los puentes Verrazzano, Goethals, Outerbridge y Bayonne son los únicos enlaces por carretera para salir de la isla. Los peajes y el tráfico de los puentes pueden sumar tiempo cerca de ellos.`,
      },
      {
        title: 'Distancia entre la costa norte y la costa sur',
        text: `St. George y Tottenville están muy lejos una de otra. El despachador le da un tiempo estimado para su ubicación exacta.`,
      },
    ],
    neighborhoods: [
      { name: 'St. George y Tompkinsville', note: 'Terminal del ferry, zona del tribunal y estacionamientos de viajeros.' },
      { name: 'Stapleton y Clifton', note: 'Cuadras residenciales densas en la costa norte.' },
      { name: 'West New Brighton y Port Richmond', note: 'Zonas comerciales principales a lo largo de Forest Avenue y Port Richmond Avenue.' },
      { name: 'New Springville y Bulls Head', note: 'Staten Island Mall y grandes estacionamientos de tiendas.' },
      { name: 'New Dorp y Oakwood', note: 'Calles residenciales y tiendas cerca de Hylan Boulevard.' },
      { name: 'Great Kills y Eltingville', note: 'Entradas de casas en la costa sur y estacionamientos de viajeros.' },
      { name: 'Annadale y Huguenot', note: 'Calles residenciales y tiendas cerca de Amboy Road.' },
      { name: 'Tottenville y Princes Bay', note: 'Extremo sur de la isla, más lejos de los puentes.' },
      { name: 'Rossville y Charleston', note: 'Suroeste de la isla, con estacionamientos y entradas más grandes.' },
      { name: 'Todt Hill y Dongan Hills', note: 'Calles residenciales con cuestas y entradas de casas.' },
    ],
    faqs: [
      {
        q: `¿Cuánto tarda una apertura una vez que el técnico está junto al carro?`,
        a: `Abrir una puerta normalmente es cuestión de minutos una vez que el técnico está junto al vehículo. La programación de llaves y el trabajo de encendido toman más tiempo, y el técnico le dice qué esperar antes de empezar.`,
      },
      {
        q: `¿Hay peaje de puente o cargo por distancia?`,
        a: `El precio se da antes de empezar el trabajo. Pregunte al despachador si hay algún cargo por distancia para su ubicación cuando llame.`,
      },
      {
        q: `¿Pueden ayudarme en la terminal del ferry de St. George o en un estacionamiento de viajeros?`,
        a: `Sí. Dé el nombre del estacionamiento y dónde estacionó. El tráfico de la hora pico puede sumar tiempo, y el despachador le dará el tiempo estimado.`,
      },
      {
        q: `¿Pueden programar una llave inteligente para un carro más nuevo?`,
        a: `Para muchos vehículos, sí. Depende de la marca, el modelo y el año. Llame con los datos de su carro para recibir una respuesta clara y un precio. Vea [llaves nuevas para carros](/es/servicios/duplicado-de-llaves-de-carro).`,
      },
      {
        q: `¿Abren carros en entradas privadas o en comunidades cerradas?`,
        a: `Sí. Dígale al despachador cómo llegar al carro y si hay código de portón o guardia.`,
      },
      {
        q: `¿Pueden hacer un duplicado de llave?`,
        a: `Llame y describa la llave. Muchas llaves de carro se pueden duplicar o reponer en el lugar, según el tipo. Vea [llaves nuevas para carros](/es/servicios/duplicado-de-llaves-de-carro).`,
      },
      {
        q: `¿Qué hago si el encendido se atoró o la llave no gira?`,
        a: `Puede ser un cilindro de encendido desgastado o el volante bloqueado. Vea [reparación de encendido](/es/servicios/reparacion-de-encendido).`,
      },
      {
        q: `¿Qué debo hacer antes de que llegue el técnico?`,
        a: `Quédese junto al carro si es seguro, deje el teléfono encendido y tenga lista su identificación y la registración o la tarjeta del seguro. Vea [qué hacer ahora mismo](/es/guias/deje-las-llaves-dentro-del-carro).`,
      },
    ],
    nearby: [
      { id: 'brooklyn', text: `¿Al otro lado del Verrazzano, en Bay Ridge o Sunset Park? Vea el [servicio en Brooklyn](/es/zonas/brooklyn).` },
      { id: 'manhattan', text: `¿Tomó el ferry hasta el bajo Manhattan? También atendemos [Manhattan](/es/zonas/manhattan).` },
      { id: 'queens', text: `¿Busca Queens? Vea el [servicio en Queens](/es/zonas/queens).` },
    ],
  },
];

export const boroughByIdEs = Object.fromEntries(boroughsEs.map(b => [b.id, b]));
