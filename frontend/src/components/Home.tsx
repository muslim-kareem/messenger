import useUsers from "../hooks/useUsers";
import NavBar from "./NavBar";
import Contacts from "./Contacts";
import {useParams} from "react-router-dom";
import useUser from "../hooks/useUser";



export default function Home(){

    let {username} = useParams()

    const [users] = useUsers([])


    const [author] = useUser(username as string)



    if( author.name ===  undefined ){

        // the style should be finished
        return <div>User is not found</div>

    }


    const contacts = users.filter(u => u.id !== author.id)




    return (
        <>
            <NavBar user={author? author: null}/>

            <div className={"message-area-sidebar-container"}>

                <Contacts users={contacts} authorId={author.id}/>

            </div>



    </>)
}