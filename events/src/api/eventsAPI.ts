import axios from "axios";
import { APIEvent } from "./types";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8080/api";

export const getEvents = async (): Promise<APIEvent[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/events`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const addEvent = async (event: APIEvent): Promise<APIEvent> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/events`, event);
    return response.data;
  } catch (error) {
    console.error(error);
    return {} as APIEvent;
  }
};

export const updateEvent = async (
  id: string,
  event: APIEvent
): Promise<APIEvent> => {
  try {
    delete event.id;
    const response = await axios.put(`${API_BASE_URL}/events/${id}`, event);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Event could not be updated.");
  }
};

export const deleteEvent = async (id: string): Promise<APIEvent> => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/events/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Event could not be deleted.");
  }
};
