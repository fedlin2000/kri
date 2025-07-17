// Variables globales
let currentLanguage = 'fr';
let isMenuOpen = false;

// Traductions
const translations = {
    fr: {
        // Navigation
        'Accueil': 'Accueil',
        'À propos': 'À propos',
        'Services': 'Services',
        'Équipe': 'Équipe',
        'Contact': 'Contact',
        'Faire un don': 'Faire un don',
        
        // Hero
        'KRI FANM AYITI': 'KRI FANM AYITI',
        'KRIFA, pou byenèt Fanm ak Timoun': 'KRIFA, pou byenèt Fanm ak Timoun',
        'Défendre les droits des femmes et des filles, promouvoir l\'égalité des sexes pour une société équilibrée en Haïti.': 'Défendre les droits des femmes et des filles, promouvoir l\'égalité des sexes pour une société équilibrée en Haïti.',
        'Nos Services': 'Nos Services',
        'Nous Contacter': 'Nous Contacter',
        
        // À propos
        'À Propos de KRIFA': 'À Propos de KRIFA',
        'Une organisation dédiée aux droits des femmes depuis 2016': 'Une organisation dédiée aux droits des femmes depuis 2016',
        'Notre Mission': 'Notre Mission',
        'Notre Vision': 'Notre Vision',
        'Nos Valeurs': 'Nos Valeurs',
        'Année de création': 'Année de création',
        'Membres de l\'équipe': 'Membres de l\'équipe',
        'Services offerts': 'Services offerts',
        
        // Services
        'Nos Services': 'Nos Services',
        'Assistance complète pour les femmes et les enfants': 'Assistance complète pour les femmes et les enfants',
        'Assistance Juridique': 'Assistance Juridique',
        'Prise en charge VBG': 'Prise en charge VBG',
        'Accompagnement Psychosocial': 'Accompagnement Psychosocial',
        'Formation & Sensibilisation': 'Formation & Sensibilisation',
        'Réinsertion Sociale': 'Réinsertion Sociale',
        'Plaidoyer': 'Plaidoyer',
        
        // Équipe
        'Notre Équipe': 'Notre Équipe',
        'Des professionnelles engagées pour les droits des femmes': 'Des professionnelles engagées pour les droits des femmes',
        'Directrice Exécutive': 'Directrice Exécutive',
        'Secrétaire Exécutive': 'Secrétaire Exécutive',
        'Conseillère Juridique': 'Conseillère Juridique',
        'Conseillère Technique': 'Conseillère Technique',
        'Responsable Relations Humaines': 'Responsable Relations Humaines',
        
        // Contact
        'Contactez-nous': 'Contactez-nous',
        'N\'hésitez pas à nous contacter pour toute information ou assistance.': 'N\'hésitez pas à nous contacter pour toute information ou assistance.',
        'Adresse': 'Adresse',
        'Téléphone': 'Téléphone',
        'Contact': 'Contact',
        'Faire un Don': 'Faire un Don',
        'Nom complet': 'Nom complet',
        'Sujet': 'Sujet',
        'Message': 'Message',
        'Envoyer le message': 'Envoyer le message',
        'Montant du don': 'Montant du don',
        'Montant personnalisé': 'Montant personnalisé',
        'Nom du donateur': 'Nom du donateur',
        'Faire le don': 'Faire le don',
        
        // Footer
        'Défendre les droits des femmes et des enfants en Haïti depuis 2016.': 'Défendre les droits des femmes et des enfants en Haïti depuis 2016.',
        'Liens Rapides': 'Liens Rapides',
        'Suivez-nous': 'Suivez-nous',
        'Tous droits réservés.': 'Tous droits réservés.'
    },
    ht: {
        // Navigation
        'Accueil': 'Akèy',
        'À propos': 'Sou nou',
        'Services': 'Sèvis yo',
        'Équipe': 'Ekip la',
        'Contact': 'Kontakte nou',
        'Faire un don': 'Fe don',
        
        // Hero
        'KRI FANM AYITI': 'KRI FANM AYITI',
        'KRIFA, pou byenèt Fanm ak Timoun': 'KRIFA, pou byenèt Fanm ak Timoun',
        'Défendre les droits des femmes et des filles, promouvoir l\'égalité des sexes pour une société équilibrée en Haïti.': 'Defann dwa fanm ak tifi yo, pwomote egalite ant moun pou yon sosyete ki gen balans nan Ayiti.',
        'Nos Services': 'Sèvis nou yo',
        'Nous Contacter': 'Kontakte nou',
        
        // À propos
        'À Propos de KRIFA': 'Sou KRIFA',
        'Une organisation dédiée aux droits des femmes depuis 2016': 'Yon òganizasyon ki konsantre sou dwa fanm yo depi 2016',
        'Notre Mission': 'Misyon nou',
        'Notre Vision': 'Vizyon nou',
        'Nos Valeurs': 'Valè nou yo',
        'Année de création': 'Ane kreyasyon',
        'Membres de l\'équipe': 'Manm ekip la',
        'Services offerts': 'Sèvis nou ofri',
        
        // Services
        'Nos Services': 'Sèvis nou yo',
        'Assistance complète pour les femmes et les enfants': 'Asistans konplè pou fanm ak timoun yo',
        'Assistance Juridique': 'Asistans Jidikyè',
        'Prise en charge VBG': 'Pran swen VBG',
        'Accompagnement Psychosocial': 'Akompanman Psikososyal',
        'Formation & Sensibilisation': 'Fòmasyon & Sensibilizasyon',
        'Réinsertion Sociale': 'Reentegrasyon Sosyal',
        'Plaidoyer': 'Pledye',
        
        // Équipe
        'Notre Équipe': 'Ekip nou an',
        'Des professionnelles engagées pour les droits des femmes': 'Pwofesyonèl yo ki angaje pou dwa fanm yo',
        'Directrice Exécutive': 'Direktè Egzekitif',
        'Secrétaire Exécutive': 'Sekretè Egzekitif',
        'Conseillère Juridique': 'Konsèye Jidikyè',
        'Conseillère Technique': 'Konsèye Teknik',
        'Responsable Relations Humaines': 'Responsab Relasyon Imen',
        
        // Contact
        'Contactez-nous': 'Kontakte nou',
        'N\'hésitez pas à nous contacter pour toute information ou assistance.': 'Pa ezite kontakte nou pou nenpòt enfòmasyon oswa asistans.',
        'Adresse': 'Adrès',
        'Téléphone': 'Telefòn',
        'Contact': 'Kontak',
        'Faire un Don': 'Fe Don',
        'Nom complet': 'Non konplè',
        'Sujet': 'Sijè',
        'Message': 'Mesaj',
        'Envoyer le message': 'Voye mesaj la',
        'Montant du don': 'Kantite don an',
        'Montant personnalisé': 'Kantite pèsonèl',
        'Nom du donateur': 'Non donatè a',
        'Faire le don': 'Fe don an',
        
        // Footer
        'Défendre les droits des femmes et des enfants en Haïti depuis 2016.': 'Defann dwa fanm ak timoun yo nan Ayiti depi 2016.',
        'Liens Rapides': 'Lyen rapid yo',
        'Suivez-nous': 'Swiv nou',
        'Tous droits réservés.': 'Tout dwa rezève.'
    }
};

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupLanguageToggle();
    setupForms();
    setupAnimations();
    setupScrollEffects();
}

