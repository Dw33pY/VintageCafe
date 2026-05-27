/* ================================================
   VINTAGE CAFE — MAIN JAVASCRIPT
   ================================================ */


// ─── PRELOADER ───
const Preloader = {
  init() {
    const preloader = document.querySelector('.preloader');
    const brand = document.querySelector('.preloader-brand');
    if (!preloader) return;
    if (brand) gsap.to(brand, { opacity: 1, duration: 0.6, delay: 0.2 });
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
        document.body.style.overflow = '';
        if (typeof HeroAnim !== 'undefined') HeroAnim.play();
        Reveal.init();
      }, 2200);
    });
  }
};

// ─── NAVBAR ───
const Navbar = {
  init() {
    this.navbar = document.querySelector('.navbar');
    this.toggle = document.querySelector('.menu-toggle');
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.links = document.querySelectorAll('.navbar-link, .mobile-menu-link');
    if (!this.navbar) return;
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    this.onScroll();
    if (this.toggle && this.mobileMenu) this.toggle.addEventListener('click', () => this.toggleMenu());
    this.links.forEach(link => link.addEventListener('click', () => this.closeMenu()));
    this.setActiveLink();
  },
  onScroll() { this.navbar.classList.toggle('scrolled', window.scrollY > 80); },
  toggleMenu() {
    this.toggle.classList.toggle('active');
    this.mobileMenu.classList.toggle('open');
    document.body.style.overflow = this.mobileMenu.classList.contains('open') ? 'hidden' : '';
  },
  closeMenu() {
    if (this.toggle) this.toggle.classList.remove('active');
    if (this.mobileMenu) this.mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  },
  setActiveLink() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-link, .mobile-menu-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === current || (current === '' && href === 'index.html')) link.classList.add('active');
    });
  }
};

// ─── STATUS INDICATOR ───
// Shows Open/Closed based on current time (7AM–3PM daily)
const StatusIndicator = {
  init() {
    const badges = document.querySelectorAll('.status-badge');
    if (!badges.length) return;
    const now = new Date();
    const hour = now.getHours();
    // Open 7:00 AM to 3:00 PM
    const isOpen = hour >= 7 && hour < 15;

    badges.forEach(badge => {
      badge.classList.remove('status-badge-open', 'status-badge-closed');
      if (isOpen) {
        badge.classList.add('status-badge-open');
        badge.innerHTML = '<span class="status-dot"></span>Open Now';
      } else {
        badge.classList.add('status-badge-closed');
        badge.innerHTML = '<span class="status-dot"></span>Closed — Opens at 7:00 AM';
      }
    });
  }
};

// ─── SCROLL REVEAL ───
const Reveal = {
  init() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;
    gsap.registerPlugin(ScrollTrigger);
    elements.forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        delay: parseFloat(el.dataset.delay) || 0
      });
    });
  }
};

