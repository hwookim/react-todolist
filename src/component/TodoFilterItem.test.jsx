import React from "react";
import { render, fireEvent } from "@testing-library/react";
import context from "jest-plugin-context";

import TodoFilterItem from "./TodoFilterItem";
import { FILTER, findFilterByState } from "../utils/filter";

describe("TodoFilterItem", () => {
  function renderItem({ filter, isSelected, onSelect }) {
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

    it("render filter btn with selected class", () => {
      const { getByText } = renderItem({ filter, isSelected });
      const $btn = getByText(filter.text);

      expect($btn).toHaveClass(filter.state);
      expect($btn).toHaveClass("selected");
    });
  });

  context("when not selected", () => {
    const filter = FILTER.ALL;
    const isSelected = false;

    it("render filter btn without selected class", () => {
      const { getByText } = renderItem({ filter, isSelected });
      const $btn = getByText(filter.text);

      expect($btn).toHaveClass(filter.state);
      expect($btn).not.toHaveClass("selected");
    });
  });

  it("run onSelect method with click btn", () => {
    const filter = FILTER.ALL;
    const isSelected = false;
    const onSelect = jest.fn();
    const { getByText } = renderItem({ filter, isSelected, onSelect });
    const $btn = getByText(filter.text);

    fireEvent.click($btn);

    expect(onSelect).toBeCalledWith(findFilterByState(filter.state));
  });
});
