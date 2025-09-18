import { domFromTree, DomTreeNode } from './utils';

const tree: DomTreeNode = {
  tagName: 'div',
  attributes: {
    'class': 'wrapper',
    'data-theme': 'nuxt-contrast',
  },
  children: [
    {
      tagName: 'div',
      attributes: {
        'class': 'frame',
      },
      children: [
        {
          tagName: 'header',
          attributes: {
            'class': 'header',
          },
          children: [
            {
              tagName: 'div',
              attributes: { 'class': 'buttons' },
              children: [
                { tagName: 'div', attributes: { 'class': 'button' } },
                { tagName: 'div', attributes: { 'class': 'button' } },
                { tagName: 'div', attributes: { 'class': 'button' } },
              ],
            },
            {
              tagName: 'div',
              attributes: { 'class': 'title' },
              textContent: 'index.ts',
            },
          ],
        },
        {
          tagName: 'div',
          attributes: { 'class': 'body' },
          children: [
            {
              tagName: 'div',
              attributes: {
                'class': 'code',
                'id': 'code',
              },
              children: [
                {
                  tagName: 'monaco-editor',
                  attributes: {
                    theme: 'github-dark',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export function renderDOM() {
  const root = document.body;
  root.appendChild(domFromTree(tree));
}
