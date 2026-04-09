// =========================
// 🛒 CART + ❤️ WISHLIST
// =========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// =========================
// 📦 PRODUCTS (WITH CATEGORY)
// =========================

const products = [
    {
        // Bracelets
        name:"Bracelet",
        price:350,
        img:"images/b1.jpeg",  
        category:"bracelet",
        description:"Elevate your everyday style with this elegant bracelet, designed to add a touch of charm and sophistication to any outfit. Crafted with high-quality materials, this piece offers both durability and a luxurious finish.<br>Its lightweight design ensures comfortable wear throughout the day, making it perfect for both casual and formal occasions.<br></br>Whether you're dressing up for a special event or adding a subtle sparkle to your daily look, this bracelet is a must-have accessory. It also makes a thoughtful gift for your loved ones..",
        features: [
    "Stainless Steel",
    "Lightweight",
    "Elegant Design",
    "Perfect for daily wear"
]
    },
    {
        name:"Bracelet",
        price:350,
        img:"images/b2.jpeg",  
        category:"bracelet",
        description:"Elevate your everyday style with this elegant bracelet, designed to add a touch of charm and sophistication to any outfit. Crafted with high-quality materials, this piece offers both durability and a luxurious finish.<br>Its lightweight design ensures comfortable wear throughout the day, making it perfect for both casual and formal occasions.<br></br>Whether you're dressing up for a special event or adding a subtle sparkle to your daily look, this bracelet is a must-have accessory. It also makes a thoughtful gift for your loved ones..",
        features: [
    "Stainless Steel",
    "Lightweight",
    "Elegant Design",
    "Perfect for daily wear"
        ]
    },
    {
        name:"Bracelet",
        price:350,
        img:"images/b3.jpeg",  
        category:"bracelet",
        description:"Elevate your everyday style with this elegant bracelet, designed to add a touch of charm and sophistication to any outfit. Crafted with high-quality materials, this piece offers both durability and a luxurious finish.<br>Its lightweight design ensures comfortable wear throughout the day, making it perfect for both casual and formal occasions.<br></br>Whether you're dressing up for a special event or adding a subtle sparkle to your daily look, this bracelet is a must-have accessory. It also makes a thoughtful gift for your loved ones..",
        features: [
    "Stainless Steel",
    "Lightweight",
    "Elegant Design",
    "Perfect for daily wear"
        ]
    },
    // Makeup
     {
        name:"Lip Gloss",
        price:300,
        img:"images/l1.jpeg",  
        category:"makeup",
        description:"Give your lips the care they deserve with this nourishing lip oil, designed to keep your lips soft, smooth, and beautifully hydrated. Its lightweight and non-sticky formula glides effortlessly, adding a natural shine while deeply moisturizing your lips.<br></br>Perfect for daily use, this lip oil enhances your natural look while protecting your lips from dryness. Wear it alone for a glossy finish or layer it over your favorite lipstick for extra shine.",
        features: [
            "Deeply hydrating and nourishing",
"Lightweight, non-sticky formula",
"Adds natural glossy shine",
"Keeps lips soft and smooth",
"Perfect for everyday use ",
        ]
    },
     {
        name:"Teddy bear lip gloss",
        price:250,
        img:"images/l2.jpeg",  
        category:"makeup",
        description:"Add a playful and adorable touch to your beauty routine with this teddy bear 2-in-1 lip gloss. Designed with a cute teddy bear shape and a convenient keychain attachment, it’s both stylish and practical — perfect for on-the-go use.<br></br>This lip gloss provides a smooth, glossy finish while keeping your lips soft and hydrated. Easily attach it to your bag, purse, or keys so you can carry your favorite gloss wherever you go.",
        features: [
            "Cute teddy bear design",
"2-in-1 lip gloss with keychain",
"Smooth and glossy finish",
"Hydrating and lightweight formula",
"Easy to carry and travel-friendly",
         ]
    },
    {
        name:"Liquid blush",
        price:250,
        img:"images/bl1.jpeg",  
        category:"makeup",
        description:"Enhance your natural glow with this lightweight liquid blush, designed to give your cheeks a fresh and radiant finish. Its smooth, blendable formula melts seamlessly into the skin, delivering a natural-looking flush that lasts all day.<br></br>Perfect for both everyday wear and special occasions, this liquid blush is easy to apply and buildable, allowing you to achieve a soft tint or a bold pop of color effortlessly.",
        features: [ 
            "Lightweight and blendable formula",
"Natural, radiant finish",
"Buildable color intensity",
"Long-lasting wear",
"Easy to apply and suitable for all skin types",
]
    },
    // Pendents
    {
        name:"Sunflower Pendent",
        price:350,
        img:"images/sunflower.jpeg",  
        category:"necklace",
        description:"Add a touch of timeless elegance to your look with this stunning stainless steel necklace. Designed with precision and crafted from high-quality stainless steel, this piece is durable, tarnish-resistant, and perfect for everyday wear.<br></br>Its sleek and modern design makes it a versatile accessory that complements both casual and formal outfits. Whether worn alone for a minimal look or layered with other pieces, this necklace enhances your style effortlessly.",
        features: [ 
            "High-quality stainless steel",
"Tarnish-resistant and long-lasting",
"Lightweight and comfortable",
"Elegant and versatile design",
"Perfect for daily wear and gifting",
]
    },
     {
        name:"Levender Bloom Pendent",
        price:350,
        img:"images/levender.jpeg",  
        category:"necklace",
        description:"Add a touch of timeless elegance to your look with this stunning stainless steel necklace. Designed with precision and crafted from high-quality stainless steel, this piece is durable, tarnish-resistant, and perfect for everyday wear.<br></br>Its sleek and modern design makes it a versatile accessory that complements both casual and formal outfits. Whether worn alone for a minimal look or layered with other pieces, this necklace enhances your style effortlessly.",
        features: [ 
            "High-quality stainless steel",
"Tarnish-resistant and long-lasting",
"Lightweight and comfortable",
"Elegant and versatile design",
"Perfect for daily wear and gifting",
]
    },
     {
        name:"Pink Flora Pendent",
        price:350,
        img:"images/pinky.jpeg",  
        category:"necklace",
        description:"Add a touch of timeless elegance to your look with this stunning stainless steel necklace. Designed with precision and crafted from high-quality stainless steel, this piece is durable, tarnish-resistant, and perfect for everyday wear.<br></br>Its sleek and modern design makes it a versatile accessory that complements both casual and formal outfits. Whether worn alone for a minimal look or layered with other pieces, this necklace enhances your style effortlessly.",
        features: [ 
            "High-quality stainless steel",
"Tarnish-resistant and long-lasting",
"Lightweight and comfortable",
"Elegant and versatile design",
"Perfect for daily wear and gifting",
]
    },
    {
        name:"Golden Tulip Pendent",
        price:350,
        img:"images/gold.jpeg",  
        category:"necklace",
        description:"Add a touch of grace and sophistication to your look with this beautiful swan pendant set. Designed with a delicate swan motif, this set symbolizes elegance, beauty, and timeless charm.<br></br>Crafted with attention to detail, the pendant and matching earrings create a perfectly coordinated look that enhances any outfit. Whether you're dressing up for a special occasion or adding a subtle sparkle to your everyday style, this set is a must-have in your jewelry collection.",
        features: [
            "Elegant swan design",
"Includes pendant necklace and matching earrings",
"Lightweight and comfortable to wear",
"Stylish and versatile",
"Perfect for gifting and special occasions ",
        ]
    },
     {
        name:"Swan Pendent set",
        price:300,
        img:"images/swan.jpeg",  
        category:"necklace",
        description:"Add a touch of grace and sophistication to your look with this beautiful swan pendant set. Designed with a delicate swan motif, this set symbolizes elegance, beauty, and timeless charm.<br></br>Crafted with attention to detail, the pendant and matching earrings create a perfectly coordinated look that enhances any outfit. Whether you're dressing up for a special occasion or adding a subtle sparkle to your everyday style, this set is a must-have in your jewelry collection.",
        features: [
            "Elegant swan design",
"Includes pendant necklace and matching earrings",
"Lightweight and comfortable to wear",
"Stylish and versatile",
"Perfect for gifting and special occasions ",
        ]
    },
    // earings
    {
        name:"Ear Studs",
        price:250,
        img:"images/e.jpeg",  
        category:"earing",
        description:"Add a touch of effortless elegance to your look with these classic ear studs. Designed for everyday wear, these studs offer a simple yet sophisticated style that complements any outfit.<br></br>Crafted with quality materials, they are lightweight, comfortable, and perfect for all-day wear. Whether you prefer a minimal look or want to pair them with other jewelry, these ear studs are a timeless addition to your collection.",
        features: [ 
            "Classic and minimal design",
"Lightweight and comfortable",
"Suitable for everyday wear",
"Easy to style with any outfit",
"Perfect for casual and formal occasions",
        ]
    },
    {
        name:"Jhumki",
        price:250,
        img:"images/e1.jpeg",  
        category:"earing",
        description:"Add a touch of traditional elegance to your look with these stunning jhumki earrings. Inspired by classic designs, these earrings beautifully blend cultural charm with modern style.<br></br>Lightweight and comfortable, they are perfect for both everyday wear and special occasions. Whether paired with ethnic outfits or styled with modern looks, these jhumkis bring a graceful and eye-catching finish to your appearance.",
        features: [ 
            "Traditional and elegant design",
"Lightweight and comfortable",
"Perfect for ethnic and modern outfits",
"Ideal for weddings, festivals, and daily wear",
"Stylish and timeless appeal",
        ]
    },
    // Chocolate Bouquet
     {
        name:"Chocolate Bouquet",
        price:800,
        img:"images/cb1.png",  
        category:"cbouquet",
        description:"Make every moment sweeter with this beautifully arranged chocolate bouquet, a perfect blend of elegance and indulgence. Carefully crafted with delicious chocolates and wrapped in stylish packaging, this bouquet is a unique and thoughtful gift for your loved ones.<br></br>Whether it’s a birthday, anniversary, or a special surprise, this chocolate bouquet adds a touch of sweetness and charm to every occasion. It’s not just a gift — it’s a delightful experience that brings smiles instantly.",
        features: [ 
            "Beautifully arranged chocolate bouquet",
"Filled with delicious chocolates",
"Elegant and eye-catching packaging",
"Perfect for gifting on any occasion",
"A sweet and memorable surprise",
        ]
    },
     {
        name:"Chocolate Bouquet",
        price:1200,
        img:"images/cb2.jpeg",  
        category:"cbouquet",
        description:"Make every moment sweeter with this beautifully arranged chocolate bouquet, a perfect blend of elegance and indulgence. Carefully crafted with delicious chocolates and wrapped in stylish packaging, this bouquet is a unique and thoughtful gift for your loved ones.<br></br>Whether it’s a birthday, anniversary, or a special surprise, this chocolate bouquet adds a touch of sweetness and charm to every occasion. It’s not just a gift — it’s a delightful experience that brings smiles instantly.",
        features: [ 
            "Beautifully arranged chocolate bouquet",
"Filled with delicious chocolates",
"Elegant and eye-catching packaging",
"Perfect for gifting on any occasion",
"A sweet and memorable surprise",
        ]
    },
     {
        name:"Kitkat Chocolate Bouquet",
        price:1500,
        img:"images/cb3.jpeg",  
        category:"cbouquet",
        description:"Make every moment sweeter with this beautifully arranged chocolate bouquet, a perfect blend of elegance and indulgence. Carefully crafted with delicious chocolates and wrapped in stylish packaging, this bouquet is a unique and thoughtful gift for your loved ones.<br></br>Whether it’s a birthday, anniversary, or a special surprise, this chocolate bouquet adds a touch of sweetness and charm to every occasion. It’s not just a gift — it’s a delightful experience that brings smiles instantly.",
        features: [ 
            "Beautifully arranged chocolate bouquet",
"Filled with delicious chocolates",
"Elegant and eye-catching packaging",
"Perfect for gifting on any occasion",
"A sweet and memorable surprise",
        ]
    },
 
    // Hijab bouquet
     {
        name:"Hijab bouquet",
        price:350,
        img:"images/hb1.jpeg",  
        category:"hbouquet",
        description:"Celebrate style and elegance with this beautifully arranged hijab bouquet, a perfect blend of fashion and creativity. Designed with neatly folded premium hijabs, this bouquet offers a unique and thoughtful gifting option for your loved ones.<br></br>Wrapped in stylish packaging, it creates a luxurious and eye-catching presentation that makes any occasion extra special. Whether it’s for birthdays, Eid, or a heartfelt surprise, this hijab bouquet is both practical and beautiful.",
        features: [
             "Beautifully arranged hijab bouquet",
"Made with soft, high-quality fabric",
"Elegant and aesthetic packaging",
"Unique and thoughtful gift idea",
"Perfect for special occasions and celebrations",
         ]
    },
    // Male boxes
     {
        name:"Male Box 1",
        price:6500,
        img:"images/mb1.jpeg",  
        category:"giftboxes",
        description:"Make every occasion special with this thoughtfully curated men’s gift box, designed to combine style, elegance, and practicality. This premium set includes a stylish dress, classic cufflinks, a sleek wallet, a refreshing body spray, a delicious chocolate, and a personalized card — all beautifully packed in a sophisticated gift box.<br></br>Perfect for birthdays, anniversaries, or special celebrations, this gift box offers everything a man needs to look sharp and feel confident. It’s a complete package that blends fashion, grooming, and a touch of sweetness.<br></br><b>Includes:</b><br>●Stylish dress<br>●Elegant cufflinks<br>●Premium quality wallet<br>●Refreshing body spray<br>●Delicious chocolate<br>●Personalized card<br>●Elegant gift box packagin<br></br>",
       features: [ 
        "All-in-one premium gift set",
"Perfect for all special occasions",
"Stylish, practical, and thoughtful",
"Ready-to-gift packaging",
       ]
    },
     {
        name:"Male Box 2",
        price:6000,
        img:"images/mb2.jpeg",  
        category:"giftboxes",
        description:"Make every occasion special with this thoughtfully curated men’s gift box, designed to combine style, elegance, and practicality. This premium set includes a stylish dress, classic cufflinks, a sleek wallet, a refreshing body spray, a delicious chocolate, and a personalized card — all beautifully packed in a sophisticated gift box.<br></br>Perfect for birthdays, anniversaries, or special celebrations, this gift box offers everything a man needs to look sharp and feel confident. It’s a complete package that blends fashion, grooming, and a touch of sweetness.<br></br><b>Includes:</b><br>●Stylish dress<br>●Elegant cufflinks<br>●Premium quality wallet<br>●Refreshing body spray<br>●Delicious chocolate<br>●Personalized card<br>●Elegant gift box packagin<br></br>",
       features: [ 
        "All-in-one premium gift set",
"Perfect for all special occasions",
"Stylish, practical, and thoughtful",
"Ready-to-gift packaging",
       ]
    },
    // Glass Hamper
    {
        name:"Glass Hamper",
        price:650,
        img:"images/g1.jpeg",  
        category:"glasshampers",
        description:"Surprise your loved ones with this beautifully curated glass hamper, thoughtfully designed to bring joy and elegance in one perfect package. This charming set includes a pair of stylish jhumkis, a soft scrunchie, a trendy claw clip, a nourishing lip oil, and a delicious chocolate treat.<br></br>Packed in a clear glass-style hamper, it not only looks aesthetically pleasing but also makes a perfect gift for birthdays, special occasions, or just to show love. Each item is carefully selected to create a blend of fashion, self-care, and sweetness.<br></br><b>Includes:</b><br>●Elegant jhumki earrings<br>●Soft and stylish scrunchie<br>●Trendy claw clip<br>●Hydrating lip oil<br>●Delicious chocolate<br></br>",
        features: [
 "Aesthetic and gift-ready packaging",
"Perfect combination of beauty & accessories",
"Ideal for gifting on any occasion",
"Cute, trendy, and thoughtful set",
        ]
    },
     {
        name:"Scrunchie Glass Hamper",
        price:500,
        img:"images/g2.jpeg",  
        category:"glasshampers",
        description:"Add a touch of style and softness to your hair accessory collection with this beautiful scrunchie glass hamper. Featuring 5 premium scrunchies, this set is perfect for creating cute and effortless hairstyles every day.<br></br>Each scrunchie is made from soft, hair-friendly fabric that provides a gentle yet secure hold without causing damage or breakage. Packed in an elegant glass-style hamper, it also makes a perfect gift for your loved ones.<br></br><b>Includes:</b><br>●5 soft and stylish scrunchies<br></br>",
        features: [
            "Gentle on hair, reduces breakage",
"Comfortable for all-day wear",
"Trendy and versatile colors/designs",
"Aesthetic glass hamper packaging",
"Perfect for gifting and daily use",
         ]
    },
      // Hair Accsories
     {
        name:"Flower Claw",
        price:150,
        img:"images/c1.jpeg",  
        category:"hairaccessoriess",
        description:"Add a soft and feminine touch to your hairstyle with this beautiful flower claw clip. Designed with a delicate floral shape, it effortlessly enhances your everyday look while keeping your hair secure and stylish.<br></br>Made with high-quality material, this claw clip provides a strong grip without pulling or damaging your hair. Perfect for quick updos, casual outings, or special occasions, it’s a must-have accessory for every girl.<br></br>",
        features: [
            "Elegant flower design",
"Strong and secure grip",
"Lightweight and comfortable",
"Suitable for all hair types",
"Perfect for daily wear and styling",
         ]
    },
         {
        name:"Flower Claw",
        price:150,
        img:"images/c2.jpeg",  
        category:"hairaccessoriess",
        description:"Add a soft and feminine touch to your hairstyle with this beautiful flower claw clip. Designed with a delicate floral shape, it effortlessly enhances your everyday look while keeping your hair secure and stylish.<br></br>Made with high-quality material, this claw clip provides a strong grip without pulling or damaging your hair. Perfect for quick updos, casual outings, or special occasions, it’s a must-have accessory for every girl.<br></br>",
        features: [
            "Elegant flower design",
"Strong and secure grip",
"Lightweight and comfortable",
"Suitable for all hair types",
"Perfect for daily wear and styling",
         ]
    },     {
        name:"Flower Claw",
        price:150,
        img:"images/c3.jpeg",  
        category:"hairaccessoriess",
        description:"Add a soft and feminine touch to your hairstyle with this beautiful flower claw clip. Designed with a delicate floral shape, it effortlessly enhances your everyday look while keeping your hair secure and stylish.<br></br>Made with high-quality material, this claw clip provides a strong grip without pulling or damaging your hair. Perfect for quick updos, casual outings, or special occasions, it’s a must-have accessory for every girl.<br></br>",
        features: [
            "Elegant flower design",
"Strong and secure grip",
"Lightweight and comfortable",
"Suitable for all hair types",
"Perfect for daily wear and styling",
         ]
    },     {
        name:"Sceunchie",
        price:100,
        img:"images/s1.jpeg",  
        category:"hairaccessoriess",
        description:"Add a cute and trendy touch to your hairstyle with these stylish scrunchies. Made from soft and high-quality fabric, they are gentle on your hair and help prevent breakage and damage.<br></br>Perfect for everyday use, these scrunchies provide a comfortable hold without pulling your hair. Whether you're creating a casual ponytail, a messy bun, or a chic look, they are the perfect accessory to complete your style.<br></br>",
        features: [
            "Soft and hair-friendly fabric",
"Strong yet gentle hold",
"Comfortable for all-day wear",
"Trendy and versatile design",
"Suitable for all hair types",
         ]
    },
,     {
        name:"Sceunchie",
        price:100,
        img:"images/s2.jpeg",  
        category:"hairaccessoriess",
        description:"Add a cute and trendy touch to your hairstyle with these stylish scrunchies. Made from soft and high-quality fabric, they are gentle on your hair and help prevent breakage and damage.<br></br>Perfect for everyday use, these scrunchies provide a comfortable hold without pulling your hair. Whether you're creating a casual ponytail, a messy bun, or a chic look, they are the perfect accessory to complete your style.<br></br>",
        features: [
            "Soft and hair-friendly fabric",
"Strong yet gentle hold",
"Comfortable for all-day wear",
"Trendy and versatile design",
"Suitable for all hair types",
         ]
    },,     {
        name:"Sceunchie",
        price:100,
        img:"images/s3.jpeg",  
        category:"hairaccessoriess",
        description:"Add a cute and trendy touch to your hairstyle with these stylish scrunchies. Made from soft and high-quality fabric, they are gentle on your hair and help prevent breakage and damage.<br></br>Perfect for everyday use, these scrunchies provide a comfortable hold without pulling your hair. Whether you're creating a casual ponytail, a messy bun, or a chic look, they are the perfect accessory to complete your style.<br></br>",
        features: [
            "Soft and hair-friendly fabric",
"Strong yet gentle hold",
"Comfortable for all-day wear",
"Trendy and versatile design",
"Suitable for all hair types",
         ]
    },

];

