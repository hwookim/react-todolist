import React from "react";
import Filter from "../domain/Filter";

type OnSelect = (filter: Filter) => void;

export interface Props {
  filter: Filter;
  isSelected: boolean;
  onSelect: OnSelect;
}

const TodoFilterItem: React.FC<Props> = ({ filter, isSelected, onSelect }) => {
  const className: string = [filter.getState(), isSelected ? "selected" : ""].join(" ").trim();

  const handleSelectFilter = (): void => {
    const selected = Filter.findFilter(filter);
    onSelect(selected);
  };

  return (
    <li>
      <a className={className} href={filter.getHref()} onClick={handleSelectFilter}>
        {filter.getText()}
      </a>
    </li>
  );
};

export default TodoFilterItem;