// ─── HERO ANIMATION ───
const HeroAnim = {
  timeline: null,
  init() {
    const heroTag = document.querySelector('.hero-tag');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroActions = document.querySelector('.hero-actions');
    const heroBg = document.querySelector('.hero-bg img');
    if (!heroTitle) return;
    this.timeline = gsap.timeline({ paused: true });
    this.timeline
      .fromTo(heroTag, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
      .fromTo(heroTitle, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.3')
      .fromTo(heroSubtitle, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.5')
      .fromTo(heroActions, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');
    if (heroBg) {
      gsap.to(heroBg, { yPercent: 15, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.5 } });
    }
  },
  play() { if (this.timeline) this.timeline.play(); }
};

// ─── INFINITE MARQUEE ───
const Marquee = {
  speed: 35,
  position: 0,
  halfWidth: 0,
  isPaused: false,
  isDragging: false,
  hasDragged: false,
  dragStartX: 0,
  dragStartPosition: 0,
  lastTimestamp: 0,
  rafId: null,
  resumeTimer: null,

  init() {
    this.wrapper = document.querySelector('.dishes-marquee-wrapper');
    this.track = document.querySelector('.dishes-marquee');
    if (!this.wrapper || !this.track) return;
    this.track.style.animation = 'none';
    const measure = () => { this.halfWidth = this.track.scrollWidth / 2; };
    measure();
    window.addEventListener('resize', measure);
    this.wrapper.addEventListener('mouseenter', () => { if (!this.isDragging) this.isPaused = true; });
    this.wrapper.addEventListener('mouseleave', () => { if (!this.isDragging) this.isPaused = false; });
    this.wrapper.addEventListener('mousedown', (e) => this.onDown(e.clientX));
    this.wrapper.addEventListener('touchstart', (e) => this.onDown(e.touches[0].clientX), { passive: true });
    window.addEventListener('mousemove', (e) => this.onMove(e.clientX));
    window.addEventListener('touchmove', (e) => this.onMove(e.touches[0].clientX), { passive: true });
    window.addEventListener('mouseup', () => this.onUp());
    window.addEventListener('touchend', () => this.onUp());
    this.wrapper.addEventListener('click', (e) => { if (this.hasDragged) e.preventDefault(); }, true);
    this.rafId = requestAnimationFrame((t) => this.animate(t));
  },
  onDown(x) { this.isDragging = true; this.hasDragged = false; this.isPaused = true; this.dragStartX = x; this.dragStartPosition = this.position; this.wrapper.style.cursor = 'grabbing'; clearTimeout(this.resumeTimer); },
  onMove(x) { if (!this.isDragging) return; const delta = x - this.dragStartX; if (Math.abs(delta) > 4) this.hasDragged = true; this.position = this.dragStartPosition + delta; this.applyPosition(); },
  onUp() { if (!this.isDragging) return; this.isDragging = false; this.wrapper.style.cursor = ''; this.resumeTimer = setTimeout(() => { if (!this.isDragging) this.isPaused = false; }, 2500); },
  applyPosition() { if (this.halfWidth <= 0) return; while (this.position <= -this.halfWidth) this.position += this.halfWidth; while (this.position > 0) this.position -= this.halfWidth; this.track.style.transform = 'translateX(' + this.position + 'px)'; },
  animate(timestamp) { if (!this.lastTimestamp) this.lastTimestamp = timestamp; const delta = timestamp - this.lastTimestamp; this.lastTimestamp = timestamp; if (!this.isPaused && !this.isDragging && this.halfWidth > 0) { this.position -= (this.speed * delta) / 1000; this.applyPosition(); } this.rafId = requestAnimationFrame((t) => this.animate(t)); }
};


// ─── CART SYSTEM ───
const Cart = {
  items: [],
  init() {
    this.items = JSON.parse(localStorage.getItem('vc-cart')) || [];
    this.overlay = document.querySelector('.cart-overlay');
    this.drawer = document.querySelector('.cart-drawer');
    this.body = document.querySelector('.cart-body');
    this.totalEl = document.querySelector('.cart-total-amount');
    this.badge = document.querySelector('.cart-badge');
    this.checkoutModal = document.querySelector('.checkout-modal-overlay');
    document.querySelectorAll('.cart-btn').forEach(btn => btn.addEventListener('click', () => this.open()));
    if (this.overlay) this.overlay.addEventListener('click', () => this.close());
    const closeBtn = document.querySelector('.cart-close');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());
    const checkoutBtn = document.querySelector('.cart-checkout-btn');
    if (checkoutBtn) checkoutBtn.addEventListener('click', () => this.openCheckout());
    if (this.checkoutModal) this.checkoutModal.addEventListener('click', (e) => { if (e.target === this.checkoutModal) this.closeCheckout(); });
    const closeModalBtn = document.querySelector('.checkout-modal-close');
    if (closeModalBtn) closeModalBtn.addEventListener('click', () => this.closeCheckout());
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) checkoutForm.addEventListener('submit', (e) => this.submitOrder(e));
    this.updateUI();
  },
  addItem(menuItem) { const existing = this.items.find(i => i.id === menuItem.id); if (existing) { existing.quantity++; } else { this.items.push({ ...menuItem, quantity: 1 }); } this.save(); this.updateUI(); this.showToast('Added ' + menuItem.name + ' to order'); },
  removeItem(id) { this.items = this.items.filter(i => i.id !== id); this.save(); this.updateUI(); },
  updateQuantity(id, delta) { const item = this.items.find(i => i.id === id); if (item) { item.quantity += delta; if (item.quantity <= 0) { this.removeItem(id); return; } } this.save(); this.updateUI(); },
  getTotal() { return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0); },
  getCount() { return this.items.reduce((sum, item) => sum + item.quantity, 0); },
  save() { localStorage.setItem('vc-cart', JSON.stringify(this.items)); },
  clear() { this.items = []; this.save(); this.updateUI(); },
  updateUI() {
    if (this.badge) { const count = this.getCount(); this.badge.textContent = count; this.badge.classList.toggle('visible', count > 0); }
    if (this.body) {
      if (this.items.length === 0) {
        this.body.innerHTML = '<div class="cart-empty"><i data-lucide="shopping-bag" style="width:48px;height:48px;"></i><p>Your order is empty</p><a href="services.html" class="btn btn-dark" style="font-size:0.75rem;padding:0.7rem 1.5rem;">Browse Menu</a></div>';
      } else {
        this.body.innerHTML = this.items.map(item =>
          '<div class="cart-item"><div class="cart-item-info"><div class="cart-item-name">' + item.name + '</div><div class="cart-item-price">$' + item.price.toFixed(2) + '</div></div><div class="cart-item-qty"><button onclick="Cart.updateQuantity(\'' + item.id + '\', -1)" aria-label="Decrease"><i data-lucide="minus" style="width:14px;height:14px;"></i></button><span>' + item.quantity + '</span><button onclick="Cart.updateQuantity(\'' + item.id + '\', 1)" aria-label="Increase"><i data-lucide="plus" style="width:14px;height:14px;"></i></button></div><button class="cart-item-remove" onclick="Cart.removeItem(\'' + item.id + '\')" aria-label="Remove"><i data-lucide="x" style="width:16px;height:16px;"></i></button></div>'
        ).join('');
      }
    }
    if (this.totalEl) this.totalEl.textContent = '$' + this.getTotal().toFixed(2);
    this.updateMenuButtons();
    if (typeof lucide !== 'undefined') lucide.createIcons();
  },
  updateMenuButtons() {
    document.querySelectorAll('.menu-item').forEach(el => {
      const id = el.dataset.itemId;
      const addBtn = el.querySelector('.menu-item-add');
      const qtyEl = el.querySelector('.menu-item-qty');
      const cartItem = this.items.find(i => i.id === id);
      if (cartItem && addBtn && qtyEl) { addBtn.style.display = 'none'; qtyEl.style.display = 'flex'; const qtySpan = qtyEl.querySelector('span'); if (qtySpan) qtySpan.textContent = cartItem.quantity; }
      else if (addBtn && qtyEl) { addBtn.style.display = 'flex'; qtyEl.style.display = 'none'; }
    });
  },
  open() { if (this.overlay) this.overlay.classList.add('open'); if (this.drawer) this.drawer.classList.add('open'); document.body.style.overflow = 'hidden'; },
  close() { if (this.overlay) this.overlay.classList.remove('open'); if (this.drawer) this.drawer.classList.remove('open'); document.body.style.overflow = ''; },
  openCheckout() {
    if (this.items.length === 0) { this.showToast('Add items to your order first'); return; }
    this.close();
    // Populate order summary before opening
    this.populateCheckoutSummary();
    setTimeout(() => { if (this.checkoutModal) this.checkoutModal.classList.add('open'); document.body.style.overflow = 'hidden'; }, 300);
  },
  closeCheckout() { if (this.checkoutModal) this.checkoutModal.classList.remove('open'); document.body.style.overflow = ''; },
  populateCheckoutSummary() {
    const summaryList = document.querySelector('.checkout-summary-list');
    const summaryTotal = document.querySelector('.checkout-summary-total');
    if (!summaryList) return;
    summaryList.innerHTML = this.items.map(item =>
      '<div class="checkout-summary-item"><span class="checkout-summary-item-name">' + item.name + '<span>x' + item.quantity + '</span></span><span class="checkout-summary-item-price">$' + (item.price * item.quantity).toFixed(2) + '</span></div>'
    ).join('');
    if (summaryTotal) summaryTotal.textContent = '$' + this.getTotal().toFixed(2);
  },
  submitOrder(e) {
    e.preventDefault();
    const form = e.target;
    let valid = true;
    [{ el: form.querySelector('[name="name"]'), msg: 'Please enter your name' }, { el: form.querySelector('[name="phone"]'), msg: 'Please enter your phone number' }].forEach(field => {
      const group = field.el.closest('.form-group');
      if (!field.el.value.trim()) { group.classList.add('error'); group.querySelector('.form-error').textContent = field.msg; valid = false; }
      else { group.classList.remove('error'); }
    });
    if (!valid) return;
    const formEl = document.querySelector('.checkout-form');
    const summaryEl = document.querySelector('.checkout-summary');
    const confirmEl = document.querySelector('.order-confirmation');
    if (formEl) formEl.style.display = 'none';
    if (summaryEl) summaryEl.style.display = 'none';
    if (confirmEl) confirmEl.classList.add('visible');
    this.clear();
    setTimeout(() => { this.closeCheckout(); if (formEl) formEl.style.display = ''; if (summaryEl) summaryEl.style.display = ''; if (confirmEl) confirmEl.classList.remove('visible'); form.reset(); }, 4000);
  },
  showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast'; toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('visible'));
    setTimeout(() => { toast.classList.remove('visible'); setTimeout(() => toast.remove(), 500); }, 2500);
  }
};

