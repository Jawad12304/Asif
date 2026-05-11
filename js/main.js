/**
 * MPhil Education Portfolio - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('active');
            
            // Toggle icon
            const icon = mobileMenuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // --- Populate Data from data.js ---
    if (typeof siteData !== 'undefined') {
        const titleEl = document.getElementById('hero-title');
        const subtitleEl = document.getElementById('hero-subtitle');
        const bioEl = document.getElementById('hero-bio');
        
        if (titleEl && siteData.hero?.title) titleEl.textContent = siteData.hero.title;
        if (subtitleEl && siteData.hero?.subtitle) subtitleEl.textContent = siteData.hero.subtitle;
        if (bioEl && siteData.hero?.bio) bioEl.textContent = siteData.hero.bio;
        
        // --- Photo Gallery Data ---
        const galleryData = siteData.gallery || [];
        const galleryContainer = document.getElementById('gallery-container');
        
        if (galleryContainer && galleryData.length > 0) {
            galleryData.forEach((item, index) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.setAttribute('role', 'button');
                galleryItem.setAttribute('tabindex', '0');
                galleryItem.setAttribute('aria-label', `View larger image of ${item.title}`);
                galleryItem.dataset.index = index;

                galleryItem.innerHTML = `
                    <img src="${item.src}" alt="${item.alt}" loading="lazy">
                    <div class="gallery-overlay">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `;
                
                galleryContainer.appendChild(galleryItem);
            });
        }
    } else {
        console.error("siteData not found. Make sure data.js is loaded.");
    }

    // --- Lightbox Modal ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    function openLightbox(index) {
        if (typeof siteData === 'undefined' || !siteData.gallery) return;
        const item = siteData.gallery[index];
        if (!item) return;
        
        lightboxImg.src = item.src;
        lightboxImg.alt = item.alt;
        lightboxCaption.textContent = `${item.title}: ${item.description}`;
        
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        
        // Trap focus or focus close button for accessibility
        lightboxClose.focus();
        
        // Prevent background scrolling
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        
        // Restore background scrolling
        document.body.style.overflow = '';
        
        // Reset image source after transition
        setTimeout(() => {
            lightboxImg.src = '';
        }, 300);
    }

    // Event Listeners for Lightbox
    galleryContainer?.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (item) {
            const index = item.dataset.index;
            openLightbox(index);
        }
    });

    // Keyboard support for opening gallery items
    galleryContainer?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const item = e.target.closest('.gallery-item');
            if (item) {
                const index = item.dataset.index;
                openLightbox(index);
            }
        }
    });

    lightboxClose?.addEventListener('click', closeLightbox);

    // Close on click outside image
    lightbox?.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox?.classList.contains('active')) {
            closeLightbox();
        }
    });

});
