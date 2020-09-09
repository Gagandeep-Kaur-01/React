import React from 'react';
import './Api.css';

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            error: null,
            isLoaded: false,
            
        };
    } 
  

    renderTableData(){
        return this.state.items.map((item, index) => {
            const { id, name, email, phone } = item
            return (
                <tr key = {item.id}>
                    <td> {item.id} </td>
                    <td> {item.title} </td>
                    <td> {item.body} </td>
                    <td> {item.phone}</td>
                </tr>
            )
        })
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
          .then(json =>  {
                this.setState({
                    isLoaded: true,
                    items: json,
                });
            },

            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, items } = this.state; // to access properties inside state
        
       return (
           <div>
               <h4 id='dataTitle'><b><u>React API calling </u></b> : In Table format </h4>
               <table id='data'>
                   <tbody>
                       <tr>
                           <th>ID</th>
                           <th>Title</th>
                           <th>Body</th>
                           
                       </tr>
                       {this.renderTableData()}
                   </tbody>
               </table>
           </div>
       )
    }
   
}