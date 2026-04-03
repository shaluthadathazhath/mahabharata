// ── APP.JS ── Mahabharata Educational Website ──

// ── SCROLL NAV HIGHLIGHT ──
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// ── NAV TOGGLE (MOBILE) ──
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinksEl.classList.toggle('open'));
navLinks.forEach(l => l.addEventListener('click', () => navLinksEl.classList.remove('open')));

// ── STICKY NAV ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// ── CHARACTERS ──
// Modify renderCharacters in app.js
function renderCharacters(filter = 'all') {
  const grid = document.getElementById('charGrid');
  grid.innerHTML = '';
  
  if (filter === 'kaurava') {
    const drawer = document.createElement('div');
    drawer.className = 'kaurava-drawer';
    drawer.innerHTML = `
      <button id="toggleKauravas" class="drawer-btn">Show all 100 Brothers & Sister ▼</button>
      <div id="kauravaList" class="hidden">${KAURAVA_BROTHERS.join(', ')}</div>
    `;
    grid.appendChild(drawer);
    document.getElementById('toggleKauravas').addEventListener('click', () => {
      document.getElementById('kauravaList').classList.toggle('hidden');
    });
  }

  const chars = filter === 'all' ? CHARACTERS : CHARACTERS.filter(c => c.group === filter);
  // ... existing rendering code ...
}

// Add a function to link family tree clicks to modals
function linkFamilyToCharacters() {
  document.querySelectorAll('.family-node').forEach(node => {
    node.addEventListener('click', () => {
      const charId = node.dataset.id;
      if (charId) openCharModal(charId);
    });
  });
}