// =========================
// 🖥️ DISPLAY ALL PRODUCTS
// =========================

function displayProducts() {

    let list = document.getElementById("productList");
    if(!list) return;

    list.innerHTML = "";

    let params = new URLSearchParams(window.location.search);
    let cat = params.get("cat");

    let filtered = products;

    if(cat && cat !== "allpro"){
        filtered = products.filter(p => 
            p.category.toLowerCase() === cat.toLowerCase()
        );
    }

    if(filtered.length === 0){
        list.innerHTML = "<h2>No Products Found 😢</h2>";
        return;
    }

    filtered.forEach((p) => {

        let originalIndex = products.indexOf(p); //
//outside image show 
        list.innerHTML += `
        <div class="card" onclick="openProduct(${originalIndex})">
            <img src="${p.img}" style="width:100%; height:200px; object-fit:contain;">
            <h3>${p.name}</h3>
            <p>Rs. ${p.price}</p>

        </div>`;
    });
}
// =========================
// 📂 CATEGORY FILTER
// =========================

function showCategory(cat){
    let list = document.getElementById("productList");

    list.innerHTML = "";

    let filtered = products.filter(p => p.category === cat);

    if(filtered.length === 0){
        list.innerHTML = "<h2>No Products Found</h2>";
        return;
    }

    filtered.forEach((p, i) => {
        list.innerHTML += `
        <div class="card" onclick="openProduct(${i})">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>Rs. ${p.price}</p>
        </div>`;
    });
}

