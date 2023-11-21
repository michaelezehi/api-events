import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  List,
  ListItem,
} from "@mui/material";

const EventForm = ({ onSubmit, event }) => {
  const [eventData, setEventData] = useState(
    event || {
      name: "",
      date: "",
      description: "",
      location: "",
      tickets: [],
    }
  );

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleTicketChange = (index, key, value) => {
    const updatedTickets = [...eventData.tickets];
    updatedTickets[index] = { ...updatedTickets[index], [key]: value };
    setEventData({ ...eventData, tickets: updatedTickets });
  };

  const addTicket = () => {
    setEventData({
      ...eventData,
      tickets: [
        ...eventData.tickets,
        {
          name: "",
          type: "adult",
          price: "",
          bookingFee: "",
          availability: "available",
        },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(eventData);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={3}
    >
      <Typography variant="h4" gutterBottom>
        {event ? "Edit Event" : "Create Event"}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: "100%", mt: 1 }}
      >
        <TextField
          name="name"
          label="Event Name"
          value={eventData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="date"
          label="Event Date"
          type="date"
          value={eventData.date}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
         <TextField
          name="location"
          label="Location"
          value={eventData.location}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="description"
          label="Description"
          multiline
          rows={4}
          value={eventData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <Box display="flex" flexDirection="column">
          <Typography variant="h6">Tickets</Typography>

          {eventData.tickets.map((ticket, index) => (
            <List>
              <ListItem divider>
                <TextField
                  label="Ticket Name"
                  value={ticket.name}
                  fullWidth
                  margin="normal"
                  onChange={(e) =>
                    handleTicketChange(index, "name", e.target.value)
                  }
                />
                <TextField
                  label="Type"
                  value={ticket.type}
                  fullWidth
                  margin="normal"
                  onChange={(e) =>
                    handleTicketChange(index, "type", e.target.value)
                  }
                />
                <TextField
                  label="Price"
                  type="number"
                  value={ticket.price}
                  fullWidth
                  margin="normal"
                  onChange={(e) =>
                    handleTicketChange(index, "price", e.target.value)
                  }
                />
                <TextField
                  label="Booking Fee"
                  type="number"
                  value={ticket.bookingFee}
                  fullWidth
                  margin="normal"
                  onChange={(e) =>
                    handleTicketChange(index, "bookingFee", e.target.value)
                  }
                />
                <TextField
                  label="Availability"
                  value={ticket.availability}
                  fullWidth
                  margin="normal"
                  onChange={(e) =>
                    handleTicketChange(index, "availability", e.target.value)
                  }
                />
              </ListItem>
            </List>
          ))}
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            onClick={addTicket}
          >
            Add Ticket
          </Button>
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          {event ? "Update Event" : "Create Event"}
        </Button>
      </Box>
    </Box>
  );
};

export default EventForm;
