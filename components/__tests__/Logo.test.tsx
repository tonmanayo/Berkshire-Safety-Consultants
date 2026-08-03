import { render, screen } from "@testing-library/react";
import { Logo } from "@/components/ds/Logo";

test("renders the three-word wordmark", () => {
  render(<Logo tone="onLight" />);
  expect(screen.getByText("Berkshire")).toBeInTheDocument();
  expect(screen.getByText("Safety")).toBeInTheDocument();
  expect(screen.getByText("Consultants")).toBeInTheDocument();
});
