/* ===================================
   Script pour masquer les modes d'expédition pour les dons
   à ajouter dans Shopify > Thème > Modifier le code > theme.liquid
   Placez ce code juste avant </head>
   =================================== */

<script>
// Masquer les modes d'expédition pour les dons
(function() {
    'use strict';
    
    function hideShippingForDonation() {
        // Vérifier si on est sur la page checkout
        if (!window.location.href.includes('/checkout')) {
            return;
        }
        
        // Fonction pour masquer la section expédition
        function hideShippingSection() {
            // Méthode 1 : Cibler par les sélecteurs spécifiques que vous avez montrés
            var shippingSections = document.querySelectorAll(
                'fieldset#shipping_methods, ' +
                'fieldset[name="shipping_methods"], ' +
                '[id^="shipping_methods-"], ' +
                'input[name="shipping_methods"], ' +
                '.yyi4nyn.yyi4nyk.yyi4nyr.yyi4nys, ' +
                'section[aria-labelledby*="shipping"], ' +
                'section[aria-label*="expédition"], ' +
                'h3[id="shippingMethod"], ' +
                'h3:contains("Mode d")'
            );
            
            // Méthode 2 : Chercher le parent contenant tous les modes d'expédition
            var shippingInputs = document.querySelectorAll('input[name="shipping_methods"]');
            
            if (shippingInputs.length > 0) {
                // Trouver le parent commun
                shippingInputs.forEach(function(input) {
                    var parent = input.closest('section, fieldset, div[class*="section"], div.yyi4nyn');
                    if (parent) {
                        // Remonter jusqu'à trouver la section complète
                        var section = parent.closest('section') || parent.closest('div[data-section-id]');
                        if (section) {
                            section.style.display = 'none';
                            section.style.visibility = 'hidden';
                            section.style.height = '0';
                            section.style.overflow = 'hidden';
                            section.style.margin = '0';
                            section.style.padding = '0';
                        }
                    }
                });
            }
            
            // Masquer tous les éléments trouvés
            shippingSections.forEach(function(section) {
                section.style.display = 'none';
                section.style.visibility = 'hidden';
                section.style.height = '0';
                section.style.overflow = 'hidden';
                
                // Masquer aussi le parent
                var parent = section.parentElement;
                if (parent && (parent.classList.contains('checkout-section') || 
                               parent.id && parent.id.includes('shipping'))) {
                    parent.style.display = 'none';
                    parent.style.visibility = 'hidden';
                }
            });
            
            // Méthode 3 : Chercher par le texte "Mode d'expédition" ou "Livraison"
            var headings = document.querySelectorAll('h2, h3');
            headings.forEach(function(heading) {
                var text = heading.textContent.toLowerCase();
                if (text.includes('mode d') || text.includes('expédition') || 
                    text.includes('livraison') || text.includes('shipping method')) {
                    var section = heading.closest('section, fieldset, div[class*="section"]');
                    if (section) {
                        section.style.display = 'none';
                        section.style.visibility = 'hidden';
                        section.style.height = '0';
                        section.style.overflow = 'hidden';
                    }
                }
            });
            
            // Méthode 4 : Masquer le conteneur parent avec toutes les options
            var shippingContainer = document.querySelector('.yyi4nyn.yyi4nyk.yyi4nyr.yyi4nys');
            if (shippingContainer) {
                var parentSection = shippingContainer.closest('section, fieldset, div[data-section-id]');
                if (parentSection) {
                    parentSection.style.display = 'none';
                    parentSection.style.visibility = 'hidden';
                    parentSection.style.height = '0';
                    parentSection.style.overflow = 'hidden';
                }
            }
        }
        
        // Vérifier si le panier contient un produit de don
        fetch('/cart.js')
            .then(function(response) {
                return response.json();
            })
            .then(function(cart) {
                // Vérifier si le panier contient le produit de don (ID variante: 52543227003226)
                var hasDonationProduct = false;
                
                if (cart.items && cart.items.length > 0) {
                    hasDonationProduct = cart.items.some(function(item) {
                        // Vérifier par l'ID de variante
                        if (item.variant_id === 52543227003226) {
                            return true;
                        }
                        // Vérifier par les propriétés
                        if (item.properties) {
                            var hasDonAmount = Object.keys(item.properties).some(function(key) {
                                return key === 'Montant du don' || 
                                       item.properties[key] && 
                                       item.properties[key].toString().includes('€');
                            });
                            if (hasDonAmount) {
                                return true;
                            }
                        }
                        // Vérifier par le titre du produit
                        if (item.product_title && 
                            (item.product_title.toLowerCase().includes('don') ||
                             item.product_title.toLowerCase().includes('cadeau'))) {
                            return true;
                        }
                        return false;
                    });
                }
                
                // Si c'est un don, masquer la section expédition
                if (hasDonationProduct && cart.items.length === 1) {
                    hideShippingSection();
                    
                    // Ajouter une classe au body pour CSS
                    document.body.classList.add('donation-checkout-no-shipping');
                }
            })
            .catch(function(error) {
                console.error('Erreur lors de la vérification du panier:', error);
                // En cas d'erreur, essayer quand même de masquer si on détecte un don autrement
                // Par exemple, vérifier l'URL ou les paramètres
                if (window.location.href.includes('don') || 
                    window.location.href.includes('cadeau') ||
                    document.querySelector('[data-product-id*="52543227003226"]')) {
                    hideShippingSection();
                }
            });
    }
    
    // Exécuter au chargement de la page
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            hideShippingForDonation();
            // Relancer après un délai (Shopify charge parfois le contenu plus tard)
            setTimeout(hideShippingForDonation, 500);
            setTimeout(hideShippingForDonation, 1000);
            setTimeout(hideShippingForDonation, 2000);
        });
    } else {
        hideShippingForDonation();
        setTimeout(hideShippingForDonation, 500);
        setTimeout(hideShippingForDonation, 1000);
        setTimeout(hideShippingForDonation, 2000);
    }
    
    // Observer les changements du DOM (si Shopify charge le contenu dynamiquement)
    var observer = new MutationObserver(function(mutations) {
        hideShippingForDonation();
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
</script>

