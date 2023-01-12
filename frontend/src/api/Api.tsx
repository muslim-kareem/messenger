import {User} from "../model/User";
import axios from "axios";
import {Message} from "../model/Message";

export const getUsers = async (): Promise<User[]> => {
    const response = await axios.get<User[]>('/api/users');
    return response.data;
};


export const getMessages = async (): Promise<Message[]> => {
    const response = await axios.get<Message[]>('/api/messages');
    return response.data;
};


export const getMessage = async (id: string): Promise<Message> => {
    const response = await axios.get<Message>('/api/messages'+id);
    return response.data;
};

export const createMessage = async (message: Message): Promise<Message> => {
    const response = await axios.post<Message>('/api/messages',message);
    return response.data;
};