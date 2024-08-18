# HRNet Application

HRNet est une application de gestion des employés construite avec React. Elle permet aux utilisateurs de créer, afficher et gérer les informations des employés. L'application utilise le plugin [`m0d4l_plugin`](https://www.npmjs.com/package/m0d4l_plugin) pour afficher des modales personnalisées.

## Table des matières

1. [Prérequis](#prérequis)
2. [Installation](#installation)
3. [Utilisation](#utilisation)
    - [Mode Développement](#mode-développement)
    - [Mode Production](#mode-production)
    - [Servir l'application avec `serve`](#servir-lapplication-avec-serve)
4. [Licence](#licence)

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) (ou [yarn](https://yarnpkg.com/))

## Installation

Clonez le dépôt et installez les dépendances nécessaires :

```bash
git clone https://github.com/votre-repo/hrnet.git
cd hrnet
npm install
```

## Utilisation

### Mode Développement

Pour exécuter l'application en mode développement, utilisez la commande suivante :

```bash
npm start
```

Cela ouvrira l'application dans votre navigateur à l'adresse suivante : http://localhost:3000.

### Mode Production

Pour préparer l'application pour un environnement de production, utilisez la commande suivante :

```bash
npm run build
```

Cela générera un répertoire build contenant les fichiers optimisés pour la production.

#### Servir l'Application avec serve

Une fois l'application construite, vous pouvez la servir localement pour tester les performances, par exemple avec Lighthouse.

 - Installez serve globalement si ce n'est pas déjà fait :

```bash
npm install -g serve
```

 - Servez l'application :

```bash
serve -s build
```

Cela ouvrira l'application à l'adresse suivante : http://localhost:5000.

## Licence

Ce projet est sous licence MIT.