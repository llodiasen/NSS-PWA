# Si vous ne voyez pas checkout.liquid

## ✅ OPTION 1 : Créer le fichier checkout.liquid

1. **Dans Shopify :**
   - Boutique en ligne > Thèmes > Actions > Modifier le code
   - Cliquez sur **"Ajouter un nouvel actif"** ou **"Add a new asset"**
   - Cliquez sur **"Créer un fichier"** ou **"Create a new file"**

2. **Nommez le fichier :**
   - Nom : `checkout.liquid`
   - Type : Choisissez **"Layout"** si disponible

3. **Collez ce code dans le fichier :**
```liquid
<!DOCTYPE html>
<html>
<head>
    {{ content_for_header }}
    
    <!-- VOTRE CODE ICI -->
    <script>
    (function() {
        var hide = function() {
            var sections = document.querySelectorAll('section[aria-label="Paiement express"]');
            for (var i = 0; i < sections.length; i++) {
                sections[i].style.display = 'none';
                sections[i].style.visibility = 'hidden';
                sections[i].style.height = '0';
            }
            var divs = document.querySelectorAll('div[data-count="2"].OTERX');
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.display = 'none';
            }
        };
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', hide);
        } else {
            hide();
        }
        setTimeout(hide, 500);
        setTimeout(hide, 1500);
    })();
    </script>
    <!-- FIN DU CODE -->
    
</head>
<body>
    {{ content_for_layout }}
</body>
</html>
```

4. **Enregistrez**

---

## ✅ OPTION 2 : Utiliser checkout.css.liquid (PLUS SIMPLE)

1. **Dans Shopify :**
   - Boutique en ligne > Thèmes > Actions > Modifier le code
   - Cherchez **"checkout.css.liquid"** ou **"checkout.css"**
   - Si vous ne le voyez pas, créez-le (Ajouter un nouvel actif > Créer un fichier)
   - Nom : `checkout.css.liquid`

2. **Collez ce CSS :**
```css
section[aria-label="Paiement express"],
section[aria-label="Paiement express"] *,
div[data-count="2"].OTERX,
div.OTERX[data-count="2"],
#express-checkout-wallets-wrapper {
    display: none !important;
    visibility: hidden !important;
    height: 0 !important;
    overflow: hidden !important;
}
```

3. **Enregistrez**

---

## ✅ OPTION 3 : Utiliser theme.liquid (SI RIEN NE FONCTIONNE)

1. **Dans Shopify :**
   - Boutique en ligne > Thèmes > Actions > Modifier le code
   - Cherchez **"theme.liquid"** ou **"layout/theme.liquid"**

2. **Trouvez la balise `</head>`** (vers le début du fichier, vers la ligne 50-100)

3. **Juste AVANT `</head>`, ajoutez :**
```html
<script>
(function() {
    var hide = function() {
        var sections = document.querySelectorAll('section[aria-label="Paiement express"]');
        for (var i = 0; i < sections.length; i++) {
            sections[i].style.display = 'none';
            sections[i].style.visibility = 'hidden';
            sections[i].style.height = '0';
        }
        var divs = document.querySelectorAll('div[data-count="2"].OTERX');
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.display = 'none';
        }
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hide);
    } else {
        hide();
    }
    setTimeout(hide, 500);
    setTimeout(hide, 1500);
})();
</script>
```

4. **Enregistrez**

---

## ✅ OPTION 4 : CSS Additionnel (PLUS FACILE)

1. **Dans Shopify :**
   - Boutique en ligne > Thèmes > **"Personnaliser"** (pas "Modifier le code")

2. **Dans le menu de gauche :**
   - Cliquez sur **"Paramètres du thème"** (tout en bas)

3. **Faites défiler jusqu'à :**
   - **"CSS additionnel"** ou **"Additional CSS"**

4. **Collez ce code :**
```css
section[aria-label="Paiement express"],
section[aria-label="Paiement express"] *,
div[data-count="2"].OTERX,
div.OTERX[data-count="2"],
#express-checkout-wallets-wrapper {
    display: none !important;
    visibility: hidden !important;
    height: 0 !important;
    overflow: hidden !important;
}
```

5. **Cliquez sur "Enregistrer"** (en haut à droite)

---

## 🎯 RECOMMANDATION

**Commencez par l'OPTION 4 (CSS Additionnel)** car c'est la plus simple et ça fonctionne souvent.

Si ça ne marche pas, essayez l'OPTION 2 (checkout.css.liquid).

En dernier recours, utilisez l'OPTION 3 (theme.liquid).

