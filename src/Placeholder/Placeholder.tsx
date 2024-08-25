import React from "react";
import PlaceholderProps from "./Placeholder.types";

const Placeholder: React.FC<PlaceholderProps> = (props) => {
  const {
    width = 50,
    height = 50,
    text,
    background = "#ccc",
    textColor = "#666",
  } = props;

  const placeholderText = text || `${width}x${height}`;

  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <rect width="${width}" height="${height}" fill="${background}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="sans-serif" font-size="24">
        ${placeholderText}
      </text>
    </svg
  `;

  const encodedSvgContent = encodeURIComponent(svgContent);
  const dataUri = `data:image/svg+xml,${encodedSvgContent}`;

  return <img src={dataUri} alt={placeholderText} />;
};

export default Placeholder;
