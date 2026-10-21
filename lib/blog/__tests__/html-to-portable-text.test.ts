import { describe, it, expect } from "vitest";
import { htmlToPortableText } from "../html-to-portable-text";

describe("htmlToPortableText", () => {
  it("converts paragraphs and headings", () => {
    const blocks = htmlToPortableText("<p>Hello there</p><h2>Why it matters</h2>");
    expect(blocks).toHaveLength(2);
    expect(blocks[0]).toMatchObject({ _type: "block", style: "normal" });
    expect(blocks[0].children[0]).toMatchObject({ text: "Hello there", marks: [] });
    expect(blocks[1]).toMatchObject({ style: "h2" });
  });

  it("converts bullet and numbered lists to one block per item", () => {
    const blocks = htmlToPortableText("<ul><li>One</li><li>Two</li></ul><ol><li>First</li></ol>");
    expect(blocks).toHaveLength(3);
    expect(blocks[0]).toMatchObject({ listItem: "bullet", level: 1, style: "normal" });
    expect(blocks[2]).toMatchObject({ listItem: "number", level: 1 });
  });

  it("preserves strong and em as marks on the right span", () => {
    const blocks = htmlToPortableText("<p>Plain <strong>bold</strong> and <em>italic</em></p>");
    const spans = blocks[0].children;
    expect(spans.map((s) => s.text)).toEqual(["Plain ", "bold", " and ", "italic"]);
    expect(spans[1].marks).toEqual(["strong"]);
    expect(spans[3].marks).toEqual(["em"]);
  });

  it("decodes HTML entities", () => {
    const blocks = htmlToPortableText("<p>it&apos;s &ldquo;quoted&rdquo; &amp; fine</p>");
    expect(blocks[0].children[0].text).toBe("it’s “quoted” & fine");
  });

  it("collapses whitespace introduced by source formatting", () => {
    const blocks = htmlToPortableText("<p>line one\n          line two</p>");
    expect(blocks[0].children[0].text).toBe("line one line two");
  });

  it("gives every block and span a unique key", () => {
    const blocks = htmlToPortableText("<p>a</p><p>b</p>");
    const keys = blocks.map((b) => b._key);
    expect(new Set(keys).size).toBe(2);
    expect(keys.every(Boolean)).toBe(true);
  });

  it("ignores empty paragraphs", () => {
    expect(htmlToPortableText("<p>   </p><p>real</p>")).toHaveLength(1);
  });
});
