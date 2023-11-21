import { render, screen } from "@testing-library/react";
import EventForm from "./EventForm";

const mockEvent = {
  id: "1",
  name: "Test Event",
  date: "2023-01-01",
  description: "Test Description",
  location: "London",
  tickets: [],
};

describe("EventForm", () => {
  it("renders correctly event form", () => {
    const mockOnSubmit = jest.fn();

    render(<EventForm event={mockEvent} onSubmit={mockOnSubmit} />);

    const eventNameInput = screen.getByLabelText(
      /event name/i
    ) as HTMLInputElement;
    const eventDateInput = screen.getByLabelText(
      /event date/i
    ) as HTMLInputElement;
    const eventDescriptionInput = screen.getByLabelText(
      /description/i
    ) as HTMLInputElement;
    const eventLocationInput = screen.getByLabelText(
      /location/i
    ) as HTMLInputElement;

    expect(eventNameInput.value).toBe("Test Event");
    expect(eventDateInput.value).toBe("2023-01-01");
    expect(eventLocationInput.value).toBe("London");
    expect(eventDescriptionInput.value).toBe("Test Description");
    expect(
      screen.getByRole("button", { name: /update event/i })
    ).toBeInTheDocument();
  });
});
