// data.js
window.CECI_DATA = (() => {
  const archetypes = {
    A: { name: "💎 Clásicos Elegantes", tagline: "La excelencia es el lenguaje del amor.", brief: "Orden, armonía y estética impecable. La emoción es contenida, refinada y profundamente intencional.", full: "Ustedes valoran coherencia y dirección. No improvisan momentos: los diseñan. La música ideal marca entradas y transiciones con elegancia, sin exageración.", set: ["Violín + piano (ideal con baby grand piano shell)","Ceremonia: clásico/romántico refinado","Cóctel: instrumental elegante con pop reinterpretado"] },
    B: { name: "🌿 Románticos Naturales", tagline: "Si no se siente auténtico, no es para nosotros.", brief: "Calidez, luz suave y emoción genuina. Menos show, más verdad.", full: "Priorizan conexión por encima del impacto. La música acompaña y sostiene la atmósfera sin invadir: romántica, orgánica, íntima.", set: ["Violín + piano íntimo","Ceremonia: romántico suave","Cóctel: indie/pop delicado instrumental"] },
    C: { name: "🎨 Creativos Vanguardistas", tagline: "No queremos una boda. Queremos una experiencia.", brief: "Editorial, audaz y con identidad propia. Un concepto, no un formato.", full: "Piensan en narrativa y diseño. La música puede sorprender con arreglos únicos y giros inesperados, siempre con estética cuidada.", set: ["Violín protagonista + piano","Arreglos exclusivos","Momento ‘wow’ elegante (performance breve)"] },
    D: { name: "🎉 Sociales Festivos", tagline: "Queremos que todos recuerden esta noche.", brief: "Celebración, energía y momentos compartidos. La emoción es expansiva.", full: "Diseñan pensando en la vibra del invitado. La música marca el ritmo y puede subir energía con inteligencia: transiciones hacia una fiesta inolvidable.", set: ["Violín con presencia escénica","Hits instrumental en cóctel","Performance sorpresa para activar"] },
    E: { name: "🤍 Íntimos Emocionales", tagline: "No buscamos espectáculo. Buscamos significado.", brief: "Profundidad, historia y emoción silenciosa. Momentos que se quedan en la piel.", full: "Priorizan lo verdadero. La música ideal es puente emocional: acompaña votos, lecturas y momentos simbólicos con sensibilidad.", set: ["Violín + piano minimalista","Canciones personalizadas","Momentos íntimos dirigidos con sensibilidad"] }
  };

  const musicModules = {
    M1: { name:"Acompañamiento Sutil", brief:"Presente, pero nunca compite.", full:"Ideal para atmósfera romántica e íntima. Violín + piano con arreglos suaves y transiciones fluidas." },
    M2: { name:"Protagonismo Sofisticado", brief:"Marca momentos clave con intención.", full:"La música guía entradas y clímax emocionales con coherencia estética. Violín + piano con arreglos personalizados." },
    M3: { name:"Momento WOW", brief:"Sorpresa elegante y memorable.", full:"Intervenciones breves y estratégicas para generar reacción. Performance sorpresa con estética cuidada." }
  };

  const setlists = {
    A: { title: "Setlist recomendado — Clásicos Elegantes", moments: [
      { name: "Ceremonia (clásico refinado + emoción contenida)", songs: ["Canon in D — Pachelbel","Clair de Lune — Debussy","A Thousand Years — Christina Perri (instrumental)","Perfect — Ed Sheeran (instrumental)","All of Me — John Legend (instrumental)"]},
      { name: "Cóctel / Recepción (luxury lounge, conversación)", songs: ["La Vie En Rose — Édith Piaf (instrumental)","Fly Me to the Moon — Sinatra (instrumental)","At Last — Etta James (instrumental)","Can’t Help Falling in Love — Elvis (instrumental)"]},
      { name: "Momento especial (firma Ceci)", songs: ["Viva la Vida — Coldplay (instrumental elegante)","Yellow — Coldplay (instrumental)"] }
    ]},
    B: { title: "Setlist recomendado — Románticos Naturales", moments: [
      { name: "Ceremonia (orgánico, cálido, auténtico)", songs: ["Turning Page — Sleeping At Last (instrumental)","I Get to Love You — Ruelle (instrumental)","You Are the Reason — Calum Scott (instrumental)","Bloom — The Paper Kites (instrumental)"]},
      { name: "Cóctel / Recepción (indie-pop delicado)", songs: ["Ho Hey — The Lumineers (instrumental)","Riptide — Vance Joy (instrumental)","Somewhere Only We Know — Keane (instrumental)","Photograph — Ed Sheeran (instrumental)"]},
      { name: "Cierre emotivo", songs: ["A Sky Full of Stars — Coldplay (instrumental suave)"] }
    ]},
    C: { title: "Setlist recomendado — Creativos Vanguardistas", moments: [
      { name: "Ceremonia (editorial, conceptual)", songs: ["Experience — Ludovico Einaudi","Nuvole Bianche — Ludovico Einaudi","Time — Hans Zimmer","Young and Beautiful — Lana del Rey (instrumental)"]},
      { name: "Cóctel / Recepción (curado, cool)", songs: ["Midnight City — M83 (instrumental)","Blinding Lights — The Weeknd (instrumental, classy)","Levitating — Dua Lipa (instrumental)","Take Five — Dave Brubeck (vibe)"]},
      { name: "Momento WOW (intervención)", songs: ["Titanium — David Guetta (instrumental épico)","Viva la Vida — Coldplay (arreglo sorpresa)"] }
    ]},
    D: { title: "Setlist recomendado — Sociales Festivos", moments: [
      { name: "Ceremonia (emocionante con ritmo)", songs: ["Marry You — Bruno Mars (instrumental)","I’m Yours — Jason Mraz (instrumental)","Love on Top — Beyoncé (instrumental)"]},
      { name: "Cóctel / Recepción (subiendo energía)", songs: ["Uptown Funk — Bruno Mars (instrumental)","September — Earth, Wind & Fire (instrumental)","Happy — Pharrell Williams (instrumental)"]},
      { name: "Activación / transición a fiesta", songs: ["Don’t Stop Me Now — Queen (instrumental)","Titanium — instrumental épico"] }
    ]},
    E: { title: "Setlist recomendado — Íntimos Emocionales", moments: [
      { name: "Ceremonia (minimalismo emocional)", songs: ["River Flows in You — Yiruma","Kiss the Rain — Yiruma","Comptine d’un autre été — Yann Tiersen","Clair de Lune — Debussy"]},
      { name: "Cóctel / Recepción (cálido y cercano)", songs: ["Make You Feel My Love — Adele (instrumental)","Hallelujah — instrumental","Stand By Me — instrumental suave"]},
      { name: "Momento simbólico", songs: ["A Thousand Years — instrumental (íntimo)"] }
    ]}
  };

  const intensityAddOns = {
    M1: { title: "Ajuste por intensidad (M1 — Acompañamiento sutil)", note: "Arreglos suaves, tempos moderados y prioridad a atmósfera. Menos cambios bruscos.", add: ["Clair de Lune — Debussy","Kiss the Rain — Yiruma","Turning Page — Sleeping At Last (instrumental)"] },
    M2: { title: "Ajuste por intensidad (M2 — Protagonismo sofisticado)", note: "Sumar piezas “ancla” para entradas y transiciones. Arreglos marcados y coordinación con timing.", add: ["Canon in D — Pachelbel","La Vie En Rose — instrumental","Viva la Vida — Coldplay (instrumental elegante)"] },
    M3: { title: "Ajuste por intensidad (M3 — Momento WOW)", note: "Agregar 1–2 intervenciones sorpresa cortas (60–90s) que generen reacción sin perder estética.", add: ["Titanium — instrumental épico","Blinding Lights — instrumental classy","Uptown Funk — instrumental (mini show)"] }
  };

  // ----------------------------
  // CONSULTORÍA ELEGANTE (DESARROLLO)
  // ----------------------------
  const consult = {
    deepDive: {
      A: [
        "Este perfil revela una preferencia clara por coherencia estética y precisión en el diseño del evento.",
        "En bodas de este estilo, la música funciona como arquitectura invisible: ordena entradas, sostiene climas y eleva el espacio sin invadirlo.",
        "El diferencial no está en tocar “más fuerte”, sino en calibrar intención, tempo y transición con exactitud."
      ],
      B: [
        "Este perfil prioriza autenticidad: la emoción se siente cuando nada parece forzado.",
        "La música debe integrarse con naturalidad, como parte del aire del evento: presente, delicada y estratégicamente dosificada.",
        "El sello premium aquí es sutileza: elegir lo correcto, en el momento correcto, con una ejecución sensible."
      ],
      C: [
        "Este perfil apunta a identidad: no buscan una boda correcta, sino una experiencia con firma propia.",
        "La música debe dialogar con el concepto general (estética, iluminación, narrativa, timing) y no quedar como capa aislada.",
        "El nivel alto se logra curando arreglos y momentos con intención editorial, no acumulando efectos."
      ],
      D: [
        "Este perfil prioriza atmósfera social: la boda se diseña pensando en la energía colectiva.",
        "La música tiene un rol conductor: marca ritmo, ordena el ánimo del invitado y construye progresión.",
        "El secreto elegante aquí es control: subir energía sin perder estética ni convertirlo en show desalineado."
      ],
      E: [
        "Este perfil valora significado: la emoción vive en detalles finos, silencios y decisiones personales.",
        "La música debe ser puente emocional — no decorado — sosteniendo votos, miradas y momentos simbólicos.",
        "La excelencia está en lo imperceptible: dinámica suave, fraseo cuidado y lectura precisa del ambiente."
      ]
    },

    aestheticDiagnosis: {
      A: "Su boda necesita coherencia visual y precisión en cada transición. La música no debe irrumpir: debe elevar con control, refinamiento y estructura. En este perfil, la improvisación sin dirección suele sentirse “fuera de tono”.",
      B: "Su boda necesita fluidez, naturalidad y sensibilidad sonora. La música debe integrarse sin imponerse. El desafío es sostener emoción con elegancia, sin sobreproducir.",
      C: "Su boda requiere narrativa. No alcanza con canciones correctas: hay que diseñar momentos. La música debe acompañar el concepto general y aportar identidad.",
      D: "Su boda demanda energía estratégica. La música debe activar participación sin perder clase. La clave está en la progresión y el timing.",
      E: "Su boda exige sensibilidad y profundidad. La música debe funcionar como puente emocional. El silencio bien usado será tan importante como las notas."
    },

    secondaryInfluence: {
      A: {
        B: "El matiz Románticos Naturales suaviza la formalidad: la emoción debe sentirse auténtica, no solo impecable. Conviene elegir piezas con calidez, sin perder estructura.",
        C: "El matiz Creativos Vanguardistas sugiere una ruptura controlada: un momento distintivo con estética cuidada. Ideal para un “wow” elegante, no estridente.",
        D: "El matiz Sociales Festivos indica que la celebración importa: conviene diseñar una transición a energía alta sin perder la línea estética.",
        E: "El matiz Íntimos Emocionales añade profundidad: algunos momentos piden silencio y sensibilidad extrema, sin solemnidad excesiva."
      },
      B: {
        A: "El matiz Clásicos Elegantes aporta estructura: conviene ordenar entradas y cierres con piezas ancla para que la naturalidad no se vuelva dispersa.",
        C: "El matiz Creativos Vanguardistas permite un detalle con firma: un arreglo especial sutil puede elevar sin perder autenticidad.",
        D: "El matiz Sociales Festivos sugiere una progresión más marcada hacia celebración: la música debe crecer con elegancia.",
        E: "El matiz Íntimos Emocionales profundiza lo personal: conviene priorizar canciones con historia y dinámica suave."
      },
      C: {
        A: "El matiz Clásicos Elegantes aporta disciplina estética: la creatividad debe sostener coherencia y no convertirse en mezcla arbitraria.",
        B: "El matiz Románticos Naturales suaviza lo editorial: conviene equilibrar concepto con emoción orgánica.",
        D: "El matiz Sociales Festivos pide impacto social: diseñar un momento que el invitado recuerde sin que parezca show.",
        E: "El matiz Íntimos Emocionales sugiere profundidad: el concepto debe tener alma, no solo estética."
      },
      D: {
        A: "El matiz Clásicos Elegantes pide orden: la energía debe estar coreografiada, con transiciones limpias.",
        B: "El matiz Románticos Naturales aporta calidez: conviene evitar lo excesivo y mantener cercanía emocional.",
        C: "El matiz Creativos Vanguardistas suma diferenciación: un giro musical inesperado puede convertirse en sello memorable.",
        E: "El matiz Íntimos Emocionales agrega significado: además de energía, habrá 1–2 momentos que piden sensibilidad real."
      },
      E: {
        A: "El matiz Clásicos Elegantes aporta estructura: conviene diseñar entradas y momentos simbólicos con piezas ancla refinadas.",
        B: "El matiz Románticos Naturales suma calidez: mantener fluidez y no sobrecargar el ambiente emocional.",
        C: "El matiz Creativos Vanguardistas permite un detalle distintivo: un arreglo único, breve y elegante puede ser perfecto.",
        D: "El matiz Sociales Festivos sugiere expansión: aunque íntimo, conviene planificar una subida de energía progresiva."
      }
    },

    intensityImplications: {
      M1: [
        "Este nivel pide presencia refinada: la música acompaña y sostiene sin competir con conversaciones o emociones.",
        "La excelencia está en la mezcla: volumen calibrado, tempos suaves, arreglos que respiren.",
        "Ideal cuando lo importante es atmósfera y coherencia emocional."
      ],
      M2: [
        "Este nivel indica música con intención: no es fondo, pero tampoco espectáculo. Es conducción estética.",
        "Requiere coordinación con timing real y momentos definidos (entradas, clímax, cierres).",
        "Ideal cuando quieren elegancia con dirección musical clara."
      ],
      M3: [
        "Este nivel exige diseño escénico: intervenciones breves que generen reacción sin perder estética.",
        "La clave es la sutileza estratégica: impacto con control, no exceso.",
        "Ideal cuando quieren un sello memorable cuidadosamente integrado."
      ]
    },

    strategicRisks: {
      M1: [
        "Volumen mal calibrado: lo sutil se arruina si invade.",
        "Repertorio demasiado dramático: puede endurecer la atmósfera.",
        "Transiciones sin diseño: se siente “corte” entre momentos."
      ],
      M2: [
        "Falta de coordinación con el timing real: entradas sin ancla musical.",
        "Arreglos sin identidad: suena correcto, pero no premium.",
        "Momentos importantes sin estructura: el evento pierde narrativa."
      ],
      M3: [
        "Exceso de show: impacto sin estética se siente desalineado.",
        "Sorpresa mal sincronizada: el momento se desperdicia.",
        "Intervención que compite con la pareja: el foco se desplaza."
      ]
    }
  };

  function escapeHtml(str){
    return String(str)
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;")
      .replace(/'/g,"&#039;");
  }

  function investmentBlock(intensity){
    if (intensity === "M1") return "Las parejas con su perfil priorizan sensibilidad, coherencia y una personalización moderada.";
    if (intensity === "M2") return "Las parejas con su perfil invierten estratégicamente en arreglos personalizados y coordinación musical.";
    return "Las parejas con su perfil suelen priorizar momentos sorpresa, arreglos exclusivos y elementos diferenciales.";
  }

  function getSetlistTeasers_(primaryKey, intensity, max = 2){
    const sl = setlists[primaryKey];
    const addOn = intensityAddOns[intensity];
    const picks = [];
    if (sl?.moments?.[0]?.songs?.[0]) picks.push(sl.moments[0].songs[0]);
    if (picks.length < max && addOn?.add?.[0]) picks.push(addOn.add[0]);
    else if (picks.length < max && sl?.moments?.[1]?.songs?.[0]) picks.push(sl.moments[1].songs[0]);
    return picks.slice(0, max);
  }

  function renderSetlistHTML_(primaryKey, intensity){
    const sl = setlists[primaryKey];
    const addOn = intensityAddOns[intensity];
    if (!sl) return `<p class="muted">No encontramos setlist para este perfil.</p>`;

    const momentsHtml = sl.moments.map(m => {
      const items = m.songs.map(s => `<li>${escapeHtml(s)}</li>`).join("");
      return `
        <div class="result-box" style="margin-top:12px;">
          <h4>${escapeHtml(m.name)}</h4>
          <ul>${items}</ul>
        </div>
      `;
    }).join("");

    const addOnHtml = addOn ? `
      <div class="gold-card" style="margin-top:14px;">
        <div class="gold-title">${escapeHtml(addOn.title)}</div>
        <div class="gold-text">${escapeHtml(addOn.note)}</div>
        <hr/>
        <h4 style="margin:0 0 8px;">+3 temas sugeridos para tu intensidad</h4>
        <ul>${addOn.add.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
      </div>
    ` : "";

    return `
      <p class="muted">${escapeHtml(sl.title)}</p>
      ${momentsHtml}
      ${addOnHtml}
      <p class="fineprint">*El setlist es una guía. Se ajusta a timing real y canciones significativas de la pareja.</p>
    `;
  }

  // ---------- Consultoría: helpers ----------
  function consultDeepDiveHTML(primaryKey){
    const bullets = consult.deepDive[primaryKey] || [];
    return `
      <h3>🖋 Lectura Profunda del Arquetipo</h3>
      <ul>${bullets.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
    `;
  }

  function consultSecondaryInfluence(primaryKey, secondaryKey){
    if (!secondaryKey || primaryKey === secondaryKey) {
      return "El matiz secundario acompaña la misma dirección estética del arquetipo principal, reforzando coherencia y enfoque.";
    }
    const map = consult.secondaryInfluence[primaryKey] || {};
    return map[secondaryKey] || "El matiz secundario aporta una capa complementaria que conviene traducir en 1–2 decisiones musicales concretas.";
  }

  function consultIntensityImplicationsHTML(intensityKey){
    const lines = consult.intensityImplications[intensityKey] || [];
    return `
      <h3>🎶 Implicancias de su Nivel de Intensidad</h3>
      <ul>${lines.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
    `;
  }

  function consultVariablesImpactHTML({musicImportance, invitados, venue, planningVibeLabel, curationStyleLabel}){
    const parts = [];

    const mi = Number(musicImportance);
    if (Number.isFinite(mi)){
      if (mi >= 8) parts.push(`🎵 Importancia música: ${mi}/10 — la música será uno de los pilares del evento; conviene diseñar estructura y transiciones.`);
      else if (mi >= 5) parts.push(`🎵 Importancia música: ${mi}/10 — la música debe acompañar con intención y claridad en momentos clave.`);
      else parts.push(`🎵 Importancia música: ${mi}/10 — conviene priorizar atmósfera y coherencia sin sobreproducir.`);
    }

    if (invitados){
      if (invitados.includes("Más de 250")) parts.push(`👥 Invitados: ${escapeHtml(invitados)} — se recomienda especial atención a proyección sonora y timing para entradas y cambios de clima.`);
      else if (invitados.includes("150")) parts.push(`👥 Invitados: ${escapeHtml(invitados)} — conviene asegurar estructura musical clara para sostener el ritmo del evento.`);
      else if (invitados.includes("Menos")) parts.push(`👥 Invitados: ${escapeHtml(invitados)} — formato ideal para detalles íntimos y dinámica cuidada.`);
      else parts.push(`👥 Invitados: ${escapeHtml(invitados)} — calibrar energía y transiciones según flujo real.`);
    }

    if (venue && venue.trim()) parts.push(`📍 Venue: ${escapeHtml(venue.trim())} — el espacio condiciona acústica y estilo de presencia musical; conviene ajustar repertorio y dinámica al entorno.`);

    if (planningVibeLabel) parts.push(`🧩 Planificación: ${escapeHtml(planningVibeLabel)} — esto orienta cuánto conviene estructurar decisiones y cuánta flexibilidad dejar.`);
    if (curationStyleLabel) parts.push(`🎼 Selección: ${escapeHtml(curationStyleLabel)} — define el método más eficiente para curar canciones sin fricción.`);

    if (!parts.length) return `<p class="muted">No se cargaron variables adicionales. Podés sumar importancia música, invitados o venue para enriquecer el diagnóstico.</p>`;

    return `
      <h3>📊 Variables que Impactan su Diseño Musical</h3>
      <ul>${parts.map(x => `<li>${x}</li>`).join("")}</ul>
    `;
  }

  function consultAestheticDiagnosisHTML(primaryKey){
    return `
      <h3>🖋 Diagnóstico Estético del Evento</h3>
      <p>${escapeHtml(consult.aestheticDiagnosis[primaryKey] || "")}</p>
    `;
  }

  function consultRisksHTML(intensityKey){
    const risks = consult.strategicRisks[intensityKey] || [];
    return `
      <h3>⚖ Consideraciones Estratégicas</h3>
      <ul>${risks.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
    `;
  }

  function consultStrategyRecommendation(primaryKey, intensityKey, invitados){
    // Texto elegante combinando arquetipo + intensidad + invitados
    const baseByPrimary = {
      A: "Recomendamos un diseño musical estructurado en capas: piezas ancla para entradas, desarrollo refinado y transiciones limpias.",
      B: "Recomendamos una curaduría que privilegie fluidez: melodías cálidas, dinámica suave y cambios casi imperceptibles entre momentos.",
      C: "Recomendamos diseñar 1–2 momentos con firma: arreglos curados, giros estéticos y narrativa musical alineada al concepto.",
      D: "Recomendamos una progresión estratégica: empezar elegante, crecer con intención y activar energía sin perder estética.",
      E: "Recomendamos un diseño emocional: piezas íntimas para ceremonia y transiciones suaves que sostengan significado."
    };

    const intensityAdd = {
      M1: "La clave será calibrar presencia: atmósfera impecable, volumen controlado, y repertorio que respire.",
      M2: "La clave será coordinar timing real: entradas, clímax y cierres con precisión para que la música conduzca sin invadir.",
      M3: "La clave será una intervención breve y perfectamente integrada: impacto elegante, sin exceso."
    };

    let guestsNote = "";
    if (invitados){
      if (invitados.includes("Más de 250")) guestsNote = "Dada la escala, recomendamos especial atención a proyección sonora y a la claridad de momentos ancla.";
      else if (invitados.includes("150")) guestsNote = "Por cantidad de invitados, conviene sostener una estructura clara para que el evento no pierda narrativa.";
      else if (invitados.includes("Menos")) guestsNote = "Por formato íntimo, se puede trabajar matices finos y dinámicas suaves con gran efectividad.";
    }

    const text = [baseByPrimary[primaryKey] || "", intensityAdd[intensityKey] || "", guestsNote].filter(Boolean).join(" ");
    return `
      <h3>🎼 Estrategia Musical Recomendada</h3>
      <p>${escapeHtml(text)}</p>
    `;
  }

  function consultProductionLevel(intensityKey){
    const map = {
      M1: "Producción íntima y refinada. Enfoque en textura, armonía y atmósfera. El valor está en la sutileza bien ejecutada.",
      M2: "Producción estratégica con arreglos personalizados y coordinación previa con planner. Recomendado definir piezas ancla y timing.",
      M3: "Producción con intervención diseñada. Ensayo previo recomendado para garantizar impacto sin exageración y coherencia estética total."
    };
    return `
      <h3>💎 Nivel de Producción Ideal</h3>
      <p>${escapeHtml(map[intensityKey] || "")}</p>
    `;
  }

  function consultNextStep(primaryKey, intensityKey){
    // Elegante y accionable (sin hablar de precio)
    const emphasis = {
      A: "definir entradas y transiciones con precisión",
      B: "curar repertorio con fluidez y calidez",
      C: "diseñar 1–2 momentos con identidad",
      D: "marcar progresión hacia celebración",
      E: "priorizar momentos simbólicos con sensibilidad"
    };
    const intensityEmphasis = {
      M1: "ajustar dinámica y volumen con criterio",
      M2: "coordinar timing real y piezas ancla",
      M3: "planificar intervención WOW con estética"
    };

    return `
      <h3>📌 Próximo Paso Sugerido</h3>
      <p>${escapeHtml(
        `Sugerimos avanzar con una reunión de curaduría musical para ${emphasis[primaryKey] || "definir estructura musical"} y ${intensityEmphasis[intensityKey] || "alinear intensidad"}. `
        + `Con eso, el resultado queda perfectamente adaptado al flujo real del evento y a sus canciones significativas.`
      )}</p>
    `;
  }

  return {
    archetypes,
    musicModules,
    setlists,
    intensityAddOns,
    escapeHtml,
    investmentBlock,
    getSetlistTeasers_,
    renderSetlistHTML_,

    // consultoría exportada
    consultDeepDiveHTML,
    consultSecondaryInfluence,
    consultIntensityImplicationsHTML,
    consultVariablesImpactHTML,
    consultAestheticDiagnosisHTML,
    consultRisksHTML,
    consultStrategyRecommendation,
    consultProductionLevel,
    consultNextStep
  };
})();
