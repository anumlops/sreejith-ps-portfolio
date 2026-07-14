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

function convertYouTubeUrl(url) {
  if (!url) return '';
  let id = '';
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) { id = m[1]; break; }
  }
  return id ? `https://www.youtube.com/embed/${id}` : url;
}

function renderContent(data) {
  // Bio
  const bioEl = document.getElementById('bio-content');
  if (bioEl && data.bio) {
    const paragraphs = [data.bio.paragraph1, data.bio.paragraph2, data.bio.paragraph3].filter(Boolean);
    bioEl.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  // APEC
  const apecEl = document.getElementById('apec-content');
  if (apecEl && data.apec) {
    const paragraphs = [data.apec.paragraph1, data.apec.paragraph2].filter(Boolean);
    apecEl.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  // Stats
  const statsEl = document.getElementById('stats-content');
  if (statsEl && data.stats) {
    statsEl.innerHTML = data.stats.map(s =>
      `<div class="stat"><span class="stat-number">${s.number}</span><span class="stat-label">${s.label}</span></div>`
    ).join('');
  }

  // Gallery
  const galleryEl = document.getElementById('gallery-content');
  if (galleryEl && data.gallery) {
    galleryEl.innerHTML = data.gallery.map((item, i) => {
      if (item.filename) {
        return `<div class="gallery-item" style="background-image:url('${item.filename}');background-size:cover;background-position:center;border:none;opacity:1"></div>`;
      }
      return `<div class="gallery-item placeholder">Photo ${i + 1}</div>`;
    }).join('');
  }

  // Videos
  const videosEl = document.getElementById('videos-content');
  if (videosEl && data.videos) {
    videosEl.innerHTML = data.videos.map(v => {
      const embedUrl = convertYouTubeUrl(v.url);
      if (embedUrl) {
        return `<div class="video-item" style="overflow:hidden;padding:0;border:none;background:#000"><iframe src="${embedUrl}" style="width:100%;height:100%;border:none" allowfullscreen loading="lazy"></iframe></div>`;
      }
      return `<div class="video-item placeholder"><div class="play-icon">&#9654;</div><span>${v.title || 'Video'}</span></div>`;
    }).join('');
  }

  // Contact
  const contactEl = document.getElementById('contact-content');
  if (contactEl && data.contact) {
    contactEl.innerHTML = `
      <p><strong>Email:</strong> <a href="mailto:${data.contact.email}">${data.contact.email}</a></p>
      <p><strong>Phone:</strong> ${data.contact.phone}</p>
      <p><strong>Location:</strong> Kerala, India</p>
    `;
  }
}

// Load content from JSON
fetch('content.json')
  .then(r => {
    if (!r.ok) throw new Error('Failed to load content.json');
    return r.json();
  })
  .then(data => {
    renderContent(data);
    // Fade-in sections after content is rendered
    initScrollFade();
  })
  .catch(() => {
    initScrollFade();
  });

function initScrollFade() {
  const isMobile = window.innerWidth < 768;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: isMobile ? 0.05 : 0.1 });

  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
}
