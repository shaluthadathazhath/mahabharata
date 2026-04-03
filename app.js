// ═══════════════════════════════════════════════
// MAHABHARATA SITE — app.js  v3
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

// ── INTERSECTION OBSERVER for nav highlight ──
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => obs.observe(s));

// ══════════════════════════════════════════════
// ABOUT SECTION
// ══════════════════════════════════════════════
function renderAbout() {
  const grid = document.getElementById('aboutGrid');
  if (!grid) return;
  grid.innerHTML = ABOUT_DATA.map(item => `
    <div class="about-card">
      <div class="about-card-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <div class="about-card-body">${item.content}</div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════════
// GLOSSARY
// ══════════════════════════════════════════════
function renderGlossary() {
  const grid = document.getElementById('glossaryGrid');
  if (!grid) return;
  grid.innerHTML = GLOSSARY.map((g, i) => `
    <div class="gloss-card">
      <div class="gloss-header">
        <span class="gloss-emoji">${g.emoji}</span>
        <span class="gloss-term">${g.term}</span>
      </div>
      ${g.sanskrit !== '—' ? `<div class="gloss-skt">${g.sanskrit}</div>` : ''}
      <span class="gloss-cat">${g.cat}</span>
      <div class="gloss-simple">${g.simple}</div>
      <div class="gloss-tabs">
        <button class="gloss-tab active" onclick="showGloss(${i},'full',this)">Full</button>
        <button class="gloss-tab" onclick="showGloss(${i},'kid',this)">👶 For Kids</button>
      </div>
      <div class="gloss-content" id="gloss-full-${i}">${g.full}</div>
      <div class="gloss-kid" id="gloss-kid-${i}">${g.kid}</div>
    </div>
  `).join('');
}

function showGloss(i, tab, btn) {
  const card = btn.closest('.gloss-card');
  card.querySelectorAll('.gloss-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  card.querySelector(`#gloss-full-${i}`).style.display = tab === 'full' ? 'block' : 'none';
  const kid = card.querySelector(`#gloss-kid-${i}`);
  kid.style.display = tab === 'kid' ? 'block' : 'none';
}

// ══════════════════════════════════════════════
// CHARACTERS
// ══════════════════════════════════════════════
const GROUPS = ['all','pandava','kaurava','divine','sage','ancestor'];
const GROUP_LABELS = { all:'All', pandava:'Pandavas', kaurava:'Kauravas', divine:'Divine', sage:'Sages & Elders', ancestor:'Ancestors' };

function renderCharFilter() {
  const f = document.getElementById('charFilter');
  if (!f) return;
  f.innerHTML = GROUPS.map(g => `
    <button class="filter-btn${g==='all'?' active':''}" data-filter="${g}">${GROUP_LABELS[g]}</button>
  `).join('');
  f.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      f.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderChars(btn.dataset.filter);
    });
  });
}

function renderChars(filter = 'all') {
  const grid = document.getElementById('charGrid');
  if (!grid) return;
  const list = filter === 'all' ? CHARACTERS : CHARACTERS.filter(c => c.group === filter);
  grid.innerHTML = list.map((c, i) => `
    <div class="char-card ${c.group}" style="animation-delay:${i*0.05}s;border-top-color:${c.color}" 
         onclick="openCharModal('${c.id}')" role="button" tabindex="0"
         onkeypress="if(event.key==='Enter') openCharModal('${c.id}')">
      <div class="char-emoji-box" style="background:${c.color}22;border-color:${c.color}55">${c.emoji}</div>
      <div class="char-sanskrit">${c.sanskrit}</div>
      <h3 class="char-name">${c.name}</h3>
      <div class="char-title-badge" style="color:${c.color}">${c.title}</div>
      <p class="char-desc">${c.shortDesc}</p>
      <span class="char-group-badge ${c.group}">${c.group.charAt(0).toUpperCase()+c.group.slice(1)}</span>
      <button class="char-learn-btn" style="border-color:${c.color};color:${c.color}">Learn More →</button>
    </div>
  `).join('');
}

