import React from 'react';
import './App.css';
import data from './Data'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      data: data
    }
  }


  render(){
    let personIndex = 0
    return(
    
      <div>
        <h3 className='header'> Home </h3>
       <h2> {this.state.data[personIndex].name.first} {this.state.data[personIndex].name.last} </h2>
        <h4> From: 
          <text> {this.state.data[personIndex].city}, {this.state.data[personIndex].country}</text>
        </h4>
        <h4> Job Title: 
          <text> {this.state.data[personIndex].title} </text>
        </h4>
        <h4> Employer: 
          <text> {this.state.data[personIndex].employer} </text>
        </h4>
        <h4> Favorite Movies:  </h4>
       
        <ol>
          <li>{this.state.data[personIndex].favoriteMovies.[0]}</li>
          <li>{this.state.data[personIndex].favoriteMovies.[1]}</li>
          <li>{this.state.data[personIndex].favoriteMovies.[2]}</li>
        </ol>
        <button> Previous </button>
        <button> Next </button>
      </div>
    )
  }

}

export default App;
