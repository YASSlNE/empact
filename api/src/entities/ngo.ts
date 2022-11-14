import { Column, Entity } from "typeorm";
import { User } from "./user";

@Entity()
export class Ngo extends User {
    @Column()
    fieldOfInterest: string
}