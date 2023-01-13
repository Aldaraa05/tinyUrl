import { useState } from 'react';
import { useRef } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import instance from '../axiosInstance/instance';
import { useEffect } from 'react';

const Shortlink = () => {
    const link1 = useRef()
    const [id, setId] = useState()
    let location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams();
    const [url, setUrl] = useState()

    const shorten = async () => {
        const param = searchParams.get("6");
        console.log(param)

        if (param) {
            searchParams.delete(location.pathname)
            setSearchParams(searchParams);
            console.log(searchParams)
            axios.post("http://localhost:4000" ,{
                link: link1.current.value
            })
            .then(function(res) {
                setId(res.data._id);
            })
            .catch(function(err) {
                console.log(err)
            })
        }
       
      };
    useEffect (() => {
        axios.get(`http://localhost:4000${location.pathname}`)
       .then(function(res) {
        setUrl(res.data)
       })
       .catch(function(err) {
        console.log(err);
       })
    },[location])
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div style={{display:"flex", flexDirection:"row", margin:"50px"}}>
        <input className='search' placeholder='https://www.web-huudas.mn' ref={link1}></input>
        <Link to={id}>
            <Button variant='success' className='button' onClick={shorten}>Богиносгох</Button>
        </Link>
            </div>
        <a className='shortlink' href={url} target="_blank" >
            link : {location.pathname}
        </a>
            
        </div>
  
    )
}
export default Shortlink