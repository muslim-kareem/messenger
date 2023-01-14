import {Link} from "react-router-dom";
import {useState} from "react";

export default function LoginPage() {

    const [name, setName] = useState<String>("");

    return(
        <div className={'login-container'}>
            <div className={'login'}>
                <div className={'login-form'}>
                    <p>Wähle deinen Usernamen</p>
                    <input type={'text'} onChange={(e) => setName(e.target.value)} required/>
                    <Link to={"/home/"+name}>
                        <button className={'login-button'}>Login</button>
                    </Link>
                </div>
            </div>
        </div>


    )
}