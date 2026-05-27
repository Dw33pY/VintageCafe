/* ================================================
   VINTAGE CAFE — DESIGN SYSTEM
   ================================================ */

:root {
  --espresso: #2C1810;
  --coffee: #4A2C2A;
  --caramel: #C4956A;
  --gold: #B8860B;
  --gold-light: #D4A843;
  --cream: #FFF8F0;
  --linen: #FFF1E6;
  --beige: #E8D5C0;
  --warm-brown: #8B7355;
  --dark: #1A0F0A;
  --sage: #7A8B6F;
  --white: #FFFFFF;
  --red: #C0392B;
  --red-light: #E74C3C;
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
  --shadow-sm: 0 1px 3px rgba(44,24,16,0.08);
  --shadow-md: 0 4px 12px rgba(44,24,16,0.12);
  --shadow-lg: 0 8px 30px rgba(44,24,16,0.16);
  --shadow-xl: 0 16px 50px rgba(44,24,16,0.2);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; overflow-x: hidden; }
body { font-family: var(--font-body); background: var(--cream); color: var(--espresso); line-height: 1.6; overflow-x: hidden; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
img { max-width: 100%; height: auto; display: block; }
a { text-decoration: none; color: inherit; }
button { border: none; background: none; cursor: pointer; font-family: inherit; }
ul, ol { list-style: none; }
input, textarea, select { font-family: inherit; font-size: inherit; }

.font-heading { font-family: var(--font-heading); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; }

/* ── Preloader ── */
.preloader { position: fixed; inset: 0; z-index: 9999; background: var(--espresso); display: flex; flex-direction: column; align-items: center; justify-content: center; transition: opacity 0.6s var(--ease-out), visibility 0.6s; }
.preloader.loaded { opacity: 0; visibility: hidden; pointer-events: none; }
.preloader-brand { font-family: var(--font-heading); font-size: clamp(1.5rem, 4vw, 2.5rem); color: var(--cream); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 2rem; opacity: 0; }
.preloader-line { width: 120px; height: 1px; background: rgba(255,248,240,0.2); position: relative; overflow: hidden; border-radius: 1px; }
.preloader-line::after { content: ''; position: absolute; left: 0; top: 0; height: 100%; width: 0%; background: var(--caramel); animation: preloaderFill 1.8s var(--ease-in-out) forwards; }
@keyframes preloaderFill { 0% { width: 0%; } 100% { width: 100%; } }

/* ── Navigation ── */
.navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; padding: 1rem 1.5rem; transition: all 0.4s var(--ease-out); }
.navbar.scrolled { background: rgba(255,248,240,0.92); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid var(--beige); padding: 0.75rem 1.5rem; box-shadow: var(--shadow-sm); }
.navbar-inner { max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; }
.navbar-logo { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--cream); letter-spacing: 0.04em; transition: color 0.4s; }
.navbar.scrolled .navbar-logo { color: var(--espresso); }
.navbar-logo span { color: var(--caramel); }
.navbar-links { display: none; gap: 2.5rem; align-items: center; }
.navbar-link { font-size: 0.8rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,248,240,0.7); transition: color 0.3s; position: relative; }
.navbar-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: var(--caramel); transition: width 0.4s var(--ease-out); }
.navbar-link:hover::after, .navbar-link.active::after { width: 100%; }
.navbar-link:hover, .navbar-link.active { color: var(--cream); }
.navbar.scrolled .navbar-link { color: var(--warm-brown); }
.navbar.scrolled .navbar-link:hover, .navbar.scrolled .navbar-link.active { color: var(--espresso); }
.navbar-actions { display: flex; align-items: center; gap: 0.75rem; }
.cart-btn { position: relative; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border-radius: var(--radius-full); color: var(--cream); transition: all 0.3s; }
.navbar.scrolled .cart-btn { color: var(--espresso); }
.cart-btn:hover { background: rgba(196,149,106,0.15); }
.cart-badge { position: absolute; top: 4px; right: 4px; width: 18px; height: 18px; border-radius: var(--radius-full); background: var(--caramel); color: var(--white); font-size: 0.65rem; font-weight: 700; display: flex; align-items: center; justify-content: center; transform: scale(0); transition: transform 0.3s var(--ease-out); }
.cart-badge.visible { transform: scale(1); }
.menu-toggle { width: 44px; height: 44px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; border-radius: var(--radius-full); transition: background 0.3s; }
.menu-toggle:hover { background: rgba(196,149,106,0.15); }
.menu-toggle span { display: block; width: 22px; height: 1.5px; background: var(--cream); transition: all 0.4s var(--ease-out); border-radius: 2px; }
.navbar.scrolled .menu-toggle span { background: var(--espresso); }
.menu-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); background: var(--cream); }
.menu-toggle.active span:nth-child(2) { opacity: 0; }
.menu-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); background: var(--cream); }

