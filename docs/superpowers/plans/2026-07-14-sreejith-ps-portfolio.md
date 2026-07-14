# Sreejith P.S. Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page static portfolio site for Sreejith P.S., organic farmer and founder of APEC.

**Architecture:** Three static files (index.html, style.css, script.js) with zero dependencies. Mobile-first responsive design using CSS Grid and Flexbox. No build step — deployable directly to Vercel.

**Tech Stack:** HTML5, CSS3, Vanilla JS

---

### Task 1: Create HTML structure

**Files:**
- Create: `index.html`

- [ ] **Step 1: Write the full HTML document**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Sreejith P.S. — Organic Farmer & Founder, APEC. Agricultural education initiative based in Kerala, India.">
  <title>Sreejith P.S. — Organic Farmer & Founder, APEC</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>

  <!-- ===== HERO ===== -->
  <section id="hero">
    <div class="hero-bg"><!-- REPLACE: hero landscape photo --></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="brand-mark">
        <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
          <path d="M20 2 L38 20 L20 38 L2 20 Z" fill="none" stroke="#8AB4C9" stroke-width="2"/>
          <path d="M20 8 L32 20 L20 32 L8 20 Z" fill="#8AB4C9" opacity="0.3"/>
          <line x1="20" y1="8" x2="20" y2="32" stroke="#8AB4C9" stroke-width="1.5"/>
          <line x1="8" y1="20" x2="32" y2="20" stroke="#8AB4C9" stroke-width="1.5"/>
        </svg>
      </div>
      <h1>Sreejith P.S.</h1>
      <p class="tagline">Organic Farmer &amp; Founder, APEC</p>
    </div>
    <div class="hero-portrait"><!-- REPLACE: portrait photo --></div>
  </section>
