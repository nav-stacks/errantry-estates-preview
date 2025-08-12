
(function(){
  const toggle = document.querySelector('.menu-toggle');
  const mobile = document.querySelector('.mobile-menu');
  if (toggle && mobile){
    toggle.addEventListener('click', ()=>{
      mobile.style.display = (mobile.style.display==='flex'?'none':'flex');
      mobile.style.flexDirection = 'column';
    });
  }
  const cbOpeners = document.querySelectorAll('[data-open="callback"]');
  const cbModal = document.getElementById('callback-modal');
  const cbClosers = document.querySelectorAll('[data-close="callback"]');
  cbOpeners.forEach(el=>el.addEventListener('click', ()=> cbModal.classList.add('active')));
  cbClosers.forEach(el=>el.addEventListener('click', ()=> cbModal.classList.remove('active')));
  const cbForm = document.getElementById('callback-form');
  if (cbForm){
    cbForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Demo only — we\'ll wire this to your email when you\'re ready.');
      cbModal.classList.remove('active');
    });
  }
  const propModal = document.getElementById('property-modal');
  const propImage = document.getElementById('prop-image');
  const propTitle = document.getElementById('prop-title');
  const propList  = document.getElementById('prop-list');
  const propCards = document.querySelectorAll('.card.property');
  const propClosers = document.querySelectorAll('[data-close="property"]');
  propCards.forEach(card=>{
    card.addEventListener('click', (ev)=>{
      const btn = ev.target.closest('button'); // allow clicking button
      if (!btn) return; // only open on button click to avoid accidental opens
      const data = JSON.parse(card.getAttribute('data-prop'));
      propTitle.textContent = data.title;
      propImage.src = data.image;
      propList.innerHTML = data.details.map(d=>'<li>'+d+'</li>').join('');
      propModal.classList.add('active');
    });
  });
  propClosers.forEach(el=>el.addEventListener('click', ()=> propModal.classList.remove('active')));
  const links = document.querySelectorAll('a[href$=".html"]');
  links.forEach(a=>{
    a.addEventListener('click', (e)=>{
      if (e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      document.body.classList.remove('fade-in');
      document.body.style.animation = 'none';
      setTimeout(()=>{ window.location.href = a.getAttribute('href'); }, 50);
    });
  });
  const contactForm = document.getElementById('contact-form');
  if (contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Demo only — not wired yet.');
    });
  }
})();
