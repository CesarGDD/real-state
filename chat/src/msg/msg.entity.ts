import {Entity, ObjectIdColumn, PrimaryColumn, Column} from 'typeorm'

@Entity('chat')
export class Msg{
    @ObjectIdColumn()
    _id: string

    @PrimaryColumn()
    id: string

    @Column()
    chatId: string

    @Column()
    content: string

    @Column()
    timestamp: number
}