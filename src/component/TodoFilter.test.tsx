import React from "react";
import { render, RenderResult } from "@testing-library/react";

import TodoFilter from "./TodoFilter";
import Filter from "../domain/Filter";

interface Props {
  selected?: Filter;
  onSelect?: () => void;
}

describe("TodoFilter", () => {
  function renderFilter({ selected = Filter.ALL, onSelect = jest.fn() }: Props = {}): RenderResult {
    return render(<TodoFilter selected={selected} onSelect={onSelect} />);
  }

  it("render all filterState btn", () => {
    const { container } = renderFilter();

    Filter.getFilters().forEach((filter: Filter) =>
      expect(container).toHaveTextContent(filter.getText()),
    );
  });
});
