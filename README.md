# HRNet Application

HRNet est une application de gestion des employés construite avec React. Elle utilise le plugin `m0d4l_plugin` pour afficher des modales personnalisées.

## Prérequis

- Node.js (version 14 ou supérieure)
- npm (ou yarn)

## Installation

Cloner le dépôt et installer les dépendances :

```bash
git clone https://github.com/votre-repo/hrnet.git
cd hrnet
npm install

## Utilisation

Exécuter en Mode Développement

Pour lancer l'application en mode développement :

```bash
npm start

Cela ouvrira l'application dans votre navigateur à http://localhost:3000.
Construire l'Application pour la Production

Pour construire l'application pour un environnement de production, exécutez :

```bash
npm run build

Cela créera un répertoire build avec les fichiers optimisés.
Servir l'Application avec serve

Une fois l'application construite, vous pouvez la servir localement pour tester les performances avec Lighthouse :

    Installez serve globalement si ce n'est pas déjà fait :

bash

npm install -g serve

    Servez l'application :

bash

serve -s build

Cela ouvrira l'application à l'adresse http://localhost:5000.