/* ── Mobile Menu ── */
.mobile-menu { position: fixed; inset: 0; z-index: 999; background: var(--espresso); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2rem; opacity: 0; visibility: hidden; transition: opacity 0.5s var(--ease-out), visibility 0.5s; }
.mobile-menu.open { opacity: 1; visibility: visible; }
.mobile-menu-link { font-family: var(--font-heading); font-size: clamp(2rem, 8vw, 3.5rem); color: var(--cream); opacity: 0; transform: translateY(30px); transition: opacity 0.5s, transform 0.5s var(--ease-out), color 0.3s; }
.mobile-menu.open .mobile-menu-link { opacity: 1; transform: translateY(0); }
.mobile-menu-link:hover { color: var(--caramel); }
.mobile-menu-link:nth-child(1) { transition-delay: 0.1s; }
.mobile-menu-link:nth-child(2) { transition-delay: 0.2s; }
.mobile-menu-link:nth-child(3) { transition-delay: 0.3s; }
.mobile-menu-link:nth-child(4) { transition-delay: 0.4s; }
.mobile-menu-footer { position: absolute; bottom: 2rem; font-size: 0.75rem; color: rgba(255,248,240,0.4); letter-spacing: 0.1em; text-transform: uppercase; }

/* ── Status Badge ── */
.status-badge { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.45rem 1rem; border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 600; letter-spacing: 0.06em; margin-bottom: 1.5rem; }
.status-badge-open { background: rgba(122,139,111,0.2); color: var(--sage); border: 1px solid rgba(122,139,111,0.3); }
.status-badge-closed { background: rgba(192,57,43,0.15); color: var(--red-light); border: 1px solid rgba(192,57,43,0.25); }
.status-dot { width: 7px; height: 7px; border-radius: var(--radius-full); flex-shrink: 0; }
.status-badge-open .status-dot { background: var(--sage); animation: pulse-dot 2s ease-in-out infinite; }
.status-badge-closed .status-dot { background: var(--red-light); }
@keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

/* ── Hero ── */
.hero { position: relative; min-height: 100vh; min-height: 100dvh; display: flex; align-items: flex-end; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.hero-bg img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.08); transition: transform 8s linear; }
.hero-bg::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(26,15,10,0.95) 0%, rgba(26,15,10,0.6) 40%, rgba(26,15,10,0.3) 70%, rgba(26,15,10,0.15) 100%); }
.hero-content { position: relative; z-index: 1; padding: 2rem 1.5rem 4rem; max-width: 1280px; margin: 0 auto; width: 100%; }
.hero-tag { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--caramel); margin-bottom: 1.5rem; opacity: 0; }
.hero-tag-line { width: 40px; height: 1px; background: var(--caramel); }
.hero-title { font-family: var(--font-heading); font-size: clamp(3rem, 12vw, 7rem); font-weight: 700; color: var(--cream); line-height: 0.95; letter-spacing: -0.03em; margin-bottom: 1.5rem; }
.hero-title em { font-style: italic; color: var(--caramel); }
.hero-subtitle { font-size: clamp(1rem, 2.5vw, 1.25rem); color: rgba(255,248,240,0.7); max-width: 500px; line-height: 1.6; margin-bottom: 2.5rem; font-weight: 300; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; }

/* ── Buttons ── */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; padding: 1rem 2rem; border-radius: var(--radius-full); transition: all 0.4s var(--ease-out); position: relative; overflow: hidden; }
.btn-primary { background: var(--caramel); color: var(--espresso); }
.btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 8px 25px rgba(196,149,106,0.4); }
.btn-outline { border: 1px solid rgba(255,248,240,0.3); color: var(--cream); }
.btn-outline:hover { border-color: var(--caramel); color: var(--caramel); transform: translateY(-2px); }
.btn-dark { background: var(--espresso); color: var(--cream); }
.btn-dark:hover { background: var(--coffee); transform: translateY(-2px); box-shadow: var(--shadow-lg); }

