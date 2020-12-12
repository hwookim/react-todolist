import React from "react";

export default function TodoFilterItem({ filter: { state, text, href } }) {
  return (
    <li>
      <a className="filter" data-state={state} href={href}>
        {text}
      </a>
    </li>
  );
}
