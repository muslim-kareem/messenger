import {Message} from "../model/Message";

export default function MessageCard({message,isAuthor}:{
    message: Message
    isAuthor: Boolean
}){

    return(
        <div>
                <div className={isAuthor?"author": "receiver"}>{message.text}<div className={"message-date"}>{message.createdAt}</div></div>

        </div>
    )
}