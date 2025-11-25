/* ===================================
   Script JavaScript pour masquer Paiement express
   à ajouter dans Shopify > Thème > Modifier le code > checkout.liquid
   
   Placez ce code juste avant la balise </head> ou </body>
   =================================== */

(function() {
    'use strict';
    
    // Fonction pour masquer la section
    function hideExpressPayment() {
        // Méthode 1 : Cibler par aria-label
        const expressSections = document.querySelectorAll('section[aria-label="Paiement express"]');
        
        // Méthode 2 : Cibler par data-count
        const oterxDivs = document.querySelectorAll('div[data-count="2"].OTERX');
        
        // Méthode 3 : Cibler par ID
        const expressWrapper = document.getElementById('express-checkout-wallets-wrapper');
        const shopPayButton = document.getElementById('shop-pay-button');
        const paypalIframe = document.getElementById('PAYPAL_EXPRESS-iframe');
        
        // Appliquer le style à toutes les sections trouvées
        expressSections.forEach(function(section) {
            section.style.display = 'none';
            section.style.visibility = 'hidden';
            section.style.height = '0';
            section.style.overflow = 'hidden';
            section.style.margin = '0';
            section.style.padding = '0';
            section.style.opacity = '0';
            
            // Masquer tous les enfants
            const children = section.querySelectorAll('*');
            children.forEach(function(child) {
                child.style.display = 'none';
                child.style.visibility = 'hidden';
            });
        });
        
        // Masquer les divs OTERX
        oterxDivs.forEach(function(div) {
            div.style.display = 'none';
            div.style.visibility = 'hidden';
            div.style.height = '0';
            div.style.overflow = 'hidden';
        });
        
        // Masquer le wrapper express checkout
        if (expressWrapper) {
            expressWrapper.style.display = 'none';
            expressWrapper.style.visibility = 'hidden';
        }
        
        // Masquer le bouton Shop Pay
        if (shopPayButton) {
            shopPayButton.style.display = 'none';
            shopPayButton.style.visibility = 'hidden';
        }
        
        // Masquer l'iframe PayPal
        if (paypalIframe) {
            paypalIframe.style.display = 'none';
            paypalIframe.style.visibility = 'hidden';
            paypalIframe.style.height = '0';
            paypalIframe.style.width = '0';
        }
    }
    
    // Ajouter le style CSS directement dans le DOM
    function injectCSS() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.id = 'hide-express-payment-style';
        style.innerHTML = `
            section[aria-label="Paiement express"],
            section[aria-label="Paiement express"] *,
            div[data-count="2"].OTERX,
            div.OTERX[data-count="2"],
            #express-checkout-wallets-wrapper,
            #shop-pay-button,
            iframe#PAYPAL_EXPRESS-iframe,
            iframe[name="PAYPAL_EXPRESS-iframe"] {
                display: none !important;
                visibility: hidden !important;
                height: 0 !important;
                overflow: hidden !important;
                margin: 0 !important;
                padding: 0 !important;
                opacity: 0 !important;
            }
        `;
        
        // Ajouter le style dans le head
        const head = document.head || document.getElementsByTagName('head')[0];
        if (head && !document.getElementById('hide-express-payment-style')) {
            head.appendChild(style);
        }
    }
    
    // Exécuter immédiatement si le DOM est déjà chargé
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            injectCSS();
            hideExpressPayment();
            
            // Observer pour les changements dynamiques (si Shopify charge le contenu après)
            const observer = new MutationObserver(function(mutations) {
                hideExpressPayment();
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    } else {
        // DOM déjà chargé
        injectCSS();
        hideExpressPayment();
        
        // Observer pour les changements dynamiques
        const observer = new MutationObserver(function(mutations) {
            hideExpressPayment();
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
    // Exécuter aussi après un délai (au cas où le contenu se charge plus tard)
    setTimeout(function() {
        hideExpressPayment();
    }, 500);
    
    setTimeout(function() {
        hideExpressPayment();
    }, 1000);
    
    setTimeout(function() {
        hideExpressPayment();
    }, 2000);
})();

