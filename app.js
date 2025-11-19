// Product Data
const products = [
    {
        id: 1,
        name: 'Rose Garden Dress',
        desc: 'Elegant lace bodice with flowing skirt',
        price: 'Rs. 4,500',
        fullDescription: 'This beautiful Rose Garden Dress features an elegant lace bodice with intricate floral patterns, paired with a flowing skirt that moves gracefully. Perfect for weddings, parties, and special occasions. Made from premium quality fabric for maximum comfort.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: [
            { name: 'Pink', value: '#FFC0CB' },
            { name: 'White', value: '#FFFFFF' },
            { name: 'Lavender', value: '#E6E6FA' }
        ],
        images: 3
    },
    {
        id: 2,
        name: 'Lavender Dream',
        desc: 'Delicate floral embroidery',
        price: 'Rs. 5,200',
        fullDescription: 'The Lavender Dream dress showcases delicate floral embroidery work throughout, creating a stunning visual appeal. This dress is perfect for garden parties and daytime events. Features a comfortable fit with adjustable straps.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: [
            { name: 'Lavender', value: '#E6E6FA' },
            { name: 'Mint', value: '#98D8C8' },
            { name: 'Peach', value: '#FFE5B4' }
        ],
        images: 3
    },
    {
        id: 3,
        name: 'Pearl Princess',
        desc: 'Pearl-embellished halter neck',
        price: 'Rs. 6,800',
        fullDescription: 'A luxurious pearl-embellished halter neck dress that exudes elegance and sophistication. Each pearl is carefully hand-sewn for a premium finish. Perfect for formal events and evening occasions. Features a fitted bodice and flowing skirt.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: [
            { name: 'White', value: '#FFFFFF' },
            { name: 'Champagne', value: '#F7E7CE' },
            { name: 'Blush', value: '#FFE4E1' }
        ],
        images: 3
    },
    {
        id: 4,
        name: 'Sunset Bloom',
        desc: 'Coral pink with ribbon detail',
        price: 'Rs. 4,800',
        fullDescription: 'The Sunset Bloom dress features a beautiful coral pink shade with elegant ribbon detailing at the waist. This dress combines comfort with style, making it perfect for both casual and semi-formal events. Soft, breathable fabric ensures all-day comfort.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: [
            { name: 'Coral', value: '#FF7F50' },
            { name: 'Rose', value: '#FF69B4' },
            { name: 'Salmon', value: '#FA8072' }
        ],
        images: 3
    },
    {
        id: 5,
        name: 'Ivory Elegance',
        desc: 'Classic white with gold accents',
        price: 'Rs. 7,500',
        fullDescription: 'Experience timeless beauty with the Ivory Elegance dress. This classic white dress is enhanced with delicate gold accents that add a touch of luxury. Perfect for weddings, baptisms, and formal celebrations. Premium fabric with exquisite craftsmanship.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: [
            { name: 'Ivory', value: '#FFFFF0' },
            { name: 'White', value: '#FFFFFF' },
            { name: 'Cream', value: '#FFFDD0' }
        ],
        images: 3
    },
    {
        id: 6,
        name: 'Cherry Blossom',
        desc: 'Soft pink tulle creation',
        price: 'Rs. 5,900',
        fullDescription: 'The Cherry Blossom dress is a dreamy soft pink tulle creation with multiple layers for a princess-like effect. Features a fitted bodice with delicate embellishments and a full, flowing skirt. Perfect for making a grand entrance at any special occasion.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: [
            { name: 'Pink', value: '#FFB6C1' },
            { name: 'Baby Pink', value: '#F4C2C2' },
            { name: 'Rose Pink', value: '#FF66B2' }
        ],
        images: 3
    }
];

// Features Data
const features = [
    {
        icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>`,
        title: 'Premium Fabrics',
        desc: 'Finest materials for comfort'
    },
    {
        icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 1v6m0 6v6m8.66-15L17 7.34M7 17l-3.66 3.66M23 12h-6m-6 0H1m20.66 8.66L17 17M7 7 3.34 3.34"></path>
        </svg>`,
        title: 'Handcrafted Quality',
        desc: 'Attention to every detail'
    },
    {
        icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>`,
        title: 'Elegant Designs',
        desc: 'Modern & timeless style'
    },
    {
        icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>`,
        title: 'Island-wide Delivery',
        desc: 'We deliver across Sri Lanka'
    }
];

// Reviews Data
const reviews = [
    {
        name: 'Amaya Silva',
        review: 'Absolutely stunning dress! The quality is amazing and it fit perfectly.',
        rating: 5
    },
    {
        name: 'Nisha Fernando',
        review: 'Beautiful collection! I bought two dresses and received so many compliments.',
        rating: 5
    },
    {
        name: 'Rashmi Perera',
        review: "Elegant and comfortable. Perfect for my daughter's special day!",
        rating: 5
    }
];

// Render Products
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <div class="image-placeholder">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <p>Product Image</p>
                </div>
                <div class="product-heart">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price}</span>
                    <button class="add-cart-btn">Add to Cart</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Render Features
function renderFeatures() {
    const featuresGrid = document.getElementById('featuresGrid');
    
    features.forEach(feature => {
        const featureCard = document.createElement('div');
        featureCard.className = 'feature-card';
        featureCard.innerHTML = `
            <div class="feature-icon">
                ${feature.icon}
            </div>
            <h3 class="feature-title">${feature.title}</h3>
            <p class="feature-desc">${feature.desc}</p>
        `;
        featuresGrid.appendChild(featureCard);
    });
}

