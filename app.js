// ═══════════════════════════════════════════════
// MAHABHARATA SITE — app.js  v4
// Images + Fixed Family Tree + All Features
// ═══════════════════════════════════════════════

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// ── MOBILE NAV ──
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(l =>
  l.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'))
);

// ── SECTION HIGHLIGHT ──
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting)
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
  });
}, { rootMargin: '-40% 0px -55% 0px' }).observe && sections.forEach(s =>
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
    });
  }, { rootMargin: '-40% 0px -55% 0px' }).observe(s)
);

// ══════════════════════════════════════════════
// IMAGE HELPER — safe fallback if image fails
// ══════════════════════════════════════════════
function imgTag(src, alt, cls='') {
  if (!src) return '';
  return `<img src="${src}" alt="${alt}" class="${cls}" 
    onerror="this.style.display='none';this.nextElementSibling&&(this.nextElementSibling.style.display='flex')"
    loading="lazy"/>`;
}

function charImgOrEmoji(id, emoji, name, cls='char-photo') {
  const src = CHAR_IMAGES[id] || '';
  if (!src) return `<div class="${cls} emoji-fallback"><span>${emoji}</span></div>`;
  return `
    <div class="${cls}-wrap">
      ${imgTag(src, name, cls)}
      <div class="${cls} emoji-fallback" style="display:none"><span>${emoji}</span></div>
    </div>`;
}

// ══════════════════════════════════════════════
// ABOUT
// ══════════════════════════════════════════════
function renderAbout() {
  const g = document.getElementById('aboutGrid');
  if (!g) return;
  g.innerHTML = ABOUT_DATA.map(d => `
    <div class="about-card">
      <div class="about-card-icon">${d.icon}</div>
      <h3>${d.title}</h3>
      <div class="about-card-body">${d.content}</div>
    </div>`).join('');
}

// ══════════════════════════════════════════════
// GLOSSARY
// ══════════════════════════════════════════════
function renderGlossary() {
  const g = document.getElementById('glossaryGrid');
  if (!g) return;
  g.innerHTML = GLOSSARY.map((gl, i) => `
    <div class="gloss-card">
      <div class="gloss-header">
        <span class="gloss-emoji">${gl.emoji}</span>
        <span class="gloss-term">${gl.term}</span>
      </div>
      ${gl.sanskrit !== '—' ? `<div class="gloss-skt">${gl.sanskrit}</div>` : ''}
      <span class="gloss-cat">${gl.cat}</span>
      <div class="gloss-simple">${gl.simple}</div>
      <div class="gloss-tabs">
        <button class="gloss-tab active" onclick="showGloss(${i},'full',this)">Full</button>
        <button class="gloss-tab" onclick="showGloss(${i},'kid',this)">👶 Kids</button>
      </div>
      <div class="gloss-content" id="gf-${i}">${gl.full}</div>
      <div class="gloss-kid" id="gk-${i}">${gl.kid}</div>
    </div>`).join('');
}

function showGloss(i, tab, btn) {
  btn.closest('.gloss-card').querySelectorAll('.gloss-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(`gf-${i}`).style.display = tab === 'full' ? 'block' : 'none';
  document.getElementById(`gk-${i}`).style.display = tab === 'kid' ? 'block' : 'none';
}

// ══════════════════════════════════════════════
// CHARACTERS — with images
// ══════════════════════════════════════════════
const GROUPS = ['all','pandava','kaurava','divine','sage','ancestor'];
const GROUP_LABELS = { all:'All', pandava:'Pandavas', kaurava:'Kauravas',
  divine:'Divine', sage:'Sages & Elders', ancestor:'Ancestors' };

function renderCharFilter() {
  const f = document.getElementById('charFilter');
  if (!f) return;
  f.innerHTML = GROUPS.map(g =>
    `<button class="filter-btn${g==='all'?' active':''}" data-filter="${g}">${GROUP_LABELS[g]}</button>`
  ).join('');
  f.querySelectorAll('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
    f.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderChars(btn.dataset.filter);
  }));
}

