import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PortablePostBody } from "../PortablePostBody";

const doc = [
  {
    _type: "block",
    _key: "a",
    style: "normal",
    children: [{ _type: "span", _key: "a1", text: "Intro copy", marks: [] }],
  },
  {
    _type: "block",
    _key: "b",
    style: "h2",
    children: [{ _type: "span", _key: "b1", text: "A heading", marks: [] }],
  },
  {
    _type: "block",
    _key: "c",
    style: "normal",
    listItem: "bullet",
    level: 1,
    children: [{ _type: "span", _key: "c1", text: "Bold bit", marks: ["strong"] }],
  },
  {
    _type: "block",
    _key: "d",
    style: "normal",
    listItem: "number",
    level: 1,
    children: [{ _type: "span", _key: "d1", text: "Emphasised", marks: ["em"] }],
  },
] as never;

describe("PortablePostBody", () => {
  it("renders paragraphs, headings and both list types", () => {
    const { container } = render(<PortablePostBody value={doc} />);
    expect(screen.getByText("Intro copy").tagName).toBe("P");
    expect(screen.getByText("A heading").tagName).toBe("H2");
    expect(container.querySelector("ul")).not.toBeNull();
    expect(container.querySelector("ol")).not.toBeNull();
  });

  it("renders strong and em marks", () => {
    const { container } = render(<PortablePostBody value={doc} />);
    expect(container.querySelector("strong")?.textContent).toBe("Bold bit");
    expect(container.querySelector("em")?.textContent).toBe("Emphasised");
  });

  it("styles headings and lists exactly as the existing articles do", () => {
    const { container } = render(<PortablePostBody value={doc} />);
    const h2 = container.querySelector("h2")!;
    expect(h2).toHaveStyle({ fontSize: "21px", fontWeight: "800", margin: "40px 0px 14px" });
    const ul = container.querySelector("ul")!;
    expect(ul).toHaveStyle({
      paddingLeft: "22px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    });
  });
});
