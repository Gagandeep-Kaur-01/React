import React, { useState, useEffect } from 'react';
import './Api.css';

export default function Api_function() {
    const [state, setState] = useState([])
    const [items, setItems] = useState([]);
    const [hasError, setHasError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/users").then(
            res => {
                setState(res.data);
                setLoading(false)}               
        )        
        .catch(err => {
            setHasError(true)
            setLoading(false)
        })
    }, [])
   
    
    return (
       
        // <div>
        //     <h4 id='dataTitle'><b><u>React API calling </u></b> : In Table format </h4>
        //        <table id='data'>
        //            <tbody>
        //               <tr>
        //                 <th>ID</th>
        //                 <th>Title</th>
        //                 <th>Body</th>                           
        //               </tr>
        //                {/* {this.renderTableData()} */}
        //            </tbody>
        //        </table>      
        // </div>
        <div>
        <h3><b><u>Calling API - </u></b> using functional component</h3>
            {/* <table id='data'>
                <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    <th>ID</th>
                    <td>{item.id}</td>
                    <th>Title</th>
                    <th>Body</th>                           
                  </tr>
                  
                  
                ))}
                </tbody>
            </table>   */}
        {/* <ul>
        {items.map(item => (
            <li key={item.id}>
                <b>Id:</b> {item.id};
                <b> Name: </b> {item.name} ; 
                <b> Email: </b> {item.email};
                <b> Phone: </b> {item.phone}
            </li>
        ))}
        </ul> */}

        {
                loading ? <div>Loading...</div> : hasError ? <div>Error occured.</div> : (items.map( item => <div>{item.name}</div>))
            }
    </div>
        
        
      ); 
    
}