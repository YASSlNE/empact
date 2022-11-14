import { Column, Entity, ManyToOne } from "typeorm";
import { Enterprise } from "./enterprise";
import  User  from "./user";

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
}