function renderChars(filter = 'all') {
  const grid = document.getElementById('charGrid');
  if (!grid) return;
  const list = filter === 'all' ? CHARACTERS : CHARACTERS.filter(c => c.group === filter);
  grid.innerHTML = list.map((c, i) => {
    const hasPic = !!CHAR_IMAGES[c.id];
    return `
    <div class="char-card ${c.group}" style="animation-delay:${i*0.04}s"
         onclick="openCharModal('${c.id}')" role="button" tabindex="0"
         onkeypress="if(event.key==='Enter')openCharModal('${c.id}')">
      <div class="char-img-area" style="border-color:${c.color}44">
        ${hasPic
          ? `<img src="${CHAR_IMAGES[c.id]}" alt="${c.name}" class="char-card-img"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
             <div class="char-card-emoji-fb" style="display:none;background:${c.color}22">${c.emoji}</div>`
          : `<div class="char-card-emoji-fb" style="background:${c.color}22">${c.emoji}</div>`
        }
        <div class="char-group-ribbon ${c.group}">${GROUP_LABELS[c.group]}</div>
      </div>
      <div class="char-card-body">
        <div class="char-sanskrit">${c.sanskrit}</div>
        <h3 class="char-name">${c.name}</h3>
        <div class="char-title-badge" style="color:${c.color}">${c.title}</div>
        <p class="char-desc">${c.shortDesc}</p>
        <button class="char-learn-btn" style="border-color:${c.color};color:${c.color}">View Profile →</button>
      </div>
    </div>`;
  }).join('');
}

