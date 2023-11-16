import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { APIEvent } from "../../api/types";


interface EventListProps {
  events: APIEvent[];
  onEdit: (event: APIEvent) => void;
  onDetails: (event: APIEvent) => void;
}

const EventList: React.FC<EventListProps> = ({ events, onEdit, onDetails }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Event Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell component="th" scope="row">
                {event.name}
              </TableCell>
              <TableCell align="right">{event.date}</TableCell>
              <TableCell align="right">
                <Button onClick={() => onEdit(event)}>Edit</Button>
                <Button onClick={() => onDetails(event)}>Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventList;
