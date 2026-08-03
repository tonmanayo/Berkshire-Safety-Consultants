import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ds/Button";

test("renders a primary button with uppercase label styling and lime background", () => {
  render(<Button>Contact</Button>);
  const btn = screen.getByRole("button", { name: "Contact" });
  expect(btn).toHaveStyle({ background: "var(--lime-500)" });
  expect(btn).toHaveStyle({ textTransform: "uppercase" });
});

test("secondary variant is transparent with a lime border", () => {
  render(<Button variant="secondary">Talk to us</Button>);
  const btn = screen.getByRole("button", { name: "Talk to us" });
  expect(btn).toHaveStyle({ background: "transparent" });
});
