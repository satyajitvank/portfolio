/**
 * Portfolio Dynamic Rendering & Interactive Handlers
 */

document.addEventListener('DOMContentLoaded', () => {
  initProfileData();
  initEducation();
  initCertifications();
  initSkills();
  initProjects();
  initExperience();
  initContactForm();
  initModalHandlers();
});

// 1. Initialize Profile Specs & Pillars
function initProfileData() {
  const p = PORTFOLIO_DATA.profile;

  // Bio
  const bioContainer = document.getElementById('bio-container');
  if (bioContainer && p.bio) {
    bioContainer.innerHTML = p.bio.map(paragraph => `<p>${paragraph}</p>`).join('');
  }

  // Quick specs
  const specsList = document.getElementById('specs-list');
  if (specsList && p.quickSpecs) {
    specsList.innerHTML = p.quickSpecs.map(spec => `
      <li class="spec-row">
        <span class="spec-label">${spec.label}</span>
        <span class="spec-value">${spec.value}</span>
      </li>
    `).join('');
  }

  // Pillars
  const pillarsGrid = document.getElementById('pillars-grid');
  if (pillarsGrid && p.pillars) {
    const icons = {
      server: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`,
      layout: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
      zap: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
    };

    pillarsGrid.innerHTML = p.pillars.map(pillar => `
      <div class="glass-card pillar-card reveal-on-scroll">
        <div class="pillar-icon-box">
          ${icons[pillar.icon] || icons.zap}
        </div>
        <h3 class="pillar-title">${pillar.title}</h3>
        <p class="pillar-desc">${pillar.desc}</p>
      </div>
    `).join('');
  }
}

// 2. Initialize Education Background
function initEducation() {
  const track = document.getElementById('education-track');
  if (!track || !PORTFOLIO_DATA.education) return;

  track.innerHTML = PORTFOLIO_DATA.education.map(item => `
    <div class="timeline-item reveal-on-scroll">
      <div class="timeline-node"></div>
      <div class="glass-card edu-card">
        <div class="edu-header">
          <div>
            <h3 class="edu-degree">${item.degree}</h3>
            <div class="edu-institution">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
              ${item.institution}
            </div>
          </div>
          <span class="edu-period">${item.period}</span>
        </div>

        ${item.honors ? `
          <div class="edu-honors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
            ${item.honors} (GPA: ${item.gpa})
          </div>
        ` : ''}

        <p class="edu-desc">${item.description}</p>

        ${item.coursework && item.coursework.length ? `
          <div class="coursework-box">
            <h4 class="coursework-title">Key Academic Coursework</h4>
            <div class="coursework-tags">
              ${item.coursework.map(c => `<span class="course-tag">${c}</span>`).join('')}
            </div>
          </div>
        ` : ''}

        ${item.capstone ? `
          <div class="capstone-box">
            <div class="capstone-label">Capstone & Research Highlight</div>
            <div class="capstone-title">${item.capstone.title}</div>
            <p class="capstone-summary">${item.capstone.summary}</p>
          </div>
        ` : ''}
      </div>
    </div>
  `).join('');
}

// 3. Initialize Certifications
function initCertifications() {
  const container = document.getElementById('certifications-list');
  if (!container || !PORTFOLIO_DATA.certifications) return;

  const iconSvgs = {
    cloud: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
    code: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    box: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`
  };

  container.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
    <div class="cert-item">
      <div class="cert-icon">
        ${iconSvgs[cert.badgeIcon] || iconSvgs.code}
      </div>
      <div class="cert-info">
        <span class="cert-title">${cert.title}</span>
        <span class="cert-issuer">${cert.issuer} • ${cert.date}</span>
        <span class="cert-meta">ID: ${cert.credentialId}</span>
      </div>
    </div>
  `).join('');
}

// 4. Initialize Skills Matrix with Filter Tabs & Progress Bars
function initSkills() {
  const grid = document.getElementById('skills-grid');
  const tabsContainer = document.getElementById('skills-tabs');
  const exploringContainer = document.getElementById('exploring-badges');

  if (!grid || !PORTFOLIO_DATA.skills) return;

  // Render "Currently Exploring"
  if (exploringContainer && PORTFOLIO_DATA.currentlyExploring) {
    exploringContainer.innerHTML = PORTFOLIO_DATA.currentlyExploring.map(item => `
      <div class="explore-pill">
        <span>${item.tag}</span>
        <strong>${item.name}</strong>
      </div>
    `).join('');
  }

  function renderSkillCards(filter = 'all') {
    const list = filter === 'all' 
      ? PORTFOLIO_DATA.skills 
      : PORTFOLIO_DATA.skills.filter(s => s.category === filter);

    grid.innerHTML = list.map(s => `
      <div class="glass-card skill-card reveal-on-scroll">
        <div class="skill-card-top">
          <span class="skill-name">${s.name}</span>
          <span class="skill-exp">${s.exp}</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" style="width: ${s.level}%;"></div>
        </div>
        <div class="skill-meta-footer">
          <span>Proficiency</span>
          <span class="font-mono">${s.level}%</span>
        </div>
      </div>
    `).join('');

    // Trigger animation for skill bars
    setTimeout(() => {
      document.querySelectorAll('.skill-bar-fill').forEach(el => {
        const target = el.style.width;
        el.style.width = '0%';
        requestAnimationFrame(() => {
          el.style.width = target;
        });
      });
    }, 50);
  }

  renderSkillCards('all');

  // Tab click handler
  if (tabsContainer) {
    tabsContainer.querySelectorAll('.skill-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        tabsContainer.querySelectorAll('.skill-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-skill-filter');
        renderSkillCards(filter);
      });
    });
  }
}

// 5. Initialize Featured Projects & Filters
function initProjects() {
  const grid = document.getElementById('projects-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (!grid || !PORTFOLIO_DATA.projects) return;

  function renderProjects(category = 'all') {
    const filtered = category === 'all'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter(p => p.category === category);

    grid.innerHTML = filtered.map(p => `
      <div class="glass-card project-card reveal-on-scroll" data-project-id="${p.id}">
        <div class="project-thumbnail-wrapper">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
          <div class="project-overlay-actions">
            <button class="btn btn-sm btn-primary view-project-modal-btn" data-id="${p.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              Case Study
            </button>
            <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live Demo
            </a>
          </div>
        </div>

        <div class="project-body">
          <div>
            <span class="project-category-tag">${p.categoryLabel}</span>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-summary">${p.summary}</p>
          </div>

          <div>
            <div class="project-tags-list">
              ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
            </div>

            <div class="project-footer">
              <button class="btn btn-sm btn-outline view-project-modal-btn" data-id="${p.id}">
                Details & Architecture
              </button>
              <div class="project-links">
                <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="icon-link" aria-label="GitHub source">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </a>
                <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="icon-link" aria-label="Live demo link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click handlers to modal buttons
    grid.querySelectorAll('.view-project-modal-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-id');
        openProjectModal(id);
      });
    });
  }

  renderProjects('all');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });
  });
}

