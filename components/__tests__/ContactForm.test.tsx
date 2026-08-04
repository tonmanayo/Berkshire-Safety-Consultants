import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, afterEach } from "vitest";
import { ContactForm } from "@/components/ContactForm";

afterEach(() => {
  vi.unstubAllGlobals();
});

async function fillRequired(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/first name/i), "Jane");
  await user.type(screen.getByLabelText(/last name/i), "Doe");
  await user.type(screen.getByLabelText(/email/i), "jane@example.com");
}

test("POSTs to the Netlify detection form and shows the success state", async () => {
  const fetchMock = vi.fn((_url: string, _init?: RequestInit) =>
    Promise.resolve({ ok: true, status: 200 } as Response),
  );
  vi.stubGlobal("fetch", fetchMock);
  const user = userEvent.setup();
  render(<ContactForm />);

  await fillRequired(user);
  await user.click(screen.getByRole("button", { name: /submit/i }));

  expect(await screen.findByText(/message sent/i)).toBeInTheDocument();
  expect(fetchMock).toHaveBeenCalledWith(
    "/__forms.html",
    expect.objectContaining({ method: "POST" }),
  );
  const body = String(fetchMock.mock.calls[0][1]?.body);
  expect(body).toContain("form-name=contact");
  expect(body).toContain("email=jane%40example.com");
});

test("shows a graceful error message when the submission fails", async () => {
  vi.stubGlobal(
    "fetch",
    vi.fn(() => Promise.resolve({ ok: false, status: 500 } as Response)),
  );
  const user = userEvent.setup();
  render(<ContactForm />);

  await fillRequired(user);
  await user.click(screen.getByRole("button", { name: /submit/i }));

  expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
});
