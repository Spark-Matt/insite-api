import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  BaseEntity,
} from 'typeorm'
import * as uuid from 'uuid/v4'

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn('uuid') id: string

  @Column('varchar', { length: 225 })
  email: string

  @Column('text') password: string

  @BeforeInsert()
  addId() {
    this.id = uuid()
  }
}
