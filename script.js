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

// ===== ADMIN =====
const ADMIN_USER = 'anu';
const ADMIN_PASS = '986232';

function adminLogin() {
  const u = document.getElementById('admin-user').value;
  const p = document.getElementById('admin-pass').value;
  const err = document.getElementById('admin-login-err');
  if (u === ADMIN_USER && p === ADMIN_PASS) {
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('admin-editor').style.display = 'block';
    err.style.display = 'none';
    initAdmin();
  } else {
    err.textContent = 'Invalid username or password.';
    err.style.display = 'block';
  }
}

function adminLogout() {
  document.getElementById('admin-login').style.display = 'block';
  document.getElementById('admin-editor').style.display = 'none';
  document.getElementById('admin-user').value = '';
  document.getElementById('admin-pass').value = '';
}

function initAdmin() {
  initAdminGallery();
  initAdminVideos();
  loadAdminContent();
  attachAdminPreviews();
}

function initAdminGallery() {
  const container = document.getElementById('admin-gallery');
  container.innerHTML = '';
  for (let i = 1; i <= 6; i++) {
    const div = document.createElement('div');
    div.className = 'admin-field';
    div.innerHTML = `<label>Photo ${i}</label><div style="display:flex;gap:0.5rem;align-items:center"><input type="text" class="ag-input" placeholder="images/photo${i}.jpg"><div class="thumb"></div></div>`;
    container.appendChild(div);
  }
  container.querySelectorAll('.ag-input').forEach(inp => {
    inp.addEventListener('input', function() {
      const thumb = this.parentElement.querySelector('.thumb');
      if (this.value.trim()) {
        thumb.innerHTML = `<img src="${this.value.trim()}" alt="" onerror="this.parentElement.innerHTML=''">`;
      } else {
        thumb.innerHTML = '';
      }
      updateAdminPreview();
    });
  });
}

function initAdminVideos() {
  const container = document.getElementById('admin-videos');
  container.innerHTML = '';
  for (let i = 1; i <= 4; i++) {
    const div = document.createElement('div');
    div.className = 'admin-field';
    div.innerHTML = `<label>Video ${i}</label><div style="display:flex;gap:0.5rem;align-items:center"><input type="text" class="av-title" placeholder="Title" style="width:35%;flex-shrink:0"><input type="text" class="av-url" placeholder="YouTube URL or ID"><span class="vstat"></span></div>`;
    container.appendChild(div);
  }
  container.querySelectorAll('.av-url').forEach(inp => {
    inp.addEventListener('input', function() {
      const stat = this.parentElement.querySelector('.vstat');
      const embed = convertYouTubeUrl(this.value.trim());
      stat.textContent = embed && this.value.trim() ? '✓' : this.value.trim() ? '✗' : '';
      updateAdminPreview();
    });
  });
}

function loadAdminContent() {
  fetch('content.json?_=' + Date.now())
    .then(r => r.json())
    .then(data => {
      if (data.bio) {
        document.getElementById('abio1').value = data.bio.paragraph1 || '';
        document.getElementById('abio2').value = data.bio.paragraph2 || '';
        document.getElementById('abio3').value = data.bio.paragraph3 || '';
      }
      if (data.apec) {
        document.getElementById('aapec1').value = data.apec.paragraph1 || '';
        document.getElementById('aapec2').value = data.apec.paragraph2 || '';
      }
      if (data.stats) {
        document.getElementById('astat1n').value = data.stats[0]?.number || '';
        document.getElementById('astat1l').value = data.stats[0]?.label || '';
        document.getElementById('astat2n').value = data.stats[1]?.number || '';
        document.getElementById('astat2l').value = data.stats[1]?.label || '';
        document.getElementById('astat3n').value = data.stats[2]?.number || '';
        document.getElementById('astat3l').value = data.stats[2]?.label || '';
      }
      if (data.gallery) {
        const inputs = document.querySelectorAll('.ag-input');
        inputs.forEach((inp, i) => { if (data.gallery[i]) inp.value = data.gallery[i].filename || ''; inp.dispatchEvent(new Event('input')); });
      }
      if (data.videos) {
        const titles = document.querySelectorAll('.av-title');
        const urls = document.querySelectorAll('.av-url');
        titles.forEach((t, i) => { if (data.videos[i]) t.value = data.videos[i].title || ''; });
        urls.forEach((u, i) => { if (data.videos[i]) u.value = data.videos[i].url || ''; u.dispatchEvent(new Event('input')); });
      }
      if (data.contact) {
        document.getElementById('acontact-email').value = data.contact.email || '';
        document.getElementById('acontact-phone').value = data.contact.phone || '';
      }
      updateAdminPreview();
    })
    .catch(() => {});
}

