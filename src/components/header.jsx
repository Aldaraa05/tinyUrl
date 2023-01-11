import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
             <Link style={{marginRight:"100px"}} >Хэрхэн ажилладаг вэ?</Link>
            <Link to="/login" style={{marginLeft:"50x", marginRight:"100px"}}>
            <Button className="button" variant="success">Нэвтрэх</Button>
            </Link>
            <Link to="/signup">
            <Button style={{borderRadius: "25px"}}>Бүртгүүлэх</Button>
            </Link>     
        </div>
    )
}
export default Header;