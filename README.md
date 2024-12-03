# 🌐 Mon Site Web  

Un site web portfolio réactif présentant mes compétences, expériences et mes projets.  

## ✨ Fonctionnalités  

- 🔝 **Bouton "Retour en haut"** : Défilement fluide pour revenir rapidement en haut de la page.  
- 🖼️ **Affichage des images en modal** : Les images avec la classe `modal-image` s'ouvrent dans une fenêtre modale.  
- 📋 **Sections principales** : Qui suis-je, Compétences Techniques, Expériences Professionnelles, Formations, Contact et Focus sur un projet.  
- 📱 **Design réactif** : Optimisé pour tous les appareils grâce à Tailwind CSS.  

---

## 🛠️ Technologies Utilisées  

- 🌐 **HTML5**  
- 🎨 **CSS3**  
- 🖱️ **JavaScript**  
- 🌀 **Tailwind CSS**  
- 🧩 **Flowbite**  
- 💡 **TW Elements**  

---

## 🚀 Installation  

1. Cloner le dépôt :  

   ```bash
   git clone <url-du-dépôt>

---

## 📋 Détails Techniques  

### 🗂️ Fichier `index.html`  

- **Structure Sémantique** :  
  - Utilisation des balises HTML5 pour une meilleure organisation du contenu.  

- **Sections Principales** :  
  - **En-tête** : Navigation fixe avec des liens vers les différentes sections.  
  - **Bannière** : Image de fond avec superposition d'une image de profil.  
  - **Qui suis-je** : Présentation personnelle et qualités.  
  - **Compétences Techniques** : Grille d'images représentant les technologies maîtrisées.  
  - **Expériences Professionnelles** : Liste détaillée des expériences avec descriptions.  
  - **Formations** : Parcours éducatif avec diplômes et certifications.  
  - **Contact** : Formulaire de contact ou informations pour me joindre.  
  - **Projet Focus** : Mise en avant d’un projet spécifique.  

- **Intégration des Bibliothèques** :  
  - 🌀 **Tailwind CSS** : Inclus via CDN pour un accès rapide.  
  - 🧩 **Flowbite et TW Elements** : Ajoutés pour enrichir l'interface utilisateur.  

---

### 📜 Fichier `script.js`  

- 🔝 **Gestion du Bouton "Retour en Haut"** :  
  - Événement `scroll` pour afficher ou masquer le bouton en fonction de `window.scrollY`.  
  - Effet de défilement fluide avec `window.scrollTo`.  

- ⚡ **Animations au Défilement** :  
  - Utilisation de l'API `IntersectionObserver` pour détecter quand les éléments entrent dans le viewport.  
  - Ajout et suppression de classes Tailwind (`opacity-0`, `opacity-100`) pour les effets de fondu.  

- 🖼️ **Modale d'Images** :  
  - Fonctions `openModal(src)` et `closeModal(event)` pour gérer l'ouverture et la fermeture de la modale.  
  - Désactivation du défilement en arrière-plan lorsqu'une image est ouverte.  
  - Écouteurs d'événements sur les images avec la classe `modal-image`.  
