import React from "react";
import { render, RenderResult } from "@testing-library/react";

import TodoFilter from "./TodoFilter";
import Filter, { FILTER } from "../domain/Filter";

interface Props {
  selected?: Filter;
  onSelect?: () => void;
}

describe("TodoFilter", () => {
  function renderFilter({ selected = FILTER.ALL, onSelect = jest.fn() }: Props = {}): RenderResult {
    return render(<TodoFilter selected={selected} onSelect={onSelect} />);
  }

  it("render all filterState btn", () => {
    const { container } = renderFilter();

    Object.values(FILTER).forEach((filter: Filter) =>
      expect(container).toHaveTextContent(filter.getText()),
    );
  });
});
