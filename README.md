# Kimku CLI - Mon Portfolio dans votre Terminal

![Kimku CLI Demo](https-placeholder-for-your-demo.gif)

Une interface en ligne de commande (CLI) simple et élégante pour présenter le portfolio de Kimku ETOUH, développeur Web Fullstack & Mobile.

## ✨ Fonctionnalités

- **Présentation stylisée** : Affiche les informations, compétences et projets avec des couleurs, des icônes et une mise en page soignée.
- **Titre animé** : Un accueil dynamique avec une animation et un titre en dégradé.
- **Liens interactifs** : Les liens vers GitHub et l'e-mail sont cliquables directement depuis les terminaux compatibles.
- **Format JSON** : Affiche les données brutes du portfolio au format JSON, idéal pour une utilisation par d'autres outils.

## 🚀 Installation

Pour utiliser cette CLI, vous pouvez l'installer globalement via npm :

```bash
npm install -g kimku-cli
```
*(Note : Le paquet n'est pas encore publié sur npm. C'est une étape future ! Pour l'instant, l'installation se fait localement via `npm link`)*

## Usage

Une fois installé, tapez simplement la commande suivante dans votre terminal :

```bash
kimku
```

### Options

- **Afficher les données en JSON** :
  ```bash
  kimku --json
  ```
  ou
  ```bash
  kimku -j
  ```

- **Afficher l'aide** :
  ```bash
  kimku --help
  ```
  ou
  ```bash
  kimku -h
  ```

## 🛠️ Développé avec

- [Node.js](https://nodejs.org/)
- [Chalk](https://github.com/chalk/chalk) - Pour la coloration du texte.
- [Figlet](https://github.com/patorjk/figlet.js/) - Pour l'art ASCII.
- [Yargs](https://yargs.js.org/) - Pour le parsing des arguments de la CLI.
- [Boxen](https://github.com/sindresorhus/boxen) - Pour créer des boîtes dans le terminal.
- [Chalk-Animation](https://github.com/bokub/chalk-animation) - Pour les animations de texte.
- [TinyGradient](https://github.com/mistic100/tinygradient) - Pour les dégradés de texte.

## Auteur

**Kimku ETOUH**
- GitHub: [@kimku003](https://github.com/kimku003)

---
Fait avec ❤️ et du code.
