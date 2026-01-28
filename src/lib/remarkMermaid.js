import { visit } from 'unist-util-visit';

export function remarkMermaid() {
    return function (tree) {
        visit(tree, 'code', function (node, index, parent) {
            if (node.lang === 'mermaid') {
                const encodedChart = Buffer.from(node.value).toString('base64')
                const mermaidUrl = `https://mermaid.ink/svg/${encodedChart}`;
                node.type = 'html';
                node.value = `<div class="mermaid"><img src="${mermaidUrl}?theme=dark&bgColor=1f1b19" alt="Mermaid diagram" id="my-svg"/></div>`
            }
        });
    };
}