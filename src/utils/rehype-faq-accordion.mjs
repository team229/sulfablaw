/**
 * Turns the FAQ blocks in content-page Markdown into native accordions.
 *
 * The briefs mark each question as an H4 and the answer as the nodes that
 * follow it. This plugin finds the "Frequently Asked Questions" H2, then wraps
 * every H4 and its answer in <details>/<summary>, so the page renders a
 * collapsible accordion with no client-side JavaScript.
 */

const FAQ_HEADING = /frequently asked questions|^faqs?$/i;

function textOf(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value;
  if (Array.isArray(node.children)) return node.children.map(textOf).join('');
  return '';
}

function isElement(node, tagName) {
  return node?.type === 'element' && node.tagName === tagName;
}

function buildAccordion(question, answer) {
  return {
    type: 'element',
    tagName: 'details',
    properties: { className: ['faq-item'] },
    children: [
      {
        type: 'element',
        tagName: 'summary',
        properties: { className: ['faq-question'] },
        children: question.children,
      },
      {
        type: 'element',
        tagName: 'div',
        properties: { className: ['faq-answer'] },
        children: answer,
      },
    ],
  };
}

function transformChildren(children) {
  const result = [];
  let inFaq = false;
  let index = 0;

  while (index < children.length) {
    const node = children[index];

    if (isElement(node, 'h2')) {
      inFaq = FAQ_HEADING.test(textOf(node).trim());
      result.push(node);
      index += 1;
      continue;
    }

    if (inFaq && isElement(node, 'h4')) {
      const answer = [];
      let next = index + 1;

      while (next < children.length) {
        const sibling = children[next];
        if (sibling.type === 'element' && ['h2', 'h3', 'h4'].includes(sibling.tagName)) {
          break;
        }
        answer.push(sibling);
        next += 1;
      }

      result.push(buildAccordion(node, answer));
      index = next;
      continue;
    }

    result.push(node);
    index += 1;
  }

  return result;
}

export default function rehypeFaqAccordion() {
  return (tree) => {
    if (Array.isArray(tree.children)) {
      tree.children = transformChildren(tree.children);
    }
  };
}
