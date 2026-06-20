const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const dir = path.join(__dirname, 'src');

walkDir(dir, function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Remove text-magenta, hover:text-magenta, text-golden, hover:text-golden, group-hover:text-magenta
    // but only inside className attributes.
    content = content.replace(/(text-magenta|hover:text-magenta|group-hover:text-magenta|text-golden|hover:text-golden|group-hover:text-golden)/g, 'text-slate');

    // Remove borders and backgrounds that shouldn't be magenta/golden, unless they are buttons
    // The safest way is to just let text-slate override it, but let's also remove bg-magenta/10
    content = content.replace(/bg-magenta\/[0-9]+/g, 'bg-off-white');
    content = content.replace(/border-magenta(\/[0-9]+)?/g, 'border-slate/10');
    content = content.replace(/border-golden(\/[0-9]+)?/g, 'border-slate/10');
    
    // Now replace duplicate classes like `text-slate text-slate` -> `text-slate`
    content = content.replace(/text-slate\s+text-slate/g, 'text-slate');

    // Fix up "bg-white text-slate font-bold hover:bg-golden hover:text-slate" on buttons
    // Actually, ALL primary buttons MUST be `bg-magenta text-white`
    // Let's find anything that looks like a CTA and ensure it's magenta text-white.
    
    if (original !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated:', filePath);
    }
  }
});