// =========================
// 🔄 LOAD CATEGORY FROM URL
// =========================

function loadCategory(){
    let params = new URLSearchParams(window.location.search);
    let cat = params.get("cat");

    if(cat){
        showCategory(cat);
    } else {
        displayProducts();
    }
}

// =========================
// ➕ ADD TO CART
// =========================

function addToCart(i) {

    let item = cart.find(p => 
        p.name === products[i].name &&
        p.price === products[i].price &&
        p.img === products[i].img
    );

    if (item) {
        item.qty += 1;
    } else {
        cart.push({...products[i], qty: 1});
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");

    updateCartCount();
}
function increaseQty(i){
    cart[i].qty += 1;
    updateCart();
}

function decreaseQty(i){
    if(cart[i].qty > 1){
        cart[i].qty -= 1;
    } else {
        cart.splice(i, 1);
    }
    updateCart();
}

// =========================
// 🛍️ uodate CARTcount
// =========================
function updateCartCount(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    cart.forEach(item => {
        count += item.qty || 1;
    });

    let badge = document.getElementById("cartCount");

    if(badge){
        badge.innerText = count;
    }
}
// =========================
// 🛍️ SHOW CART
// =========================

function showCart() {
    let cartDiv = document.getElementById("cartItems");
    let total = 0;

    if (!cartDiv) return;

    cartDiv.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price * item.qty;

        cartDiv.innerHTML += `
        <div class="card">
            <img src="${item.img}" class="cart-img">
            <h3>${item.name}</h3>
            <p>Price: Rs. ${item.price}</p>
            
            <p>
                Qty: 
                <button onclick="decreaseQty(${index})">-</button>
                ${item.qty}
                <button onclick="increaseQty(${index})">+</button>
            </p>

            <p>Subtotal: Rs. ${item.price * item.qty}</p>

            <button onclick="removeItem(${index})">Remove</button>
        </div>`;
    });

    document.getElementById("total").innerText = total;
}