/* ── Sections ── */
.section { padding: clamp(4rem, 10vw, 8rem) 1.5rem; }
.section-container { max-width: 1280px; margin: 0 auto; }
.section-header { margin-bottom: clamp(2.5rem, 6vw, 4rem); }
.section-label { display: inline-flex; align-items: center; gap: 0.75rem; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--caramel); margin-bottom: 1rem; }
.section-label-line { width: 30px; height: 1px; background: var(--caramel); }
.section-title { font-family: var(--font-heading); font-size: clamp(2rem, 6vw, 3.5rem); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; color: var(--espresso); }
.section-title em { font-style: italic; color: var(--caramel); }
.section-title-light { color: var(--cream); }
.section-desc { font-size: clamp(1rem, 2vw, 1.125rem); color: var(--warm-brown); max-width: 550px; line-height: 1.7; margin-top: 1rem; font-weight: 300; }
.section-dark { background: var(--espresso); color: var(--cream); }
.section-dark .section-label { color: var(--caramel); }
.section-dark .section-title { color: var(--cream); }
.section-dark .section-desc { color: rgba(255,248,240,0.6); }

/* ── Infinite Marquee ── */
.dishes-section { background: var(--linen); }
.dishes-marquee-wrapper { position: relative; overflow: hidden; padding: 1.5rem 0 2.5rem; cursor: grab; -webkit-user-select: none; user-select: none; }
.dishes-marquee-wrapper:active { cursor: grabbing; }
.dishes-marquee { display: flex; gap: 1.5rem; width: max-content; will-change: transform; }
.dish-card { flex: 0 0 320px; background: var(--white); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-md); transition: transform 0.5s var(--ease-out), box-shadow 0.5s; }
.dish-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-xl); }
.dish-card-img { width: 100%; height: 240px; object-fit: cover; transition: transform 0.6s var(--ease-out); }
.dish-card:hover .dish-card-img { transform: scale(1.05); }
.dish-card-img-wrapper { overflow: hidden; position: relative; }
.dish-card-price { position: absolute; bottom: 12px; right: 12px; background: var(--espresso); color: var(--caramel); font-family: var(--font-heading); font-size: 1rem; font-weight: 700; padding: 0.35rem 0.75rem; border-radius: var(--radius-full); }
.dish-card-body { padding: 1.5rem; }
.dish-card-name { font-family: var(--font-heading); font-size: 1.2rem; font-weight: 700; margin-bottom: 0.4rem; }
.dish-card-desc { font-size: 0.88rem; color: var(--warm-brown); line-height: 1.5; }

/* ── Heritage ── */
.heritage-section { position: relative; background: var(--dark); overflow: hidden; }
.heritage-bg-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: var(--font-heading); font-size: clamp(8rem, 25vw, 18rem); font-weight: 700; color: rgba(255,248,240,0.03); white-space: nowrap; pointer-events: none; user-select: none; }
.heritage-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; }
.heritage-text { position: relative; z-index: 1; }
.heritage-year { font-family: var(--font-heading); font-size: clamp(4rem, 15vw, 8rem); font-weight: 700; color: var(--caramel); line-height: 1; letter-spacing: -0.04em; }
.heritage-heading { font-family: var(--font-heading); font-size: clamp(1.5rem, 4vw, 2.5rem); color: var(--cream); line-height: 1.2; margin: 1rem 0 1.5rem; }
.heritage-heading em { color: var(--caramel); font-style: italic; }
.heritage-body { font-size: 1rem; color: rgba(255,248,240,0.6); line-height: 1.8; max-width: 480px; }
.heritage-image { position: relative; z-index: 1; border-radius: var(--radius-lg); overflow: hidden; aspect-ratio: 4/5; }
.heritage-image img { width: 100%; height: 100%; object-fit: cover; }
.heritage-image::after { content: ''; position: absolute; inset: 0; border: 1px solid rgba(196,149,106,0.2); border-radius: var(--radius-lg); pointer-events: none; }

