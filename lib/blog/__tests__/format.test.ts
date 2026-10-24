import { describe, it, expect } from "vitest";
import { readTimeFromBody, readTimeFromText, formatPostDate, splitTitleHighlight } from "../format";

const block = (text: string) => ({
  _type: "block",
  _key: "k",
  style: "normal",
  children: [{ _type: "span", _key: "s", text, marks: [] }],
});

describe("readTimeFromBody", () => {
  it("rounds words over 200 to whole minutes", () => {
    expect(readTimeFromBody([block("word ".repeat(600).trim())] as never)).toBe("3 min read");
  });

  it("never returns less than one minute", () => {
    expect(readTimeFromBody([block("short")] as never)).toBe("1 min read");
  });

  it("ignores non-block members", () => {
    expect(readTimeFromBody([{ _type: "image", _key: "i" }] as never)).toBe("1 min read");
  });
});

describe("readTimeFromText", () => {
  it("counts words in flattened body text", () => {
    expect(readTimeFromText("word ".repeat(400).trim())).toBe("2 min read");
  });

  it("handles empty text", () => {
    expect(readTimeFromText("")).toBe("1 min read");
  });
});

describe("formatPostDate", () => {
  it("always includes the year", () => {
    expect(formatPostDate("2025-04-14T00:00:00Z")).toBe("Apr 14, 2025");
    expect(formatPostDate("2026-05-19T00:00:00Z")).toBe("May 19, 2026");
  });
});

describe("splitTitleHighlight", () => {
  it("splits around a mid-title phrase", () => {
    expect(splitTitleHighlight('Why "dusty" sites are a liability', '"dusty" sites')).toEqual({
      before: "Why ",
      match: '"dusty" sites',
      after: " are a liability",
    });
  });

  it("returns the plain title when the phrase is absent", () => {
    expect(splitTitleHighlight("Toolbox talks", "missing")).toEqual({
      before: "Toolbox talks",
      match: "",
      after: "",
    });
  });

  it("returns the plain title when no highlight is given", () => {
    expect(splitTitleHighlight("Toolbox talks")).toEqual({
      before: "Toolbox talks",
      match: "",
      after: "",
    });
  });
});