// ─── MENU PAGE ───
const MenuPage = {
  init() {
    this.tabs = document.querySelectorAll('.menu-tab');
    this.categories = document.querySelectorAll('.menu-category');
    if (!this.tabs.length) return;
    this.tabs.forEach(tab => { tab.addEventListener('click', () => { this.setActiveTab(tab); this.showCategory(tab.dataset.category); }); });
    document.querySelectorAll('.menu-item-add').forEach(btn => {
      btn.addEventListener('click', () => { const item = btn.closest('.menu-item'); Cart.addItem({ id: item.dataset.itemId, name: item.dataset.itemName, price: parseFloat(item.dataset.itemPrice) }); });
    });
    document.querySelectorAll('.qty-minus').forEach(btn => { btn.addEventListener('click', () => Cart.updateQuantity(btn.closest('.menu-item').dataset.itemId, -1)); });
    document.querySelectorAll('.qty-plus').forEach(btn => { btn.addEventListener('click', () => Cart.updateQuantity(btn.closest('.menu-item').dataset.itemId, 1)); });
  },
  setActiveTab(activeTab) { this.tabs.forEach(t => t.classList.remove('active')); activeTab.classList.add('active'); },
  showCategory(category) { this.categories.forEach(cat => { if (cat.dataset.category === category || category === 'all') { cat.style.display = ''; gsap.fromTo(cat, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }); } else { cat.style.display = 'none'; } }); }
};