/* ── Testimonials ── */
.testimonials-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
.testimonial-card { background: rgba(255,248,240,0.05); border: 1px solid rgba(255,248,240,0.08); border-radius: var(--radius-lg); padding: 2rem; transition: all 0.4s var(--ease-out); }
.testimonial-card:hover { border-color: rgba(196,149,106,0.3); background: rgba(255,248,240,0.08); transform: translateY(-3px); }
.testimonial-stars { display: flex; gap: 2px; margin-bottom: 1rem; color: var(--gold); }
.testimonial-text { font-size: 1rem; color: rgba(255,248,240,0.8); line-height: 1.7; margin-bottom: 1.5rem; font-style: italic; }
.testimonial-author { display: flex; align-items: center; gap: 0.75rem; }
.testimonial-avatar { width: 40px; height: 40px; border-radius: var(--radius-full); background: var(--caramel); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 0.9rem; font-weight: 700; color: var(--espresso); }
.testimonial-name { font-weight: 600; font-size: 0.9rem; color: var(--cream); }
.testimonial-detail { font-size: 0.75rem; color: rgba(255,248,240,0.4); margin-top: 2px; }

/* ── CTA ── */
.cta-section { background: var(--espresso); text-align: center; position: relative; overflow: hidden; }
.cta-section::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle at center, rgba(196,149,106,0.08) 0%, transparent 50%); pointer-events: none; }
.cta-heading { font-family: var(--font-heading); font-size: clamp(2rem, 7vw, 4rem); color: var(--cream); line-height: 1.1; margin-bottom: 1rem; }
.cta-heading em { color: var(--caramel); font-style: italic; }
.cta-desc { font-size: 1.1rem; color: rgba(255,248,240,0.5); max-width: 500px; margin: 0 auto 2.5rem; line-height: 1.6; }

/* ── Menu Page ── */
.menu-tabs { display: flex; gap: 0.5rem; margin-bottom: 2.5rem; overflow-x: auto; padding-bottom: 0.5rem; scrollbar-width: none; }
.menu-tabs::-webkit-scrollbar { display: none; }
.menu-tab { padding: 0.65rem 1.5rem; border-radius: var(--radius-full); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--warm-brown); border: 1px solid var(--beige); transition: all 0.3s var(--ease-out); white-space: nowrap; }
.menu-tab:hover { border-color: var(--caramel); color: var(--caramel); }
.menu-tab.active { background: var(--espresso); color: var(--cream); border-color: var(--espresso); }
.menu-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
.menu-item { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; padding: 1.5rem; background: var(--white); border-radius: var(--radius-lg); border: 1px solid var(--beige); transition: all 0.4s var(--ease-out); }
.menu-item:hover { border-color: var(--caramel); box-shadow: var(--shadow-md); transform: translateY(-2px); }
.menu-item-info { flex: 1; }
.menu-item-name { font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.25rem; }
.menu-item-desc { font-size: 0.85rem; color: var(--warm-brown); line-height: 1.5; }
.menu-item-right { display: flex; flex-direction: column; align-items: flex-end; gap: 0.75rem; flex-shrink: 0; }
.menu-item-price { font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: var(--caramel); }
.menu-item-add { width: 36px; height: 36px; border-radius: var(--radius-full); background: var(--espresso); color: var(--cream); display: flex; align-items: center; justify-content: center; transition: all 0.3s var(--ease-out); font-size: 1.2rem; line-height: 1; }
.menu-item-add:hover { background: var(--caramel); color: var(--espresso); transform: scale(1.1); }
.menu-item-qty { display: flex; align-items: center; gap: 0.5rem; background: var(--linen); border-radius: var(--radius-full); padding: 0.25rem; }
.menu-item-qty button { width: 30px; height: 30px; border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-weight: 700; color: var(--espresso); transition: all 0.2s; }
.menu-item-qty button:hover { background: var(--beige); }
.menu-item-qty span { font-weight: 700; font-size: 0.9rem; min-width: 20px; text-align: center; }

