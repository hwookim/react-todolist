import React from "react";
import { render } from "@testing-library/react";

import TodoFilterItem from "../../main/component/TodoFilterItem";
import { FILTER } from "../../main/utils/filter";

describe("TodoFilter", () => {
  function renderFilterItem(filter) {
    return render(<TodoFilterItem filter={filter} />);
  }

  it("render btn", () => {
    const { container } = renderFilterItem(FILTER.ALL);
    expect(container).toHaveTextContent(FILTER.ALL.text);
  });
});
