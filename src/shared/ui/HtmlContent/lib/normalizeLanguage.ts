export function normalizeLanguage(className = "", code = "") {
  const match = className.match(/language-([^\s]+)/);
  const language = match?.[1] ?? "";

  if (language === "typescriptreact") return "tsx";
  if (language === "javascriptreact") return "jsx";
  if (language === "html") return "markup";
  if (language === "css") return "css";
  if (language === "javascript") return "javascript";
  if (language === "typescript") return "typescript";

  if (
    code.includes("const ") ||
    code.includes("function ") ||
    code.includes("=>") ||
    code.includes("return ")
  ) {
    return "javascript";
  }

  if (code.includes("<") && code.includes(">")) {
    return "markup";
  }

  return "javascript";
}
