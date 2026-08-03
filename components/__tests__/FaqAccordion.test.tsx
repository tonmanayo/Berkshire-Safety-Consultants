import { render, screen, fireEvent } from "@testing-library/react";
import { FaqAccordion } from "@/components/FaqAccordion";

test("renders all FAQ questions", () => {
  render(<FaqAccordion />);
  expect(screen.getByText("What is Berkshire Safety Consultants?")).toBeInTheDocument();
  expect(screen.getByText("What areas do you cover?")).toBeInTheDocument();
});

test("answer panels are rendered but hidden initially", () => {
  render(<FaqAccordion />);
  const panel = screen
    .getByText(/UK-based health and safety consultancy headquartered in Maidenhead/)
    .closest("[id^='faq-answer-']");
  expect(panel).toBeInTheDocument();
  expect(panel).not.toBeVisible();
});

test("clicking a question reveals its answer", () => {
  render(<FaqAccordion />);
  const btn = screen.getByRole("button", {
    name: /What is Berkshire Safety Consultants\?/,
  });
  fireEvent.click(btn);
  const panel = screen
    .getByText(/UK-based health and safety consultancy headquartered in Maidenhead/)
    .closest("[id^='faq-answer-']");
  expect(panel).toBeVisible();
});

test("clicking the open question again closes it", () => {
  render(<FaqAccordion />);
  const btn = screen.getByRole("button", {
    name: /What is Berkshire Safety Consultants\?/,
  });
  fireEvent.click(btn);
  const panel = screen
    .getByText(/UK-based health and safety consultancy headquartered in Maidenhead/)
    .closest("[id^='faq-answer-']");
  expect(panel).toBeVisible();
  fireEvent.click(btn);
  expect(panel).not.toBeVisible();
});

test("opening one item closes a previously open item (single-open behaviour)", () => {
  render(<FaqAccordion />);
  const btn1 = screen.getByRole("button", {
    name: /What is Berkshire Safety Consultants\?/,
  });
  const btn2 = screen.getByRole("button", { name: /What areas do you cover\?/ });

  fireEvent.click(btn1);
  const panel1 = screen
    .getByText(/UK-based health and safety consultancy headquartered in Maidenhead/)
    .closest("[id^='faq-answer-']");
  expect(panel1).toBeVisible();

  fireEvent.click(btn2);
  // first answer hidden, second answer visible
  expect(panel1).not.toBeVisible();
  const panel2 = screen
    .getByText(/we work with clients across the UK/)
    .closest("[id^='faq-answer-']");
  expect(panel2).toBeVisible();
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

test("button has aria-controls pointing to the answer panel id", () => {
  render(<FaqAccordion />);
  const btn = screen.getByRole("button", {
    name: /What is Berkshire Safety Consultants\?/,
  });
  const controlsId = btn.getAttribute("aria-controls");
  expect(controlsId).toBeTruthy();
  expect(document.getElementById(controlsId!)).toBeInTheDocument();
});