function openCharModal(id) {
  const c = CHARACTERS.find(x => x.id === id);
  if (!c) return;
  const mc = document.getElementById('modalContent');

  // Kauravas special drawer
  const kauravaDrw = c.special_kauravas ? `
    <div class="kauravas-toggle" onclick="toggleKauravaDrw(this)">▼ Show all 100 Kauravas & sister (click to expand)</div>
    <div class="kauravas-drawer" id="kaurava-drawer">
      <div class="kauravas-list">${ALL_KAURAVAS.map(n=>`<span class="kaurava-name">${n}</span>`).join('')}</div>
    </div>
  ` : '';

  mc.innerHTML = `
    <div class="modal-hero" style="background:linear-gradient(135deg,${c.color}22,${c.color}44)">
      <div class="modal-emoji">${c.emoji}</div>
      <div>
        <div class="modal-name">${c.name}</div>
        <div class="modal-sanskrit">${c.sanskrit}</div>
        <div class="modal-title-badge">${c.title}</div>
      </div>
    </div>
    <div class="modal-body">
      <div class="modal-tabs">
        <button class="tab-btn active" onclick="switchTab(this,'mtab-full')">📖 Story</button>
        <button class="tab-btn" onclick="switchTab(this,'mtab-kids')">👶 For Kids</button>
        <button class="tab-btn" onclick="switchTab(this,'mtab-facts')">⭐ Facts</button>
        <button class="tab-btn" onclick="switchTab(this,'mtab-family')">👪 Family</button>
      </div>

      <div class="tab-content active" id="mtab-full">
        ${c.fullDesc.split('\n\n').map(p=>`<p>${p}</p>`).join('')}
        <div class="char-significance">🕉️ <strong>Significance:</strong> ${c.significance}</div>
        ${kauravaDrw}
      </div>

      <div class="tab-content" id="mtab-kids">
        <div class="kids-box">
          <div class="kids-icon">👶</div>
          <div class="kids-text">${c.kidFriendly}</div>
        </div>
      </div>

      <div class="tab-content" id="mtab-facts">
        <ul class="facts-list">${c.facts.map(f=>`<li class="fact-item">⭐ ${f}</li>`).join('')}</ul>
      </div>

      <div class="tab-content" id="mtab-family">
        <div class="char-info-grid">
          <div class="info-item"><span class="info-label">Parents</span><span class="info-val">${c.parents}</span></div>
          <div class="info-item"><span class="info-label">Spouse</span><span class="info-val">${c.spouse}</span></div>
          <div class="info-item"><span class="info-label">Children</span><span class="info-val">${c.children}</span></div>
          <div class="info-item"><span class="info-label">Weapon</span><span class="info-val">${c.weapon}</span></div>
        </div>
      </div>
    </div>
  `;

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
    ? '▲ Hide all 100 Kauravas & sister'
    : '▼ Show all 100 Kauravas & sister (click to expand)';
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
// FAMILY TREE (Interactive SVG-style HTML)
// ══════════════════════════════════════════════
function renderFamilyTree() {
  const container = document.getElementById('familyTree');
  if (!container) return;

  // Helper: find char by id, show clickable node
  function node(id, extraClass='') {
    const c = CHARACTERS.find(x => x.id === id);
    if (!c) return `<div class="fnode ${extraClass}" style="opacity:.4"><div class="fn-name">${id}</div></div>`;
    return `
      <div class="fnode ${c.group} ${extraClass}" 
           onclick="openCharModal('${c.id}')" 
           title="Click to view ${c.name}'s full profile"
           role="button" tabindex="0">
        <div class="fn-emoji">${c.emoji}</div>
        <div class="fn-name">${c.name}</div>
        <div class="fn-sub">${c.title}</div>
        ${c.spouse && c.spouse !== 'None — took a lifelong vow of celibacy' && c.spouse !== 'None — died in battle' 
          ? `<div class="fn-spouse">♥ ${c.spouse.split('(')[0].split(',')[0].trim()}</div>` : ''}
      </div>`;
  }

  function vline() { return `<div class="tree-connector"><div class="tree-vline"></div></div>`; }
  function hline() { return `<div style="height:2px;background:var(--gold);flex:1;max-width:500px;margin:0 auto"></div>`; }

  container.innerHTML = `
  <div class="ftree">

    <!-- ROW 0: Divine Ancestors -->
    <div style="text-align:center;font-family:'Cinzel',serif;font-size:.7rem;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;margin-bottom:.5rem">DIVINE ANCESTORS</div>
    <div class="ftree-row">
      ${node('ganga')}
      <div style="display:flex;align-items:center;padding:.5rem;color:var(--gold);font-family:'Cinzel',serif;font-size:.8rem">✕ married</div>
      ${node('shantanu')}
      <div style="display:flex;align-items:center;padding:.5rem;color:var(--gold);font-family:'Cinzel',serif;font-size:.8rem">✕ married</div>
      ${node('satyavati')}
    </div>

    ${vline()}

    <!-- ROW 1: Children of Shantanu -->
    <div style="text-align:center;font-family:'Cinzel',serif;font-size:.7rem;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;margin-bottom:.5rem">CHILDREN OF SHANTANU</div>
    <div class="ftree-row">
      ${node('bhishma','sage')}
      <div style="display:flex;align-items:center;padding:0 .5rem;color:var(--muted);font-size:.7rem">(half-brothers)</div>
      ${node('chitrāngada','ancestor')}
      <div style="display:flex;align-items:center;padding:0 .25rem;color:var(--muted);font-size:.7rem">·</div>
      ${node('vichitravirya','ancestor')}
    </div>

    ${vline()}

    <!-- VYASA connection note -->
    <div class="ftree-row">
      ${node('vyasa','sage')}
      <div style="display:flex;align-items:center;padding:.5rem;color:var(--muted);font-size:.75rem;font-style:italic;max-width:280px;text-align:center">Fathered children of Vichitravirya's wives by Niyoga (ancient duty)</div>
    </div>

    ${vline()}

    <!-- ROW 2: Dhritarashtra / Pandu / Vidura + wives -->
    <div style="text-align:center;font-family:'Cinzel',serif;font-size:.7rem;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;margin-bottom:.5rem">SECOND GENERATION (Half-Brothers)</div>
    <div class="ftree-row">
      <div style="display:flex;flex-direction:column;align-items:center;gap:.35rem">
        ${node('dhritarashtra','kaurava')}
        <div style="font-size:.65rem;color:var(--muted)">+ wife</div>
        ${node('gandhari','ancestor')}
      </div>
      <div style="display:flex;align-items:center;padding:0 .5rem;color:var(--muted);font-size:.7rem;writing-mode:horizontal-tb">(brothers)</div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:.35rem">
        ${node('pandu','ancestor')}
        <div style="font-size:.65rem;color:var(--muted)">+ wives</div>
        <div style="display:flex;gap:.35rem">${node('kunti','ancestor')} ${node('madri','ancestor')}</div>
      </div>
      <div style="display:flex;align-items:center;padding:0 .5rem;color:var(--muted);font-size:.7rem">(brother)</div>
      ${node('vidura','sage')}
    </div>

    ${vline()}

    <!-- ROW 3: Pandavas + Kauravas -->
    <div style="text-align:center;font-family:'Cinzel',serif;font-size:.7rem;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;margin-bottom:.5rem">THE COUSINS — PANDAVAS & KAURAVAS</div>
    <div class="ftree-row">
      <!-- Kauravas -->
      <div style="display:flex;flex-direction:column;align-items:center;gap:.35rem">
        <div style="font-size:.7rem;color:var(--kaurava);font-family:'Cinzel',serif">KAURAVAS (100+1)</div>
        <div style="display:flex;gap:.35rem;flex-wrap:wrap;justify-content:center">
          ${node('duryodhana','kaurava')}
          ${node('dushasana','kaurava')}
          ${node('vikarna','kaurava')}
        </div>
        <div style="font-size:.65rem;color:var(--muted);font-style:italic">+ 97 more brothers & 1 sister (Dushala)</div>
      </div>

      <div style="display:flex;align-items:center;padding:0 1rem;color:var(--muted);font-size:.9rem">⚔️</div>

      <!-- Pandavas -->
      <div style="display:flex;flex-direction:column;align-items:center;gap:.35rem">
        <div style="font-size:.7rem;color:var(--pandava);font-family:'Cinzel',serif">PANDAVAS (5)</div>
        <div style="display:flex;gap:.35rem;flex-wrap:wrap;justify-content:center">
          ${node('yudhishthira','pandava')}
          ${node('bhima','pandava')}
          ${node('arjuna','pandava')}
          ${node('nakula','pandava')}
          ${node('sahadeva','pandava')}
        </div>
        <div style="font-size:.65rem;color:var(--muted);font-style:italic">All married Draupadi (shared wife)</div>
        ${node('draupadi','pandava')}
      </div>
    </div>

    ${vline()}

    <!-- ROW 4: Karna (special) + Subhadra + Krishna -->
    <div style="text-align:center;font-family:'Cinzel',serif;font-size:.7rem;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;margin-bottom:.5rem">DIVINE CONNECTIONS & NEXT GENERATION</div>
    <div class="ftree-row">
      ${node('karna','kaurava')}
      <div style="display:flex;align-items:center;padding:0 .5rem;color:var(--muted);font-size:.7rem;font-style:italic">Eldest Pandava<br/>by birth (unknown)</div>
      ${node('krishna','divine')}
      <div style="display:flex;align-items:center;padding:0 .25rem;color:var(--muted);font-size:.7rem">sister →</div>
      ${node('subhadra','divine')}
      <div style="display:flex;align-items:center;padding:0 .25rem;color:var(--muted);font-size:.7rem">married →</div>
      ${node('arjuna','pandava')}
    </div>

    ${vline()}

    <!-- ROW 5: Abhimanyu -->
    <div class="ftree-row">
      ${node('abhimanyu','pandava')}
      <div style="display:flex;align-items:center;padding:.5rem;color:var(--muted);font-size:.75rem;font-style:italic">Son of Arjuna & Subhadra<br/>Married Uttara (Virata's daughter)</div>
    </div>

    ${vline()}

    <!-- ROW 6: Parikshit -->
    <div class="ftree-row">
      <div class="fnode pandava" style="border-color:var(--pandava)">
        <div class="fn-emoji">👶</div>
        <div class="fn-name">Parikshit</div>
        <div class="fn-sub">Son of Abhimanyu<br/>The heir & future king</div>
        <div class="fn-spouse">Mahabharata first told to him</div>
      </div>
    </div>

  </div>

  <!-- Sages/Elders note -->
  <div class="tree-note">
    <span style="font-size:1.5rem">🧙</span>
    <div>
      <strong style="font-family:'Cinzel',serif;color:var(--crimson)">Key Sages & Elders:</strong>
      Click to explore — 
      <span class="fnode sage" style="display:inline-flex;padding:.3rem .5rem;margin:.2rem;cursor:pointer;font-size:.75rem" onclick="openCharModal('bhishma')">${CHARACTERS.find(c=>c.id==='bhishma').emoji} Bhishma</span>
      <span class="fnode sage" style="display:inline-flex;padding:.3rem .5rem;margin:.2rem;cursor:pointer;font-size:.75rem" onclick="openCharModal('drona')">${CHARACTERS.find(c=>c.id==='drona').emoji} Drona</span>
      <span class="fnode sage" style="display:inline-flex;padding:.3rem .5rem;margin:.2rem;cursor:pointer;font-size:.75rem" onclick="openCharModal('ashwatthama')">${CHARACTERS.find(c=>c.id==='ashwatthama').emoji} Ashwatthama</span>
      <span class="fnode sage" style="display:inline-flex;padding:.3rem .5rem;margin:.2rem;cursor:pointer;font-size:.75rem" onclick="openCharModal('sanjaya')">${CHARACTERS.find(c=>c.id==='sanjaya').emoji} Sanjaya</span>
      <span class="fnode sage" style="display:inline-flex;padding:.3rem .5rem;margin:.2rem;cursor:pointer;font-size:.75rem" onclick="openCharModal('kripa')">${CHARACTERS.find(c=>c.id==='kripa').emoji} Kripacharya</span>
    </div>
  </div>
  `;
}

// ══════════════════════════════════════════════
// STORY — All 18 Chapters
// ══════════════════════════════════════════════
function renderStory() {
  const grid = document.getElementById('storyGrid');
  if (!grid) return;
  grid.innerHTML = STORY_CHAPTERS.map((ch, i) => `
    <div class="story-card" style="animation-delay:${i*0.05}s">
      <div class="story-card-top">
        <span class="story-ch">Chapter ${ch.id} of 18</span>
        <span class="story-parva-badge">${ch.parva}</span>
        <span class="story-time">⏱ ${ch.time}</span>
        <span class="story-emoji">${ch.emoji}</span>
      </div>
      <h3 class="story-title">${ch.title}</h3>
      <p class="story-summary">${ch.summary}</p>
      <div class="story-expand" onclick="toggleStory(${i}, this)">Read Full Story ▼</div>
      <div class="story-full" id="sf-${i}">
        <div class="story-stabs">
          <button class="stab active" onclick="switchStab(${i},'adult',this)">Full Story</button>
          <button class="stab" onclick="switchStab(${i},'kids',this)">👶 For Kids</button>
        </div>
        <div class="stab-content active" id="sa-${i}">
          ${ch.full.split('\n\n').map(p=>`<p>${p}</p>`).join('')}
        </div>
        <div class="stab-content" id="sk-${i}">
          <div class="kids-box">
            <div class="kids-icon">${ch.emoji}</div>
            <div class="kids-text">${ch.kid}</div>
          </div>
        </div>
        <div class="story-lesson">🕉️ <strong>Lesson:</strong> ${ch.lesson}</div>
      </div>
    </div>
  `).join('');
}

function toggleStory(i, btn) {
  const sf = document.getElementById(`sf-${i}`);
  sf.classList.toggle('open');
  btn.textContent = sf.classList.contains('open') ? 'Close Story ▲' : 'Read Full Story ▼';
}

function switchStab(i, tab, btn) {
  const card = btn.closest('.story-card');
  card.querySelectorAll('.stab').forEach(b => b.classList.remove('active'));
  card.querySelectorAll('.stab-content').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tab === 'adult' ? `sa-${i}` : `sk-${i}`).classList.add('active');
}

