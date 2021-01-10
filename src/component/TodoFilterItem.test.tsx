import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";

import TodoFilterItem from "./TodoFilterItem";
import Filter from "../domain/Filter";

interface Props {
  filter: Filter;
  isSelected: boolean;
  onSelect?: () => void;
}

describe("TodoFilterItem", () => {
  function renderItem({ filter, isSelected, onSelect = jest.fn() }: Props): RenderResult {
    return render(<TodoFilterItem filter={filter} isSelected={isSelected} onSelect={onSelect} />);
  }

  describe("when selected", () => {
    const filter = Filter.ALL;
    const isSelected = true;

    it("render filterState btn with selected class", () => {
      const { getByText } = renderItem({
        filter,
        isSelected,
      });
      const $btn = getByText(filter.getText());

      expect($btn).toHaveClass(filter.getState());
      expect($btn).toHaveClass("selected");
    });
  });

  describe("when not selected", () => {
    const filter = Filter.ALL;
    const isSelected = false;

    it("render filterState btn without selected class", () => {
      const { getByText } = renderItem({ filter, isSelected });
      const $btn = getByText(filter.getText());

      expect($btn).toHaveClass(filter.getState());
      expect($btn).not.toHaveClass("selected");
    });
  });

  it("run onSelect method with click btn", () => {
    const filter = Filter.ALL;
    const isSelected = false;
    const onSelect = jest.fn();

    const { getByText } = renderItem({ filter, isSelected, onSelect });
    const $btn = getByText(filter.getText());

    fireEvent.click($btn);

    expect(onSelect).toBeCalledWith(Filter.findFilter(filter));
  });
});
