import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
export default function VIew() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState([]);
  let history = useHistory();
  const { id } = useParams();

  useEffect(async () => {
    const result = await axios(
      "https://18zomq9m3.sse.codesandbox.io/accountLogin/" + id
    );
    setData(result.data);
    console.log(result);
  }, []);
  return (
    <Container>
      <h1 className="awesome">View user all Data</h1>
      <ul className="view">
        <li>
          <span className="color_change">ID User: </span>
          {data.id}
        </li>
        <li>
          <span className="color_change">Email Address: </span>
          {data.email}
        </li>
        <li>
          <span className="color_change">User Password: </span>
          {data.password}
        </li>
        <li>
          <span className="color_change">User Level: </span>
          {data.level}
        </li>
      </ul>
    </Container>
  );
}
