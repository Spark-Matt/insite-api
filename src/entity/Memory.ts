import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('memory')
export default class Memory extends BaseEntity {
  //Dummy Field to ensure primary key
  @PrimaryGeneratedColumn()
  datapoint_id: number

  @Column('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column('bigint')
  total: number

  @Column('bigint')
  free: number

  @Column('bigint')
  used: number

  @Column('bigint')
  active: number

  @Column('bigint')
  available: number

  @Column('bigint')
  buffcache: number

  @Column('bigint')
  swaptotal: number

  @Column('bigint')
  swapused: number
}
