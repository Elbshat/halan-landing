import parse from "html-react-parser";

export default function ParsedContent({
  htmlContent,
  variant,
  className = "",
}) {
  if (variant === "testimonial")
    return (
      <div className={`parsed-html-content ${className}`}>
        &ldquo;{parse(htmlContent)}&rdquo;
      </div>
    );

  return (
    <div className={`parsed-html-content ${className}`}>
      {parse(htmlContent)}
    </div>
  );
}
