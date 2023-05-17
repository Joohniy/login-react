import { render, screen } from "../../test-utils/index";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import FormLogin from "./form-login";

test("component is rendered", () => {
  render(<FormLogin />);
  const formLoginComponent = screen.getByRole("heading", { name: "Login" });
  expect(formLoginComponent).toBeInTheDocument();
});

test.only("user enter with success", async () => {
  const user = userEvent.setup();
  render(<FormLogin />);
});
