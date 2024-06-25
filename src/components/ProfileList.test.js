import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import ProfileList from "./ProfileList";

test("renders all default profiles", () => {
  render(
    <Provider store={store}>
      <ProfileList />
    </Provider>
  );

  const defaultProfile = screen.getByText(/Default/i);
  expect(defaultProfile).toBeInTheDocument();

  const gameProfile = screen.getByText(/Game/i);
  expect(gameProfile).toBeInTheDocument();

  const movieProfile = screen.getByText(/Movie/i);
  expect(movieProfile).toBeInTheDocument();

  const musicProfile = screen.getByText(/Music/i);
  expect(musicProfile).toBeInTheDocument();
});
