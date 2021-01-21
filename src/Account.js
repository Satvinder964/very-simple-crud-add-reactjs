import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputMask from "react-input-mask";
import Button from "react-bootstrap/Button";
export default function Account() {
  const [expand, setExpand] = useState(false);
  const { register, handleSubmit, formData } = useForm();
  const [data, setData] = useState([]);
  const onSubmit = (data) =>
    axios.post(
      "https://18zomq9m3.sse.codesandbox.io/accountLogin",
      data,
      window.location.assign("/")
    );

  const expandit = () => {
    setExpand(true);
  };
  const backnormal = () => {
    setExpand(false);
  };
  return (
    <Container>
      <h1 className="awesome">
        Click to Button Add user - Double-Click Form Close
      </h1>
      <Button onClick={expandit} onDoubleClick={backnormal} variant="success">
        Add-user
      </Button>
      {expand ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Control type="text" placeholder="Id" name="id" ref={register} />
          <Form.Control
            type="text"
            placeholder="Email-Address"
            name="email"
            ref={register}
          />
          <Form.Control
            type="text"
            placeholder="Password"
            name="password"
            ref={register}
          />
          <Form.Control
            type="text"
            placeholder="Level"
            name="level"
            ref={register}
          />

          <Button type="submit" variant="info">
            Submit Data
          </Button>
        </form>
      ) : null}
    </Container>
  );
}