function openCharModal(id) {
  const char = CHARACTERS.find(c => c.id === id);
  if (!char) return;
  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="modal-hero" style="background: linear-gradient(135deg, ${char.color}22, ${char.color}44)">
      <div class="modal-emoji">${char.emoji}</div>
      <div class="modal-header-text">
        <h2 class="modal-name">${char.name}</h2>
        <div class="modal-sanskrit">${char.sanskrit}</div>
        <div class="modal-title-badge">${char.title}</div>
      </div>
    </div>
    <div class="modal-body">
      <div class="modal-tabs">
        <button class="tab-btn active" data-tab="full">Full Story</button>
        <button class="tab-btn" data-tab="kids">For Kids 👶</button>
        <button class="tab-btn" data-tab="facts">Fun Facts ⭐</button>
      </div>
      <div class="tab-content" id="tab-full">
        <div class="char-info-grid">
          <div class="info-item"><span class="info-label">Parents</span><span class="info-val">${char.parents}</span></div>
          <div class="info-item"><span class="info-label">Spouse</span><span class="info-val">${char.spouse}</span></div>
          <div class="info-item"><span class="info-label">Children</span><span class="info-val">${char.children}</span></div>
          <div class="info-item"><span class="info-label">Weapon</span><span class="info-val">${char.weapon}</span></div>
        </div>
        <div class="char-full-text">${char.fullDesc.split('\n\n').map(p => `<p>${p}</p>`).join('')}</div>
        <div class="char-significance"><strong>Significance:</strong> ${char.significance}</div>
      </div>
      <div class="tab-content hidden" id="tab-kids">
        <div class="kids-story-box">
          <div class="kids-icon">👶</div>
          <p class="kids-text">${char.kidFriendly}</p>
        </div>
      </div>
      <div class="tab-content hidden" id="tab-facts">
        <ul class="facts-list">
          ${char.facts.map(f => `<li class="fact-item">⭐ ${f}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  content.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      content.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      content.querySelectorAll('.tab-content').forEach(t => t.classList.add('hidden'));
      btn.classList.add('active');
      document.getElementById(`tab-${btn.dataset.tab}`).classList.remove('hidden');
    });
  });

  document.getElementById('charModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('charModal').addEventListener('click', e => {
  if (e.target === document.getElementById('charModal')) closeModal();
});
function closeModal() {
  document.getElementById('charModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCharacters(btn.dataset.filter);
  });
});

renderCharacters();

// ── FAMILY TREE ──
function renderFamilyTree() {
  const container = document.getElementById('familyTree');
  container.innerHTML = `
    <div class="tree">
      <!-- Row 0: Divine ancestor -->
      <div class="tree-row">
        <div class="tree-node divine">
          <div class="node-emoji">🌊</div>
          <div class="node-name">Shantanu</div>
          <div class="node-sub">King of Hastinapura</div>
        </div>
      </div>
      <div class="tree-connector-down"></div>

      <!-- Row 1: Sons of Shantanu -->
      <div class="tree-row">
        <div class="tree-node divine">
          <div class="node-emoji">⚓</div>
          <div class="node-name">Bhishma</div>
          <div class="node-sub">Son of Ganga</div>
        </div>
        <div class="tree-spacer"></div>
        <div class="tree-node kaurava">
          <div class="node-emoji">👑</div>
          <div class="node-name">Vichitravirya</div>
          <div class="node-sub">Son of Satyavati</div>
        </div>
      </div>
      <div class="tree-connector-split"></div>

      <!-- Row 2: Next generation -->
      <div class="tree-row">
        <div class="tree-node kaurava">
          <div class="node-emoji">👁️</div>
          <div class="node-name">Dhritarashtra</div>
          <div class="node-sub">Blind King (+ Gandhari)</div>
        </div>
        <div class="tree-spacer"></div>
        <div class="tree-node pandava">
          <div class="node-emoji">🦌</div>
          <div class="node-name">Pandu</div>
          <div class="node-sub">Cursed King (+ Kunti & Madri)</div>
        </div>
        <div class="tree-spacer"></div>
        <div class="tree-node divine">
          <div class="node-emoji">🧿</div>
          <div class="node-name">Vidura</div>
          <div class="node-sub">Son of Vyasa & Maid</div>
        </div>
      </div>
      <div class="tree-connector-split"></div>

      <!-- Row 3: The cousins -->
      <div class="tree-row">
        <div class="tree-node kaurava">
          <div class="node-emoji">⚠️</div>
          <div class="node-name">Duryodhana</div>
          <div class="node-sub">Eldest Kaurava (+ 99 brothers)</div>
        </div>
        <div class="tree-spacer"></div>
        <div class="tree-node pandava">
          <div class="node-emoji">👑</div>
          <div class="node-name">Yudhishthira</div>
          <div class="node-sub">Son of Dharma</div>
        </div>
        <div class="tree-node pandava">
          <div class="node-emoji">💪</div>
          <div class="node-name">Bhima</div>
          <div class="node-sub">Son of Vayu</div>
        </div>
        <div class="tree-node pandava">
          <div class="node-emoji">🏹</div>
          <div class="node-name">Arjuna</div>
          <div class="node-sub">Son of Indra</div>
        </div>
        <div class="tree-node pandava">
          <div class="node-emoji">⚔️</div>
          <div class="node-name">Nakula</div>
          <div class="node-sub">Twin, Son of Ashwini</div>
        </div>
        <div class="tree-node pandava">
          <div class="node-emoji">🌟</div>
          <div class="node-name">Sahadeva</div>
          <div class="node-sub">Twin, Son of Ashwini</div>
        </div>
      </div>
      <div class="tree-connector-down tree-connector-right"></div>

      <!-- Row 4: Next generation -->
      <div class="tree-row">
        <div class="tree-node divine tree-node-sm">
          <div class="node-emoji">🌙</div>
          <div class="node-name">Abhimanyu</div>
          <div class="node-sub">Son of Arjuna</div>
        </div>
        <div class="tree-spacer"></div>
        <div class="tree-node divine tree-node-sm">
          <div class="node-emoji">💨</div>
          <div class="node-name">Ghatotkacha</div>
          <div class="node-sub">Son of Bhima & Hidimba</div>
        </div>
      </div>
      <div class="tree-connector-down tree-connector-right-2"></div>

      <!-- Row 5 -->
      <div class="tree-row">
        <div class="tree-node divine tree-node-sm">
          <div class="node-emoji">👶</div>
          <div class="node-name">Parikshit</div>
          <div class="node-sub">Son of Abhimanyu<br/>Heir to the throne</div>
        </div>
      </div>

      <!-- Special note about Karna -->
      <div class="tree-karna-note">
        <div class="karna-box">
          <div class="node-emoji">☀️</div>
          <div>
            <strong>Karna</strong> — Son of Kunti & Surya (Sun God). 
            The eldest Pandava by birth, raised secretly by charioteer Adhiratha.
            Though born before the Pandavas, he fought on the Kaurava side.
          </div>
        </div>
      </div>
    </div>
  `;
}

renderFamilyTree();

// ── STORY ──
function renderStory() {
  const grid = document.getElementById('storyGrid');
  grid.innerHTML = '';
  STORY_CHAPTERS.forEach((ch, i) => {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="story-card-header">
        <div class="story-num">Chapter ${ch.id}</div>
        <div class="story-parva">${ch.parva}</div>
        <div class="story-emoji">${ch.emoji}</div>
      </div>
      <h3 class="story-title">${ch.title}</h3>
      <p class="story-summary">${ch.summary}</p>
      <div class="story-meta">
        <span class="story-duration">⏱ ${ch.duration}</span>
      </div>
      <div class="story-expand-btn" data-idx="${i}">Read Full Story ▼</div>
      <div class="story-full hidden" id="story-full-${i}">
        <div class="story-tabs">
          <button class="stab active" data-i="${i}" data-tab="adult">Full Story</button>
          <button class="stab" data-i="${i}" data-tab="kids">For Kids 👶</button>
        </div>
        <div class="stab-content" id="stab-adult-${i}">
          ${ch.fullStory.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        </div>
        <div class="stab-content hidden" id="stab-kids-${i}">
          <div class="kids-story-box">
            <div class="kids-icon">👶</div>
            <p class="kids-text">${ch.kidVersion}</p>
          </div>
        </div>
        <div class="story-lesson"><strong>🕉️ Lesson:</strong> ${ch.lesson}</div>
      </div>
    `;
    grid.appendChild(card);
  });

  document.querySelectorAll('.story-expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.idx;
      const full = document.getElementById(`story-full-${idx}`);
      full.classList.toggle('hidden');
      btn.textContent = full.classList.contains('hidden') ? 'Read Full Story ▼' : 'Close Story ▲';
    });
  });

  document.querySelectorAll('.stab').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = btn.dataset.i;
      document.querySelectorAll(`.stab[data-i="${i}"]`).forEach(b => b.classList.remove('active'));
      document.getElementById(`stab-adult-${i}`).classList.add('hidden');
      document.getElementById(`stab-kids-${i}`).classList.add('hidden');
      btn.classList.add('active');
      document.getElementById(`stab-${btn.dataset.tab}-${i}`).classList.remove('hidden');
    });
  });
}

