import { Box, Typography } from "@mui/material";

const EventDetails = ({ event }) => {
  return (
    <Box p={2}>
      <Typography variant="h5" component="h2" pb={2}>
        {event.name}
      </Typography>
      <Typography color="textSecondary">
        Date: {event.date}
      </Typography>
      <Typography variant="body2" component="p">
        Description: {event.description}
      </Typography>
      {event.tickets.map((ticket, index) => (
        <Typography variant="body2" key={index}>
          {ticket.name} - {ticket.type} - £{ticket.price}
          {ticket.availability === "available" ? " (Available)" : " (Sold Out)"}
        </Typography>
      ))}
    </Box>
  );
};

export default EventDetails;
