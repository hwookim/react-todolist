import React from "react";
import { render } from "@testing-library/react";

import TodoFilter from "../../main/component/TodoFilter";
import { FILTER } from "../../main/utils/filter";

describe("TodoFilter", () => {
  function renderFilter() {
    return render(<TodoFilter />);
  }

  it("render three btn", () => {
    const { container } = renderFilter();

    Object.values(FILTER).forEach(({ text }) =>
      expect(container).toHaveTextContent(text),
    );
  });
});
