// === EINSTELLUNGEN ===
const ENDPOINT = 'HIER_APPS_SCRIPT_URL_EINTRAGEN'; // siehe apps-script.gs
const DEADLINE = new Date('2027-04-30T23:59:00+02:00');

// Anmeldeformular
const f=document.getElementById('rsvp');
if(f){
  const zu=f.status[0].checked,abs=()=>f.begleitung.disabled=f.status.value==='Absage';
  f.status.forEach?.(r=>r.onchange=abs);[...f.querySelectorAll('[name=status]')].forEach(r=>r.onchange=abs);
  if(new Date()>DEADLINE){f.querySelector('button').disabled=true;document.getElementById('msg').textContent='Die Anmeldung ist leider beendet.'}
  f.onsubmit=async e=>{
    e.preventDefault();
    if(ENDPOINT.startsWith('HIER')){alert('Anmeldung noch nicht eingerichtet (ENDPOINT in main.js).');return}
    const btn=f.querySelector('button');btn.disabled=true;
    try{await fetch(ENDPOINT,{method:'POST',mode:'no-cors',body:new URLSearchParams(new FormData(f))});location.href='danke.html'}
    catch{btn.disabled=false;document.getElementById('msg').textContent='Senden fehlgeschlagen. Bitte versuche es erneut.'}
  };
}

// Hintergrundbilder und Galerie aus config.js
const C = window.CONFIG || {};
document.querySelectorAll('[data-bg]').forEach(el => {
  const k = (C.hintergruende || {})[el.dataset.bg];
  if (!k) return;
  if (k.bild) el.style.setProperty('--bg', `url("${k.bild}")`);
  if (k.abdunkeln) el.style.setProperty('--ov', `linear-gradient(rgba(0,0,0,${k.abdunkeln}),rgba(0,0,0,${k.abdunkeln}))`);
});
const gal = document.getElementById('galerie');
if (gal) (C.galerie || []).forEach(b => {
  const src = typeof b === 'string' ? b : b.bild;
  if (!src) return;
  const a = document.createElement('a'), i = document.createElement('img');
  a.href = src; a.target = '_blank'; a.rel = 'noopener';
  i.src = src; i.alt = (b && b.text) || 'Foto'; i.loading = 'lazy';
  i.onerror = () => a.remove();
  a.appendChild(i); gal.appendChild(a);
});

// Microsoft Forms: wenn in config.js ein Link bei formsUrl steht, wird er statt des eigenen Formulars angezeigt
const fr = document.getElementById('forms');
if (C.formsUrl && fr) { fr.src = C.formsUrl; fr.hidden = false; document.getElementById('rsvp')?.remove(); }