function openCharModal(id) {
  const c = CHARACTERS.find(x => x.id === id);
  if (!c) return;
  const mc = document.getElementById('modalContent');
  const hasPic = !!CHAR_IMAGES[c.id];

  const kauravaDrw = c.special_kauravas ? `
    <div class="kauravas-toggle" onclick="toggleKauravaDrw(this)">
      ▼ Show all 100 Kauravas &amp; sister (hidden to save space)
    </div>
    <div class="kauravas-drawer" id="kaurava-drawer">
      <div class="kauravas-list">
        ${ALL_KAURAVAS.map(n => `<span class="kaurava-name">${n}</span>`).join('')}
      </div>
    </div>` : '';

  mc.innerHTML = `
    <div class="modal-hero" style="background:linear-gradient(135deg,${c.color}22,${c.color}44)">
      <div class="modal-img-area">
        ${hasPic
          ? `<img src="${CHAR_IMAGES[c.id]}" alt="${c.name}" class="modal-char-img"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
             <div class="modal-emoji-fb" style="display:none">${c.emoji}</div>`
          : `<div class="modal-emoji-fb">${c.emoji}</div>`
        }
      </div>
      <div class="modal-hero-text">
        <div class="modal-name">${c.name}</div>
        <div class="modal-sanskrit">${c.sanskrit}</div>
        <div class="modal-title-badge">${c.title}</div>
        <div class="modal-group-tag ${c.group}">${GROUP_LABELS[c.group]}</div>
      </div>
    </div>
    <div class="modal-body">
      <div class="modal-tabs">
        <button class="tab-btn active" onclick="switchTab(this,'mtab-full')">📖 Story</button>
        <button class="tab-btn" onclick="switchTab(this,'mtab-kids')">👶 Kids</button>
        <button class="tab-btn" onclick="switchTab(this,'mtab-facts')">⭐ Facts</button>
        <button class="tab-btn" onclick="switchTab(this,'mtab-family')">👪 Family</button>
      </div>
      <div class="tab-content active" id="mtab-full">
        ${c.fullDesc.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        <div class="char-significance">🕉️ <strong>Significance:</strong> ${c.significance}</div>
        ${kauravaDrw}
      </div>
      <div class="tab-content" id="mtab-kids">
        <div class="kids-box">
          <div class="kids-icon">${c.emoji}</div>
          <div class="kids-text">${c.kidFriendly}</div>
        </div>
      </div>
      <div class="tab-content" id="mtab-facts">
        <ul class="facts-list">${c.facts.map(f => `<li class="fact-item">⭐ ${f}</li>`).join('')}</ul>
      </div>
      <div class="tab-content" id="mtab-family">
        <div class="char-info-grid">
          <div class="info-item"><span class="info-label">Parents</span><span class="info-val">${c.parents}</span></div>
          <div class="info-item"><span class="info-label">Spouse</span><span class="info-val">${c.spouse}</span></div>
          <div class="info-item"><span class="info-label">Children</span><span class="info-val">${c.children}</span></div>
          <div class="info-item"><span class="info-label">Weapon</span><span class="info-val">${c.weapon}</span></div>
        </div>
      </div>
    </div>`;

  document.getElementById('charModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function switchTab(btn, tabId) {
  const body = btn.closest('.modal-body');
  body.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  body.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

function toggleKauravaDrw(btn) {
  const drw = document.getElementById('kaurava-drawer');
  drw.classList.toggle('open');
  btn.textContent = drw.classList.contains('open')
    ? '▲ Hide the 100 Kauravas list'
    : '▼ Show all 100 Kauravas & sister (hidden to save space)';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('charModal').addEventListener('click', e => {
  if (e.target === document.getElementById('charModal')) closeModal();
});
function closeModal() {
  document.getElementById('charModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ══════════════════════════════════════════════
// FAMILY TREE — Fully corrected & interactive
// ══════════════════════════════════════════════
// ERRORS FIXED:
// 1. Ganga married Shantanu — Bhishma is their son (NOT son of both wives)
// 2. Satyavati married Shantanu — Chitrāngada & Vichitravirya are their sons
// 3. Vyasa is Satyavati's son by Parashara (BEFORE marriage to Shantanu)
// 4. Dhritarashtra/Pandu/Vidura born via Vyasa + Niyoga (NOT direct sons of Vichitravirya)
// 5. Karna is Kunti's son (NOT Pandu's — he was born BEFORE the marriage)
// 6. Bhishma has NO children (lifelong celibacy vow) — clearly shown
// 7. Draupadi is NOT blood-related to Pandavas — shown as wife, not relative
// 8. Added Dushala (sister of Kauravas, wife of Jayadratha) — 100+1
// 9. Uttara (Virata's daughter) married Abhimanyu — shown
// 10. Parikshit correctly shown as Abhimanyu + Uttara's son
// ──────────────────────────────────────────────
function renderFamilyTree() {
  const container = document.getElementById('familyTree');
  if (!container) return;

  // Build a clickable node
  function N(id, overrideGroup) {
    const c = CHARACTERS.find(x => x.id === id);
    if (!c) return `<div class="fnode unknown"><div class="fn-name">${id}?</div></div>`;
    const grp = overrideGroup || c.group;
    const hasPic = !!CHAR_IMAGES[id];
    const imgHtml = hasPic
      ? `<img src="${CHAR_IMAGES[id]}" alt="${c.name}" class="fn-img"
           onerror="this.style.display='none';this.nextSibling.style.display='block'"/>
         <div class="fn-emoji" style="display:none">${c.emoji}</div>`
      : `<div class="fn-emoji">${c.emoji}</div>`;
    return `
      <div class="fnode ${grp}" onclick="openCharModal('${id}')"
           title="Click: ${c.name} — ${c.title}" role="button" tabindex="0"
           onkeypress="if(event.key==='Enter')openCharModal('${id}')">
        <div class="fn-img-wrap">${imgHtml}</div>
        <div class="fn-name">${c.name}</div>
        <div class="fn-sub">${c.title}</div>
      </div>`;
  }

  // Small connector label
  function label(txt) {
    return `<div class="tree-label">${txt}</div>`;
  }
  function vline(h=28) {
    return `<div class="tree-connector"><div style="width:2px;height:${h}px;background:var(--gold);margin:0 auto"></div></div>`;
  }
  function hbar(txt='') {
    return `<div class="tree-hbar"><div class="tree-hbar-line"></div>${txt?`<div class="tree-hbar-label">${txt}</div>`:''}<div class="tree-hbar-line"></div></div>`;
  }

  container.innerHTML = `
<div class="ftree">

<!-- ══════════════════════════════ -->
<!-- GENERATION 1: Shantanu's family -->
<!-- ══════════════════════════════ -->
<div class="tree-gen-label">Generation 1 — The Root Ancestors</div>
<div class="ftree-row">
  ${N('ganga')}
  ${label('married<br/>(1st wife)')}
  ${N('shantanu')}
  ${label('married<br/>(2nd wife)')}
  ${N('satyavati')}
  ${label('had secret son<br/>before marriage with')}
  ${N('vyasa')}
</div>

${vline(20)}
${hbar('Children of Shantanu')}
${vline(20)}

<!-- ══════════════════════════════ -->
<!-- GENERATION 2A: Shantanu's direct children -->
<!-- ══════════════════════════════ -->
<div class="tree-gen-label">Generation 2A — Children of Shantanu</div>
<div class="ftree-row">

  <div class="fnode-group">
    <div class="fnode-group-label" style="color:var(--sage)">By Ganga</div>
    ${N('bhishma')}
    <div class="fnode-note">⚠️ Took lifelong vow<br/>of celibacy — NO children</div>
  </div>

  <div class="tree-sibling-gap"></div>

  <div class="fnode-group">
    <div class="fnode-group-label" style="color:var(--ancestor)">By Satyavati</div>
    <div class="ftree-row" style="gap:.5rem">
      ${N('chitrāngada')}
      ${N('vichitravirya')}
    </div>
    <div class="fnode-note">Chitrāngada died in battle (no children).<br/>
    Vichitravirya died young of illness (no children).<br/>
    <strong>Wives: Ambika &amp; Ambalika</strong></div>
  </div>
</div>

${vline(20)}

<!-- ══════════════════════════════ -->
<!-- VYASA NIYOGA EXPLANATION -->
<!-- ══════════════════════════════ -->
<div class="tree-niyoga-box">
  <div class="tree-niyoga-icon">📜</div>
  <div>
    <strong>Niyoga (Ancient Custom):</strong> When Vichitravirya died without heirs, 
    Satyavati called her secret son <strong>Vyasa</strong> to continue the royal line. 
    Vyasa fathered children with Vichitravirya's widows:
    <br/>• <strong>Ambika</strong> (closed her eyes in fear) → son born <strong>blind = Dhritarashtra</strong>
    <br/>• <strong>Ambalika</strong> (turned pale in fear) → son born <strong>pale = Pandu</strong>  
    <br/>• <strong>A palace maid</strong> (served without fear) → born <strong>wise = Vidura</strong>
  </div>
</div>

${vline(20)}

<!-- ══════════════════════════════ -->
<!-- GENERATION 2B: Dhritarashtra / Pandu / Vidura -->
<!-- ══════════════════════════════ -->
<div class="tree-gen-label">Generation 2B — Sons by Vyasa (via Niyoga)</div>
<div class="ftree-row">

  <div class="fnode-group">
    <div class="fnode-group-label" style="color:var(--kaurava)">By Ambika (blind)</div>
    ${N('dhritarashtra')}
    ${label('+ wife')}
    ${N('gandhari')}
    <div class="fnode-note">Brother of Gandhari: <strong>Shakuni</strong> (manipulator)</div>
  </div>

  <div class="tree-sibling-gap"></div>

  <div class="fnode-group">
    <div class="fnode-group-label" style="color:var(--pandava)">By Ambalika (pale)</div>
    ${N('pandu')}
    <div class="ftree-row" style="gap:.4rem;margin-top:.3rem">
      <div style="text-align:center">${label('1st wife')}${N('kunti')}</div>
      <div style="text-align:center">${label('2nd wife')}${N('madri')}</div>
    </div>
    <div class="fnode-note">⚠️ Pandu cursed — cannot embrace wives.<br/>Children born via divine boons.</div>
  </div>

  <div class="tree-sibling-gap"></div>

  <div class="fnode-group">
    <div class="fnode-group-label" style="color:var(--sage)">By palace maid (wise)</div>
    ${N('vidura')}
    <div class="fnode-note">Wisest of the three brothers.<br/>Said to be an incarnation of Dharma.</div>
  </div>

</div>

${vline(20)}

<!-- ══════════════════════════════ -->
<!-- KARNA — Special case -->
<!-- ══════════════════════════════ -->
<div class="tree-karna-box">
  <div style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap">
    ${N('karna')}
    <div>
      <strong style="color:var(--gold)">☀️ Karna — The Secret Eldest Pandava</strong><br/>
      Born of <strong>Kunti</strong> (before her marriage to Pandu) and the <strong>Sun god Surya</strong>.<br/>
      Abandoned in a basket on the river. Raised by charioteer <strong>Adhiratha &amp; Radha</strong>.<br/>
      Fought for the Kauravas, but was biologically the <strong>eldest Pandava</strong>.
    </div>
  </div>
</div>

${vline(20)}
${hbar('Children of Pandu & Kunti/Madri — The Five Pandavas')}
${vline(20)}

<!-- ══════════════════════════════ -->
<!-- GENERATION 3A: The Five Pandavas -->
<!-- ══════════════════════════════ -->
<div class="tree-gen-label">Generation 3A — The Five Pandavas (sons via divine boons)</div>
<div class="fnode-note" style="text-align:center;margin-bottom:.75rem">
  By Kunti (using mantra of sage Durvasa): Yudhishthira (son of Dharma) · Bhima (son of Vayu) · Arjuna (son of Indra)<br/>
  By Madri (using Kunti's mantra): Nakula &amp; Sahadeva (sons of Ashwini Kumaras)
</div>
<div class="ftree-row">
  ${N('yudhishthira')} ${N('bhima')} ${N('arjuna')} ${N('nakula')} ${N('sahadeva')}
</div>

${vline(16)}
${label('All five Pandavas married')}
${vline(10)}

<div class="ftree-row">
  ${N('draupadi')}
  <div class="fnode-note" style="align-self:center">
    ← <strong>Draupadi</strong> (born from sacred fire, daughter of King Drupada)<br/>
    married all 5 Pandavas. Had one son from each = 5 Upapandavas<br/>
    (all killed by Ashwatthama after the war)
  </div>
</div>

<!-- ══════════════════════════════ -->
<!-- GENERATION 3B: The Kauravas -->
<!-- ══════════════════════════════ -->
${vline(20)}
${hbar('Children of Dhritarashtra & Gandhari — The Kauravas')}
${vline(20)}

<div class="tree-gen-label">Generation 3B — The 101 Kauravas (100 sons + 1 daughter)</div>
<div class="fnode-note" style="text-align:center;margin-bottom:.75rem">
  Born from 101 clay pots of ghee (Gandhari's boon from Vyasa). Eldest = Duryodhana. One daughter = Dushala (married Jayadratha, king of Sindhu).
</div>
<div class="ftree-row">
  ${N('duryodhana')} ${N('dushasana')} ${N('vikarna')}
  <div class="fnode" style="border:2px dashed var(--muted);min-width:100px;text-align:center;padding:.6rem">
    <div class="fn-emoji">⋯</div>
    <div class="fn-name">97 more brothers</div>
    <div class="fn-sub">+ Dushala (sister)<br/>wife of Jayadratha</div>
  </div>
</div>

<!-- ══════════════════════════════ -->
<!-- DIVINE CONNECTIONS -->
<!-- ══════════════════════════════ -->
${vline(20)}
${hbar('Divine Connections — Krishna & Subhadra')}
${vline(20)}

<div class="tree-gen-label">Divine Family — Krishna's connection to the Pandavas</div>
<div class="ftree-row">
  ${N('krishna')}
  ${label('sister →')}
  ${N('subhadra')}
  ${label('married →')}
  ${N('arjuna')}
</div>
<div class="fnode-note" style="text-align:center;margin:.5rem 0">
  Krishna &amp; Subhadra are children of Vasudeva &amp; Devaki (biological) / Nanda &amp; Yashoda (foster).<br/>
  Subhadra's marriage to Arjuna makes Krishna Arjuna's brother-in-law.
</div>

${vline(20)}

<!-- ══════════════════════════════ -->
<!-- GENERATION 4: Abhimanyu -->
<!-- ══════════════════════════════ -->
<div class="tree-gen-label">Generation 4 — Abhimanyu (son of Arjuna &amp; Subhadra)</div>
<div class="ftree-row">
  ${N('abhimanyu')}
  ${label('married →')}
  <div class="fnode pandava">
    <div class="fn-emoji">👰</div>
    <div class="fn-name">Uttara</div>
    <div class="fn-sub">Daughter of King Virata<br/>(the hiding-year king)</div>
  </div>
</div>
<div class="fnode-note" style="text-align:center;margin:.4rem 0">
  Abhimanyu died on Day 13 of the war at age 16.<br/>
  His son <strong>Parikshit</strong> was born after his death — saved by Krishna from Ashwatthama's Brahmastra.
</div>

${vline(20)}

<!-- ══════════════════════════════ -->
<!-- GENERATION 5: Parikshit -->
<!-- ══════════════════════════════ -->
<div class="tree-gen-label">Generation 5 — Parikshit (the heir)</div>
<div class="ftree-row">
  <div class="fnode pandava" style="border:3px solid var(--gold)">
    <div class="fn-emoji">👑</div>
    <div class="fn-name">Parikshit</div>
    <div class="fn-sub">Son of Abhimanyu &amp; Uttara<br/>Crowned king after the Pandavas left<br/><strong>First listener of the Mahabharata</strong></div>
  </div>
</div>

<!-- ══════════════════════════════ -->
<!-- KEY SAGES & ELDERS PANEL -->
<!-- ══════════════════════════════ -->
<div class="tree-elders-panel">
  <div class="tree-elders-title">🧙 Key Sages &amp; Elders — Click to explore</div>
  <div class="tree-elders-grid">
    ${['bhishma','drona','ashwatthama','vidura','sanjaya','kripa'].map(id => {
      const c = CHARACTERS.find(x => x.id === id);
      if (!c) return '';
      const hasPic = !!CHAR_IMAGES[id];
      return `
        <div class="elder-chip" onclick="openCharModal('${id}')" role="button" tabindex="0">
          ${hasPic
            ? `<img src="${CHAR_IMAGES[id]}" alt="${c.name}" class="elder-chip-img"
                 onerror="this.style.display='none';this.nextSibling.style.display='inline'"/>
               <span style="display:none">${c.emoji}</span>`
            : `<span>${c.emoji}</span>`
          }
          <span class="elder-chip-name">${c.name}</span>
        </div>`;
    }).join('')}
  </div>
</div>

</div><!-- end .ftree -->
`;
}

// ══════════════════════════════════════════════
// STORY — All 18 chapters
// ══════════════════════════════════════════════
function renderStory() {
  const grid = document.getElementById('storyGrid');
  if (!grid) return;
  grid.innerHTML = STORY_CHAPTERS.map((ch, i) => `
    <div class="story-card" style="animation-delay:${i*0.04}s">
      <div class="story-card-top">
        <span class="story-ch">Chapter ${ch.id} / 18</span>
        <span class="story-parva-badge">${ch.parva}</span>
        <span class="story-time">⏱ ${ch.time}</span>
        <span class="story-emoji">${ch.emoji}</span>
      </div>
      <h3 class="story-title">${ch.title}</h3>
      <p class="story-summary">${ch.summary}</p>
      <div class="story-expand" onclick="toggleStory(${i},this)">Read Full Story ▼</div>
      <div class="story-full" id="sf-${i}">
        <div class="story-stabs">
          <button class="stab active" onclick="switchStab(${i},'adult',this)">Full Story</button>
          <button class="stab" onclick="switchStab(${i},'kids',this)">👶 For Kids</button>
        </div>
        <div class="stab-content active" id="sa-${i}">
          ${ch.full.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        </div>
        <div class="stab-content" id="sk-${i}">
          <div class="kids-box">
            <div class="kids-icon">${ch.emoji}</div>
            <div class="kids-text">${ch.kid}</div>
          </div>
        </div>
        <div class="story-lesson">🕉️ <strong>Lesson:</strong> ${ch.lesson}</div>
      </div>
    </div>`).join('');
}

function toggleStory(i, btn) {
  const sf = document.getElementById(`sf-${i}`);
  sf.classList.toggle('open');
  btn.textContent = sf.classList.contains('open') ? 'Close Story ▲' : 'Read Full Story ▼';
}

function switchStab(i, tab, btn) {
  btn.closest('.story-card').querySelectorAll('.stab').forEach(b => b.classList.remove('active'));
  btn.closest('.story-card').querySelectorAll('.stab-content').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tab === 'adult' ? `sa-${i}` : `sk-${i}`).classList.add('active');
}

// ══════════════════════════════════════════════
// GITA — All 18 chapters
// ══════════════════════════════════════════════
function renderGita() {
  const grid = document.getElementById('gitaGrid');
  if (!grid) return;
  grid.innerHTML = GITA_CHAPTERS.map((g, i) => `
    <div class="gita-card" style="border-left-color:${g.color}">
      <div class="gita-card-top">
        <span class="gita-ch-badge" style="background:${g.color}">Chapter ${g.ch} · ${g.v} verses</span>
        <span class="gita-emoji">${g.emoji}</span>
      </div>
      <div class="gita-title">${g.title}</div>
      <div class="gita-skt">${g.skt}</div>
      <div class="gita-trans">${g.trans}</div>
      <p class="gita-summary">${g.summary}</p>
      <div class="gita-theme"><strong>Theme:</strong> ${g.theme}</div>
      <div class="gita-toggle" onclick="toggleGita(${i},this)">📖 View Key Verse ▼</div>
      <div class="verse-box" id="gv-${i}">
        <div class="verse-num">Verse ${g.verse}</div>
        <div class="verse-skt">${g.vskt}</div>
        <div class="verse-trans-text">${g.vtrans}</div>
        <div class="verse-eng">"${g.veng}"</div>
        <div class="verse-insight">💡 <strong>Insight:</strong> ${g.insight}</div>
        <div class="verse-kid">👶 <strong>For Kids:</strong> ${g.kid}</div>
        <div class="verse-recite"><strong>🎵 How to Recite:</strong> ${g.recite}</div>
      </div>
    </div>`).join('');
}

function toggleGita(i, btn) {
  const vb = document.getElementById(`gv-${i}`);
  vb.classList.toggle('open');
  btn.textContent = vb.classList.contains('open') ? '📖 Hide Verse ▲' : '📖 View Key Verse ▼';
}

// ══════════════════════════════════════════════
// ASTRAS — with images
// ══════════════════════════════════════════════
function renderAstras() {
  const grid = document.getElementById('astrasGrid');
  if (!grid) return;
  grid.innerHTML = ASTRAS.map(a => {
    const imgKey = a.name.toLowerCase().replace(/\s+/g,'');
    const hasPic = !!ASTRA_IMAGES[imgKey];
    return `
    <div class="astra-card" style="border-color:${a.color}55">
      <div class="astra-rarity">${a.rarity}</div>
      <div class="astra-img-area">
        ${hasPic
          ? `<img src="${ASTRA_IMAGES[imgKey]}" alt="${a.name}" class="astra-card-img"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
             <div class="astra-emoji-fb" style="display:none">${a.emoji}</div>`
          : `<div class="astra-emoji-fb">${a.emoji}</div>`
        }
      </div>
      <div class="astra-name">${a.name}</div>
      <div class="astra-god">🙏 Given by: ${a.god}</div>
      <div class="astra-owner">⚔️ Wielded by: ${a.owner}</div>
      <div class="astra-desc">${a.power}</div>
      <div class="astra-used">📜 <em>${a.used}</em></div>
      <div class="astra-kid">👶 ${a.kidDesc}</div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════════
// DHARMA DEBATES
// ══════════════════════════════════════════════
const votes = {};

function renderDharmaDebates() {
  const c = document.getElementById('dharmaDebates');
  if (!c) return;
  c.innerHTML = DHARMA_DEBATES.map(d => `
    <div class="debate-card">
      <div class="debate-q">${d.emoji} ${d.question}</div>
      <p class="debate-ctx">${d.context}</p>
      <div class="debate-sides">
        <div class="side-card yes"><h4>✅ ${d.sideA}</h4>${d.reasonA}</div>
        <div class="side-card no"><h4>❌ ${d.sideB}</h4>${d.reasonB}</div>
      </div>
      <div class="debate-kidq">🤔 Think about it: ${d.kidQ}</div>
      <div class="vote-row">
        <span style="font-family:'Cinzel',serif;font-size:.8rem;color:var(--muted)">Your vote:</span>
        <button class="vote-btn yes-btn" onclick="castVote('${d.id}','yes',this)">👍 YES</button>
        <button class="vote-btn no-btn" onclick="castVote('${d.id}','no',this)">👎 NO</button>
        <span class="vote-result" id="vr-${d.id}"></span>
      </div>
    </div>`).join('');
}

function castVote(id, side, btn) {
  if (votes[id]) return;
  votes[id] = side;
  btn.closest('.vote-row').querySelectorAll('.vote-btn').forEach(b => { b.classList.remove('voted'); b.style.opacity='.5'; });
  btn.classList.add('voted'); btn.style.opacity='1';
  document.getElementById(`vr-${id}`).textContent = side === 'yes'
    ? '✅ You voted: Loyalty first!' : '❌ You voted: Righteousness first!';
}

// ══════════════════════════════════════════════
// QUIZ
// ══════════════════════════════════════════════
let quizScore = 0;

function renderQuiz() {
  const c = document.getElementById('quizContainer');
  if (!c) return;
  quizScore = 0;
  c.innerHTML = `
    <div class="quiz-score-box" id="quizScoreBox">
      <div style="font-family:'Cinzel',serif;color:var(--muted);margin-bottom:.3rem">Your Score</div>
      <div class="quiz-score-num" id="quizScoreNum">0 / ${QUIZ_QUESTIONS.length}</div>
      <div style="font-size:.85rem;color:var(--muted);margin-top:.2rem" id="quizScoreMsg">Answer questions below to earn points!</div>
    </div>
    ${QUIZ_QUESTIONS.map((q, i) => `
      <div class="quiz-q-card" id="qq-${i}">
        <div class="quiz-q-num">Question ${i+1} of ${QUIZ_QUESTIONS.length}</div>
        <div class="quiz-q-text">${q.q}</div>
        <div class="quiz-opts">
          ${q.options.map((opt, j) => `
            <button class="quiz-opt" onclick="answerQ(${i},${j},this)">${opt}</button>
          `).join('')}
        </div>
        <div class="quiz-fact" id="qf-${i}">💡 ${q.fact}</div>
      </div>`).join('')}
    <div class="quiz-nav">
      <button class="quiz-btn" onclick="resetQuiz()">🔄 Restart Quiz</button>
      <button class="quiz-btn primary" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ Back to Top</button>
    </div>`;
}

function answerQ(qi, chosen, btn) {
  const q = QUIZ_QUESTIONS[qi];
  const card = document.getElementById(`qq-${qi}`);
  if (card.dataset.answered) return;
  card.dataset.answered = '1';
  card.querySelectorAll('.quiz-opt').forEach((o, j) => {
    o.disabled = true;
    if (j === q.ans) o.classList.add('correct');
    else if (j === chosen) o.classList.add('wrong');
  });
  if (chosen === q.ans) quizScore++;
  document.getElementById(`qf-${qi}`).classList.add('show');
  document.getElementById('quizScoreNum').textContent = `${quizScore} / ${QUIZ_QUESTIONS.length}`;
  const pct = Math.round(quizScore / QUIZ_QUESTIONS.length * 100);
  document.getElementById('quizScoreMsg').textContent =
    pct===100 ? '🏆 Perfect! You are a Mahabharata master!' :
    pct>=80 ? '🎉 Excellent knowledge!' :
    pct>=60 ? '👍 Good! Keep reading!' :
    pct>=40 ? '📚 Keep studying!' : '🌱 Just getting started — explore more!';
}

function resetQuiz() { renderQuiz(); }

// ══════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderAbout();
  renderGlossary();
  renderCharFilter();
  renderChars('all');
  renderFamilyTree();
  renderStory();
  renderGita();
  renderAstras();
  renderDharmaDebates();
  renderQuiz();
});

// PWA
if ('serviceWorker' in navigator)
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
