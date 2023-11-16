import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import EventDetails from "./components/EventDetails/EventDetails";
import EventForm from "./components/EventForm/EventForm";
import EventList from "./components/EventList/EventList";
import {
  AppBar,
  Button,
  Container,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { addEvent, getEvents } from "./api/eventsAPI";
import { APIEvent } from "./api/types";

import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
});

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vh",
  maxHeight: "50vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
};

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [events, setEvents] = useState<APIEvent[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await getEvents();
      setEvents(eventsData);
    };

    fetchEvents();
  }, []);

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setShowEditModal(true);
  };

  const handleDetails = (event) => {
    setSelectedEvent(event);
    setShowDetailsModal(true);
  };

  const handleSubmit = async (eventData: APIEvent) => {
    const updatedEvent = await addEvent(eventData);
    if (updatedEvent.name) {
      setEvents([...events, updatedEvent]);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Event Management System</Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" style={{ marginTop: "20px" }}>
          <EventForm onSubmit={handleSubmit} event={selectedEvent} />
          <Typography variant="h6">Event List</Typography>
          <EventList
            onEdit={handleEdit}
            onDetails={handleDetails}
            events={events}
          />
          <Modal open={showEditModal} onClose={() => setShowEditModal(false)}>
            <Box sx={modalStyle}>
              <EventForm
                event={selectedEvent}
                onSubmit={(event) => {
                  console.log(event);
                }}
              />
              <Button onClick={() => setShowEditModal(false)}>Close</Button>
            </Box>
          </Modal>
          <Modal
            open={showDetailsModal}
            onClose={() => setShowDetailsModal(false)}
          >
            <Box sx={modalStyle}>
              <EventDetails event={selectedEvent} />
              <Button onClick={() => setShowDetailsModal(false)}>Close</Button>
            </Box>
          </Modal>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
