import React from "react";

import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "../redux/store";

export function renderWithRedux(target) {
  return render(<Provider store={store}>{target}</Provider>);
}
