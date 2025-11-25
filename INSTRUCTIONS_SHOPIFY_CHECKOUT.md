# Instructions pour masquer "Paiement express" dans Shopify Checkout

## Problème
Le CSS fonctionne dans l'inspecteur du navigateur mais pas quand vous l'ajoutez dans Shopify et sauvegardez.

## Solutions (essayez dans l'ordre)

---

## ✅ SOLUTION 1 : CSS dans "checkout.css.liquid" (RECOMMANDÉ)

### Étapes :

1. **Accédez à votre thème Shopify :**
   - Shopify Admin > **Boutique en ligne** > **Thèmes**
   - Cliquez sur **Actions** > **Modifier le code**

2. **Ouvrez ou créez le fichier :**
   - Dans la liste des fichiers à gauche, cherchez **"checkout.css.liquid"**
   - Si le fichier n'existe pas, cliquez sur **"Ajouter un nouvel actif"** > **"Créer un fichier"**
   - Nommez-le : `checkout.css.liquid`

3. **Copiez le CSS :**
   - Ouvrez le fichier `shopify-checkout-custom.css` dans ce dossier
   - **Copiez TOUT le contenu** (sans les commentaires d'instructions si vous voulez)

4. **Collez dans Shopify :**
   - Collez le CSS dans le fichier `checkout.css.liquid`
   - Cliquez sur **"Enregistrer"**

5. **Testez :**
   - Allez sur une page de checkout
   - Actualisez la page (Ctrl+F5 ou Cmd+Shift+R pour vider le cache)
   - La section "Paiement express" devrait être masquée

---

## ✅ SOLUTION 2 : CSS dans les "Paramètres du thème"

Si la solution 1 ne fonctionne pas :

1. **Accédez aux paramètres :**
   - Shopify Admin > **Boutique en ligne** > **Thèmes**
   - Cliquez sur **"Personnaliser"** (pas "Modifier le code")

2. **Ouvrez CSS additionnel :**
   - Dans le menu de gauche, cliquez sur **"Paramètres du thème"** (tout en bas)
   - Faites défiler jusqu'à **"CSS additionnel"**

3. **Ajoutez le CSS :**
   - Ouvrez le fichier `shopify-checkout-custom.css`
   - **Copiez TOUT le contenu**
   - Collez dans le champ "CSS additionnel"
   - Cliquez sur **"Enregistrer"**

4. **Testez :**
   - Allez sur une page de checkout
   - Actualisez la page (Ctrl+F5)

---

## ✅ SOLUTION 3 : JavaScript dans "checkout.liquid" (SI LE CSS NE FONCTIONNE PAS)

Si les solutions CSS ne fonctionnent pas, utilisez JavaScript :

1. **Accédez au thème :**
   - Shopify Admin > **Boutique en ligne** > **Thèmes**
   - **Actions** > **Modifier le code**

2. **Ouvrez checkout.liquid :**
   - Dans la liste des fichiers, cherchez **"checkout.liquid"**
   - Si vous ne le trouvez pas, cherchez dans **"Layout"** ou **"Snippets"**

3. **Ajoutez le script :**
   - Trouvez la balise `</head>` ou `</body>`
   - Juste **AVANT** cette balise, ajoutez :

```html
<script>
/* Masquer Paiement express */
(function() {
    'use strict';
    function hideExpressPayment() {
        const expressSections = document.querySelectorAll('section[aria-label="Paiement express"]');
        const oterxDivs = document.querySelectorAll('div[data-count="2"].OTERX');
        const expressWrapper = document.getElementById('express-checkout-wallets-wrapper');
        
        expressSections.forEach(function(section) {
            section.style.cssText = 'display: none !important; visibility: hidden !important; height: 0 !important; overflow: hidden !important; margin: 0 !important; padding: 0 !important; opacity: 0 !important;';
            section.querySelectorAll('*').forEach(function(child) {
                child.style.cssText = 'display: none !important; visibility: hidden !important;';
            });
        });
        
        oterxDivs.forEach(function(div) {
            div.style.cssText = 'display: none !important; visibility: hidden !important; height: 0 !important; overflow: hidden !important;';
        });
        
        if (expressWrapper) expressWrapper.style.cssText = 'display: none !important; visibility: hidden !important;';
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hideExpressPayment);
    } else {
        hideExpressPayment();
    }
    
    setTimeout(hideExpressPayment, 500);
    setTimeout(hideExpressPayment, 1000);
    setTimeout(hideExpressPayment, 2000);
})();
</script>
```

   - **OU** ouvrez le fichier `shopify-checkout-hide-express.js` et copiez tout son contenu entre les balises `<script>` et `</script>`

4. **Sauvegardez :**
   - Cliquez sur **"Enregistrer"**

---

## ⚠️ CONSEILS IMPORTANTS

1. **Vider le cache :**
   - Après chaque modification, videz le cache du navigateur (Ctrl+F5 ou Cmd+Shift+R)
   - Ou testez en navigation privée

2. **Vérifier le thème actif :**
   - Assurez-vous de modifier le **thème actif** (celui avec la mention "Boutique active")

3. **Si rien ne fonctionne :**
   - Vérifiez dans l'inspecteur du navigateur si le CSS est bien chargé
   - Vérifiez s'il n'y a pas d'erreurs JavaScript dans la console (F12)

4. **Ordre de priorité :**
   - Essayez d'abord la Solution 1 (checkout.css.liquid)
   - Si ça ne fonctionne pas, essayez la Solution 2 (CSS additionnel)
   - En dernier recours, utilisez la Solution 3 (JavaScript)

---

## 🔍 Vérification

Pour vérifier que ça fonctionne :

1. Ouvrez une page de checkout dans votre navigateur
2. Faites clic droit > **Inspecter** (ou F12)
3. Cherchez dans le code HTML : `section[aria-label="Paiement express"]`
4. Vérifiez que cet élément a `display: none` dans les styles calculés

---

## 📝 Note

Si vous utilisez un thème personnalisé ou un thème tiers, il se peut que les fichiers mentionnés aient des noms différents. Dans ce cas, cherchez les fichiers contenant "checkout" dans leur nom.