// =========================
// 🔄 CART FUNCTIONS
// =========================

function inc(){
    qty++;
    document.getElementById("qty").innerText = qty;
}

function dec(){
    if(qty > 1){
        qty--;
        document.getElementById("qty").innerText = qty;
    }
}

function removeItem(i) {
    cart.splice(i, 1);
    updateCart();
}

function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}

// =========================
// ❤️ WISHLIST
// =========================

function addToWishlist(i){
    let item = products[i];

    let exists = wishlist.find(p => p.name === item.name);

    if(!exists){
        wishlist.push(item);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert("Added to Wishlist ❤️");
    } else {
        alert("Already in Wishlist!");
    }
}

// =========================
// 🔍 SEARCH
// =========================

function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let list = document.getElementById("productList");

    if (!list) return;

    list.innerHTML = "";

    let filtered = products.filter(p => 
        p.name.toLowerCase().includes(input)
    );

    if(filtered.length === 0){
        list.innerHTML = `<h2>No Product Found 😢</h2>`;
        return;
    }

    filtered.forEach((p) => {

        let index = products.findIndex(item =>
            item.name === p.name &&
            item.price === p.price &&
            item.img === p.img
        );

        list.innerHTML += `
        <div class="card" onclick="openProduct(${index})">
           <img src="${p.img}" style="width:100%; height:200px; object-fit:contain;">
            <h3>${p.name}</h3>
            <p>Rs. ${p.price}</p>
            <button onclick="event.stopPropagation(); addToCart(${index})">Add to Cart</button>
        </div>`;
    });
}
// =========================
// 🔽 SORT PRODUCTS
// =========================
function sortProducts(type){

    let list = document.getElementById("productList");
    if (!list) return;

    // 🔥 current category check
    let params = new URLSearchParams(window.location.search);
    let cat = params.get("cat");

    let filtered = products;

    // 👉 agar category hai to filter karo
    if(cat && cat !== "allpro"){
        filtered = products.filter(p => 
            p.category.toLowerCase() === cat.toLowerCase()
        );
    }

    // 👉 sorting apply karo
    if(type === "low-high"){
        filtered.sort((a,b) => a.price - b.price);
    }
    else if(type === "high-low"){
        filtered.sort((a,b) => b.price - a.price);
    }
    else if(type === "new-old"){
        filtered.reverse();
    }

    // 👉 display karo
    list.innerHTML = "";

    filtered.forEach((p) => {

        let index = products.findIndex(item =>
            item.name === p.name &&
            item.price === p.price &&
            item.img === p.img
        );

        list.innerHTML += `
        <div class="card" onclick="openProduct(${index})">
            <img src="${p.img}" style="width:100%; height:200px; object-fit:contain;">
            <h3>${p.name}</h3>
            <p>Rs. ${p.price}</p>
        </div>`;
    });

    document.getElementById("sortSelect").selectedIndex = 0;
}

