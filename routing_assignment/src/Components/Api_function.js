import React, { useState, useEffect } from 'react';
import './Api.css';

export default function Api_function() {
    const [items, setItems] = useState([]);

    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    //componentDidMount
    useEffect(() => {
        fetch(apiUrl)
          .then(res => res.json())
          .then(res => {
              setItems(res);
          })                
        .catch(err => {
            console.log(err);
        })
    });

    const Tr = ({item}) => { 
        return (
            <tr key = {item.id}>
                <td> {item.id} </td>
                <td> {item.title} </td>
                <td> {item.body} </td>
            </tr>
        );
    }

   
    return (
        <div>
            <h3 id='dataTitle'><b><u>Calling API - </u></b> using functional component</h3>
            Items: {items.length}
            <table id='data'>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                  </tr>
                </thead>

              <tbody>
                {items.map((i,id) => {
                  return <Tr key={id} item={i} />
                })}
              </tbody>
            </table>
     
        </div>
    ); 
    
}

