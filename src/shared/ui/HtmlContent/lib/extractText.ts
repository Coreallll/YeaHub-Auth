import type { ChildNode } from "domhandler";

export function extractText(node: ChildNode): string {
  if (node.type === "text") {
    return node.data ?? "";
  }

  if ("children" in node) {
    return node.children.map(extractText).join("");
  }

  return "";
}
