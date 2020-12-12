import React from "react";

export default function TodoFilterItem({
  filter: { state, text, href },
  onSelect,
  isSelected,
}) {
  const className = [state, isSelected ? "selected" : ""].join(" ").trim();

  const handleSelectFilter = () => {
    onSelect(state);
  };

  return (
    <li>
      <a className={className} href={href} onClick={handleSelectFilter}>
        {text}
      </a>
    </li>
  );
}
