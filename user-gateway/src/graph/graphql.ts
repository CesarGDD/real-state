
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface NewMessage {
    chat_id: string;
    content: string;
}

export interface NewChat {
    user_id: number;
    agent_id: number;
}

export interface Agent {
    agentId: number;
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    password: string;
    photo: string;
    description: string;
    properties: Nullable<Property>[];
}

export interface IQuery {
    agent(agentId: number): Agent | Promise<Agent>;
    listAgent(): Nullable<Agent[]> | Promise<Nullable<Agent[]>>;
    getChat(id: string): Chat | Promise<Chat>;
    getChats(id: string): Chat[] | Promise<Chat[]>;
    getMessage(id: string): Message | Promise<Message>;
    getMessages(id: string): Nullable<Message>[] | Promise<Nullable<Message>[]>;
    property(property_id: number): Property | Promise<Property>;
    listProperty(): Property[] | Promise<Property[]>;
    listPropertyByAgent(agent_id: number): Nullable<Property[]> | Promise<Nullable<Property[]>>;
}

export interface Chat {
    id: string;
    user_id: number;
    agent_id: number;
    messages?: Nullable<Nullable<Message>[]>;
}

export interface Message {
    id: string;
    chat_id: string;
    content: string;
    timestamp: number;
}

export interface IMutation {
    createChat(input: NewChat): Chat | Promise<Chat>;
    deleteChat(id: string): Nullable<string> | Promise<Nullable<string>>;
    createMessage(input: NewMessage): Message | Promise<Message>;
    deleteMessage(id: string): Nullable<string> | Promise<Nullable<string>>;
}

export interface ISubscription {
    newMessage(chat_id: string): Message | Promise<Message>;
}

export interface Property {
    property_id: number;
    address: string;
    status: string;
    rooms: number;
    toilets: number;
    park: number;
    size: number;
    description: string;
    features: string;
    agent_id: number;
    agent: Agent;
}

type Nullable<T> = T | null;
