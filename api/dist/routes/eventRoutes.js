"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var eventsController_1 = require("../controllers/eventsController");
var eventsRouter = (0, express_1.Router)();
var eventsController = new eventsController_1.EventsController();
// For TEST only ! In production, you should use an Identity Provider !!
eventsRouter.post("/add", eventsController.addEvent);
eventsRouter.get("/", eventsController.getAllEvents);
eventsRouter.post("/participate", eventsController.participate);
exports.default = eventsRouter;
//# sourceMappingURL=eventRoutes.js.map