import { useRef } from "react";
import { Button } from "react-bootstrap";
const Signup = () => {
    const email = useRef();
    const password = useRef();
    const password1 =useRef();
    const signup = () => {
        if (password.current.value===password1.current.value) {
            console.log("successful")
        }
        else {
            console.log("passwords don't match")
        }
    }
    return (
        <div className="signup">
            <div>
                <p>Цахим хаяг</p>
                <input className="signupInp" placeholder="name@mail.domain" ref={email}></input>
            </div>
            <div style={{margin:"50px"}}>
                <p>Нууц үг</p>
                <input className="signupInp" placeholder="********" ref={password}></input>
            </div> 
            <div>
                <p>Нууц үгээ давтна уу?</p>
                <input className="signupInp"  placeholder="********" ref={password1}></input>
            </div>
            <Button className="tomButt" onClick={signup}>Нэвтрэх</Button>      
        </div>
    )
}
export default Signup