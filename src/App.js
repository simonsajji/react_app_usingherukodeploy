import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js'
import list from "./Data.js"


class App extends Component {
  render() {
    return (
      <div className="Card_container">
        {

        list.map((item,index)=>{
          return(
            <Card key={index} jobrole={item.imgsrc} description={item.header} more={item.content} /> 

            // Here key=index is added so as to give the uniqueness to each props passed so when each card is created it will have unique key.
           )

        }

        
          

        )

        }

    

                                                                                                                                


      </div>
    );
  }
}

export default App;
