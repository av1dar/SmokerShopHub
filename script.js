// --- БАЗА ТОВАРІВ ---
const products = [
    // POD-СИСТЕМИ
    { 
        id: 1, 
        name: "Vaporesso XROS 3", 
        price: 1150, 
        cat: "pod", 
        image: "img/VaporessoXROS3.png",  
        desc: "Топова под-система з регулюванням затяжки." 
    },
    { 
        id: 2, 
        name: "Elf Bar 5000", 
        price: 350, 
        cat: "pod", 
        image: "img/ElfBar5000.png", // Додав img/
        desc: "Популярна одноразка." 
    },
    { 
        id: 3, 
        name: "Voopoo V.Thru Pro", 
        price: 950, 
        cat: "pod", 
        image: "img/VoopooV.png", // Додав img/
        desc: "Потужна система з екраном." 
    },

    { 
        id: 4, 
        name: "Vaporesso Xros 4 mini", 
        price: 799, 
        cat: "pod", 
        image: "img/VAPORESSOXROS4Mini.png", // Додав img/
         
    },
    { 
        id: 5, 
        name: "Vaporesso Xros 5", 
        price: 1170, 
        cat: "pod", 
        image: "img/VaporessoXROS5PodKit.png", // Додав img/
         
    },
    { 
        id: 6, 
        name: "Vaporesso Xros 5mini", 
        price: 900, 
        cat: "pod", 
        image: "img/VAPORESSOXROS5Mini.png", // Додав img/
     
    },



    // РІДИНИ
    { id: 8, name: "Chaser Lux 30ml", price: 350, cat: "liquid", image: "img/ChaserLux30ml.png", desc: "Смак: Кавун-Лимон. Міцність: 50мг." },
    { id: 9, name: "Alchemist Frappuccino", price: 380, cat: "liquid", image: "img/AlchemistFrappuccino.png", desc: "Смак: Кавовий десерт." },
    { id: 10, name: "3Ger Mint", price: 320, cat: "liquid", image: "img/3GerMint.png", desc: "Освіжаюча м'ята." },
{ 
        id: 11, 
        name: "Phantom 30ml", 
        price: 350, 
        cat: "liquid", 
        image: "img/Phantom30ml.png",  
        
    },
    { 
        id: 12, 
        name: "Punch 15ML", 
        price: 210, 
        cat: "liquid", 
        image: "img/Punch15ML.png",  
        
    },
    { 
        id: 13, 
        name: "HQD 10ML 50MG", 
        price: 160, 
        cat: "liquid", 
        image: "img/HQD10ML50MG.png",  
        
    },
    // ОДНОРАЗКИ
    { id: 14, name: "Elf Bar 5000", price: 550, cat: "disposable", image: "img/ElfBar5000.png", desc: "5000 тяг, перезаряджається." },
    { id: 15, name: "Lost Mary 4000", price: 480, cat: "disposable", image: "img/LostMary4000.png", desc: "Смак: Кола." },

    // КОМПЛЕКТУЮЧІ
    // УВАГА: Тут була помилка "image: Картридж...". Треба вказати розширення (.png або .jpg)
    { id: 16, name: "Картридж XROS 0.6", price: 130, cat: "parts", image: "img/cartridgexros06.png", desc: "Оригінальний картридж 0.6 Ом." },
    { id: 17, name: "Відкривачка для рідин", price: 200, cat: "parts", image: "img/ВідкривачкаДляРідин.png",}
   
   
];

// Глобальні змінні
let cart = [];
let currentProduct = null;

// --- НАВІГАЦІЯ ---

function hideAllViews() {
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.view').forEach(el => el.classList.add('hidden'));
    window.scrollTo(0, 0); 
}

function goHome() {
    hideAllViews();
    document.getElementById('view-home').classList.remove('hidden');
    document.getElementById('view-home').classList.add('active');
    renderFeatured();
}

