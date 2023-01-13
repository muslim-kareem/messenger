import useUsers from "../hooks/useUsers";
import NavBar from "./NavBar";
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


    //    <NavBar user={author? author: null}/>

    // <div className={"message-area-sidebar-container"}>

    //   <Contacts users={contacts} authorId={author.id}/>

    // </div>


    return (
        <>
            <div className={"messenger-container"}>
                <div className={"sidebar2"}>
                    <h2>User1</h2>
                </div>
                <div className={"messenger-header"}>
                <h2>Messenger</h2>
            </div>

            </div>

        </>

    )
}