// ══════════════════════════════════════════════
// GITA — All 18 Chapters
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
      <div class="gita-toggle" onclick="toggleGita(${i}, this)">📖 View Key Verse ▼</div>
      <div class="verse-box" id="gv-${i}">
        <div class="verse-num">Verse ${g.verse}</div>
        <div class="verse-skt">${g.vskt}</div>
        <div class="verse-trans-text">${g.vtrans}</div>
        <div class="verse-eng">"${g.veng}"</div>
        <div class="verse-insight">💡 <strong>Insight:</strong> ${g.insight}</div>
        <div class="verse-kid">👶 <strong>For Kids:</strong> ${g.kid}</div>
        <div class="verse-recite">
          <strong>🎵 How to Recite:</strong>
          ${g.recite}
        </div>
      </div>
    </div>
  `).join('');
}

function toggleGita(i, btn) {
  const vb = document.getElementById(`gv-${i}`);
  vb.classList.toggle('open');
  btn.textContent = vb.classList.contains('open') ? '📖 Hide Verse ▲' : '📖 View Key Verse ▼';
}

// ══════════════════════════════════════════════
// ASTRAS (WEAPONS GALLERY)
// ══════════════════════════════════════════════
function renderAstras() {
  const grid = document.getElementById('astrasGrid');
  if (!grid) return;
  grid.innerHTML = ASTRAS.map(a => `
    <div class="astra-card" data-emoji="${a.emoji}" style="border-color:${a.color}44">
      <div class="astra-rarity">${a.rarity}</div>
      <div class="astra-emoji">${a.emoji}</div>
      <div class="astra-name">${a.name}</div>
      <div class="astra-god">🙏 Given by: ${a.god}</div>
      <div class="astra-owner">⚔️ Wielded by: ${a.owner}</div>
      <div class="astra-desc">${a.power}</div>
      <div class="astra-used">📜 <em>${a.used}</em></div>
      <div class="astra-kid">👶 ${a.kidDesc}</div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════════
