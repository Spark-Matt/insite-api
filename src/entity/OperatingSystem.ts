import { BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

export default class OperatingSystem extends BaseEntity {
  //Dummy Field to ensure primary key
  @PrimaryGeneratedColumn()
  datapoint_id: number

  @Column('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column()
  platform: string

  @Column()
  distro: string

  @Column()
  release: string

  @Column()
  codename: string

  @Column()
  kernel: string

  @Column()
  arch: string

  @Column()
  hostname: string

  @Column()
  logofile: string
}
