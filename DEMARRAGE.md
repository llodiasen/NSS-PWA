# 🚀 Guide de Démarrage Rapide - WasaAfrica

## Étape 1 : Vérifier les fichiers

Assurez-vous que tous les fichiers sont présents :
- ✅ `index.html`
- ✅ `manifest.json`
- ✅ `service-worker.js`
- ✅ `assets/css/style.css`
- ✅ `assets/css/responsive.css`
- ✅ `assets/js/main.js`

## Étape 2 : Ajouter les images

**IMPORTANT** : Vous devez ajouter les images suivantes dans `assets/images/` :

1. **Icônes PWA** (obligatoires) :
   - `icon-192.png` (192x192 pixels)
   - `icon-512.png` (512x512 pixels)
   
   **Générateur d'icônes** : https://realfavicongenerator.net/

2. **Logo** :
   - `logo.png` (hauteur recommandée : 40px)

3. **Images de contenu** :
   - `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`
   - `news-1.jpg` à `news-6.jpg`

   **Note** : Vous pouvez utiliser des images placeholder temporaires pour tester.

## Étape 3 : Lancer le serveur local

### Option A : Python (recommandé)
```bash
cd C:\Users\wopal\Desktop\NSS
python -m http.server 8000
```

### Option B : Node.js
```bash
cd C:\Users\wopal\Desktop\NSS
npm install
npm start
```

### Option C : PHP
```bash
cd C:\Users\wopal\Desktop\NSS
php -S localhost:8000
```

## Étape 4 : Ouvrir dans le navigateur

1. Ouvrez : `http://localhost:8000`
2. Ouvrez les DevTools (F12)
3. Allez dans l'onglet "Application"
4. Vérifiez :
   - ✅ Manifest chargé
   - ✅ Service Worker actif

## Étape 5 : Tester l'installation PWA

### Sur Chrome/Edge Desktop :
1. Le bouton "📱 Installer l'application" apparaîtra en bas à droite
2. Cliquez dessus pour installer
3. Ou utilisez l'icône dans la barre d'adresse

### Sur Mobile Android :
1. Ouvrez dans Chrome
2. Une bannière d'installation apparaîtra
3. Ou utilisez le menu Chrome > "Ajouter à l'écran d'accueil"

## ⚠️ Problèmes courants

### Les images ne s'affichent pas
- Vérifiez que les fichiers existent dans `assets/images/`
- Utilisez des images placeholder temporaires

### Le service worker ne fonctionne pas
- Assurez-vous d'être sur `localhost` ou `https://`
- Videz le cache du navigateur (Ctrl+Shift+Delete)
- Rechargez la page (Ctrl+F5)

### Le bouton d'installation n'apparaît pas
- Vérifiez que le manifest.json est valide
- Vérifiez que le service worker est enregistré
- Attendez quelques secondes après le chargement

## 📝 Prochaines étapes

1. **Personnaliser le contenu** dans `index.html`
2. **Ajouter vos vraies images** dans `assets/images/`
3. **Créer les pages supplémentaires** :
   - `blog.html`
   - `article.html`
   - `about.html`
   - `contact.html`
4. **Déployer sur wasafrica.org** avec HTTPS

## 🔗 Ressources utiles

- [PWA Checklist](https://web.dev/pwa-checklist/)
- [Service Worker API](https://developer.mozilla.org/fr/docs/Web/API/Service_Worker_API)
- [Web App Manifest](https://developer.mozilla.org/fr/docs/Web/Manifest)

---

**Bon développement ! 🎉**

