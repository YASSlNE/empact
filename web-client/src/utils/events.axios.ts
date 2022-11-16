import axios from "axios";
import { event } from "../components/EventCard";
import { baseUrl, getJwtToken } from "./constants";
import { CreateEventDto } from "./createEventDto";

export const getAllEvents = async () => {
  return await axios.get<event[]>(`${baseUrl}/events`)
}

export const addEvent = async (createEventDto: CreateEventDto) => {
  return await axios.post<string>(`${baseUrl}/events/add`, createEventDto, {headers: {
    'Authorization': getJwtToken()
  }})
}

export const participateInEvent = async (eventId: string) => {
  return await axios.post<string>(`${baseUrl}/events/participate`, {eventId}, {headers: {
    'Authorization': getJwtToken()
  }})
}