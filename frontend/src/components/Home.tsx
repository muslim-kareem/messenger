import useUsers from "../hooks/useUsers";
import NavBar from "./NavBar";
import Contacts from "./Contacts";
import {useParams} from "react-router-dom";



export default function Home(){

    let {username} = useParams()

    const [users] = useUsers([])

    if(!username){
        return <div></div>
    }
    const author = users && users.length && users.find(u =>  u.name === username )


    if(!author ){
        return <div>error</div>
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