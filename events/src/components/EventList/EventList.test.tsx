import { render, screen, fireEvent } from "@testing-library/react";
import EventList from "./EventList";
import { APIEvent } from "../../api/types";

describe("EventList", () => {
  const mockEvents = [
    {
      id: "1",
      name: "Event 1",
      date: "2023-01-01",
      description: "Description 1",
    },
    {
      id: "2",
      name: "Event 2",
      date: "2023-01-02",
      description: "Description 2",
    },
  ] as unknown as APIEvent[];

  it("renders a list of events", () => {
    render(
      <EventList events={mockEvents} onEdit={() => {}} onDetails={() => {}} />
    );

    expect(screen.getByText("Event 1")).toBeInTheDocument();
    expect(screen.getByText("Event 2")).toBeInTheDocument();
    expect(screen.getAllByText("Edit").length).toBe(mockEvents.length);
    expect(screen.getAllByText("Details").length).toBe(mockEvents.length);
  });

  it("calls onEdit when Edit button is clicked", () => {
    const mockOnEdit = jest.fn();
    render(
      <EventList events={mockEvents} onEdit={mockOnEdit} onDetails={() => {}} />
    );

    fireEvent.click(screen.getAllByText("Edit")[0]);
    expect(mockOnEdit).toHaveBeenCalledWith(mockEvents[0]);
  });

  it("calls onDetails when Details button is clicked", () => {
    const mockOnDetails = jest.fn();
    render(
      <EventList
        events={mockEvents}
        onEdit={() => {}}
        onDetails={mockOnDetails}
      />
    );

    fireEvent.click(screen.getAllByText("Details")[0]);
    expect(mockOnDetails).toHaveBeenCalledWith(mockEvents[0]);
  });
});
