# 🕉️ Mahabharata – Educational Website

A beautiful, PWA-ready educational website about the Mahabharata for all ages.

## 📁 Files

```
mahabharata-site/
├── index.html      ← Main page (all sections)
├── style.css       ← All styles
├── app.js          ← Interactivity & rendering
├── data.js         ← All content (characters, story, Gita)
├── manifest.json   ← PWA manifest
├── sw.js           ← Service worker (offline support)
├── icons/          ← Add app icons here (192x192, 512x512 PNG)
└── README.md       ← This file
```

## 🚀 FREE Hosting Options (Recommended)

### Option 1: GitHub Pages (BEST – Free + Custom Domain)

1. Create a free account at https://github.com
2. Create a new repository called `mahabharata` (make it Public)
3. Upload all files from this folder to the repository
4. Go to Settings → Pages → Source: "Deploy from a branch" → main → / (root)
5. Your site goes live at: `https://YOUR-USERNAME.github.io/mahabharata`
6. Optional: Add a custom domain (e.g., mahabharata.com) in Settings → Pages → Custom Domain

### Option 2: Netlify (Free + Drag & Drop)

1. Go to https://netlify.com and create a free account
2. Drag and drop the entire `mahabharata-site` folder onto their dashboard
3. Site is live instantly at a URL like `https://amazing-name-123.netlify.app`
4. Optional: Connect to GitHub for automatic updates when you edit files

### Option 3: Vercel (Free + Fast)

1. Go to https://vercel.com and sign up
2. Import from GitHub (link your GitHub repo from Option 1)
3. Auto-deploys every time you push changes

## 📱 Installing as an App (PWA)

Once hosted, users can:
- **Android**: Open in Chrome → tap menu → "Add to Home Screen"
- **iPhone**: Open in Safari → tap share → "Add to Home Screen"
- **Desktop**: Chrome will show an install icon in the address bar

## ✏️ How to Update Content

All content is in **data.js** — just edit and re-upload:

- Add characters: Add to the `CHARACTERS` array
- Add story chapters: Add to `STORY_CHAPTERS`
- Add Gita chapters: Add to `GITA_CHAPTERS`

## 🔒 Security

- No backend, no database → nothing to hack
- No user data collected
- HTTPS provided free by GitHub Pages / Netlify / Vercel
- Safe for children

## 📚 Content Sources

All content is based on:
1. **BORI Critical Edition** of the Mahabharata (authoritative scholarly edition)
2. **Kisari Mohan Ganguli** translation (1883-1896) — first complete English translation
3. **Bhagavad Gita As It Is** by Swami Prabhupada (ISKCON)
4. **Mahabharata** translated by C. Rajagopalachari
