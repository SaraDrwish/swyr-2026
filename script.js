// منتجات حقيقية مع أسماء صور مرقمة
const products = [
  { id:1, name:"سافاج ديور", nameEn:"Sauvage Dior", cat:"men", types:["spicy","aquatic"], price50:300, price100:550, desc:"عطر جريء مستوحى من الصحراء. مزيج من برغموت كالابريا، فلفل سيشوان، أمبروكسان، ومسك الحوت الخشبي.", descEn:"Bold desert-inspired scent. Blend of Calabrian bergamot, Sichuan pepper, Ambroxan, and woody ambergris.", img:"1.jpg" },
  { id:2, name:"جادور ديور", nameEn:"J'adore Dior", cat:"women", types:["floral","fruity"], price50:300, price100:550, desc:"أنوثة متألقة بمزيج من يلانج يلانج، ورد دمشق، ياسمين جراندفلوروم، وزهر البرتقال.", descEn:"Radiant femininity with Ylang-Ylang, Damascus Rose, Jasmine Grandiflorum, and Orange Blossom.", img:"2.jpg" },
  { id:3, name:"توم فود أومبري لذر", nameEn:"Tom Ford Oud Wood", cat:"unisex", types:["oud","leather"], price50:300, price100:550, desc:"عود فاخر مع لمسات من خشب الورد، الهيل، خشب الصندل، الفيتيفير، الفانيليا، والعنبر.", descEn:"Luxurious oud with rosewood, cardamom, sandalwood, vetiver, vanilla, and amber.", img:"3.jpg" },
  { id:4, name:"بليدجيد شانيل", nameEn:"Bleu de Chanel", cat:"men", types:["spicy","woody"], price50:300, price100:550, desc:"عطر خشبي عطري مع الجريب فروت، الليمون، النعناع، الزنجبيل، جوزة الطيب، والبخور.", descEn:"Aromatic woody scent with grapefruit, lemon, mint, ginger, nutmeg, and incense.", img:"4.jpg" },
  { id:5, name:"كوكو مادموازيل", nameEn:"Coco Mademoiselle", cat:"women", types:["oriental","floral"], price50:300, price100:550, desc:"شرقي فاخر مع البرغموت، البرتقال، الياسمين، الورد التركي، المسك الأبيض، الفانيليا، والباتشولي.", descEn:"Oriental luxury with bergamot, orange, jasmine, Turkish rose, white musk, vanilla, and patchouli.", img:"5.jpg" },
  { id:6, name:"أفينتوس كريد", nameEn:"Creed Aventus", cat:"men", types:["fruity","leather"], price50:300, price100:550, desc:"أسطورة الفواكه والجلد مع الأناناس، البرغموت، التفاح، البتشولي، وخشب البتولا.", descEn:"Legendary fruits and leather with pineapple, bergamot, apple, patchouli, and birch.", img:"6.jpg" },
  { id:7, name:"لا فيستا بيل", nameEn:"La Vie Est Belle", cat:"women", types:["floral","gourmand"], price50:300, price100:550, desc:"سعادة وحلاوة مع الكشمير، السوسن، والفانيليا.", descEn:"Happiness and sweetness with cashmeran, iris, and vanilla.", img:"7.jpg" },
  { id:8, name:"بلاك أوبيوم", nameEn:"Black Opium", cat:"women", types:["oriental","spicy"], price50:300, price100:550, desc:"جريء ليلي مع القهوة، الفانيليا، زهر البرتقال، الياسمين، وخشب الأرز.", descEn:"Bold night scent with coffee, vanilla, orange blossom, jasmine, and cedarwood.", img:"8.jpg" },
  { id:9, name:"أكوا دي جيو", nameEn:"Acqua di Gio", cat:"men", types:["aquatic","floral"], price50:300, price100:550, desc:"انتعاش البحر مع الياسمين، إكليل الجبل، وخشب الأرز.", descEn:"Sea freshness with jasmine, rosemary, and cedarwood.", img:"9.jpg" },
  { id:10, name:"سي كيه ون", nameEn:"CK One", cat:"unisex", types:["floral","aquatic"], price50:300, price100:550, desc:"حيادي منعش مع الأناناس، الياسمين، والمسك.", descEn:"Neutral fresh scent with pineapple, jasmine, and musk.", img:"10.jpg" },
  { id:11, name:"ديلينا", nameEn:"Delina", cat:"women", types:["floral","fruity"], price50:300, price100:550, desc:"أناقة الورد والليتشي مع المسك والفانيليا.", descEn:"Elegance of rose and lychee with musk and vanilla.", img:"11.jpg" },
  { id:12, name:"تيري دي هيرميس", nameEn:"Terre d'Hermès", cat:"men", types:["woody","spicy"], price50:300, price100:550, desc:"ترابي وخشبي مع البرتقال، الفلفل، وخشب الأرز.", descEn:"Earthy and woody with orange, pepper, and cedarwood.", img:"12.jpg" },
  { id:13, name:"ليبر", nameEn:"Libre", cat:"women", types:["oriental","spicy"], price50:300, price100:550, desc:"عطر تحرر وأناقة مع اللافندر، البرتقال، الفانيليا، والمسك.", descEn:"Liberty and elegance with lavender, orange, vanilla, and musk.", img:"13.jpg" },
  { id:14, name:"ميلسيم إمبريال", nameEn:"Millesime Imperial", cat:"men", types:["aquatic","fruity"], price50:300, price100:550, desc:"ملكي ومنعش مع البطيخ، زهر البرتقال، والمسك.", descEn:"Royal and fresh with watermelon, orange blossom, and musk.", img:"14.jpg" },
  { id:15, name:"جنتلمن جيفنشي", nameEn:"Gentleman Givenchy", cat:"men", types:["woody","spicy"], price50:300, price100:550, desc:"أناقة عصرية مع الخزامى، القرفة، الجلد، وخشب الأرز.", descEn:"Modern elegance with lavender, cinnamon, leather, and cedarwood.", img:"15.jpg" }
];

