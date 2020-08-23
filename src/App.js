import React from 'react';
import './App.css';
import data from './Data'
import Buttons from './Components/Buttons'
class App extends React.Component {
  constructor(){
    super()

    this.state = {
      data: data
    }
  }

  previousIndex() {

  }


  render(){
    let personIndex = 0
    
    return(
    
      <div >

        <h3 className='header'> Home </h3>
        
        <div className='content-box'>
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
          <li>{this.state.data[personIndex].favoriteMovies[0]}</li>
          <li>{this.state.data[personIndex].favoriteMovies[1]}</li>
          <li>{this.state.data[personIndex].favoriteMovies[2]}</li>
        </ol>
        <div className='buttons'>
                <button className='previousLink' onChange={ () => {this.previousIndex(this.state.data[personIndex] + 1)}}> Previous </button>
                <button className='nextLink' onChange={ () => {this.previousIndex(this.state.data[personIndex] - 1)}}> Next </button>
            </div>
        </div>
      </div>
    )
  }

}

export default App;
