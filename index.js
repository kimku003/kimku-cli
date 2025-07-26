#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalkAnimation from 'chalk-animation';
import boxen from 'boxen';
import gradient from 'tinygradient';
import open from 'open';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Helper pour créer des liens cliquables dans le terminal
const link = (text, url) => `
]8;;${url}${text}
]8;;`;

// --- Chargement des données du portfolio depuis le fichier JSON ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const portfolioData = JSON.parse(readFileSync(join(__dirname, 'portfolio.json'), 'utf-8'));


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

  }, 1500);
}

// --- Gestion des commandes CLI avec yargs ---
const argv = yargs(hideBin(process.argv))
  .usage('Usage: kimku [options]')
  .option('json', {
    alias: 'j',
    type: 'boolean',
    description: 'Affiche le portfolio au format JSON.',
  })
  .option('open', {
    alias: 'o',
    type: 'string',
    description: "Ouvre une ressource. Options: 'github', 'email'",
    choices: ['github', 'email']
  })
  .help('h')
  .alias('h', 'help')
  .version('1.0.0')
  .alias('v', 'version')
  .argv;

// --- Logique principale ---
if (argv.open) {
  if (argv.open === 'github') {
    console.log(chalk.green('Ouverture de GitHub...'));
    open(portfolioData.contact.github);
  } else if (argv.open === 'email') {
    console.log(chalk.green('Ouverture du client de messagerie...'));
    open(`mailto:${portfolioData.contact.email}`);
  }
} else if (argv.json) {
  console.log(JSON.stringify(portfolioData, null, 2));
} else {
  displayPortfolio(portfolioData);
}
