import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import * as eventsAPI from "./api/eventsAPI";

// Mock necessary modules
jest.mock("./api/eventsAPI");
jest.mock("./components/EventList/EventList", () => (props) => (
  <div>
    Mocked Event List
    <button
      onClick={() =>
        props.onEdit({
          id: "1",
          name: "Event 1",
          date: "2023-01-01",
          description: "Description 1",
        })
      }
    >
      Edit Event
    </button>
    <button
      onClick={() =>
        props.onDetails({
          id: "1",
          name: "Event 1",
          date: "2023-01-01",
          description: "Description 1",
        })
      }
    >
      Details Event
    </button>
  </div>
));
jest.mock("./components/EventForm/EventForm", () => () => (
  <div>Mocked Event Form</div>
));
jest.mock("./components/EventDetails/EventDetails", () => () => (
  <div>Mocked Event Details</div>
));

describe("App", () => {
  it("fetches events on mount and renders them", async () => {
    render(<App />);

    await waitFor(() => {
      expect(eventsAPI.getEvents).toHaveBeenCalled();
      expect(screen.getByText("Mocked Event List")).toBeInTheDocument();
    });
  });

  it("opens and closes the details modal", async () => {
    render(<App />);

    fireEvent.click(screen.getByText("Details Event"));
    expect(screen.getByText("Mocked Event Details")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Close"));
    await waitFor(() => {
      expect(
        screen.queryByText("Mocked Event Details")
      ).not.toBeInTheDocument();
    });
  });
});
