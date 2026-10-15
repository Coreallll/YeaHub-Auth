import DOMPurify from "dompurify";
import parse, { Element, type HTMLReactParserOptions } from "html-react-parser";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { memo, useMemo } from "react";
import { extractText } from "@/shared/ui/HtmlContent/lib/extractText.ts";
import { normalizeLanguage } from "@/shared/ui/HtmlContent/lib/normalizeLanguage.ts";

interface HtmlContentProps {
  answer: string;
}

export default memo(function HtmlContent({ answer }: HtmlContentProps) {
  const parsedAnswer = useMemo(() => {
    const cleanHtml = DOMPurify.sanitize(answer ?? "");

    const options: HTMLReactParserOptions = {
      replace(node) {
        if (!(node instanceof Element) || node.name !== "pre") {
          return;
        }

        const codeNode = node.children.find(
          (child): child is Element => child instanceof Element && child.name === "code",
        );

        if (!codeNode) return;

        const code = extractText(codeNode);

        const language = normalizeLanguage(codeNode.attribs.class ?? "", code);

        return (
          <SyntaxHighlighter
            language={language}
            style={oneDark}
            customStyle={{
              margin: "16px 0",
              borderRadius: "12px",
              padding: "16px",
              fontSize: "14px",
            }}
          >
            {code}
          </SyntaxHighlighter>
        );
      },
    };
    return parse(cleanHtml, options);
  }, [answer]);

  return parsedAnswer;
});