/* ── Cart Drawer ── */
.cart-overlay { position: fixed; inset: 0; z-index: 2000; background: rgba(26,15,10,0.5); backdrop-filter: blur(4px); opacity: 0; visibility: hidden; transition: opacity 0.4s, visibility 0.4s; }
.cart-overlay.open { opacity: 1; visibility: visible; }
.cart-drawer { position: fixed; top: 0; right: 0; bottom: 0; z-index: 2001; width: min(420px, 90vw); background: var(--cream); transform: translateX(100%); transition: transform 0.5s var(--ease-out); display: flex; flex-direction: column; }
.cart-drawer.open { transform: translateX(0); }
.cart-header { display: flex; align-items: center; justify-content: space-between; padding: 1.5rem; border-bottom: 1px solid var(--beige); }
.cart-header h3 { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; }
.cart-close { width: 40px; height: 40px; border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; transition: background 0.3s; }
.cart-close:hover { background: var(--beige); }
.cart-body { flex: 1; overflow-y: auto; padding: 1rem 1.5rem; }
.cart-empty { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: var(--warm-brown); text-align: center; gap: 1rem; }
.cart-item { display: flex; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid var(--beige); align-items: center; }
.cart-item-info { flex: 1; }
.cart-item-name { font-weight: 600; font-size: 0.9rem; margin-bottom: 0.15rem; }
.cart-item-price { font-size: 0.8rem; color: var(--warm-brown); }
.cart-item-qty { display: flex; align-items: center; gap: 0.4rem; }
.cart-item-qty button { width: 28px; height: 28px; border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 600; color: var(--espresso); transition: background 0.2s; }
.cart-item-qty button:hover { background: var(--beige); }
.cart-item-qty span { font-weight: 700; font-size: 0.85rem; min-width: 20px; text-align: center; }
.cart-item-remove { color: var(--warm-brown); transition: color 0.3s; padding: 4px; }
.cart-item-remove:hover { color: var(--red); }
.cart-footer { padding: 1.5rem; border-top: 1px solid var(--beige); }
.cart-total { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.cart-total-label { font-size: 0.85rem; color: var(--warm-brown); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; }
.cart-total-amount { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: var(--espresso); }
.cart-checkout-btn { width: 100%; padding: 1rem; background: var(--espresso); color: var(--cream); border-radius: var(--radius-full); font-size: 0.85rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; transition: all 0.3s var(--ease-out); }
.cart-checkout-btn:hover { background: var(--coffee); transform: translateY(-2px); box-shadow: var(--shadow-lg); }

/* ── Checkout Modal ── */
.checkout-modal-overlay { position: fixed; inset: 0; z-index: 3000; background: rgba(26,15,10,0.6); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; padding: 1rem; opacity: 0; visibility: hidden; transition: opacity 0.4s, visibility 0.4s; }
.checkout-modal-overlay.open { opacity: 1; visibility: visible; }
.checkout-modal { background: var(--cream); border-radius: var(--radius-xl); width: min(480px, 100%); max-height: 90vh; overflow-y: auto; transform: translateY(20px) scale(0.97); transition: transform 0.5s var(--ease-out); }
.checkout-modal-overlay.open .checkout-modal { transform: translateY(0) scale(1); }
.checkout-modal-header { display: flex; align-items: center; justify-content: space-between; padding: 1.5rem 1.5rem 0; }
.checkout-modal-header h3 { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; }
.checkout-form { padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
.form-group label { display: block; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--warm-brown); margin-bottom: 0.5rem; }
.form-group input, .form-group textarea, .form-group select { width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--beige); border-radius: var(--radius-md); background: var(--white); color: var(--espresso); font-size: 0.95rem; transition: border-color 0.3s, box-shadow 0.3s; outline: none; }
.form-group input:focus, .form-group textarea:focus, .form-group select:focus { border-color: var(--caramel); box-shadow: 0 0 0 3px rgba(196,149,106,0.15); }
.form-group textarea { resize: vertical; min-height: 80px; }
.form-error { font-size: 0.75rem; color: var(--red-light); margin-top: 0.35rem; display: none; }
.form-group.error input, .form-group.error textarea { border-color: var(--red-light); }
.form-group.error .form-error { display: block; }
.checkout-submit { width: 100%; padding: 1rem; background: var(--caramel); color: var(--espresso); border-radius: var(--radius-full); font-size: 0.85rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; transition: all 0.3s var(--ease-out); margin-top: 0.5rem; }
.checkout-submit:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 8px 25px rgba(196,149,106,0.4); }
.order-confirmation { text-align: center; padding: 3rem 1.5rem; display: none; }
.order-confirmation.visible { display: block; }
.order-confirmation-icon { width: 64px; height: 64px; border-radius: var(--radius-full); background: var(--sage); color: var(--white); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; }
.order-confirmation h3 { font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 0.5rem; }
.order-confirmation p { color: var(--warm-brown); line-height: 1.6; }

