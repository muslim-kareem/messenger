import useUsers from "../hooks/useUsers";
import NavBar from "./NavBar";
import Contacts from "./Contacts";



export default function Home(){



    const [users] = useUsers([])


    const author = users && users.length && users.find(u =>  u.name === "User1")
    const receiver = users && users.length && users.find(u =>  u.id == "User2")


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