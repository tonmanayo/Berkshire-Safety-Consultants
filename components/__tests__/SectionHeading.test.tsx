import { render, screen } from "@testing-library/react";
import { SectionHeading } from "@/components/ds/SectionHeading";

test("renders eyebrow and an h2 title with accent", () => {
  render(<SectionHeading eyebrow="What we do" title="Building" accent="trust" tone="onLight" />);
  expect(screen.getByText("What we do")).toBeInTheDocument();
  const h2 = screen.getByRole("heading", { level: 2 });
  expect(h2).toHaveTextContent("Building");
  expect(h2).toHaveTextContent("trust");
});
