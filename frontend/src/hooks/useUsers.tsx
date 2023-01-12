import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {User} from "../model/User";
import {getUsers} from "../api/Api";


export default function useUsers(initialState: User[]): [User[], Dispatch<SetStateAction<User[]>>] {
    const [users, setUsers] = useState<User[]>([]);

 console.log(users)


    useEffect(() => {
        (async () => {
                const users = await getUsers();
                setUsers(users)
        })();
    }, []);

    return [users,setUsers];
}