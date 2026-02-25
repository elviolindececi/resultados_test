// app.js
const WHATSAPP_BASE = "https://wa.me/595985689454";
const INSTAGRAM_URL = "https://www.instagram.com/elviolindececi/";
const $ = (sel) => document.querySelector(sel);

const {
  archetypes,
  musicModules,
  escapeHtml,
  investmentBlock,
  getSetlistTeasers_,
  renderSetlistHTML_,

  consultDeepDiveHTML,
  consultSecondaryInfluence,
  consultIntensityImplicationsHTML,
  consultVariablesImpactHTML,
  consultAestheticDiagnosisHTML,
  consultRisksHTML,
  consultStrategyRecommendation,
  consultProductionLevel,
  consultNextStep
} = window.CECI_DATA;

function show(id){
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.add("hidden");
    s.setAttribute("hidden","hidden");
  });
  const el = document.querySelector(id);
  el.classList.remove("hidden");
  el.removeAttribute("hidden");
  window.scrollTo({ top:0, behavior:"smooth" });
}

function clampInt(n, min, max, fallback){
  const x = Number(n);
  if (!Number.isFinite(x)) return fallback;
  return Math.max(min, Math.min(max, Math.round(x)));
}

function validKey(val, allowed){
  return allowed.includes(val) ? val : "";
}

function buildSelectOptions(selectEl, options, placeholder = "Elegí una opción"){
  selectEl.innerHTML = "";
  const opt0 = document.createElement("option");
  opt0.value = "";
  opt0.disabled = true;
  opt0.selected = true;
  opt0.textContent = placeholder;
  selectEl.appendChild(opt0);

  options.forEach(({value, label}) => {
    const o = document.createElement("option");
    o.value = value;
    o.textContent = label;
    selectEl.appendChild(o);
  });
}

function getQueryParams(){
  const p = new URLSearchParams(window.location.search);
  return {
    p: p.get("p") || "",
    s: p.get("s") || "",
    i: p.get("i") || "",
    mi: p.get("mi") || ""
  };
}

function setQueryParams({p, s, i, mi}){
  const url = new URL(window.location.href);
  url.searchParams.set("p", p);
  url.searchParams.set("s", s);
  url.searchParams.set("i", i);
  url.searchParams.set("mi", String(mi));
  return url.toString();
}