// State
let cart = [];
let isDark = localStorage.getItem('swyr_dark') === 'true';
let isArabic = true;
let currentMain = "all";
let currentSub = "all";
let searchTerm = "";
let currentProduct = null;
let currentSize = "50ml";
let currentQty = 1;

// Apply dark mode
function applyTheme() {
  document.body.classList.toggle('dark', isDark);
  localStorage.setItem('swyr_dark', isDark);
}

// Update UI language
function updateLanguage() {
  document.getElementById('langToggle').innerText = isArabic ? "English" : "العربية";
  document.getElementById('heroTitle').innerText = isArabic ? "عطرك .. هويتك" : "Your Scent.. Your Identity";
  document.getElementById('heroDesc').innerHTML = isArabic ? "ليست مجرد عطور، بل تجربة حسية تعكس شخصيتك." : "Not just perfumes, but a sensory experience reflecting your personality.";
  document.getElementById('mainCatTitle').innerText = isArabic ? "النوع الرئيسي" : "Main Category";
  document.getElementById('subCatTitle').innerText = isArabic ? "الفئة العطرية" : "Fragrance Family";
  
  document.querySelectorAll('#mainCatFilters .filter-btn').forEach(btn => {
    let ar = btn.getAttribute('data-ar'), en = btn.getAttribute('data-en');
    if(ar && en) btn.innerText = isArabic ? ar : en;
  });
  document.querySelectorAll('#subCatFilters .filter-btn').forEach(btn => {
    let ar = btn.getAttribute('data-ar'), en = btn.getAttribute('data-en');
    if(ar && en) btn.innerText = isArabic ? ar : en;
  });
  renderProducts();
}

// Filter products
function filterProducts() {
  return products.filter(p =>
    (currentMain === 'all' || p.cat === currentMain) &&
    (currentSub === 'all' || p.types.includes(currentSub)) &&
    (searchTerm === '' || (isArabic ? p.name : p.nameEn).toLowerCase().includes(searchTerm.toLowerCase()))
  );
}

// Render products grid
function renderProducts() {
  const filtered = filterProducts();
  const men = filtered.filter(p => p.cat === 'men');
  const women = filtered.filter(p => p.cat === 'women');
  const unisex = filtered.filter(p => p.cat === 'unisex');
  const html = `
    <div class="category-section"><div class="category-title"><i class="fas fa-user"></i> ${isArabic ? 'عطور رجالية' : 'Men'}</div><div class="products-grid">${renderCards(men)}</div></div>
    <div class="category-section"><div class="category-title"><i class="fas fa-venus"></i> ${isArabic ? 'عطور نسائية' : 'Women'}</div><div class="products-grid">${renderCards(women)}</div></div>
    <div class="category-section"><div class="category-title"><i class="fas fa-venus-mars"></i> ${isArabic ? 'عطور للجنسين' : 'Unisex'}</div><div class="products-grid">${renderCards(unisex)}</div></div>
  `;
  document.getElementById('productsMain').innerHTML = html;
  document.querySelectorAll('.product-card').forEach(card => card.addEventListener('click', () => showProductModal(parseInt(card.dataset.id))));
}

