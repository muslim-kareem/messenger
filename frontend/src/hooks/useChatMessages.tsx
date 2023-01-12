import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Message} from "../model/Message";
import {getChatMessages} from "../api/Api";


export default function useChatMessages(authorId_receiverId: string): [Message[], Dispatch<SetStateAction<Message[]>>] {
    const [chatMessages, setChatMessages] = useState<Message[]>([]);

    console.log(chatMessages)



    useEffect(() => {

            (async () => {
                const theMessages = await getChatMessages(authorId_receiverId);
                setChatMessages(theMessages)
            })();

    }, [authorId_receiverId])


    return [chatMessages,setChatMessages];
}