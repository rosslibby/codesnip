import * as monaco from 'modern-monaco';
import { cycleBackground } from './background';
import { renderDOM } from './dom';

async function createWorkspace() {
  const workspace = new monaco.Workspace({
    initialFiles: {
      'index.ts': 'const greeting = \'Hello, World!\';\n',
    },
    entryFile: 'index.ts',
  });
  await monaco.lazy({ workspace }).then(() => {
    // add editor dom
    renderDOM();
    const container = document.getElementById('workspace-container') as HTMLDivElement;
    const workspaceEl = document.createElement('monaco-editor');
    workspaceEl.setAttribute('theme', 'github-dark');
    container.appendChild(workspaceEl);
  });
}

function init() {
  cycleBackground();
  createWorkspace();
}

init();
