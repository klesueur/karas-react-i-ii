import React from 'react';
import './App.css';
import data from './Data'
import Buttons from './Components/Buttons'
class App extends React.Component {
  constructor(){
    super()

    this.state = {
      data: data,
      personIndex: 0
    }
  }

  previousIndex() {
    const newIndex = this.state.personIndex - 1
    if ( newIndex >= 0) {
    this.setState({
      personIndex: newIndex
    }) } 
  }
  
  nextIndex() {
    const newIndex = this.state.personIndex + 1
    if ( newIndex <= this.state.data.length - 1) {
      this.setState({
        personIndex: newIndex 
      })
    }
  }


  render(){
  const {data, personIndex} = this.state
    
    return(
    
      <div >

        <h3 className='header'> Home </h3>
        
        <div className='content-box'>
       <h2> {data[personIndex].name.first} {data[personIndex].name.last} </h2>
        <h4> From: 
          <text> {data[personIndex].city}, {data[personIndex].country}</text>
        </h4>
        <h4> Job Title: 
          <text> {data[personIndex].title} </text>
        </h4>
        <h4> Employer: 
          <text> {data[personIndex].employer} </text>
        </h4>
        <h4> Favorite Movies:  </h4>
       
        <ol>
          <li>{data[personIndex].favoriteMovies[0]}</li>
          <li>{data[personIndex].favoriteMovies[1]}</li>
          <li>{data[personIndex].favoriteMovies[2]}</li>
        </ol>
        <div className='buttons'>
                <button className='previousLink' onClick={ () => this.previousIndex()}> Previous </button>
                <button className='nextLink' onClick={ () => this.nextIndex()}> Next </button>
            </div>
        </div>
      </div>
    )
  }

}

export default App;
