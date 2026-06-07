const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function makeList(items) {
  return items.map((item) => `<li>${item}</li>`).join('');
}

function renderServices() {
  const grid = $('#servicesGrid');
  grid.innerHTML = services.map((service) => `
    <article class="service-card">
      <h3>${service.title}</h3>
      <ul class="tag-list">${makeList(service.items)}</ul>
    </article>
  `).join('');
}

function renderTests() {
  $('#testsList').innerHTML = makeList(tests);
}

function renderCounselors() {
  const grid = $('#counselorGrid');
  grid.innerHTML = counselors.map((person) => `
    <article class="counselor-card">
      <div class="counselor-top">
        <img src="${person.image}" alt="${person.name} ${person.role} 사진" loading="lazy" />
        <div>
          <h3>${person.name}</h3>
          <p class="role">${person.role}</p>
        </div>
      </div>
      <div class="counselor-body">
        ${person.qualifications.length ? `<details open><summary>자격</summary><ul>${makeList(person.qualifications)}</ul></details>` : ''}
        <details><summary>학력</summary><ul>${makeList(person.education)}</ul></details>
        <details><summary>주요 이력</summary><ul>${makeList(person.career)}</ul></details>
      </div>
    </article>
  `).join('');
}

function setSiteLinks() {
  const telLinks = $$('a[href^="tel:"]');
  telLinks.forEach((link) => link.href = `tel:${SITE.phone.replaceAll('-', '')}`);
  $('#testGuideLink').href = SITE.testGuideUrl;
  $('#blogLink').href = SITE.blogUrl;
  $('#footerBlog').href = SITE.blogUrl;
  $('#mapLink').href = SITE.naverMapUrl;
  $('#addressText').textContent = SITE.address;
  $('#footerAddress').textContent = SITE.address;
}

function initMobileNav() {
  const toggle = $('.nav-toggle');
  const nav = $('.nav');
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  $$('.nav a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

renderServices();
renderTests();
renderCounselors();
setSiteLinks();
initMobileNav();
