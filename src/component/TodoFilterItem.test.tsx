import React from "react";
import { render, fireEvent } from "@testing-library/react";
// @ts-ignore
import context from "jest-plugin-context";

import TodoFilterItem from "./TodoFilterItem";
import Filter, { FILTER } from "../domain/Filter";
import { Props } from "./TodoFilterItem";

describe("TodoFilterItem", () => {
  function renderItem({ filter, isSelected, onSelect }: Props) {
    return render(
      <TodoFilterItem
        filter={filter}
        isSelected={isSelected}
        onSelect={onSelect}
      />,
    );
  }

  context("when selected", () => {
    const filter = FILTER.ALL;
    const isSelected = true;
    const onSelect = jest.fn();

    it("render filterState btn with selected class", () => {
      const { getByText } = renderItem({
        filter,
        isSelected,
        onSelect,
      });
      const $btn = getByText(filter.getText());

      expect($btn).toHaveClass(filter.getState());
      expect($btn).toHaveClass("selected");
    });
  });

  context("when not selected", () => {
    const filter = FILTER.ALL;
    const isSelected = false;
    const onSelect = jest.fn();

    it("render filterState btn without selected class", () => {
      const { getByText } = renderItem({ filter, isSelected, onSelect });
      const $btn = getByText(filter.getText());

      expect($btn).toHaveClass(filter.getState());
      expect($btn).not.toHaveClass("selected");
    });
  });

  it("run onSelect method with click btn", () => {
    const filter = FILTER.ALL;
    const isSelected = false;
    const onSelect = jest.fn();
    const { getByText } = renderItem({ filter, isSelected, onSelect });
    const $btn = getByText(filter.getText());

    fireEvent.click($btn);

    expect(onSelect).toBeCalledWith(Filter.findFilter(filter));
  });
});
