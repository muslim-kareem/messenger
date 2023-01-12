import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Message} from "../model/Message";
import {getMessages} from "../api/Api";


export default function useMessages(initialState: Message[]): [Message[], Dispatch<SetStateAction<Message[]>>] {
    const [messages, setMessages] = useState<Message[]>([]);

    console.log(messages)


    useEffect(() => {
        (async () => {
            const theMessages = await getMessages();
            setMessages(theMessages)

        })();
    }, []);

    return [messages,setMessages];
}