/* ── Checkout Order Summary ── */
.checkout-summary { padding: 1.25rem 1.5rem 0; }
.checkout-summary-title { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--warm-brown); margin-bottom: 0.75rem; }
.checkout-summary-list { display: flex; flex-direction: column; gap: 0.5rem; }
.checkout-summary-item { display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; padding: 0.4rem 0; }
.checkout-summary-item-name { color: var(--espresso); }
.checkout-summary-item-name span { color: var(--warm-brown); font-size: 0.8rem; margin-left: 0.25rem; }
.checkout-summary-item-price { font-weight: 600; color: var(--caramel); }
.checkout-summary-divider { height: 1px; background: var(--beige); margin: 0.75rem 0; }

/* ── About ── */
.timeline { position: relative; padding-left: 2rem; }
.timeline::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 1px; background: var(--beige); }
.timeline-item { position: relative; padding-bottom: 3rem; padding-left: 2rem; }
.timeline-item::before { content: ''; position: absolute; left: -2rem; top: 6px; width: 9px; height: 9px; border-radius: var(--radius-full); background: var(--caramel); border: 2px solid var(--cream); transform: translateX(-4px); }
.timeline-year { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: var(--caramel); margin-bottom: 0.5rem; }
.timeline-text { font-size: 1rem; color: var(--warm-brown); line-height: 1.7; max-width: 500px; }
.values-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
.value-card { padding: 2rem; background: var(--white); border-radius: var(--radius-lg); border: 1px solid var(--beige); transition: all 0.4s var(--ease-out); }
.value-card:hover { border-color: var(--caramel); transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.value-icon { width: 48px; height: 48px; border-radius: var(--radius-md); background: var(--linen); display: flex; align-items: center; justify-content: center; color: var(--caramel); margin-bottom: 1rem; }
.value-card h4 { font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem; }
.value-card p { font-size: 0.9rem; color: var(--warm-brown); line-height: 1.6; }

/* ── Contact ── */
.contact-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
.contact-info-card { display: flex; gap: 1rem; align-items: flex-start; padding: 1.5rem; background: var(--white); border-radius: var(--radius-lg); border: 1px solid var(--beige); transition: all 0.3s; }
.contact-info-card:hover { border-color: var(--caramel); transform: translateY(-2px); box-shadow: var(--shadow-md); }
.contact-info-icon { width: 44px; height: 44px; border-radius: var(--radius-md); background: var(--linen); display: flex; align-items: center; justify-content: center; color: var(--caramel); flex-shrink: 0; }
.contact-info-label { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--warm-brown); margin-bottom: 0.25rem; }
.contact-info-value { font-weight: 600; font-size: 0.95rem; }
.contact-form { background: var(--white); border-radius: var(--radius-xl); padding: 2rem; border: 1px solid var(--beige); }
.contact-form h3 { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; }
.map-wrapper { border-radius: var(--radius-lg); overflow: hidden; height: 300px; border: 1px solid var(--beige); }
.map-wrapper iframe { width: 100%; height: 100%; border: none; }
.hours-list { display: flex; flex-direction: column; gap: 0.5rem; }
.hours-row { display: flex; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid var(--beige); font-size: 0.9rem; }
.hours-row:last-child { border-bottom: none; }
.hours-day { font-weight: 600; }
.hours-time { color: var(--warm-brown); }

