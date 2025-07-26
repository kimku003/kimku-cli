#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// Helper pour créer des liens cliquables dans le terminal
const link = (text, url) => `\u001B]8;;${url}\u0007${text}\u001B]8;;\u0007`;

// --- Les données du portfolio ---
const portfolioData = {
  name: 'Kimku ETOUH',
  title: 'Développeur Web Fullstack & Mobile',
  location: 'Afrique de l’Ouest',
  skills: {
    'Frontend': ['HTML', 'CSS', ,'Tailwind css', 'JavaScript', 'React', 'Next.js'],
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
    "Application de gestion de projets(Next js + React)",
    "Plateforme IA d'exercices pour l'entraînement avec le framework React",
    "Application web de création et édition de livres numériques basé sur l'IA",
    "Création d'un assistant juridique basé sur l'intelligence artificielle (Next js + React",
],
  quote: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
};

// --- Fonction pour afficher le portfolio ---
function displayPortfolio(data) {
  // 1. Titre en ASCII Art
  console.log(
    chalk.cyan(
      figlet.textSync('Kimku ETOUH', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true,
      })
    )
  );

  // 2. Informations générales
  const info = `
${chalk.bold.white('Nom:')}         ${chalk.cyan(data.name)}
${chalk.bold.white('Titre:')}       ${chalk.cyan(data.title)}
${chalk.bold.white('Localisation:')} ${chalk.cyan(data.location)}
  `;
  console.log(info);

  // 3. Compétences
  console.log(chalk.yellow.bold('🛠️  Compétences Techniques'));
  for (const [category, skills] of Object.entries(data.skills)) {
    console.log(chalk.green(`  - ${category}:`) + ` ${skills.join(', ')}`);
  }
  console.log('');

  // 4. Réalisations
  console.log(chalk.yellow.bold('🏆  Réalisations Notables'));
  data.achievements.forEach(item => console.log(chalk.white(`  - ${item}`)));
  console.log('');

  // 5. Projets et Tutoriels
  console.log(chalk.yellow.bold('🚀  Projets Personnels'));
  data.projects.forEach(item => console.log(chalk.white(`  - ${item}`)));
  console.log('');

  // 6. Langues
  console.log(chalk.yellow.bold('🌍  Langues'));
  console.log(chalk.white(`  - ${data.languages.join('\n  - ')}`));
  console.log('');

  // 7. Contact (avec liens cliquables)
  console.log(chalk.yellow.bold('📬  Contactez-moi'));
  console.log(chalk.green('  - Email:') + ` ${link(data.contact.email, 'mailto:' + data.contact.email)}`);
  console.log(chalk.green('  - GitHub:') + ` ${link(data.contact.github, data.contact.github)}`);
  console.log('');

  // 8. Citation
  console.log(chalk.italic.gray(`"${data.quote}"`));
  console.log('');
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