// =========================
// 🛒 GO TO CART (NEW)
// =========================

function goToCart(){
    window.location.href = "cart.html";
}

// =========================
// 🛒 checkout 
// =========================

function loadCheckout(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let productTotal = 0;

    cart.forEach(item => {
        productTotal += item.price * item.qty;
    });

    // show product total
    document.getElementById("productTotal").innerText = productTotal;

    // add delivery charges
    let finalTotal = productTotal + 300;

    // show final total
    document.getElementById("finalTotal").innerText = finalTotal;
}
function openMenu(){
    document.getElementById("sideMenu").classList.add("active");
}

function closeMenu(){
    document.getElementById("sideMenu").classList.remove("active");
}

function goToCart(){
    window.location.href = "cart.html";
}

function openProduct(i){
    localStorage.setItem("selectedProduct", JSON.stringify(products[i]));
    window.location.href = "product-detail.html";
}
function updateWishlistCount(){
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    let count = wishlist.length;

    let badge = document.getElementById("wishCount");

    if(badge){
        badge.innerText = count;
    }
}
function searchFromURL(){
    let params = new URLSearchParams(window.location.search);
    let search = params.get("search");

    if(!search) return;

    let list = document.getElementById("productList");
    if(!list) return;

    list.innerHTML = "";

    let filtered = products.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    if(filtered.length === 0){
        list.innerHTML = "<h2>No Product Found 😢</h2>";
        return;
    }

    filtered.forEach((p) => {
        list.innerHTML += `
        <div class="card" onclick="openProduct(${products.indexOf(p)})">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>Rs. ${p.price}</p>
        </div>`;
    });
}
function goHome(){
    window.location.href = "index.html";
}
function clearCart(){
    localStorage.removeItem("cart");
    alert("Cart Cleared!");
    location.reload();
}
/* BACK FUNCTION */
function goBack(){
    if(document.referrer !== ""){
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
}