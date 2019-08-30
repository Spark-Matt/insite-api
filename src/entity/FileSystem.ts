import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('filesystem')
export default class FileSystem extends BaseEntity {
  //Dummy Field to ensure primary key
  @PrimaryGeneratedColumn()
  datapoint_id: number

  @Column('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column()
  fs: string

  @Column()
  type: string="NFTS"

  @Column('bigint')
  size: number=0

  @Column('bigint')
  used: number=0

  @Column('decimal')
  use: number

  @Column()
  mount: string
}
