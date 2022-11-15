import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee";
import { Ngo } from "./ngo";

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    field: string

    @Column()
    date: string

    @Column()
    Location: string

    @Column()
    details: string

    @Column()
    pictureUrl: string

    @Column()
    numberOFNeededVolunteers: number

    @Column({default:0})
    pointsPerVolunteer: number;

    @ManyToMany(() => Employee, (employee) => employee.enterprise)
    @JoinTable({
        name: "employee_event",
        joinColumn: {
         name: "employee",
         referencedColumnName: "id"
        },
        inverseJoinColumn: {
         name: "event",
         referencedColumnName: "id"
         }})
    participants: Employee[]

    @ManyToOne(() => Ngo, (ngo) => ngo.events)
    organizer: Ngo
}