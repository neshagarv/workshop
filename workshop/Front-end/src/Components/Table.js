import axios from "axios";
import React from "react";
import "./Table.css";
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";

export default function Table1() {
    const [data, setData] = useState([]);

    function init() {
        axios.get('http://localhost:8080/findall')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const deleteData = (Id) => {
        axios.delete(`http://localhost:8080/delete/${Id}`)
          .then((response) => {
            const newdata = data.filter((item) => item.Id !== Id);
            setData(newdata);
          })
          .catch((error) => {
            console.log(error);
          });
          window.location.reload();
      };

    const updateData = async (data) => {

        data["title"] = prompt("Enter new title");
        data["publisher"] = prompt("Enter new publisher");
        data["price"] = parseInt(prompt("Enter new price"));
        data["platform"] = prompt("Enter new platform");

        let res = await axios.put(`http://localhost:8080/updatedata`, data);
        window.location.reload();
      }


    useEffect(() => { init() }, [])
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>GameId</th>
                    <th>Game Title</th>
                    <th>Publisher</th>
                    <th>Price</th>
                    <th>Platform</th>
                    <th>Actions</th>
                </tr>
            </thead>
            {data.length > 0 && (
                <tbody>
                    {data.map(game => (
                        <tr key={game.id}>
                            <td>{game.id}</td>
                            <td>{game.title}</td>
                            <td>{game.publisher}</td>
                            <td>{game.price}</td>
                            <td>{game.platform}</td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => deleteData(game.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => updateData(game)}
                                >
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            )}
        <Link to="/">back</Link>
        </table>
    );
}