function getAdminData() {
  const galleryInputs = document.querySelectorAll('.ag-input');
  const videoTitles = document.querySelectorAll('.av-title');
  const videoUrls = document.querySelectorAll('.av-url');
  return {
    bio: {
      paragraph1: document.getElementById('abio1').value,
      paragraph2: document.getElementById('abio2').value,
      paragraph3: document.getElementById('abio3').value
    },
    apec: {
      paragraph1: document.getElementById('aapec1').value,
      paragraph2: document.getElementById('aapec2').value
    },
    stats: [
      { number: document.getElementById('astat1n').value, label: document.getElementById('astat1l').value },
      { number: document.getElementById('astat2n').value, label: document.getElementById('astat2l').value },
      { number: document.getElementById('astat3n').value, label: document.getElementById('astat3l').value }
    ],
    gallery: Array.from(galleryInputs).map(inp => ({ filename: inp.value })),
    videos: Array.from(videoTitles).map((t, i) => ({ title: t.value, url: videoUrls[i].value })),
    contact: {
      email: document.getElementById('acontact-email').value,
      phone: document.getElementById('acontact-phone').value
    }
  };
}

function updateAdminPreview() {
  const data = getAdminData();
  document.getElementById('aprev-bio').innerHTML = [data.bio.paragraph1, data.bio.paragraph2, data.bio.paragraph3].filter(Boolean).map(p => `<p>${p}</p>`).join('');
  document.getElementById('aprev-apec').innerHTML = [data.apec.paragraph1, data.apec.paragraph2].filter(Boolean).map(p => `<p>${p}</p>`).join('');
  document.getElementById('aprev-stats').innerHTML = data.stats.map(s => `<div class="si"><div class="sn">${s.number}</div><div class="sl">${s.label}</div></div>`).join('');
  const gc = data.gallery.filter(g => g.filename).length;
  document.getElementById('aprev-gallery').textContent = gc > 0 ? gc + ' of 6 images set' : 'No images set';
  const vc = data.videos.filter(v => v.url).length;
  document.getElementById('aprev-videos').textContent = vc > 0 ? vc + ' of 4 videos set' : 'No videos set';
  document.getElementById('aprev-contact').innerHTML = `<p>Email: ${data.contact.email || '(not set)'}</p><p>Phone: ${data.contact.phone || '(not set)'}</p>`;
}

function attachAdminPreviews() {
  document.querySelectorAll('#admin-editor textarea, #admin-editor input').forEach(el => {
    el.addEventListener('input', updateAdminPreview);
  });
}

function setAdminStatus(msg, type) {
  const el = document.getElementById('admin-status');
  el.className = 'admin-status ' + type;
  el.textContent = msg;
}

function adminValidate() {
  const errors = [];
  if (!document.getElementById('abio1').value.trim()) errors.push('Bio paragraph 1 is required.');
  if (!document.getElementById('aapec1').value.trim()) errors.push('APEC paragraph 1 is required.');
  if (!document.getElementById('acontact-email').value.trim()) errors.push('Email is required.');
  if (!document.getElementById('acontact-phone').value.trim()) errors.push('Phone is required.');
  document.querySelectorAll('.av-url').forEach((inp, i) => {
    const val = inp.value.trim();
    if (val && !convertYouTubeUrl(val)) errors.push('Video ' + (i + 1) + ': "' + val + '" is not a valid YouTube URL.');
  });
  return errors;
}

async function adminSave() {
  const token = document.getElementById('admin-token').value.trim();
  const owner = document.getElementById('admin-owner').value.trim();
  const repo = document.getElementById('admin-repo').value.trim();
  if (!token) { setAdminStatus('Enter your GitHub token.', 'error'); return; }
  if (!owner || !repo) { setAdminStatus('Enter owner and repo names.', 'error'); return; }
  const errors = adminValidate();
  if (errors.length > 0) { setAdminStatus('Errors:\n- ' + errors.join('\n- '), 'error'); return; }
  const btn = document.querySelector('.admin-actions .btn-primary');
  btn.disabled = true;
  btn.textContent = 'Publishing...';
  setAdminStatus('Pushing to GitHub...', 'info');
  const data = getAdminData();
  const content = JSON.stringify(data, null, 2);
  const encoded = btoa(unescape(encodeURIComponent(content)));
  try {
    const getRes = await fetch('https://api.github.com/repos/' + owner + '/' + repo + '/contents/content.json', {
      headers: { Authorization: 'token ' + token, Accept: 'application/vnd.github.v3+json' }
    });
    let sha = null;
    if (getRes.ok) { const meta = await getRes.json(); sha = meta.sha; }
    else if (getRes.status !== 404) { const err = await getRes.json().catch(() => ({})); throw new Error(err.message || 'GitHub API error: ' + getRes.status); }
    const body = { message: 'Update content.json via admin dashboard', content: encoded, branch: 'main' };
    if (sha) body.sha = sha;
    const putRes = await fetch('https://api.github.com/repos/' + owner + '/' + repo + '/contents/content.json', {
      method: 'PUT',
      headers: { Authorization: 'token ' + token, 'Content-Type': 'application/json', Accept: 'application/vnd.github.v3+json' },
      body: JSON.stringify(body)
    });
    if (!putRes.ok) { const err = await putRes.json().catch(() => ({})); throw new Error(err.message || 'GitHub API error: ' + putRes.status); }
    setAdminStatus('Published! Vercel will redeploy in ~30-60s.', 'success');
  } catch (e) {
    setAdminStatus('Failed: ' + e.message, 'error');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Save & Publish';
  }
}

function adminDownload() {
  const data = getAdminData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'content.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
}

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
