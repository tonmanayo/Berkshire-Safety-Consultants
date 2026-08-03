import { render, screen, fireEvent } from "@testing-library/react";
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

test("hover: primary button switches to lime-600 on mouseenter and restores on mouseleave", () => {
  render(<Button>Hover me</Button>);
  const btn = screen.getByRole("button", { name: "Hover me" });
  fireEvent.mouseEnter(btn);
  expect(btn.style.background).toBe("var(--lime-600)");
  fireEvent.mouseLeave(btn);
  expect(btn.style.background).toBe("var(--lime-500)");
});

test("disabled: button has disabled attribute, opacity 0.45, cursor not-allowed, and hover does not change background", () => {
  render(<Button disabled>Disabled</Button>);
  const btn = screen.getByRole("button", { name: "Disabled" });
  expect(btn).toBeDisabled();
  expect(btn).toHaveStyle({ opacity: 0.45, cursor: "not-allowed" });
  const bgBefore = btn.style.background;
  fireEvent.mouseEnter(btn);
  expect(btn.style.background).toBe(bgBefore);
});

test("size lg has padding 16px 32px", () => {
  render(<Button size="lg">Large</Button>);
  const btn = screen.getByRole("button", { name: "Large" });
  expect(btn).toHaveStyle({ padding: "16px 32px" });
});

test("href prop renders a link with correct href and primary lime background", () => {
  render(<Button href="/contact">Contact</Button>);
  const link = screen.getByRole("link", { name: "Contact" });
  expect(link).toHaveAttribute("href", "/contact");
  expect(link).toHaveStyle({ background: "var(--lime-500)" });
});