function renderResult(state){
  const {
    primaryKey,
    secondaryKey,
    intensityKey,
    musicImportance,
    invitados,
    venue,
    planningVibeLabel,
    curationStyleLabel
  } = state;

  const a1 = archetypes[primaryKey];
  const a2 = archetypes[secondaryKey];
  const m = musicModules[intensityKey];

  const resultTitle = $("#result-title");
  const resultSubtitle = $("#result-subtitle");
  const resultBrief = $("#result-brief");
  const resultDetails = $("#result-details");
  const btnToggleDetails = $("#btn-toggle-details");
  const btnWA = $("#btn-wa");

  const teasers = getSetlistTeasers_(primaryKey, intensityKey, 2);

  const planningText = planningVibeLabel ? ` · 🧩 Planificación: ${planningVibeLabel}` : "";
  const curationText = curationStyleLabel ? ` · 🎼 Selección: ${curationStyleLabel}` : "";

  // Título / subtítulo (como el test)
  resultTitle.textContent = `Resultado: ${a1.name}`;
  resultSubtitle.textContent =
    `Intensidad musical: ${m.name} · Importancia música: ${musicImportance}/10`;

  // BRIEF (igual al test + datos)
  resultBrief.innerHTML = `
    <h3>${escapeHtml(a1.tagline)}</h3>
    <p>${escapeHtml(a1.brief)}</p>

    <p class="muted" style="margin-top:8px;">
      📍 Lugar: ${escapeHtml(venue || "—")} · 👥 Invitados: ${escapeHtml(invitados || "—")}
      ${planningText}${curationText}
    </p>

    <hr/>
    <h3>🎻 Estilo musical: ${escapeHtml(m.name)}</h3>
    <p>${escapeHtml(m.brief)}</p>

    <hr/>
    <h3>🎵 Teaser de setlist (ideal para ustedes)</h3>
    <ul>${teasers.map(t => `<li>${escapeHtml(t)}</li>`).join("")}</ul>
    <p class="muted" style="margin-top:10px;">En el análisis completo está el setlist por momentos (ceremonia, cóctel y wow).</p>
  `;

  // Mantengo el bloque “Índice de Diseño Emocional” (misma estética)
  const indice = (primaryKey === "A") ? 92 : (primaryKey === "B") ? 86 : 78;
  const gold = `
    <div class="gold-card">
      <div class="gold-title">Índice de Diseño Emocional</div>
      <div class="gold-percentage">${indice}%</div>
      <div class="gold-text">
        Su perfil muestra una fuerte orientación hacia experiencias musicales diseñadas con intención.
        <br><br>
        Las parejas con este nivel de afinidad suelen planificar con anticipación para garantizar coherencia estética y disponibilidad.
        <br><br>
        <strong>Recomendamos agendar con tiempo.</strong>
      </div>
    </div>
  `;

  // Curación (igual al test)
  const curationBlock = curationStyleLabel ? `
    <hr/>
    <h3>🎼 Cómo les conviene elegir las canciones</h3>
    <p>${
      curationStyleLabel.includes("cero estrés")
        ? "Les conviene un set completo propuesto por Ceci para aprobar en un solo paso: rápido, hermoso y sin carga mental."
        : curationStyleLabel.includes("Mitad")
          ? "Les conviene un proceso mixto: Ceci propone 2–3 opciones por momento y ustedes eligen sin perder tiempo."
          : "Les conviene una selección más curada: Ceci guía el criterio y ustedes eligen con detalle para que todo sea 100% ustedes."
    }</p>
  ` : "";

  // NUEVO: bloques consultivos (elegantes, desarrollados)
  const diagnosis = consultAestheticDiagnosisHTML(primaryKey);
  const deepDive = consultDeepDiveHTML(primaryKey);
  const secInfluence = `
    <h3>✨ Influencia del Arquetipo Secundario</h3>
    <p>${escapeHtml(consultSecondaryInfluence(primaryKey, secondaryKey))}</p>
  `;
  const intensityImp = consultIntensityImplicationsHTML(intensityKey);

  const variablesImpact = consultVariablesImpactHTML({
    musicImportance,
    invitados,
    venue,
    planningVibeLabel,
    curationStyleLabel
  });

  const risks = consultRisksHTML(intensityKey);

  const strategy = consultStrategyRecommendation(primaryKey, intensityKey, invitados);
  const production = consultProductionLevel(intensityKey);
  const nextStep = consultNextStep(primaryKey, intensityKey);

  // DETAILS (incluye todo lo del test + desarrollo)
  resultDetails.innerHTML = `
    ${diagnosis}

    <hr/>
    <h3>🔎 Lo que esto dice sobre ustedes</h3>
    <p>${escapeHtml(a1.full)}</p>

    <hr/>
    ${deepDive}

    <hr/>
    <h3>✨ Matiz secundario</h3>
    <p><strong>${escapeHtml(a2.name)}</strong> — ${escapeHtml(a2.tagline)}</p>

    <hr/>
    ${secInfluence}

    <hr/>
    <h3>🎶 Cómo debería vivirse su música</h3>
    <p>${escapeHtml(m.full)}</p>

    <hr/>
    ${intensityImp}

    <hr/>
    ${variablesImpact}

    ${gold}

    <hr/>
    ${risks}

    <hr/>
    ${strategy}

    <hr/>
    <h3>💎 Perfil de inversión</h3>
    <p>${escapeHtml(investmentBlock(intensityKey))}</p>

    ${curationBlock}

    <hr/>
    ${production}

    <hr/>
    ${nextStep}

    <hr/>
    <h3>🎼 Set recomendado (formato)</h3>
    <ul>${a1.set.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>

    <hr/>
    <h3>🎵 Setlist sugerido (canciones ideales)</h3>
    ${renderSetlistHTML_(primaryKey, intensityKey)}
  `;

  resultDetails.hidden = true;
  resultDetails.classList.add("hidden");
  btnToggleDetails.textContent = "Ver análisis completo";

  // Texto WhatsApp elegante
  const waText =
    `Hola Ceci! En reunión trabajamos este perfil: ${a1.name} (secundario: ${a2.name}). ` +
    `Intensidad: ${m.name}. Importancia música: ${musicImportance}/10. ` +
    `Invitados: ${invitados || "-"} · Lugar: ${venue || "-"}. ` +
    `${planningVibeLabel ? "Planificación: " + planningVibeLabel + ". " : ""}` +
    `${curationStyleLabel ? "Selección: " + curationStyleLabel + ". " : ""}` +
    `Queremos una propuesta personalizada 🙌`;

  btnWA.setAttribute("href", `${WHATSAPP_BASE}?text=${encodeURIComponent(waText)}`);

  return waText;
}

