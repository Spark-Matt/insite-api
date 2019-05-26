import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('battery')
export default class Battery extends BaseEntity {
  //Dummy Field to ensure primary key
  @PrimaryGeneratedColumn()
  datapoint_id: number

  @Column('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column()
  hasbattery: boolean

  @Column()
  cyclecount: number

  @Column()
  ischarging: boolean

  @Column('bigint')
  maxcapacity: number

  @Column('bigint')
  currentcapacity: number

  @Column()
  percent: number

  @Column()
  timeremaining: number

  @Column()
  aconnected: boolean

  @Column()
  type: string

  @Column()
  model: string

  @Column()
  manufacturer: string

  @Column()
  serial: string
}
