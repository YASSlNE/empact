import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { Enterprise } from "./enterprise";
import  User  from "./user";
import { Event } from "./event";

@Entity()
export class Employee extends User {
    @Column()
    age: number

    @Column()
    sex: string

    @Column({default:0})
    points: number;

    @ManyToOne(() => Enterprise, (enterprise) => enterprise.employees)
    enterprise: Enterprise

    @ManyToMany(() => Event, (event) => event.participants)
    eventHistory: Event[]
}