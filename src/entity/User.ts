import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm'
import uuidv4 from "uuid/v4"

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  datapoint_id: number

  @Column('uuid')
  id: string

  @Column('varchar', {length: 255})
  email: string

  @Column('text')
  password: string

  @Column('bigint')
  timestamp: number

  @Column('text')
  user: string

  @Column('text')
  tty: string

  @Column('text')
  date: string

  @Column('text')
  ip: string

  @Column('text')
  command: string

  @BeforeInsert()
  addId(){
    this.id = uuidv4();
  }
}