renderStory();

// ── GITA ──
function renderGita() {
  const container = document.getElementById('gitaChapters');
  container.innerHTML = '';
  GITA_CHAPTERS.forEach((ch, i) => {
    const card = document.createElement('div');
    card.className = 'gita-card';
    card.style.borderLeftColor = ch.color;
    card.innerHTML = `
      <div class="gita-card-top">
        <div class="gita-chapter-num" style="background:${ch.color}">Chapter ${ch.chapter}</div>
        <div class="gita-emoji">${ch.emoji}</div>
      </div>
      <h3 class="gita-title">${ch.title}</h3>
      <div class="gita-sanskrit">${ch.sanskrit}</div>
      <div class="gita-transliteration">${ch.transliteration} · ${ch.verses} verses</div>
      <p class="gita-summary">${ch.summary}</p>
      <div class="gita-theme"><strong>Theme:</strong> ${ch.theme}</div>
      <div class="gita-toggle" data-idx="${i}">Featured Verses ▼</div>
      <div class="gita-verses hidden" id="gita-verses-${i}">
        ${ch.featured_verses.map(v => `
          <div class="verse-card" style="border-color:${ch.color}33">
            <div class="verse-number" style="color:${ch.color}">Verse ${v.number}</div>
            <div class="verse-sanskrit">${v.sanskrit}</div>
            <div class="verse-transliteration">${v.transliteration}</div>
            <div class="verse-english">"${v.english}"</div>
            <div class="verse-insight"><strong>💡 Insight:</strong> ${v.insight}</div>
            <div class="verse-kids"><strong>👶 For Kids:</strong> ${v.kidVersion}</div>
          </div>
        `).join('')}
      </div>
    `;
    container.appendChild(card);
  });

  document.querySelectorAll('.gita-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.idx;
      const verses = document.getElementById(`gita-verses-${idx}`);
      verses.classList.toggle('hidden');
      btn.textContent = verses.classList.contains('hidden') ? 'Featured Verses ▼' : 'Hide Verses ▲';
    });
  });
}

renderGita();

// ── PWA SERVICE WORKER ──
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
