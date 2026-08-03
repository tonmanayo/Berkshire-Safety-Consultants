import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { SiteHeader } from "@/components/SiteHeader";

vi.mock("next/navigation", () => ({ usePathname: () => "/about" }));

test("renders primary nav links and a Contact CTA", () => {
  render(<SiteHeader />);
  expect(screen.getAllByRole("link", { name: "About us" })[0]).toBeInTheDocument();
  // Contact is rendered as a polymorphic Button link; assert at least one exists
  expect(screen.getAllByRole("link", { name: /contact/i }).length).toBeGreaterThanOrEqual(1);
});

test("mobile menu opens and closes", async () => {
  const user = userEvent.setup();
  render(<SiteHeader />);
  const openBtn = screen.getByRole("button", { name: "Open menu" });
  expect(openBtn).toHaveAttribute("aria-expanded", "false");
  await user.click(openBtn);
  expect(openBtn).toHaveAttribute("aria-expanded", "true");
  // After opening, the overlay renders; close via the X button inside the dialog
  const dialog = screen.getByRole("dialog", { name: "Mobile navigation" });
  const closeBtn = dialog.querySelector("button[aria-label='Close menu']") as HTMLElement;
  await user.click(closeBtn);
  expect(openBtn).toHaveAttribute("aria-expanded", "false");
});