// 6. Project Modal Logic
function initModalHandlers() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal) return;

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  const modal = document.getElementById('project-modal');
  const container = document.getElementById('modal-body-container');

  if (!project || !modal || !container) return;

  container.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="modal-hero-img" />
    <div class="modal-content">
      <span class="project-category-tag">${project.categoryLabel}</span>
      <h2 style="font-size: 1.8rem; margin: 6px 0 14px 0;">${project.title}</h2>
      <p style="font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px;">${project.summary}</p>

      <div class="modal-metrics-grid">
        ${project.metrics.map(m => `
          <div class="modal-metric-card">
            <div class="modal-metric-val">${m.value}</div>
            <div class="modal-metric-lbl">${m.label}</div>
          </div>
        `).join('')}
      </div>

      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 1.05rem; margin-bottom: 12px;">Technical Architecture Highlights</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
          ${project.highlights.map(h => `
            <li style="position: relative; padding-left: 20px; font-size: 0.93rem; color: var(--text-secondary);">
              <span style="position: absolute; left: 0; color: var(--accent-primary);">▹</span>
              ${h}
            </li>
          `).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 28px;">
        <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 10px;">Tech Stack</h4>
        <div class="project-tags-list">
          ${project.tags.map(t => `<span class="project-tag" style="padding: 5px 12px; font-size: 0.85rem;">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 14px; flex-wrap: wrap;">
        <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Visit Live System
        </a>
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          Inspect Codebase
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 7. Initialize Experience Timeline
function initExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container || !PORTFOLIO_DATA.experience) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
    <div class="exp-item reveal-on-scroll">
      <div class="exp-node"></div>
      <div class="glass-card exp-card">
        <div class="exp-header">
          <div>
            <h3 class="exp-role">${exp.role}</h3>
            <span class="exp-company">${exp.company} • ${exp.location}</span>
          </div>
          <span class="exp-period">${exp.period}</span>
        </div>
        <p style="font-size: 0.95rem; margin-bottom: 12px;">${exp.description}</p>
        <ul class="exp-achievements">
          ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// 8. Contact Form Handling & Copy Email Action
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusBox = document.getElementById('form-status');
  const copyBtn = document.getElementById('copy-email-btn');

  // Copy email action
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = PORTFOLIO_DATA.profile.social.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast('✓ Email address copied to clipboard!');
      }).catch(() => {
        showToast('Email: ' + email);
      });
    });
  }

  // Form submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('sender-name').value.trim();
      const email = document.getElementById('sender-email').value.trim();
      const message = document.getElementById('sender-message').value.trim();

      if (!name || !email || !message) {
        if (statusBox) {
          statusBox.className = 'form-status error';
          statusBox.textContent = 'Please fill out all required fields.';
        }
        return;
      }

      // Simulated sending state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>
        Transmitting message...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        if (statusBox) {
          statusBox.className = 'form-status success';
          statusBox.textContent = 'Thank you! Your message has been sent successfully. I will get back to you promptly.';
        }

        showToast('Message dispatched successfully!');

        setTimeout(() => {
          if (statusBox) statusBox.style.display = 'none';
        }, 6000);
      }, 1000);
    });
  }
}

// Toast helper
function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-primary);"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
