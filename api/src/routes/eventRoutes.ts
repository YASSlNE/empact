import { Router } from "express";
import { EventsController } from "../controllers/eventsController";

const eventsRouter: Router = Router();
const eventsController: EventsController = new EventsController();

// For TEST only ! In production, you should use an Identity Provider !!
eventsRouter.post("/add", eventsController.addEvent);
eventsRouter.get("/", eventsController.getAllEvents);
eventsRouter.post("/participate", eventsController.participate);

export default eventsRouter;