// DHARMA DEBATES
// ══════════════════════════════════════════════
const votes = {};

function renderDharmaDebates() {
  const container = document.getElementById('dharmaDebates');
  if (!container) return;
  container.innerHTML = DHARMA_DEBATES.map(d => `
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
    </div>
  `).join('');
}

function castVote(id, side, btn) {
  if (votes[id]) return; // already voted
  votes[id] = side;
  const card = btn.closest('.debate-card');
  card.querySelectorAll('.vote-btn').forEach(b => {
    b.classList.remove('voted');
    b.style.opacity = '.5';
  });
  btn.classList.add('voted');
  btn.style.opacity = '1';
  const result = document.getElementById(`vr-${id}`);
  result.textContent = side === 'yes'
    ? '✅ You voted YES — loyalty and friendship!'
    : '❌ You voted NO — righteousness comes first!';
}

// ══════════════════════════════════════════════
// QUIZ
// ══════════════════════════════════════════════
let quizState = { current: 0, score: 0, answered: false };

function renderQuiz() {
  const container = document.getElementById('quizContainer');
  if (!container) return;

  // Score box
  const scoreBox = document.createElement('div');
  scoreBox.className = 'quiz-score-box';
  scoreBox.id = 'quizScoreBox';
  scoreBox.innerHTML = `
    <div style="font-family:'Cinzel',serif;color:var(--muted);margin-bottom:.5rem">Current Score</div>
    <div class="quiz-score-num" id="quizScoreNum">0 / ${QUIZ_QUESTIONS.length}</div>
    <div style="font-size:.85rem;color:var(--muted);margin-top:.25rem" id="quizScoreMsg">Answer questions to earn points!</div>
  `;
  container.appendChild(scoreBox);

  // Questions
  QUIZ_QUESTIONS.forEach((q, i) => {
    const card = document.createElement('div');
    card.className = 'quiz-q-card';
    card.id = `qq-${i}`;
    card.innerHTML = `
      <div class="quiz-q-num">Question ${i+1} of ${QUIZ_QUESTIONS.length}</div>
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-opts">
        ${q.options.map((opt, j) => `
          <button class="quiz-opt" onclick="answerQuiz(${i}, ${j}, this)">${opt}</button>
        `).join('')}
      </div>
      <div class="quiz-fact" id="qf-${i}">💡 ${q.fact}</div>
    `;
    container.appendChild(card);
  });

  // Nav
  const nav = document.createElement('div');
  nav.className = 'quiz-nav';
  nav.innerHTML = `
    <button class="quiz-btn" onclick="resetQuiz()">🔄 Restart Quiz</button>
    <button class="quiz-btn primary" onclick="scrollToTop()">↑ Back to Top</button>
  `;
  container.appendChild(nav);

  // Show score box after first answer
}

