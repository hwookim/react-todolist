import React, { useCallback, useMemo } from "react";
import Filter from "../domain/Filter";

type OnSelect = (filter: Filter) => void;

export interface Props {
  filter: Filter;
  isSelected: boolean;
  onSelect: OnSelect;
}

const TodoFilterItem: React.FC<Props> = ({ filter, isSelected, onSelect }) => {
  const className: string = useMemo<string>(
    () => [filter.getState(), isSelected ? "selected" : ""].join(" ").trim(),
    [filter, isSelected],
  );

  const handleSelectFilter = useCallback((): void => {
    const selected = Filter.findFilter(filter);
    onSelect(selected);
  }, []);

  return (
    <li>
      <a className={className} href={filter.getHref()} onClick={handleSelectFilter}>
        {filter.getText()}
      </a>
    </li>
  );
};

export default TodoFilterItem;