// Navigation
function setupNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    });

    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (isMenuOpen) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                isMenuOpen = false;
            }
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Language Toggle
function setupLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    const flagSpan = langToggle.querySelector('.flag');
    const langText = langToggle.querySelector('.lang-text');

    langToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'fr' ? 'ht' : 'fr';
        updateLanguage();
        
        // Update button display
        if (currentLanguage === 'ht') {
            flagSpan.textContent = '🇭🇹';
            langText.textContent = 'HT';
        } else {
            flagSpan.textContent = '🇫🇷';
            langText.textContent = 'FR';
        }
    });
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-fr][data-ht]');
    
    elements.forEach(element => {
        const frText = element.getAttribute('data-fr');
        const htText = element.getAttribute('data-ht');
        
        if (currentLanguage === 'ht' && htText) {
            element.textContent = htText;
        } else if (currentLanguage === 'fr' && frText) {
            element.textContent = frText;
        }
    });

    // Update placeholders for form inputs
    const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    inputs.forEach(input => {
        const frPlaceholder = input.getAttribute('data-fr-placeholder');
        const htPlaceholder = input.getAttribute('data-ht-placeholder');
        
        if (currentLanguage === 'ht' && htPlaceholder) {
            input.placeholder = htPlaceholder;
        } else if (currentLanguage === 'fr' && frPlaceholder) {
            input.placeholder = frPlaceholder;
        }
    });

    // Update document language
    document.documentElement.lang = currentLanguage;
}