function renderCards(list) {
  return list.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img"><img src="images/${p.img}" alt="${p.name}"></div>
      <div class="product-info">
        <div class="product-title">${isArabic ? p.name : p.nameEn}</div>
        <div class="product-price">${p.price50} ج.م</div>
        <div class="badges">${p.types.slice(0,2).map(t => `<span class="badge">${getTypeName(t)}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
}

function getTypeName(t) {
  const names = { floral:"زهري", oud:"عود", musk:"مسك", spicy:"توابل", fruity:"فاكهي", aquatic:"بحري", oriental:"شرقي", leather:"جلدي", woody:"خشبي" };
  return isArabic ? names[t] : t.toUpperCase();
}

// Modal
function showProductModal(id) {
  currentProduct = products.find(p => p.id === id);
  currentSize = "50ml";
  currentQty = 1;
  updateModal();
  document.getElementById('productModal').classList.add('open');
}

function updateModal() {
  if(!currentProduct) return;
  const price = currentSize === "50ml" ? currentProduct.price50 : currentProduct.price100;
  document.getElementById('modalDynamicContent').innerHTML = `
    <div style="text-align:center;"><img src="images/${currentProduct.img}" style="width:140px; border-radius:20px; box-shadow:none;"></div>
    <div style="font-size:1.6rem; font-weight:800; margin-top:15px;">${isArabic ? currentProduct.name : currentProduct.nameEn}</div>
    <div style="margin:15px 0; line-height:1.6;">${isArabic ? currentProduct.desc : currentProduct.descEn}</div>
    <div class="size-selector"><div class="size-opt ${currentSize === '50ml' ? 'active' : ''}" data-size="50ml">50 مل - ${currentProduct.price50} ج.م</div><div class="size-opt ${currentSize === '100ml' ? 'active' : ''}" data-size="100ml">100 مل - ${currentProduct.price100} ج.م</div></div>
    <div class="qty-control"><button class="qty-btn" id="modalQtyMinus">-</button><span style="min-width:40px; text-align:center;">${currentQty}</span><button class="qty-btn" id="modalQtyPlus">+</button><span style="margin-right:auto;">${isArabic ? 'الكمية' : 'Quantity'}</span></div>
    <div style="font-size:1.6rem; font-weight:800; margin:15px 0;">${price * currentQty} ج.م</div>
    <button class="add-cart-btn" id="modalAddCartBtn">${isArabic ? 'أضف إلى السلة' : 'Add to Cart'}</button>
  `;
  document.querySelectorAll('.size-opt').forEach(opt => opt.addEventListener('click', (e) => { currentSize = opt.dataset.size; updateModal(); }));
  document.getElementById('modalQtyMinus')?.addEventListener('click', () => { if(currentQty>1) currentQty--; updateModal(); });
  document.getElementById('modalQtyPlus')?.addEventListener('click', () => { currentQty++; updateModal(); });
  document.getElementById('modalAddCartBtn')?.addEventListener('click', () => { addToCart(currentProduct.id, `${isArabic ? currentProduct.name : currentProduct.nameEn} (${currentSize})`, price, currentSize, currentQty); document.getElementById('productModal').classList.remove('open'); });
}

// Cart functions
function addToCart(id, name, price, size, qty) {
  const idx = cart.findIndex(i => i.id === id && i.size === size);
  if(idx !== -1) cart[idx].quantity += qty;
  else cart.push({ id, name, price, quantity: qty, size });
  updateCartUI();
  showNotif(`✅ ${isArabic ? 'تم إضافة' : 'Added'} ${name}`);
}

function updateCartUI() {
  const totalQty = cart.reduce((s,i) => s + i.quantity, 0);
  const totalPrice = cart.reduce((s,i) => s + i.price * i.quantity, 0);
  document.getElementById('cartCount').innerText = totalQty;
  document.getElementById('cartTotal').innerHTML = totalPrice + ' ج.م';
  if(cart.length === 0) {
    document.getElementById('cartItemsList').innerHTML = `<div style="text-align:center;">${isArabic ? 'سلة فارغة' : 'Cart empty'}</div>`;
    return;
  }
  document.getElementById('cartItemsList').innerHTML = cart.map((item, idx) => `
    <div style="display:flex; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid #E2D5C3; padding-bottom:10px;">
      <div><strong>${item.name}</strong><br>${item.price} ج.م × ${item.quantity}</div>
      <button class="remove-item" data-idx="${idx}" style="background:#F0E6DA; border:none; border-radius:50%; width:32px; cursor:pointer;"><i class="fas fa-trash"></i></button>
    </div>
  `).join('');
  document.querySelectorAll('.remove-item').forEach(btn => btn.addEventListener('click', (e) => { cart.splice(parseInt(btn.dataset.idx), 1); updateCartUI(); }));
}

function showNotif(msg) {
  let d = document.createElement('div');
  d.innerText = msg;
  d.style.cssText = 'position:fixed;bottom:20px;right:20px;background:var(--gold);color:#5A3E2B;padding:12px 24px;border-radius:50px;z-index:1200;font-weight:bold;';
  document.body.appendChild(d);
  setTimeout(() => d.remove(), 2500);
}

// Hero Slider
function initHeroSlider() {
  const topProducts = products.slice(0, 6);
  const slides = topProducts.map(p => `
    <div class="swiper-slide">
      <img src="images/${p.img}" alt="${p.name}">
      <h3>${isArabic ? p.name : p.nameEn}</h3>
      <p>${isArabic ? p.desc.substring(0, 70)+'...' : p.descEn.substring(0, 70)+'...'}</p>
    </div>
  `).join('');
  document.querySelector('#heroSlider .swiper-wrapper').innerHTML = slides;
  new Swiper('#heroSlider', {
    loop: true,
    autoplay: { delay: 4000 },
    pagination: { el: '.swiper-pagination' }
  });
}

// Event listeners
document.getElementById('darkModeToggle').addEventListener('click', () => { isDark = !isDark; applyTheme(); });
document.getElementById('langToggle').addEventListener('click', () => { isArabic = !isArabic; updateLanguage(); initHeroSlider(); });
document.getElementById('cartIcon').addEventListener('click', () => document.getElementById('cartDrawer').classList.add('open'));
document.getElementById('closeCartBtn').addEventListener('click', () => document.getElementById('cartDrawer').classList.remove('open'));
document.getElementById('closeModalBtn').addEventListener('click', () => document.getElementById('productModal').classList.remove('open'));
document.getElementById('productModal').addEventListener('click', (e) => { if(e.target === document.getElementById('productModal')) document.getElementById('productModal').classList.remove('open'); });
document.getElementById('whatsappOrderBtn').addEventListener('click', () => {
  if(cart.length === 0) { alert(isArabic ? 'السلة فارغة' : 'Cart is empty'); return; }
  let msg = `🛍️ طلب جديد من SWYR:\n\n`;
  cart.forEach(i => msg += `▪️ ${i.name}\n   الكمية: ${i.quantity}\n   السعر: ${i.price} ج.م\n   الإجمالي: ${i.price * i.quantity} ج.م\n\n`);
  msg += `💰 الإجمالي الكلي: ${cart.reduce((s,i)=>s+i.price*i.quantity,0)} ج.م\n\n📦 طرق الدفع: فودافون كاش أو إنستاباي\n📍 سيتم التواصل معك للتأكيد`;
  window.open(`https://wa.me/201234567890?text=${encodeURIComponent(msg)}`, '_blank');
});
document.getElementById('searchInput').addEventListener('input', (e) => { searchTerm = e.target.value; renderProducts(); });
document.querySelectorAll('#mainCatFilters .filter-btn').forEach(btn => btn.addEventListener('click', (e) => {
  document.querySelectorAll('#mainCatFilters .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentMain = btn.dataset.main;
  renderProducts();
}));
document.querySelectorAll('#subCatFilters .filter-btn').forEach(btn => btn.addEventListener('click', (e) => {
  document.querySelectorAll('#subCatFilters .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentSub = btn.dataset.sub;
  renderProducts();
}));
document.addEventListener('click', (e) => {
  const drawer = document.getElementById('cartDrawer');
  const icon = document.getElementById('cartIcon');
  if(drawer.classList.contains('open') && !drawer.contains(e.target) && !icon.contains(e.target)) drawer.classList.remove('open');
});
window.addEventListener('scroll', () => document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 300));
document.getElementById('scrollTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Set language attributes for filters
document.querySelectorAll('#mainCatFilters .filter-btn').forEach(btn => {
  let txt = btn.innerText;
  btn.setAttribute('data-ar', txt);
  if(btn.dataset.main === 'all') btn.setAttribute('data-en', 'All');
  else if(btn.dataset.main === 'men') btn.setAttribute('data-en', 'Men');
  else if(btn.dataset.main === 'women') btn.setAttribute('data-en', 'Women');
  else if(btn.dataset.main === 'unisex') btn.setAttribute('data-en', 'Unisex');
});
document.querySelectorAll('#subCatFilters .filter-btn').forEach(btn => {
  let txt = btn.innerText;
  btn.setAttribute('data-ar', txt);
  let enMap = { 'جميع الفئات':'All', 'زهري':'Floral', 'عود':'Oud', 'مسك':'Musk', 'توابل':'Spicy', 'فاكهي':'Fruity', 'بحري':'Aquatic', 'شرقي':'Oriental', 'جلدي':'Leather', 'خشبي':'Woody' };
  btn.setAttribute('data-en', enMap[txt] || txt);
});

// Initialization
applyTheme();
updateLanguage();
initHeroSlider();
renderProducts();
updateCartUI();