// ─── FLOATING BUTTONS ───
const FloatBtns = {
  init() {
    const btns = document.querySelectorAll('.float-btn');
    const topBtn = document.querySelector('.float-top');
    if (topBtn) topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    window.addEventListener('scroll', () => { const show = window.scrollY > 400; btns.forEach(btn => { if (show) btn.classList.add('visible'); else btn.classList.remove('visible'); }); }, { passive: true });
  }
};

// ─── CONTACT FORM ───
const ContactForm = {
  init() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault(); let valid = true;
      [{ name: 'name', msg: 'Please enter your name' }, { name: 'email', msg: 'Please enter a valid email' }, { name: 'message', msg: 'Please enter a message' }].forEach(field => {
        const input = form.querySelector('[name="' + field.name + '"]');
        const group = input.closest('.form-group');
        if (!input.value.trim() || (field.name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value))) { group.classList.add('error'); group.querySelector('.form-error').textContent = field.msg; valid = false; }
        else { group.classList.remove('error'); }
      });
      if (valid) { Cart.showToast('Message sent successfully!'); form.reset(); }
    });
    form.querySelectorAll('input, textarea').forEach(input => { input.addEventListener('input', () => input.closest('.form-group').classList.remove('error')); });
  }
};

// ─── CALL / SMS — Platform-aware link handling ───
const ContactLinks = {
  init() {
    const callBtn = document.getElementById('float-call');
    const textBtn = document.getElementById('float-text');
    
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|webOS/i.test(navigator.userAgent);
    
    // Desktop: intercept tel:/sms: clicks (they'd show errors)
    // Mobile: let the <a> tags work natively — no interception needed
    if (!isMobile) {
      if (callBtn) {
        callBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const number = '(425) 555-1234';
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(number).then(() => {
              Cart.showToast('Number copied: ' + number);
            }).catch(() => {
              Cart.showToast('Call us at ' + number);
            });
          } else {
            Cart.showToast('Call us at ' + number);
          }
        });
      }
      
      if (textBtn) {
        textBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const number = '(425) 555-1234';
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(number).then(() => {
              Cart.showToast('Text us at ' + number + ' — number copied');
            }).catch(() => {
              Cart.showToast('Text us at ' + number);
            });
          } else {
            Cart.showToast('Text us at ' + number);
          }
        });
      }
    }
    
    // iOS fix: sms: links need &body= instead of ?body=
    if (textBtn && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
      const message = encodeURIComponent("Hi Vintage Cafe! I'd like to place an order.");
      textBtn.href = 'sms:+14255551234&body=' + message;
    }
  }
};

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  Preloader.init();
  Navbar.init();
  StatusIndicator.init();
  HeroAnim.init();
  Marquee.init();
  Cart.init();
  MenuPage.init();
  FloatBtns.init();
  ContactForm.init();
  ContactLinks.init();
  if (typeof lucide !== 'undefined') lucide.createIcons();
});
