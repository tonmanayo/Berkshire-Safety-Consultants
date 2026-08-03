import { render, screen } from "@testing-library/react";
import { SectionHeading } from "@/components/ds/SectionHeading";

test("renders eyebrow and an h2 title with accent", () => {
  render(<SectionHeading eyebrow="What we do" title="Building" accent="trust" tone="onLight" />);
  expect(screen.getByText("What we do")).toBeInTheDocument();
  const h2 = screen.getByRole("heading", { level: 2 });
  expect(h2).toHaveTextContent("Building");
  expect(h2).toHaveTextContent("trust");
});

test("no-eyebrow: h2 renders without eyebrow text; lime rule still present", () => {
  const { container } = render(<SectionHeading title="Our Services" />);
  expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Our Services");
  // eyebrow element should be absent
  expect(screen.queryByText("Our Services", { selector: "span" })).toBeNull();
  // lime rule is always rendered (aria-hidden span)
  const ruleSpan = container.querySelector('span[aria-hidden="true"]');
  expect(ruleSpan).toBeInTheDocument();
});

test("align=center sets wrapper alignItems center and textAlign center", () => {
  const { container } = render(<SectionHeading title="Centered" align="center" />);
  const wrapper = container.firstChild as HTMLElement;
  expect(wrapper).toHaveStyle({ alignItems: "center", textAlign: "center" });
});