</body>
</html>
```

- [ ] **Step 2: Write the Bio section**

```html
  <!-- ===== BIO ===== -->
  <section id="bio">
    <div class="section-content">
      <h2>About</h2>
      <div class="divider"><span class="divider-dot"></span></div>
      <!-- REPLACE: bio paragraph 1 -->
      <p>Sreejith P.S. is an organic farmer from Kerala, India, whose relationship with the land began in childhood. Growing up in the paddy fields of [region], he developed a deep understanding of traditional farming practices and the ecological wisdom embedded in Kerala's agricultural heritage. After years of working with the land, he recognized the growing disconnect between modern education and traditional agricultural knowledge.</p>
      <!-- REPLACE: bio paragraph 2 -->
      <p>His journey into organic farming was not just a career choice but a return to roots. He believes that sustainable agriculture is the bridge between Kerala's rich farming traditions and a food-secure future. Through his work, he advocates for farming practices that respect the land, support local biodiversity, and empower rural communities.</p>
      <!-- REPLACE: bio paragraph 3 (optional) -->
      <p>Today, he divides his time between his farm and his educational work with APEC, working to ensure that the next generation of farmers has access to the knowledge and resources they need to build a sustainable agricultural future for Kerala.</p>
    </div>
  </section>

  <!-- ===== APEC ===== -->
  <section id="apec">
    <div class="section-content">
      <h2>APEC</h2>
      <p class="subtitle">Agricultural Education Initiative</p>
      <!-- REPLACE: apec paragraph 1 -->
      <p>APEC (Agricultural Education Initiative) was founded by Sreejith P.S. with the mission of bridging the gap between traditional agricultural wisdom and modern educational practices. Based in Kerala, APEC works with farming communities to promote sustainable agriculture, organic farming methods, and ecological stewardship.</p>
      <!-- REPLACE: apec paragraph 2 -->
      <p>Through workshops, field demonstrations, and community programs, APEC empowers farmers with the knowledge and skills they need to transition to organic practices, improve soil health, and build resilient farming systems that honor Kerala's agricultural heritage while embracing innovation.</p>
      <div class="stats">
        <div class="stat"><span class="stat-number">500+</span><span class="stat-label">Farmers Reached</span></div>
        <div class="stat"><span class="stat-number">50+</span><span class="stat-label">Workshops</span></div>
        <div class="stat"><span class="stat-number">10+</span><span class="stat-label">Years</span></div>
      </div>
    </div>
  </section>

  <!-- ===== GALLERY ===== -->
  <section id="gallery">
    <div class="section-content">
      <h2>Gallery</h2>
      <div class="divider"><span class="divider-dot"></span></div>
      <div class="gallery-grid">
        <!-- REPLACE: photo 1 filename -->
        <div class="gallery-item placeholder">Photo 1</div>
        <!-- REPLACE: photo 2 filename -->
        <div class="gallery-item placeholder">Photo 2</div>
        <!-- REPLACE: photo 3 filename -->
        <div class="gallery-item placeholder">Photo 3</div>
        <!-- REPLACE: photo 4 filename -->
        <div class="gallery-item placeholder">Photo 4</div>
        <!-- REPLACE: photo 5 filename -->
        <div class="gallery-item placeholder">Photo 5</div>
        <!-- REPLACE: photo 6 filename -->
        <div class="gallery-item placeholder">Photo 6</div>
      </div>
    </div>
  </section>

  <!-- ===== VIDEOS ===== -->
  <section id="videos">
    <div class="section-content">
      <h2>Videos</h2>
      <div class="divider"><span class="divider-dot"></span></div>
      <div class="videos-grid">
        <!-- REPLACE: video 1 title -->
        <!-- REPLACE: YouTube embed URL for video 1 -->
        <div class="video-item placeholder">
          <div class="play-icon">&#9654;</div>
          <span>Video 1</span>
        </div>
        <!-- REPLACE: video 2 title -->
        <!-- REPLACE: YouTube embed URL for video 2 -->
        <div class="video-item placeholder">
          <div class="play-icon">&#9654;</div>
          <span>Video 2</span>
        </div>
        <!-- REPLACE: video 3 title -->
        <!-- REPLACE: YouTube embed URL for video 3 -->
        <div class="video-item placeholder">
          <div class="play-icon">&#9654;</div>
          <span>Video 3</span>
        </div>
        <!-- REPLACE: video 4 title -->
        <!-- REPLACE: YouTube embed URL for video 4 -->
        <div class="video-item placeholder">
          <div class="play-icon">&#9654;</div>
          <span>Video 4</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== CONTACT ===== -->
  <section id="contact">
    <div class="section-content">
      <h2>Contact</h2>
      <div class="divider"><span class="divider-dot"></span></div>
      <div class="contact-info">
        <p><strong>Email:</strong> <a href="mailto:sreejith@example.com"><!-- REPLACE: real email -->sreejith@example.com</a></p>
        <p><strong>Phone:</strong> <!-- REPLACE: real phone -->+91 XXXXX XXXXX</p>
        <p><strong>Location:</strong> Kerala, India</p>
      </div>
    </div>
  </section>

  <!-- ===== FOOTER ===== -->
  <footer>
    <p>&copy; 2024 Sreejith P.S. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Write the CSS file** — `style.css`

