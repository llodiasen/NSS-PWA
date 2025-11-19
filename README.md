# WasaAfrica - Site Web PWA

## 📱 Application Progressive Web App (PWA)

Site web d'actualités sur l'Afrique converti en **Progressive Web App (PWA)** pour permettre l'installation sur les appareils mobiles et desktop depuis l'écran d'accueil.

## 🚀 Structure du Projet

```
NSS/
├── index.html              # Page d'accueil principale
├── manifest.json           # Configuration PWA
├── service-worker.js       # Service Worker pour la mise en cache
├── README.md              # Documentation
├── assets/
│   ├── css/
│   │   ├── style.css      # Styles principaux
│   │   └── responsive.css # Styles responsive
│   ├── js/
│   │   └── main.js        # JavaScript principal
│   └── images/            # Images et icônes
│       ├── icon-192.png   # Icône PWA 192x192
│       ├── icon-512.png   # Icône PWA 512x512
│       ├── logo.png       # Logo WasaAfrica
│       └── ...            # Autres images
```

## ✨ Fonctionnalités

### PWA (Progressive Web App)
- ✅ Installation sur l'écran d'accueil (mobile et desktop)
- ✅ Fonctionnement hors ligne avec Service Worker
- ✅ Mise en cache automatique des ressources
- ✅ Mode standalone (sans barre d'adresse)
- ✅ Bouton d'installation automatique

### Design
- ✅ Design moderne et responsive
- ✅ Navigation mobile optimisée
- ✅ Recherche intégrée
- ✅ Animations fluides
- ✅ Thème sombre/clair (à venir)

### Contenu
- ✅ Section hero avec article principal
- ✅ Grille d'actualités
- ✅ Catégories d'articles
- ✅ Newsletter
- ✅ Footer complet avec liens

## 📋 Prérequis

- Serveur web local (pour tester en local)
- **HTTPS requis** pour la PWA en production (ou localhost pour le développement)
- Navigateurs modernes (Chrome, Edge, Safari, Firefox)

## 🛠️ Installation

1. **Cloner ou télécharger le projet**
   ```bash
   cd C:\Users\wopal\Desktop\NSS
   ```

2. **Servir le projet avec un serveur local**
   
   **Option 1 : Python**
   ```bash
   python -m http.server 8000
   ```
   
   **Option 2 : Node.js (http-server)**
   ```bash
   npx http-server -p 8000
   ```
   
   **Option 3 : PHP**
   ```bash
   php -S localhost:8000
   ```

3. **Ouvrir dans le navigateur**
   ```
   http://localhost:8000
   ```

## 📱 Tester la PWA

### Sur Desktop (Chrome/Edge)
1. Ouvrez le site dans Chrome ou Edge
2. Cliquez sur l'icône d'installation dans la barre d'adresse
3. Ou utilisez le bouton "📱 Installer l'application" en bas à droite

### Sur Mobile (Android)
1. Ouvrez le site dans Chrome
2. Une bannière d'installation apparaîtra automatiquement
3. Ou utilisez le menu Chrome > "Ajouter à l'écran d'accueil"

### Sur iOS (Safari)
1. Ouvrez le site dans Safari
2. Appuyez sur le bouton de partage
3. Sélectionnez "Sur l'écran d'accueil"

## 🎨 Personnalisation

### Modifier les couleurs
Éditez `assets/css/style.css` et modifiez les variables CSS :
```css
:root {
    --primary-color: #0088CB;
    --secondary-color: #030C26;
    /* ... */
}
```

### Ajouter des icônes
1. Créez des icônes aux tailles 192x192 et 512x512 pixels
2. Placez-les dans `assets/images/`
3. Mettez à jour `manifest.json` avec les bons chemins

### Modifier le contenu
- Éditez `index.html` pour changer le contenu
- Modifiez les articles dans la section hero et news-grid
- Personnalisez le footer et les liens

## 🔧 Configuration PWA

### Manifest.json
Le fichier `manifest.json` contient :
- Nom et description de l'app
- Icônes
- Couleurs du thème
- Mode d'affichage

### Service Worker
Le fichier `service-worker.js` gère :
- La mise en cache des ressources
- Le fonctionnement hors ligne
- La mise à jour automatique

Pour mettre à jour le cache, modifiez `CACHE_NAME` dans `service-worker.js`.

## 📝 Pages à créer

- `blog.html` - Page blog avec liste d'articles
- `article.html` - Page d'article individuel
- `about.html` - Page à propos
- `contact.html` - Page de contact
- `category/*.html` - Pages de catégories

## 🐛 Dépannage

### Le service worker ne s'enregistre pas
- Vérifiez que vous êtes sur HTTPS (ou localhost)
- Ouvrez la console du navigateur (F12) pour voir les erreurs
- Vérifiez que `service-worker.js` est accessible

### Le bouton d'installation n'apparaît pas
- L'app doit répondre aux critères PWA (manifest valide, service worker, HTTPS)
- Sur iOS, utilisez "Ajouter à l'écran d'accueil" dans Safari
- Vérifiez que l'app n'est pas déjà installée

### Les images ne s'affichent pas
- Vérifiez que les fichiers existent dans `assets/images/`
- Utilisez des images placeholder si nécessaire
- Vérifiez les chemins dans le HTML

## 📞 Support

Pour toute question :
- Consultez la documentation PWA : https://web.dev/progressive-web-apps/
- MDN Web Docs : https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps

## 📄 Licence

© 2025 WasaAfrica. Tous droits réservés.

---

**WasaAfrica** - Votre source d'actualités sur l'Afrique 🌍

