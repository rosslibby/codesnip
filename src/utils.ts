export type DomTreeNode = {
  tagName: string;
  attributes?: Record<string, string>;
  children?: DomTreeNode[];
  textContent?: string;
};

export function domFromTree(tree: DomTreeNode): HTMLElement {
  const { tagName, attributes, children, textContent } = tree;
  const el = document.createElement(tagName);

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      el.setAttribute(key, value);
    });
  }

  if (textContent) {
    el.textContent = textContent;
  }

  if (children) {
    children.map(domFromTree).forEach((child) => {
      el.appendChild(child);
    });
  }

  return el;
}
