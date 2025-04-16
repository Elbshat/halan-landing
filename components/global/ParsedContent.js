import parse from "html-react-parser";

export default function ParsedContent({ htmlContent }) {
  return (
    <div className="parsed-html-content">
      &ldquo;{parse(htmlContent)}&rdquo;
    </div>
  );
}
