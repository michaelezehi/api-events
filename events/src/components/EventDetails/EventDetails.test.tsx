import { render, screen } from "@testing-library/react";
import EventDetails from "./EventDetails";

describe("EventDetails", () => {
  const mockEvent = {
    id: "1",
    name: "Summer Festival",
    date: "2023-08-15",
    description: "A fun summer event for all ages.",
    tickets: [
      {
        name: "Early Bird",
        type: "adult",
        price: 0,
        availability: "sold out",
      },
      {
        name: "Adult Ticket",
        type: "adult",
        price: 20,
        bookingFee: 2,
        availability: "available",
      },
      {
        name: "Child Ticket",
        type: "child",
        price: 10,
        bookingFee: 1,
        availability: "sold out",
      },
    ],
  };

  it("renders event details correctly", () => {
    render(<EventDetails event={mockEvent} />);

    expect(screen.getByText("Summer Festival")).toBeInTheDocument();
    expect(screen.getByText("Date: 2023-08-15")).toBeInTheDocument();
    expect(
      screen.getByText("Description: A fun summer event for all ages.")
    ).toBeInTheDocument();
  });

  it("displays correct ticket prices and styles", () => {
    render(<EventDetails event={mockEvent} />);

    // Check for free ticket
    expect(screen.getByText("free")).toBeInTheDocument();

    // Check for standard and children ticket prices
    expect(screen.getByText("£20")).toBeInTheDocument();
    expect(screen.getByText("£10")).toBeInTheDocument();

    // Check for style based on price
    const highPriceTicket = screen.getByText("£20");
    expect(highPriceTicket).toHaveClass("red"); // Assuming 'red' is a class that changes the color or style
  });
});
