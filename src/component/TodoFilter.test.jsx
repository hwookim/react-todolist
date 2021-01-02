import React from "react";
import { render } from "@testing-library/react";

import TodoFilter from "./TodoFilter";
import { FILTER } from "../utils/filter";

describe("TodoFilter", () => {
  function renderFilter({ selected, onSelect }) {
    return render(<TodoFilter selected={selected} onSelect={onSelect} />);
  }

  it("render all filterState btn", () => {
    const { container } = renderFilter({ selected: FILTER.ALL });

    Object.values(FILTER).forEach((filter) =>
      expect(container).toHaveTextContent(filter.text),
    );
  });
});
