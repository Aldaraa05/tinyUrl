import { useState } from "react";
import { useRef } from "react";
import { Button } from "react-bootstrap";
import instance from "../axiosInstance/instance";
import axios from "axios";
import { Link } from "react-router-dom";

const Boginoo = () => {
  const link1 = useRef();
  const [id, setId] = useState();

  const shorten = async () => {
    axios
      .post("http://localhost:4000", {
        link: link1.current.value,
      })
      .then(function (res) {
        setId(res.data._id);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", margin: "50px" }}>
      <input
        className="search"
        placeholder="https://www.web-huudas.mn"
        ref={link1}
      ></input>
      <Link to={id}>
        <Button variant="success" className="button" onClick={shorten}>
          Богиносгох
        </Button>
      </Link>
    </div>
  );
};
export default Boginoo;
