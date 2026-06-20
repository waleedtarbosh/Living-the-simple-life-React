const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk('./src', function(filePath) {
  if (filePath.endsWith('.js') && !filePath.endsWith('.test.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Replace import './something.css' with import styles from './something.module.css'
    content = content.replace(/import\s+['"](\.\/?[^'"]+)\.css['"]/g, (match, p1) => {
      // Avoid modifying index.css import in index.js
      if (p1 === './index' && filePath.endsWith('index.js')) {
        return match;
      }
      changed = true;
      return `import styles from '${p1}.module.css'`;
    });

    // Replace className="some-class" with className={styles['some-class']}
    // We only want to do this if we actually imported styles
    if (changed || content.includes('import styles')) {
        content = content.replace(/className=['"]([^'"]+)['"]/g, (match, p1) => {
            // handle multiple classes?
            let classes = p1.split(' ').map(c => `styles['${c}']`);
            if (classes.length === 1) {
                return `className={${classes[0]}}`;
            } else {
                return `className={\`${classes.map(c => `\${${c}}`).join(' ')}\`}`;
            }
        });
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
  }

  // Rename .css files to .module.css
  if (filePath.endsWith('.css') && !filePath.endsWith('index.css') && !filePath.endsWith('.module.css')) {
    let newPath = filePath.replace('.css', '.module.css');
    fs.renameSync(filePath, newPath);
    console.log(`Renamed ${filePath} to ${newPath}`);
  }
});
