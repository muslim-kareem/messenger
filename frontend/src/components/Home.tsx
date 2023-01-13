import useUsers from "../hooks/useUsers";
import UserSideBar from "./UserSideBar";
import Contacts from "./Contacts";
import {useParams} from "react-router-dom";


export default function Home() {

    let {username} = useParams()

    const [users] = useUsers([])

    if (!username) {
        return <div></div>
    }
    const author = users && users.length && users.find(u => u.name === username)


    if (!author) {
        return <div>error</div>
    }


    const contacts = users.filter(u => u.id !== author.id)




    return (
        <>
            <div className={"messenger-container"}>
                <div className={"sidebar2"}>
                    <UserSideBar user={author? author: null}/>
                </div>
                <div className={"messenger-header"}>
                    <h2>Messenger</h2>
                    <div>
                    <Contacts users={contacts} authorId={author.id}/>
                    </div>
                </div>
                </div>

        </>

    )
}