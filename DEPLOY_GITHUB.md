# Instructions pour déployer sur GitHub Pages

## Étape 1 : Créer le dépôt sur GitHub

1. Va sur https://github.com/new
2. Nom du dépôt : `wasafrica-pwa` (ou un autre nom de ton choix)
3. **IMPORTANT** : Laisse le dépôt **PUBLIC** (nécessaire pour GitHub Pages gratuit)
4. **NE COCHE PAS** "Add a README file" (on en a déjà un)
5. Clique sur "Create repository"

## Étape 2 : Copier l'URL du dépôt

Après avoir créé le dépôt, GitHub te donnera une URL comme :
- `https://github.com/TON-USERNAME/wasafrica-pwa.git`

## Étape 3 : Exécuter ces commandes

Remplace `TON-USERNAME` par ton nom d'utilisateur GitHub dans la commande suivante :

```powershell
cd C:\Users\wopal\Desktop\NSS
git remote add origin https://github.com/TON-USERNAME/wasafrica-pwa.git
git push -u origin main
```

## Étape 4 : Activer GitHub Pages

1. Va sur ton dépôt GitHub : `https://github.com/TON-USERNAME/wasafrica-pwa`
2. Clique sur **Settings** (en haut à droite)
3. Dans le menu de gauche, clique sur **Pages**
4. Sous **Source**, sélectionne :
   - Branch : `main`
   - Folder : `/ (root)`
5. Clique sur **Save**

## Étape 5 : Accéder à ton site

Attends 1-2 minutes, puis ton site sera disponible à :
- `https://TON-USERNAME.github.io/wasafrica-pwa/`

## ✅ C'est tout !

Ton site WasaAfrica PWA sera en ligne et pourra être installé comme une application !

