import React from "react";
import { render, fireEvent } from "@testing-library/react";
import context from "jest-plugin-context";

import TodoFilterItem from "../../main/component/TodoFilterItem";
import { FILTER } from "../../main/utils/filter";

describe("TodoFilter", () => {
  function renderFilterItem({ filter, isSelected, onSelect }) {
    return render(
      <TodoFilterItem
        filter={filter}
        onSelect={onSelect}
        isSelected={isSelected}
      />,
    );
  }

  it("render btn", () => {
    const { container } = renderFilterItem({ filter: FILTER.ALL });
    expect(container).toHaveTextContent(FILTER.ALL.text);
  });

  context("with isSelected true", () => {
    const { container } = renderFilterItem({
      filter: FILTER.ALL,
      isSelected: true,
    });
    const $filterBtn = container.querySelector("a");

    it("has class selected", () => {
      expect($filterBtn).toHaveClass("selected");
    });
  });

  context("click filter", () => {
    const onSelect = jest.fn();

    it("run method with filter state", () => {
      const { container } = renderFilterItem({ filter: FILTER.ALL, onSelect });
      const $filterBtn = container.querySelector("a");

      fireEvent.click($filterBtn);
      expect(onSelect).toBeCalledWith(FILTER.ALL.state);
    });
  });
});
