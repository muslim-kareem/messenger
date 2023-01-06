import {User} from "../model/User";
import axios from "axios";

export const getUsers = async (): Promise<User[]> => {
    const response = await axios.get<User[]>('/api/users');
    return response.data;
};