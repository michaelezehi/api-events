import express from "express";
import EventsData from "../data/events.sample.json";

const router = express.Router();

let events = EventsData;

router.get("/", (req, res) => {
  res.json(events);
});

router.get("/:id", (req, res) => {
  const eventId = req.params.id;
  const event = events.find(event => event.id.toString() === eventId);

  if (!event) {
    return res.status(404).send("Event not found");
  }

  res.status(200).json(event);
});

router.post("/", (req, res) => {
  const newEvent = req.body;
  if(!req.body.name || !req.body.date){
    return res.status(400).send("Forbidden body.");
  }
  newEvent.id = String(events.length + 1);
  events.push(newEvent);

  res.status(201).json(newEvent);
});

router.delete("/:id", (req, res) => {
  const eventId = req.params.id;
  const eventIndex = events.findIndex((event) => event.id === eventId);

  if (eventIndex === -1) {
    return res.status(404).send("Event not found");
  }

  events = events.filter((event) => event.id !== eventId);

  res.status(200).send(`Event with id ${eventId} deleted successfully`);
});

router.put("/:id", (req, res) => {
  const eventId = req.params.id;
  const eventIndex = events.findIndex((event) => event.id === eventId);

  if (eventIndex === -1) {
    return res.status(404).send("Event not found");
  }
  const body = req.body;
  let currentEvent = events[eventIndex];
  currentEvent = { ...currentEvent, ...body };

  res.status(200).json(currentEvent);
});

export default router;
