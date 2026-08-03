import { render, screen } from "@testing-library/react";
import { Tag } from "@/components/ds/Tag";

test("renders a lime tag by default", () => {
  render(<Tag>Fire Safety</Tag>);
  const tag = screen.getByText("Fire Safety");
  expect(tag).toHaveStyle({ background: "var(--lime-500)" });
  expect(tag).toHaveStyle({ textTransform: "uppercase" });
});

test("navy variant has navy-800 background and white text", () => {
  render(<Tag variant="navy">Compliance</Tag>);
  const tag = screen.getByText("Compliance");
  expect(tag).toHaveStyle({ background: "var(--navy-800)", color: "var(--white)" });
});
