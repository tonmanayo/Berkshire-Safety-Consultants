import { render, screen, fireEvent } from "@testing-library/react";
import { FaqAccordion } from "@/components/FaqAccordion";

test("renders all FAQ questions", () => {
  render(<FaqAccordion />);
  expect(screen.getByText("What is Berkshire Safety Consultants?")).toBeInTheDocument();
  expect(screen.getByText("What areas do you cover?")).toBeInTheDocument();
});

test("answers are not visible initially", () => {
  render(<FaqAccordion />);
  expect(
    screen.queryByText(/UK-based health and safety consultancy headquartered in Maidenhead/),
  ).not.toBeInTheDocument();
});

test("clicking a question reveals its answer", () => {
  render(<FaqAccordion />);
  const btn = screen.getByRole("button", {
    name: /What is Berkshire Safety Consultants\?/,
  });
  fireEvent.click(btn);
  expect(
    screen.getByText(/UK-based health and safety consultancy headquartered in Maidenhead/),
  ).toBeInTheDocument();
});

test("clicking the open question again closes it", () => {
  render(<FaqAccordion />);
  const btn = screen.getByRole("button", {
    name: /What is Berkshire Safety Consultants\?/,
  });
  fireEvent.click(btn);
  expect(
    screen.getByText(/UK-based health and safety consultancy headquartered in Maidenhead/),
  ).toBeInTheDocument();
  fireEvent.click(btn);
  expect(
    screen.queryByText(/UK-based health and safety consultancy headquartered in Maidenhead/),
  ).not.toBeInTheDocument();
});

test("opening one item closes a previously open item (single-open behaviour)", () => {
  render(<FaqAccordion />);
  const btn1 = screen.getByRole("button", {
    name: /What is Berkshire Safety Consultants\?/,
  });
  const btn2 = screen.getByRole("button", { name: /What areas do you cover\?/ });

  fireEvent.click(btn1);
  expect(
    screen.getByText(/UK-based health and safety consultancy headquartered in Maidenhead/),
  ).toBeInTheDocument();

  fireEvent.click(btn2);
  // first answer hidden, second answer visible
  expect(
    screen.queryByText(/UK-based health and safety consultancy headquartered in Maidenhead/),
  ).not.toBeInTheDocument();
  expect(screen.getByText(/we work with clients across the UK/)).toBeInTheDocument();
});

test("aria-expanded reflects open state", () => {
  render(<FaqAccordion />);
  const btn = screen.getByRole("button", {
    name: /What is Berkshire Safety Consultants\?/,
  });
  expect(btn).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(btn);
  expect(btn).toHaveAttribute("aria-expanded", "true");
});
