import {Message} from "../model/Message";

export default function MessageCard({message,isAuthor}:{
    message: Message
    isAuthor: Boolean
}){






    return(
        <>
            <div className={"message-card"}>
                <div className={isAuthor?"author": "receiver"}>{message.text}</div>
            </div>
        </>
    )
}