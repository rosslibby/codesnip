import { lazy, Workspace } from 'modern-monaco';
import { background } from './background';
import { renderDOM } from './dom';

async function createWorkspace() {
  const workspace = new Workspace({
    initialFiles: {
      'index.ts': 'const greeting = \'Hello, World!\';\n',
    },
    entryFile: 'index.ts',
  });
  await lazy({ workspace });
}

function init() {
  background();
  createWorkspace();
  renderDOM();
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('dom content loaded ✅')
  init();
});
