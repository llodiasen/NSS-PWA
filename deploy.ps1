# Script PowerShell pour déployer sur GitHub
# Usage: .\deploy.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Déploiement WasaAfrica sur GitHub" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Demander le nom d'utilisateur GitHub
$username = Read-Host "Entre ton nom d'utilisateur GitHub"

# Demander le nom du dépôt
$repoName = Read-Host "Entre le nom du dépôt (ou appuie sur Entrée pour 'wasafrica-pwa')"
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "wasafrica-pwa"
}

$repoUrl = "https://github.com/$username/$repoName.git"

Write-Host ""
Write-Host "Vérification du dépôt Git..." -ForegroundColor Yellow

# Vérifier si le remote existe déjà
$existingRemote = git remote get-url origin 2>$null
if ($existingRemote) {
    Write-Host "Remote 'origin' existe déjà : $existingRemote" -ForegroundColor Yellow
    $replace = Read-Host "Veux-tu le remplacer ? (O/N)"
    if ($replace -eq "O" -or $replace -eq "o") {
        git remote remove origin
    } else {
        Write-Host "Annulé." -ForegroundColor Red
        exit
    }
}

Write-Host ""
Write-Host "Ajout du remote GitHub..." -ForegroundColor Yellow
git remote add origin $repoUrl

Write-Host ""
Write-Host "Vérification de la branche..." -ForegroundColor Yellow
$currentBranch = git branch --show-current
if ($currentBranch -ne "main") {
    Write-Host "Renommage de la branche en 'main'..." -ForegroundColor Yellow
    git branch -M main
}

Write-Host ""
Write-Host "Poussée du code sur GitHub..." -ForegroundColor Yellow
Write-Host "Si c'est la première fois, GitHub te demandera de te connecter." -ForegroundColor Cyan
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  ✅ Code poussé avec succès !" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Prochaines étapes :" -ForegroundColor Cyan
    Write-Host "1. Va sur https://github.com/$username/$repoName/settings/pages" -ForegroundColor White
    Write-Host "2. Sous 'Source', sélectionne :" -ForegroundColor White
    Write-Host "   - Branch: main" -ForegroundColor White
    Write-Host "   - Folder: / (root)" -ForegroundColor White
    Write-Host "3. Clique sur 'Save'" -ForegroundColor White
    Write-Host ""
    Write-Host "Ton site sera disponible à :" -ForegroundColor Cyan
    Write-Host "https://$username.github.io/$repoName/" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "  ❌ Erreur lors du push" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Assure-toi que :" -ForegroundColor Yellow
    Write-Host "1. Le dépôt existe sur GitHub : $repoUrl" -ForegroundColor White
    Write-Host "2. Le dépôt est PUBLIC (nécessaire pour GitHub Pages gratuit)" -ForegroundColor White
    Write-Host "3. Tu es connecté à GitHub (git config --global user.name et user.email)" -ForegroundColor White
}

