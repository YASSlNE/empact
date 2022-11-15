import { Request, Response } from 'express';
import '../auth/passportHandler';

import { Employee } from '../entities/employee';

import { Ngo } from '../entities/ngo';

import { dataSource } from "../app-data-source"
import { decodeToken, getToken } from '../utils/auth.util';
import { Event } from '../entities/event';
import { CreateEventDto } from '../Dtos/createEventDto';

export class EventsController {

    public async addEvent(req: Request, res: Response) {
        const createEventDto: CreateEventDto = req.body;
        const ngoId = decodeToken(getToken(req)).id;
        const ngo = await dataSource.getRepository(Ngo).findOne({where: {id: ngoId}})
        if(!ngo)
          return res.status(401).send("ngo doesn't exist")
        const event: Event = {
          id: null,
          ...createEventDto,
          organizer: ngo,
          participants: []
        }

        await dataSource.getRepository(Event).save(event);

        res.send("Success");
    }

    public async getAllEvents(req: Request, res: Response) {
        const events = await dataSource.getRepository(Event).find({relations: ["organizer", "participants"]});

        return res.send(events);
    }

    public async participate(req: Request, res: Response) {
        const eventRepo = dataSource.getRepository(Event);
        const {eventId} = req.body;
        const event = await eventRepo.findOne({where: {id: eventId}, relations: ["participants"]});

        if(event.numberOFNeededVolunteers <= 0)
          return res.status(400).send("no available spaces");

        const employeeId = decodeToken(getToken(req)).id;
        const employee = await dataSource.getRepository(Employee).findOne({where: {id: employeeId}});
        employee.points += event.pointsPerVolunteer;
        await dataSource.getRepository(Employee).save(employee);

        event.numberOFNeededVolunteers--;
        event.participants.push(employee);
        await eventRepo.save(event);

        return res.status(200).send("successfully participated in event")
    }
}