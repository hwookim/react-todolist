import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/modules/filter.actions";

import { findFilterByState } from "../utils/filter";

export default function TodoFilterItem({
  filter: { state, text, href },
  isSelected,
}) {
  const dispatch = useDispatch();

  const className = [state, isSelected ? "selected" : ""].join(" ").trim();

  const handleSelectFilter = () => {
    const filter = findFilterByState(state);
    dispatch(setFilter(filter));
  };

  return (
    <li>
      <a className={className} href={href} onClick={handleSelectFilter}>
        {text}
      </a>
    </li>
  );
}
