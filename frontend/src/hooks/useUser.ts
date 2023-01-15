import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {User} from "../model/User";
import {getUserByName} from "../api/Api";


export default function useUser(userName: string): [User, Dispatch<SetStateAction<User>>] {

    const [user, setUser] = useState<User>({id:"",name:""});

    useEffect(() => {
        (async () => {
            const user = await getUserByName(userName);
            setUser(user)
        })();
    }, []);

    return [user,setUser];
}