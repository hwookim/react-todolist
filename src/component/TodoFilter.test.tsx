import React from "react";
import { render } from "@testing-library/react";

import TodoFilter, { Props } from "./TodoFilter";
import Filter, { FILTER } from "../domain/Filter";

describe("TodoFilter", () => {
  function renderFilter({ selected, onSelect }: Props) {
    return render(<TodoFilter selected={selected} onSelect={onSelect} />);
  }

  it("render all filterState btn", () => {
    const { container } = renderFilter({
      selected: FILTER.ALL,
      onSelect: jest.fn(),
    });

    Object.values(FILTER).forEach((filter: Filter) =>
      expect(container).toHaveTextContent(filter.getText()),
    );
  });
});
