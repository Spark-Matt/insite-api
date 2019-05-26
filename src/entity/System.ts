import { BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

export default class System extends BaseEntity {
  //Dummy Field to ensure primary key
  @PrimaryGeneratedColumn()
  datapoint_id: number

  @Column('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column()
  manufacturer: string

  @Column()
  model: string

  @Column()
  version: string

  @Column()
  serial: string

  @Column()
  uuid: string

  @Column()
  sku: string
}