function answerQuiz(qi, chosen, btn) {
  const q = QUIZ_QUESTIONS[qi];
  const card = document.getElementById(`qq-${qi}`);
  if (card.querySelector('.correct') || card.querySelector('.wrong')) return; // already answered

  const opts = card.querySelectorAll('.quiz-opt');
  opts.forEach((o, j) => {
    o.classList.add('answered');
    if (j === q.ans) o.classList.add('correct');
    else if (j === chosen) o.classList.add('wrong');
    o.disabled = true;
  });

  if (chosen === q.ans) {
    quizState.score++;
    btn.innerHTML += ' ✅';
  } else {
    btn.innerHTML += ' ❌';
  }

  document.getElementById(`qf-${qi}`).classList.add('show');

  // Update score
  const scoreBox = document.getElementById('quizScoreBox');
  scoreBox.classList.add('show');
  document.getElementById('quizScoreNum').textContent = `${quizState.score} / ${QUIZ_QUESTIONS.length}`;
  const pct = Math.round((quizState.score / QUIZ_QUESTIONS.length) * 100);
  document.getElementById('quizScoreMsg').textContent =
    pct === 100 ? '🏆 Perfect score! You are a Mahabharata master!' :
    pct >= 80 ? '🎉 Excellent! Great knowledge of the epic!' :
    pct >= 60 ? '👍 Good! Keep reading to learn more!' :
    pct >= 40 ? '📚 Keep studying — you\'ll get there!' :
    '🌱 Just getting started — read more chapters!';
}

function resetQuiz() {
  quizState = { current: 0, score: 0, answered: false };
  document.getElementById('quizContainer').innerHTML = '';
  renderQuiz();
}

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// ══════════════════════════════════════════════
// INITIALISE ALL
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

// ── PWA ──
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