function openCategory(category) {
    hideAllViews();
    const catalogView = document.getElementById('view-catalog');
    catalogView.classList.remove('hidden');
    catalogView.classList.add('active');
    
    const titles = { 'pod': 'POD-системи', 'liquid': 'Рідини', 'disposable': 'Одноразки', 'parts': 'Комплектуючі' };
    document.getElementById('catalog-title').innerText = titles[category] || 'Каталог';

    // Рендер товарів
    const grid = document.getElementById('catalog-grid');
    grid.innerHTML = '';
    
    products.filter(p => p.cat === category).forEach(p => {
        // 👇 ВИПРАВЛЕНО: Використовуємо <img> замість тексту
        grid.innerHTML += `
            <div class="product-card" onclick="openProduct(${p.id})">
                <img src="${p.image}" class="p-img" alt="${p.name}" onerror="this.src='https://placehold.co/200x200?text=No+Photo'">
                <div class="p-title">${p.name}</div>
                <div class="p-price">${p.price} грн</div>
            </div>
        `;
    });
}

function openProduct(id) {
    currentProduct = products.find(p => p.id === id);
    if(!currentProduct) return;

    hideAllViews();
    document.getElementById('view-product').classList.remove('hidden');
    document.getElementById('view-product').classList.add('active');

    // 👇 ВИПРАВЛЕНО: Вставка картинки через innerHTML
    document.getElementById('detail-img').innerHTML = `<img src="${currentProduct.image}" alt="${currentProduct.name}" onerror="this.src='https://placehold.co/300x300?text=No+Photo'">`;
    
    document.getElementById('detail-title').innerText = currentProduct.name;
    document.getElementById('detail-price').innerText = currentProduct.price;
    document.getElementById('detail-desc').innerText = currentProduct.desc;
}

function goBack() {
    if(currentProduct) {
        openCategory(currentProduct.cat);
    } else {
        goHome();
    }
}

function openCart() {
    hideAllViews();
    document.getElementById('view-cart').classList.remove('hidden');
    document.getElementById('view-cart').classList.add('active');
    renderCart();
}

// --- ФУНКЦІОНАЛ ---

function renderFeatured() {
    const container = document.getElementById('featured-products');
    container.innerHTML = '';
    
    products.slice(0, 4).forEach(p => {
        // 👇 ВИПРАВЛЕНО: Використовуємо <img> замість p.icon
        container.innerHTML += `
            <div class="product-card" onclick="openProduct(${p.id})">
                <img src="${p.image}" class="p-img" alt="${p.name}" onerror="this.src='https://placehold.co/200x200?text=No+Photo'">
                <div class="p-title">${p.name}</div>
                <div class="p-price">${p.price} грн</div>
            </div>
        `;
    });
}

function addToCartFromDetail() {
    if(!currentProduct) return;
    cart.push(currentProduct);
    updateCartCount();
    alert('Товар додано в кошик!');
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function renderCart() {
    const list = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    list.innerHTML = '';
    
    let total = 0;
    
    if(cart.length === 0) {
        list.innerHTML = '<p style="text-align:center; color:#888;">Кошик порожній</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            list.innerHTML += `
                <div class="cart-item">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <img src="${item.image}" style="width:40px; height:40px; object-fit:contain;">
                        <div>
                            <b>${item.name}</b><br>
                            <small>${item.price} грн</small>
                        </div>
                    </div>
                    <button onclick="removeFromCart(${index})" style="color:red; background:none; border:none; font-size:18px;"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
        });
    }
    totalEl.innerText = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
    updateCartCount();
}

function checkout() {
    if(cart.length === 0) return alert('Кошик порожній');
    
    let msg = "Замовлення з сайту:\n";
    let total = 0;
    cart.forEach(p => {
        msg += `- ${p.name} (${p.price} грн)\n`;
        total += p.price;
    });
    msg += `\nРазом: ${total} грн`;

    const link = `https://t.me/manager_smokershop?text=${encodeURIComponent(msg)}`;
    window.open(link, '_blank');
}

// Старт
renderFeatured();