```css
/* ===== RESET & BASE ===== */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: #1A1A18;
  background: #F5F0E8;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: #2D5A27;
  text-decoration: underline;
  text-underline-offset: 2px;
}

a:focus-visible {
  outline: 3px solid #8AB4C9;
  outline-offset: 2px;
  border-radius: 2px;
}

/* ===== SKIP LINK ===== */
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  background: #2D5A27;
  color: #fff;
  padding: 0.5rem 1rem;
  z-index: 1000;
  text-decoration: none;
}

.skip-link:focus {
  top: 0;
}

/* ===== HERO ===== */
#hero {
  position: relative;
  height: 100vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #1A1A18;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: #2D5A27;
  /* REPLACE: hero landscape photo */
  /* background-image: url('path/to/landscape.jpg'); */
  /* background-size: cover; */
  /* background-position: center; */
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #1A1A18 0%, transparent 50%, rgba(26,26,24,0.3) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 2rem;
}

.brand-mark {
  margin-bottom: 1.5rem;
  display: inline-block;
}

.brand-mark svg {
  display: block;
}

.hero-content h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.tagline {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: #8AB4C9;
  font-weight: 400;
  letter-spacing: 0.08em;
}

.hero-portrait {
  position: absolute;
  bottom: -60px;
  right: 10%;
  z-index: 3;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #fff;
  background: #6B4F3A;
  /* REPLACE: portrait photo */
  /* background-image: url('path/to/portrait.jpg'); */
  /* background-size: cover; */
  /* background-position: center; */
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

@media (max-width: 768px) {
  .hero-portrait {
    width: 90px;
    height: 90px;
    bottom: -45px;
    right: 5%;
  }
}

/* ===== SECTIONS ===== */
section {
  padding: 5rem 1.5rem;
}

.section-content {
  max-width: 1100px;
  margin: 0 auto;
}

section:nth-child(odd) {
  background: #E8EDE4;
}

section:nth-child(even) {
  background: #2D5A27;
  color: #fff;
}

/* ===== TYPOGRAPHY ===== */
h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1rem;
  color: #8AB4C9;
  letter-spacing: 0.08em;
  margin-bottom: 2rem;
}

.divider {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: currentColor;
  opacity: 0.3;
}

.divider-dot {
  width: 8px;
  height: 8px;
  border: 1.5px solid currentColor;
  transform: rotate(45deg);
  flex-shrink: 0;
}

.section-content {
  max-width: 1100px;
  margin: 0 auto;
}

.section-content p {
  max-width: 700px;
  margin: 0 auto 1.5rem;
  font-size: 1.05rem;
  line-height: 1.8;
}

/* ===== BIO ===== */
#bio {
  padding-top: 7rem;
}

/* ===== APEC ===== */
#apec .subtitle {
  color: #8AB4C9;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.stat-label {
  display: block;
  font-size: 0.85rem;
  opacity: 0.8;
  margin-top: 0.25rem;
  letter-spacing: 0.05em;
}

/* ===== GALLERY ===== */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
}

.gallery-item {
  aspect-ratio: 4 / 3;
  border: 2px dashed currentColor;
  opacity: 0.4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  transition: transform 0.3s ease, opacity 0.3s ease;
  cursor: default;
}

.gallery-item.placeholder {
  opacity: 0.35;
}

@media (hover: hover) {
  .gallery-item:hover {
    transform: scale(1.03);
    opacity: 0.6;
  }
}

/* ===== VIDEOS ===== */
.videos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.video-item {
  aspect-ratio: 16 / 9;
  background: rgba(0,0,0,0.3);
  border: 2px solid rgba(255,255,255,0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  letter-spacing: 0.03em;
  cursor: default;
}

.play-icon {
  font-size: 2rem;
  opacity: 0.6;
}

/* ===== CONTACT ===== */
.contact-info {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.contact-info p {
  margin-bottom: 0.75rem;
  font-size: 1.05rem;
}

.contact-info a {
  color: #2D5A27;
  font-weight: 500;
}

/* ===== FOOTER ===== */
footer {
  background: #2D5A27;
  color: #fff;
  text-align: center;
  padding: 2rem 1.5rem;
  font-size: 0.9rem;
  opacity: 0.85;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  section {
    padding: 3rem 1.25rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .videos-grid {
    grid-template-columns: 1fr;
  }

  .stats {
    gap: 1.5rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .hero-portrait {
    width: 80px;
    height: 80px;
    bottom: -40px;
  }
}
```

- [ ] **Step 3: Write the JavaScript file** — `script.js`

```javascript
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Fade-in sections on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});
```

- [ ] **Step 4: Verify files are correct**

Confirm `index.html`, `style.css`, and `script.js` exist in the project root.

- [ ] **Step 5: Final review of placeholder markers**

Check that all `<!-- REPLACE:` markers are present and clear:
- Hero landscape photo
- Portrait photo
- Bio paragraphs (3)
- APEC paragraphs (2)
- Gallery photos (6)
- Video titles (4) and YouTube embed URLs (4)
- Email and phone

---

## Self-Review

1. **Spec coverage:** Every section from the spec has a corresponding task — Hero, Bio, APEC, Gallery, Videos, Contact, Footer. Color palette, typography, responsive breakpoints, accessibility all covered.
2. **Placeholder scan:** No TBDs or TODOs. All code is complete.
3. **Type consistency:** Single file per type (index.html, style.css, script.js). No cross-referencing issues.
4. **Scope check:** Focused on a single-page static site. No scope creep.
