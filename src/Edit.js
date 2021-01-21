import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputMask from "react-input-mask";
import Button from "react-bootstrap/Button";
import { useHistory, useParams } from "react-router-dom";
export default function Edit() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState([]);
  let history = useHistory();
  const { id } = useParams();
  const onSubmit = (data) =>
    axios.put(
      "https://18zomq9m3.sse.codesandbox.io/accountLogin/" + id,
      data,
      window.location.assign("/")
    );

  useEffect(async () => {
    const result = await axios(
      "https://18zomq9m3.sse.codesandbox.io/accountLogin/" + id
    );
    setData(result.data);
    console.log(result);
  }, []);
  return (
    <Container>
      <h1 className="awesome">Data Edit</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Control
          type="text"
          placeholder="Id"
          defaultValue={data.id}
          name="id"
          ref={register}
        />
        <Form.Control
          type="text"
          placeholder="Email-Address"
          defaultValue={data.email}
          name="email"
          ref={register}
        />
        <Form.Control
          type="text"
          placeholder="Password"
          defaultValue={data.password}
          name="password"
          ref={register}
        />
        <Form.Control
          type="text"
          placeholder="Level"
          defaultValue={data.level}
          name="level"
          ref={register}
        />

        <Button type="submit" variant="info">
          Submit Data
        </Button>
      </form>
    </Container>
  );
}
