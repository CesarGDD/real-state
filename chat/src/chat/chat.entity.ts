import {Entity, ObjectIdColumn, PrimaryColumn, Column} from 'typeorm'

@Entity('chat')
export class Chat{
    @ObjectIdColumn()
    _id: string

    @PrimaryColumn()
    id: string

    @Column()
    userId: number

    @Column()
    agentId: number
}