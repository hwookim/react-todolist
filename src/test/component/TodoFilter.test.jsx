import React from "react";
import { fireEvent, render } from "@testing-library/react";

import TodoFilter from "../../main/component/TodoFilter";
import { FILTER } from "../../main/utils/filter";
import context from "jest-plugin-context";

describe("TodoFilter", () => {
  function renderFilter(selected, onSelect) {
    return render(<TodoFilter selected={selected} onSelect={onSelect} />);
  }

  it("render all buttons", () => {
    const { container } = renderFilter();

    Object.values(FILTER).forEach(({ text }) =>
      expect(container).toHaveTextContent(text),
    );
  });

  context("click filter", () => {
    const onSelect = jest.fn();

    it("run method with filter state", () => {
      const { container } = renderFilter(FILTER.ALL, onSelect);
      const $filterBtn = container.querySelector(".all");

      fireEvent.click($filterBtn);
      expect(onSelect).toBeCalledWith(FILTER.ALL);
    });
  });
});
