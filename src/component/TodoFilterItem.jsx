import React from "react";

import { findFilterByState } from "../utils/filter";

export default function TodoFilterItem({
  filter: { state, text, href },
  isSelected,
  onSelect,
}) {
  const className = [state, isSelected ? "selected" : ""].join(" ").trim();

  const handleSelectFilter = () => {
    const filter = findFilterByState(state);
    onSelect(filter);
  };

  return (
    <li>
      <a className={className} href={href} onClick={handleSelectFilter}>
        {text}
      </a>
    </li>
  );
}
