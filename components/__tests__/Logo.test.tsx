import { render, screen } from "@testing-library/react";
import { Logo } from "@/components/ds/Logo";

test("renders the three-word wordmark", () => {
  render(<Logo tone="onLight" />);
  expect(screen.getByText("Berkshire")).toBeInTheDocument();
  expect(screen.getByText("Safety")).toBeInTheDocument();
  expect(screen.getByText("Consultants")).toBeInTheDocument();
});

test("rule=false hides the accent rule; default renders it", () => {
  const { container: withoutRule } = render(<Logo rule={false} />);
  // The accent rule is an aria-hidden span; query all hidden spans
  const hiddenSpans = withoutRule.querySelectorAll('span[aria-hidden="true"]');
  expect(hiddenSpans).toHaveLength(0);

  const { container: withRule } = render(<Logo />);
  const ruleSpans = withRule.querySelectorAll('span[aria-hidden="true"]');
  expect(ruleSpans).toHaveLength(1);
});

test("onLight tone applies navy-900 color to the wordmark container", () => {
  const { container } = render(<Logo tone="onLight" />);
  const wrapper = container.firstChild as HTMLElement;
  expect(wrapper).toHaveStyle({ color: "var(--navy-900)" });
});
