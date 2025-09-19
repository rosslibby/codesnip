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
  await lazy({ workspace }).then(() => {
    // add editor dom
    renderDOM();
    const container = document.getElementById('workspace-container') as HTMLDivElement;
    const workspaceEl = document.createElement('monaco-editor');
    workspaceEl.setAttribute('theme', 'github-dark');
    container.appendChild(workspaceEl);
  });
}

function init() {
  background();
  createWorkspace();
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('dom content loaded ✅')
  init();
});
