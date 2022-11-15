import { Column, PrimaryGeneratedColumn } from "typeorm"

export default abstract class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column({nullable: true})
  profilePictureUrl: string

  @Column()
  password: string
}