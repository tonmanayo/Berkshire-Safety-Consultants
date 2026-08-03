import { render, screen } from "@testing-library/react";
import { SiteFooter } from "@/components/SiteFooter";

test("renders footer with key links", () => {
  render(<SiteFooter />);
  expect(screen.getAllByRole("link", { name: /services/i }).length).toBeGreaterThan(0);
});