// Render Reviews
function renderReviews() {
    const reviewsGrid = document.getElementById('reviewsGrid');
    
    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        
        const starsHTML = Array(review.rating).fill(0).map(() => `
            <svg class="star" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
        `).join('');
        
        reviewCard.innerHTML = `
            <div class="review-avatar">${review.name.charAt(0)}</div>
            <div class="review-stars">${starsHTML}</div>
            <p class="review-text">"${review.review}"</p>
            <p class="review-name">- ${review.name}</p>
        `;
        reviewsGrid.appendChild(reviewCard);
    });
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Smooth Scroll for Navigation Links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '5rem';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.flexDirection = 'column';
        navLinks.style.background = 'white';
        navLinks.style.padding = '2rem';
        navLinks.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
}

// Add to Cart Functionality (Basic Alert)
function setupAddToCart() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-cart-btn')) {
            const productCard = e.target.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productId = Array.from(document.querySelectorAll('.product-card')).indexOf(productCard) + 1;
            openProductModal(productId);
        }
    });
}

// Modal State
let currentProduct = null;
let currentImageIndex = 0;
let selectedSize = null;
let selectedColor = null;
let quantity = 1;

// Open Product Modal
function openProductModal(productId) {
    currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return;
    
    const modal = document.getElementById('productModal');
    
    // Reset state
    currentImageIndex = 0;
    selectedSize = null;
    selectedColor = null;
    quantity = 1;
    
    // Populate modal
    document.getElementById('modalTitle').textContent = currentProduct.name;
    document.getElementById('modalPrice').textContent = currentProduct.price;
    document.getElementById('modalDescription').textContent = currentProduct.fullDescription;
    
    // Render image slider
    renderImageSlider();
    
    // Render sizes
    renderSizes();
    
    // Render colors
    renderColors();
    
    // Reset quantity
    document.getElementById('quantityInput').value = 1;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Product Modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Render Image Slider
function renderImageSlider() {
    const container = document.getElementById('modalImageContainer');
    const dotsContainer = document.getElementById('imageDots');
    
    container.innerHTML = `
        <div class="image-placeholder">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <p>Image ${currentImageIndex + 1} of ${currentProduct.images}</p>
        </div>
    `;
    
    // Render dots
    dotsContainer.innerHTML = '';
    for (let i = 0; i < currentProduct.images; i++) {
        const dot = document.createElement('div');
        dot.className = `dot ${i === currentImageIndex ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            currentImageIndex = i;
            renderImageSlider();
        });
        dotsContainer.appendChild(dot);
    }
}

// Render Sizes
function renderSizes() {
    const sizeOptions = document.getElementById('sizeOptions');
    sizeOptions.innerHTML = '';
    
    currentProduct.sizes.forEach(size => {
        const sizeBtn = document.createElement('div');
        sizeBtn.className = 'size-option';
        sizeBtn.textContent = size;
        sizeBtn.addEventListener('click', () => {
            document.querySelectorAll('.size-option').forEach(btn => btn.classList.remove('selected'));
            sizeBtn.classList.add('selected');
            selectedSize = size;
        });
        sizeOptions.appendChild(sizeBtn);
    });
}

// Render Colors
function renderColors() {
    const colorOptions = document.getElementById('colorOptions');
    colorOptions.innerHTML = '';
    
    currentProduct.colors.forEach(color => {
        const colorBtn = document.createElement('div');
        colorBtn.className = 'color-option';
        colorBtn.style.backgroundColor = color.value;
        if (color.value === '#FFFFFF') {
            colorBtn.style.border = '3px solid #E9D5FF';
        }
        colorBtn.title = color.name;
        colorBtn.addEventListener('click', () => {
            document.querySelectorAll('.color-option').forEach(btn => btn.classList.remove('selected'));
            colorBtn.classList.add('selected');
            selectedColor = color.name;
        });
        colorOptions.appendChild(colorBtn);
    });
}

// Setup Modal Controls
function setupModalControls() {
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.modal-close');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    const quantityInput = document.getElementById('quantityInput');
    const orderBtn = document.getElementById('orderNowBtn');
    
    // Close modal
    closeBtn.addEventListener('click', closeProductModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProductModal();
        }
    });
    
    // Image navigation
    prevBtn.addEventListener('click', () => {
        if (currentProduct) {
            currentImageIndex = (currentImageIndex - 1 + currentProduct.images) % currentProduct.images;
            renderImageSlider();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentProduct) {
            currentImageIndex = (currentImageIndex + 1) % currentProduct.images;
            renderImageSlider();
        }
    });
    
    // Quantity controls
    decreaseBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityInput.value = quantity;
        }
    });
    
    increaseBtn.addEventListener('click', () => {
        if (quantity < 10) {
            quantity++;
            quantityInput.value = quantity;
        }
    });
    
    // Order now
    orderBtn.addEventListener('click', sendWhatsAppOrder);
}

// Send WhatsApp Order
function sendWhatsAppOrder() {
    if (!selectedSize) {
        alert('Please select a size');
        return;
    }
    
    if (!selectedColor) {
        alert('Please select a color');
        return;
    }
    
    const message = `
🛍️ *New Order Request*

📦 *Product:* ${currentProduct.name}
💰 *Price:* ${currentProduct.price}
📏 *Size:* ${selectedSize}
🎨 *Color:* ${selectedColor}
🔢 *Quantity:* ${quantity}

💵 *Total:* Rs. ${parseInt(currentProduct.price.replace(/[^\d]/g, '')) * quantity}

Please confirm my order. Thank you!
    `.trim();
    
    const whatsappURL = `https://wa.me/94769005047?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Initialize Everything
function init() {
    // Render content
    renderProducts();
    renderFeatures();
    renderReviews();
    
    // Setup event listeners
    window.addEventListener('scroll', handleNavbarScroll);
    setupSmoothScroll();
    setupMobileMenu();
    setupAddToCart();
    setupModalControls();
    
    // Initial navbar state
    handleNavbarScroll();
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}