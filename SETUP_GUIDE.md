# Nabila Parijat Portfolio — Setup & Deployment Guide

---

## STEP 1: Prerequisites (install these once)

### Node.js
Download and install from: https://nodejs.org
Choose the **LTS** version (e.g. 20.x). This also installs `npm`.

Verify it worked by opening Terminal (Mac) or Command Prompt (Windows) and typing:
```
node --version
npm --version
```
Both should print a version number.

### Git (optional but recommended)
Download from: https://git-scm.com

---

## STEP 2: Add your images and CV

Inside the project folder, go to:

```
nabila-portfolio/
  public/
    images/    ← put ALL your photos here
    cv/        ← put your CV PDF here
```

**Image filenames must match exactly** (case-sensitive):

| Filename | Where it appears |
|---|---|
| `professional-picture.jpeg` | Hero section |
| `dissertation-defense.jpeg` | Dissertation card |
| `aspa-presentation-2024.jpeg` | Gallery |
| `aspa-close.jpeg` | Gallery |
| `aspa-wide.jpeg` | Gallery |
| `foreign-aid-presentation.jpeg` | Gallery |
| `conference-colleagues.jpeg` | Gallery |
| `abfm-conference.jpeg` | Gallery |
| `research-presentation.jpeg` | Gallery |
| `oxford-penn-email.png` | Gallery |
| `appam-certificate.jpeg` | Gallery |
| `appam-fellowship-stage.jpeg` | Gallery |
| `appam-group.jpeg` | Gallery |
| `classroom.jpeg` | Teaching section |

**CV filename:**
```
public/cv/Nabila_Parijat_CV.pdf
```

---

## STEP 3: Run on localhost

Open Terminal / Command Prompt, navigate to the project folder:

```bash
cd path/to/nabila-portfolio
```

Install dependencies (only needed once):
```bash
npm install
```

Start the local development server:
```bash
npm run dev
```

You'll see something like:
```
  VITE v5.x  ready in 300ms
  ➜  Local:   http://localhost:5173/
```

Open that URL in your browser — your site is running locally!

The page **hot-reloads** — any edits you save in `src/App.jsx` appear instantly.

---

## STEP 4: Deploy to Vercel

### Option A — Vercel CLI (easiest)

Install Vercel CLI:
```bash
npm install -g vercel
```

From inside the project folder:
```bash
vercel
```

Follow the prompts — it auto-detects Vite. Your site will be live at a `.vercel.app` URL.

For future updates, just run:
```bash
vercel --prod
```

### Option B — Vercel dashboard (no CLI)

1. Push your project to GitHub (create a free account at github.com if needed)
2. Go to https://vercel.com and sign in with GitHub
3. Click **Add New → Project**
4. Import your GitHub repository
5. Vercel auto-detects Vite — click **Deploy**
6. Done! Images will work because they're in `public/images/`

---

## STEP 5: Connect your domain (nabilaparijat.com)

1. In Vercel dashboard, go to your project → **Settings → Domains**
2. Add `nabilaparijat.com` and `www.nabilaparijat.com`
3. Vercel shows you DNS records to add — usually two:
   - An **A record** pointing to Vercel's IP
   - A **CNAME record** for www
4. Log in to wherever you bought your domain (GoDaddy, Namecheap, Google Domains, etc.)
5. Go to **DNS settings** and add those records
6. Wait 5–30 minutes for DNS to propagate
7. Your site is live at nabilaparijat.com with HTTPS automatically!

---

## Why images were broken before

The original code used paths like `/images/photo.jpeg`. In a Vite project:
- Files in the `public/` folder are served at the root `/`
- So `/images/photo.jpeg` maps to `public/images/photo.jpeg`
- This works on localhost AND on Vercel

The text disappearing issue was likely caused by Tailwind CSS not being compiled properly. This project uses **Vite + PostCSS + Tailwind** which compiles correctly every time.

---

## Editing your content

All your text, links, and data are at the TOP of `src/App.jsx` in clearly labelled sections:

- `profileLinks` — your CV, LinkedIn, email, etc.
- `selectedWork` — publications and works in progress
- `heroFacts` — the 4 fact cards on the hero
- `highlightStats` — the lifetime highlights bar
- `credentials` — your education
- `appliedExperience` — work experience
- `conferenceItems` — conference presentations
- `awardItems` — honors and awards
- `reelImages` — gallery photos and captions

---

## Need help?

Feel free to ask Claude to make any changes — just paste the current `src/App.jsx` and describe what you want updated.
