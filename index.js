#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalkAnimation from 'chalk-animation';
import boxen from 'boxen';
import gradient from 'tinygradient';

// Helper pour créer des liens cliquables dans le terminal
const link = (text, url) => `\u001B]8;;${url}\u0007${text}\u001B]8;;\u0007`;

// --- Les données du portfolio ---
const portfolioData = {
  name: 'Kimku ETOUH',
  title: 'Développeur Web Fullstack & Mobile',
  location: 'Afrique de l’Ouest',
  skills: {
    'Frontend': ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React', 'Next.js'],
    'Backend': ['Node.js', 'Django', 'PostgreSQL'],
    'Mobile': ['Flutter', 'Dart'],
    'DevOps': ['Docker', 'Git'],
  },
  contact: {
    email: 'kimku679@gmail.com',
    github: 'https://github.com/kimku003',
  },
  languages: [
    'Français (Langue maternelle)',
    'Anglais (Compétence professionnelle)',
  ],
  achievements: [
    "Création d'une application de messagerie web et mobile en temps réel.",
    "Développement de sites E-commerce performants avec Django et Next.js.",
    "Mise en place de blogs dynamiques sous Django et WordPress.",
  ],
  projects: [
    "Application de messagerie privée (Web & Mobile)",
    "Sites E-commerce (Django, Bootstrap, WordPress)",
    "Réseau social complet (Django)",
    "Client de messagerie privée (Flet - Python)",
    "Application de chat (Flutter & Dart)",
    "Application de gestion de projets (Next.js + React)",
    "Plateforme IA d'exercices pour l'entraînement (React)",
    "Application web de création de livres numériques (IA, Next.js)",
    "Assistant juridique basé sur l'IA (Next.js + React)",
  ],
  quote: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
};

// --- Fonction pour afficher le portfolio ---
function displayPortfolio(data) {
  const titleText = 'Kimku ETOUH';
  const figletText = figlet.textSync(titleText, {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true,
  });

  const animation = chalkAnimation.radar(figletText);

  setTimeout(() => {
    animation.stop();

    // Méthode de coloration manuelle, plus robuste
    const colorGradient = gradient(['#00F260', '#0575E6']);
    const lines = figletText.split('\n');
    const colors = colorGradient.rgb(lines.length);
    const coloredTitle = lines.map((line, index) => {
      return chalk.hex(colors[index].toHexString())(line);
    }).join('\n');
    console.log(coloredTitle);

    // Construire le contenu de la boîte
    let content = `${chalk.bold.white('Nom:')}         ${chalk.cyan(data.name)}\n`;
    content += `${chalk.bold.white('Titre:')}       ${chalk.cyan(data.title)}\n`;
    content += `${chalk.bold.white('Localisation:')} ${chalk.cyan(data.location)}\n\n`;

    content += `${chalk.yellow.bold('🛠️  Compétences Techniques')}\n`;
    for (const [category, skills] of Object.entries(data.skills)) {
      content += chalk.green(`  - ${category}:`) + ` ${skills.join(', ')}\n`;
    }
    content += '\n';

    content += `${chalk.yellow.bold('🏆  Réalisations Notables')}\n`;
    data.achievements.forEach(item => content += chalk.white(`  - ${item}\n`));
    content += '\n';

    content += `${chalk.yellow.bold('🚀  Projets Personnels')}\n`;
    data.projects.forEach(item => content += chalk.white(`  - ${item}\n`));
    content += '\n';

    content += `${chalk.yellow.bold('🌍  Langues')}\n`;
    content += chalk.white(`  - ${data.languages.join('\n  - ')}\n\n`);

    content += `${chalk.yellow.bold('📬  Contactez-moi')}\n`;
    content += chalk.green('  - Email:') + ` ${link(data.contact.email, 'mailto:' + data.contact.email)}\n`;
    content += chalk.green('  - GitHub:') + ` ${link(data.contact.github, data.contact.github)}\n\n`;

    content += chalk.italic.gray(`"${data.quote}"`);

    console.log(boxen(content, {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'cyan',
        backgroundColor: '#1a202c',
        title: 'Portfolio',
        titleAlignment: 'center',
    }));

  }, 1500); // Réduit à 1.5s pour plus de dynamisme
}

// --- Gestion des commandes CLI avec yargs ---
const argv = yargs(hideBin(process.argv))
  .usage('Usage: kimku [options]')
  .option('json', {
    alias: 'j',
    type: 'boolean',
    description: 'Affiche le portfolio au format JSON.',
  })
  .help('h')
  .alias('h', 'help')
  .version('1.0.0')
  .alias('v', 'version')
  .argv;

// --- Logique principale ---
if (argv.json) {
  console.log(JSON.stringify(portfolioData, null, 2));
} else {
  displayPortfolio(portfolioData);
}