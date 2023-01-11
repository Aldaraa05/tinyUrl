import { useRef } from 'react';
import { Button } from 'react-bootstrap';
const Boginoo = () => {
    const link = useRef()
    const shorten = () => {
        console.log(link.current.value)
    }
    return (
    <div style={{display:"flex", flexDirection:"row", margin:"50px"}}>
        <input className='search' placeholder='https://www.web-huudas.mn' ref={link}></input>
        <Button variant='success' className='button' onClick={shorten}>Богиносгох</Button>
    </div>
    )
}
export default Boginoo;