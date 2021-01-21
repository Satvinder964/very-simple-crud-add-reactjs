import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Edit from "./Edit";
import { useHistory, useParams } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios(
      "https://18zomq9m3.sse.codesandbox.io/accountLogin"
    );
    setData(result.data);
    console.log(result);
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }, []);

  const { id } = useParams();
  const deleteeployee = (id) => {
    axios.delete("https://18zomq9m3.sse.codesandbox.io/accountLogin/" + id);
    window.location.assign("/");
  };
  return (
    <div className="Home">
      <div className="resposive">
        <table id="example" class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Password</th>
              <th>Level</th>
              <th>Delete</th>
              <th>Edit</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.level}</td>
                <td
                  onClick={() => {
                    deleteeployee(item.id);
                  }}
                  className="red"
                >
                  Delete
                </td>
                <td className="green-sky">
                  <Link to={"/edit/" + item.id}>Edit</Link>
                </td>
                <th>
                  <Link to={"/View/" + item.id}>View</Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
