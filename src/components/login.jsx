import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="signup">
        <div>
            <p>Цахим хаяг</p>
            <input className="signupInp" placeholder="name@mail.domain"></input>
        </div>
        <div style={{margin:"50px"}}>
            <p>Нууц үг</p>
            <input className="signupInp" placeholder="********"></input>
        </div>
        <Button className="tomButt">Нэвтрэх</Button>
        <Link to="/signup">Шинэ хэрэглэгч бол энд дарна уу?</Link>  
    </div>
    )
}
export default Login