// Forms
function setupForms() {
    setupFormTabs();
    setupDonationAmounts();
    setupFormSubmissions();
}

function setupFormTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const forms = document.querySelectorAll('.contact-form');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and forms
            tabBtns.forEach(b => b.classList.remove('active'));
            forms.forEach(f => f.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding form
            const targetForm = document.getElementById(target + '-form');
            if (targetForm) {
                targetForm.classList.add('active');
            }
        });
    });
}

function setupDonationAmounts() {
    const amountBtns = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('custom-amount');

    amountBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            amountBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Set the amount in custom input
            const amount = this.getAttribute('data-amount');
            customAmountInput.value = amount;
        });
    });

    // Clear amount buttons when custom amount is entered
    customAmountInput.addEventListener('input', function() {
        if (this.value) {
            amountBtns.forEach(b => b.classList.remove('active'));
        }
    });
}

function setupFormSubmissions() {
    const contactForm = document.getElementById('contact-form');
    const donForm = document.getElementById('don-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleContactSubmission(this);
    });

    donForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleDonationSubmission(this);
    });
}

function handleContactSubmission(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Préparer l'email pour KRIFA
    const emailData = {
        to: 'krifanmayiti@gmail.com',
        subject: `Nouveau message de contact - ${data.subject}`,
        body: `
Nouveau message reçu sur le site KRIFA:

Nom: ${data.name}
Email: ${data.email}
Sujet: ${data.subject}

Message:
${data.message}

---
Message envoyé depuis le site web KRIFA
Date: ${new Date().toLocaleString('fr-FR')}
        `
    };
    
    // Envoyer l'email (simulation pour le moment)
    sendEmail(emailData);
    showNotification('Message envoyé avec succès! KRIFA vous contactera bientôt.', 'success');
    form.reset();
}

function handleDonationSubmission(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validation du montant
    if (!data.amount || data.amount <= 0) {
        showNotification('Veuillez saisir un montant valide', 'error');
        return;
    }
    
    // Préparer l'email pour KRIFA
    const emailData = {
        to: 'krifanmayiti@gmail.com',
        subject: `Nouveau don reçu - $${data.amount}`,
        body: `
Nouveau don reçu sur le site KRIFA:

Donateur: ${data['donor-name']}
Email: ${data['donor-email']}
Montant: $${data.amount}

---
Don effectué depuis le site web KRIFA
Date: ${new Date().toLocaleString('fr-FR')}

Veuillez contacter le donateur pour finaliser la transaction.
        `
    };
    
    // Envoyer l'email
    sendEmail(emailData);
    showNotification(`Merci pour votre don de $${data.amount}! KRIFA vous contactera pour finaliser.`, 'success');
    form.reset();
    document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('active'));
}

// Fonction d'envoi d'email
function sendEmail(emailData) {
    // Pour l'instant, on utilise mailto: qui ouvrira le client email
    // Dans une version production, vous pourrez intégrer un service comme EmailJS
    
    const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
    
    // Option 1: Ouvrir le client email (pour test)
    // window.open(mailtoLink);
    
    // Option 2: Log pour développement
    console.log('Email à envoyer:', emailData);
    
    // Dans la version finale, vous pourrez utiliser un service comme:
    // - EmailJS (gratuit, facile à intégrer)
    // - Formspree
    // - Netlify Forms
    // - Un backend avec nodemailer
}

