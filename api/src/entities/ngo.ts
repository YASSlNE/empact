import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Event } from "./event";
import User  from "./user";

@Entity()
export class Ngo extends User {
    @Column()
    fieldOfInterest: string

    @OneToMany(() => Event, (event) => event.organizer)
    events: Event[];
}