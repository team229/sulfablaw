/**
 * Wraps wide markdown tables so they can scroll horizontally on small screens
 * without breaking the page layout.
 */
export default function rehypeWrapTables() {
  return (tree) => {
    const walk = (node) => {
      if (!Array.isArray(node.children)) return;

      node.children = node.children.map((child) => {
        if (child.type === 'element' && child.tagName === 'table') {
          return {
            type: 'element',
            tagName: 'div',
            properties: { className: ['table-scroll'] },
            children: [child],
          };
        }
        walk(child);
        return child;
      });
    };

    walk(tree);
  };
}