// Animations
function setupAnimations() {
    // Configuration avancée pour les animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    // Animation d'apparition en cascade
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Éléments à animer avec des délais différents
    const animatedElements = document.querySelectorAll('.service-card, .team-member, .about-card, .stat-card, .value-item');
    
    animatedElements.forEach((el, index) => {
        el.classList.add('animate-element');
        el.style.animationDelay = `${index * 0.15}s`;
        observer.observe(el);
    });

    // Animation spéciale pour les statistiques
    setupStatsAnimation();
    
    // Animation des icônes de services
    setupServiceIconsAnimation();
    
    // Animation de typing pour le hero
    setupTypingAnimation();
    
    // Animation des valeurs avec effet de vague
    setupValuesWaveAnimation();
}

// Animation des statistiques avec compteur
function setupStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                
                // Animation de compteur pour les nombres
                if (!isNaN(finalValue)) {
                    animateCounter(target, 0, parseInt(finalValue), 2000);
                }
                
                statsObserver.unobserve(target);
            }
        });
    });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
}

function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Fonction d'easing pour un effet plus naturel
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = end;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Animation des icônes de services
function setupServiceIconsAnimation() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const icon = card.querySelector('.service-icon');
        
        card.addEventListener('mouseenter', function() {
            icon.style.transform = 'scale(1.1) rotate(10deg)';
            icon.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            icon.style.transform = 'scale(1) rotate(0deg)';
            icon.style.boxShadow = 'none';
        });
    });
}

// Animation de typing pour le hero
function setupTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '3px solid var(--white)';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Effet de clignotement du curseur
            setInterval(() => {
                heroTitle.style.borderRight = heroTitle.style.borderRight === 'none' ? '3px solid var(--white)' : 'none';
            }, 500);
        }
    }
    
    // Démarrer l'animation après un délai
    setTimeout(typeWriter, 1000);
}

// Animation en vague pour les valeurs
function setupValuesWaveAnimation() {
    const valueItems = document.querySelectorAll('.value-item');
    
    const valuesObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                valueItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('wave-animate');
                    }, index * 200);
                });
                valuesObserver.unobserve(entry.target);
            }
        });
    });
    
    if (valueItems.length > 0) {
        valuesObserver.observe(valueItems[0].parentElement);
    }
}

// Effets de scroll
function setupScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Parallax léger pour le hero
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroImage.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Notifications
function showNotification(message, type = 'info') {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animer l'apparition
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Retirer après 3 secondes
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Utilitaires pour l'accessibilité
function handleKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Navigation au clavier pour le menu mobile
        if (e.key === 'Escape' && isMenuOpen) {
            const navToggle = document.getElementById('nav-toggle');
            const navMenu = document.getElementById('nav-menu');
            
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            isMenuOpen = false;
        }
    });
}

// Gestion de la taille d'écran
function handleResponsiveFeatures() {
    let resizeTimer;
    
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Fermer le menu mobile lors du resize
            if (window.innerWidth > 768 && isMenuOpen) {
                const navToggle = document.getElementById('nav-toggle');
                const navMenu = document.getElementById('nav-menu');
                
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                isMenuOpen = false;
            }
        }, 250);
    });
}

// Initialisation des fonctions d'accessibilité
handleKeyboardNavigation();
handleResponsiveFeatures();

// Performance - Lazy loading pour les images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            img.style.transition = 'opacity 0.3s';
            imageObserver.observe(img);
        });
    }
}

// Support des anciens navigateurs
function addPolyfills() {
    // Polyfill pour les navigateurs qui ne supportent pas IntersectionObserver
    if (!('IntersectionObserver' in window)) {
        // Fallback simple
        const animatedElements = document.querySelectorAll('.service-card, .team-member, .about-card, .stat-card');
        animatedElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }
}

// Initialisation finale
setupLazyLoading();
addPolyfills();

console.log('🌟 Site KRIFA initialisé avec succès!');