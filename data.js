// data.js
// Reutiliza exactamente la data del test (arquetipos, módulos, setlists, add-ons)

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

  return {
    archetypes,
    musicModules,
    setlists,
    intensityAddOns,
    escapeHtml,
    investmentBlock,
    getSetlistTeasers_,
    renderSetlistHTML_
  };
})();
