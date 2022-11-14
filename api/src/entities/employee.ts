import { Column, Entity, ManyToOne } from "typeorm";
import { Enterprise } from "./enterprise";
import { User } from "./user";

@Entity()
export class Employee extends User {
    @Column()
    Age: number

    @Column()
    sex: string

    @Column()
    points: number;

    @ManyToOne(() => Enterprise, (enterprise) => enterprise.employees)
    enterprise: Enterprise
}