function init(){
  const form = $("#dash-form");
  const primary = $("#primary");
  const secondary = $("#secondary");
  const intensity = $("#intensity");
  const musicImportance = $("#musicImportance");
  const invitados = $("#invitados");
  const venue = $("#venue");
  const planningVibe = $("#planningVibe");
  const curationStyle = $("#curationStyle");

  const btnIG = $("#btn-ig");
  const btnBack = $("#btn-back");
  const btnToggleDetails = $("#btn-toggle-details");
  const resultDetails = $("#result-details");
  const btnCopySummary = $("#btn-copy-summary");

  const btnGenerateLink = $("#btn-generate-link");
  const shareBox = $("#share-box");
  const shareUrl = $("#share-url");
  const btnCopyLink = $("#btn-copy-link");

  if (btnIG) btnIG.setAttribute("href", INSTAGRAM_URL);

  buildSelectOptions(primary, [
    { value:"A", label: archetypes.A.name },
    { value:"B", label: archetypes.B.name },
    { value:"C", label: archetypes.C.name },
    { value:"D", label: archetypes.D.name },
    { value:"E", label: archetypes.E.name },
  ]);

  buildSelectOptions(secondary, [
    { value:"A", label: archetypes.A.name },
    { value:"B", label: archetypes.B.name },
    { value:"C", label: archetypes.C.name },
    { value:"D", label: archetypes.D.name },
    { value:"E", label: archetypes.E.name },
  ]);

  buildSelectOptions(intensity, [
    { value:"M1", label: `${musicModules.M1.name} (M1)` },
    { value:"M2", label: `${musicModules.M2.name} (M2)` },
    { value:"M3", label: `${musicModules.M3.name} (M3)` },
  ]);

  // Load from query params if present
  const qp = getQueryParams();
  const p = validKey(qp.p, ["A","B","C","D","E"]);
  const s = validKey(qp.s, ["A","B","C","D","E"]);
  const i = validKey(qp.i, ["M1","M2","M3"]);
  const mi = clampInt(qp.mi, 0, 10, 5);

  if (p) primary.value = p;
  if (s) secondary.value = s;
  if (i) intensity.value = i;
  musicImportance.value = String(mi);

  let lastSummaryText = "";

  if (p && s && i){
    lastSummaryText = renderResult({
      primaryKey: p,
      secondaryKey: s,
      intensityKey: i,
      musicImportance: mi,
      invitados: invitados.value || "",
      venue: venue.value || "",
      planningVibeLabel: planningVibe.value || "",
      curationStyleLabel: curationStyle.value || ""
    });
    show("#screen-result");
  } else {
    show("#screen-input");
  }

  // Submit -> render
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const pk = primary.value;
    const sk = secondary.value;
    const ik = intensity.value;

    if (!pk || !sk || !ik){
      alert("Completá arquetipo principal, secundario e intensidad.");
      return;
    }

    const mi2 = clampInt(musicImportance.value, 0, 10, 5);

    lastSummaryText = renderResult({
      primaryKey: pk,
      secondaryKey: sk,
      intensityKey: ik,
      musicImportance: mi2,
      invitados: invitados.value || "",
      venue: venue.value.trim(),
      planningVibeLabel: planningVibe.value || "",
      curationStyleLabel: curationStyle.value || ""
    });

    const newUrl = setQueryParams({ p: pk, s: sk, i: ik, mi: mi2 });
    window.history.replaceState({}, "", newUrl);

    show("#screen-result");
  });

  // Toggle details
  btnToggleDetails.addEventListener("click", () => {
    const willShow = resultDetails.classList.contains("hidden") || resultDetails.hidden === true;
    resultDetails.hidden = !willShow;
    resultDetails.classList.toggle("hidden", !willShow);
    btnToggleDetails.textContent = willShow ? "Ocultar análisis completo" : "Ver análisis completo";
  });

  // Back
  btnBack.addEventListener("click", () => show("#screen-input"));

  // Copy summary
  btnCopySummary.addEventListener("click", async () => {
    try{
      await navigator.clipboard.writeText(lastSummaryText || "");
      btnCopySummary.textContent = "¡Copiado!";
      setTimeout(() => (btnCopySummary.textContent = "Copiar resumen"), 900);
    } catch {
      alert("No se pudo copiar. Copiá manualmente desde WhatsApp o seleccionando el texto.");
    }
  });

  // Share link generator
  btnGenerateLink.addEventListener("click", () => {
    const pk = primary.value;
    const sk = secondary.value;
    const ik = intensity.value;
    const mi2 = clampInt(musicImportance.value, 0, 10, 5);

    if (!pk || !sk || !ik){
      alert("Primero seleccioná arquetipo principal, secundario e intensidad.");
      return;
    }

    const url = setQueryParams({ p: pk, s: sk, i: ik, mi: mi2 });
    shareUrl.value = url;

    shareBox.hidden = false;
    shareBox.classList.remove("hidden");
  });

  btnCopyLink.addEventListener("click", async () => {
    try{
      await navigator.clipboard.writeText(shareUrl.value || "");
      btnCopyLink.textContent = "¡Copiado!";
      setTimeout(() => (btnCopyLink.textContent = "Copiar"), 900);
    } catch {
      alert("No se pudo copiar el link. Copialo manualmente.");
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
