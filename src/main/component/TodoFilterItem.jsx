import React from "react";

export default function TodoFilterItem({
  filter: { state, text, href },
  onSelect,
  isSelected,
}) {
  const handleSelectFilter = () => {
    onSelect(state);
  };

  return (
    <li>
      <a
        className={isSelected ? "selected" : ""}
        href={href}
        onClick={handleSelectFilter}>
        {text}
      </a>
    </li>
  );
}
