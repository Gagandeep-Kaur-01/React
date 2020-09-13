import React from 'react';

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            error: null,
            isLoaded: false,
            
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
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
        
        if(error) {
            return <div>Error: {error.message}</div>;
        }   
        
        else if (!isLoaded) {
            return <div>Loading...</div>;
        }   
        
        else {
            return (
                <div>
                    <h3><b><u>Calling API - </u></b> In List format</h3>
                    <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <b>Id:</b> {item.id};
                            <b> Name: </b> {item.name} ; 
                            <b> Email: </b> {item.email};
                            <b> Phone: </b> {item.phone}
                        </li>
                    ))}
                    </ul>
                </div>
            );
        }
    }
   
}