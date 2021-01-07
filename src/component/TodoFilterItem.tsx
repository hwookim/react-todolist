import React from "react";
import Filter from "../domain/Filter";

export interface Props {
  filter: Filter;
  isSelected: boolean;
  onSelect: Function;
}

const TodoFilterItem: React.FC<Props> = ({ filter, isSelected, onSelect }) => {
  const className = [filter.getState(), isSelected ? "selected" : ""]
    .join(" ")
    .trim();

  const handleSelectFilter = () => {
    const selected = Filter.findFilter(filter);
    onSelect(selected);
  };

  return (
    <li>
      <a
        className={className}
        href={filter.getHref()}
        onClick={handleSelectFilter}>
        {filter.getText()}
      </a>
    </li>
  );
};

export default TodoFilterItem;