/* ── Footer ── */
.footer { background: var(--dark); color: rgba(255,248,240,0.5); padding: 4rem 1.5rem 2rem; }
.footer-inner { max-width: 1280px; margin: 0 auto; }
.footer-grid { display: grid; grid-template-columns: 1fr; gap: 2.5rem; margin-bottom: 3rem; }
.footer-brand { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: var(--cream); margin-bottom: 0.75rem; }
.footer-brand span { color: var(--caramel); }
.footer-tagline { font-size: 0.9rem; color: rgba(255,248,240,0.4); line-height: 1.6; max-width: 280px; margin-bottom: 1.25rem; }
.footer-heading { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--caramel); margin-bottom: 1rem; }
.footer-links { display: flex; flex-direction: column; gap: 0.5rem; }
.footer-link { font-size: 0.9rem; color: rgba(255,248,240,0.5); transition: color 0.3s; }
.footer-link:hover { color: var(--cream); }
.footer-social { display: flex; gap: 0.75rem; }
.footer-social-link { width: 40px; height: 40px; border-radius: var(--radius-full); border: 1px solid rgba(255,248,240,0.1); display: flex; align-items: center; justify-content: center; color: rgba(255,248,240,0.4); transition: all 0.3s; }
.footer-social-link:hover { border-color: var(--caramel); color: var(--caramel); transform: translateY(-2px); }
.footer-bottom { display: flex; flex-direction: column; gap: 1rem; align-items: center; padding-top: 2rem; border-top: 1px solid rgba(255,248,240,0.08); text-align: center; }
.footer-copy { font-size: 0.8rem; color: rgba(255,248,240,0.3); }
.footer-dw33py { font-size: 0.75rem; color: rgba(255,248,240,0.25); letter-spacing: 0.05em; }
.footer-dw33py a { color: var(--caramel); transition: color 0.3s; }
.footer-dw33py a:hover { color: var(--gold-light); }

/* ── Floating Buttons ── */
.float-btns { position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 900; display: flex; flex-direction: column; gap: 0.75rem; }
.float-btn { width: 52px; height: 52px; border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-lg); transition: all 0.3s var(--ease-out); opacity: 0; transform: translateY(20px); }
.float-btn.visible { opacity: 1; transform: translateY(0); }
.float-btn:hover { transform: translateY(-3px) scale(1.05); }
.float-call { background: var(--sage); color: var(--white); }
.float-text { background: var(--caramel); color: var(--espresso); }
.float-top { background: var(--espresso); color: var(--cream); }

/* ── Toast ── */
.toast { position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%) translateY(100px); z-index: 5000; background: var(--espresso); color: var(--cream); padding: 1rem 1.5rem; border-radius: var(--radius-full); font-size: 0.85rem; font-weight: 500; box-shadow: var(--shadow-xl); white-space: nowrap; transition: transform 0.5s var(--ease-out); max-width: 90vw; overflow: hidden; text-overflow: ellipsis; }
.toast.visible { transform: translateX(-50%) translateY(0); }

/* ── Scroll Reveal ── */
.reveal { opacity: 0; transform: translateY(40px); }
.reveal.revealed { opacity: 1; transform: translateY(0); transition: opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out); }

/* ── Page Hero ── */
.page-hero { position: relative; min-height: 45vh; display: flex; align-items: flex-end; overflow: hidden; padding-top: 5rem; }
.page-hero-bg { position: absolute; inset: 0; }
.page-hero-bg img { width: 100%; height: 100%; object-fit: cover; }
.page-hero-bg::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(26,15,10,0.9) 0%, rgba(26,15,10,0.4) 100%); }
.page-hero-content { position: relative; z-index: 1; padding: 3rem 1.5rem; max-width: 1280px; margin: 0 auto; width: 100%; }
.page-hero-title { font-family: var(--font-heading); font-size: clamp(2.5rem, 8vw, 4.5rem); font-weight: 700; color: var(--cream); line-height: 1.05; letter-spacing: -0.03em; }
.page-hero-title em { color: var(--caramel); font-style: italic; }
.page-hero-subtitle { font-size: 1.1rem; color: rgba(255,248,240,0.6); margin-top: 0.75rem; font-weight: 300; }

/* ── Responsive ── */
@media (min-width: 640px) { .menu-grid { grid-template-columns: repeat(2, 1fr); } .testimonials-grid { grid-template-columns: repeat(2, 1fr); } .values-grid { grid-template-columns: repeat(2, 1fr); } .contact-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 768px) { .navbar { padding: 1.25rem 3rem; } .navbar.scrolled { padding: 1rem 3rem; } .navbar-links { display: flex; } .menu-toggle { display: none; } .hero-content { padding: 3rem 3rem 5rem; } .section { padding: clamp(5rem, 10vw, 8rem) 3rem; } .heritage-grid { grid-template-columns: 1fr 1fr; } .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; } .footer-bottom { flex-direction: row; justify-content: space-between; } .dish-card { flex: 0 0 380px; } }
@media (min-width: 1024px) { .testimonials-grid { grid-template-columns: repeat(4, 1fr); } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } .reveal { opacity: 1; transform: none; } .hero-bg img { transform: none !important; } }