import React from "react";
import { FILTER } from "../utils/filter";

export default function TodoFilter() {
  return (
    <ul className="filters">
      {Object.values(FILTER).map(({ state, text, href }) => (
        <li key={state}>
          <a className="filter" data-state={state} href={href}>
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
}
