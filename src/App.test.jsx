import { render, screen } from "@testing-library/react";
import App from "./App";

test("render TODOS", () => {
  render(<App />);
  const linkElement = screen.getByText(/TODOS/i);
  expect(linkElement).toBeInTheDocument();
});
