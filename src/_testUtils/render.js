import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { render } from "@testing-library/react";

export function renderWithMockingRedux(
  ui,
  { mockStore = {}, dispatch = jest.fn() } = {},
) {
  useSelector.mockImplementation(() => mockStore);
  useDispatch.mockImplementation(() => dispatch);

  return render(ui);
}
