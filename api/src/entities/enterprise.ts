import { Column, Entity, OneToMany } from "typeorm";
import { Employee } from "./employee";
import { User } from "./user";

@Entity()
export class Enterprise extends User {
    @Column()
    fieldOfInterest: string

    @Column()
    Location: string

    @Column()
    points: number;

    @OneToMany(() => Employee, (employee) => employee.enterprise)
    employees: Employee[]
}