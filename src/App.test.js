import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

test("renders the basic text PROFILE LIST text", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/PROFILE LIST/i);
  expect(linkElement).toBeInTheDocument();
});
