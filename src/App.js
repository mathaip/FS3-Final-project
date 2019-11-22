import React from 'react'
import './App.css'
import Userform from './components/userform.js'

class App extends React.Component {   
    render(){
        return(
            <div className='App-content'>
            <h1>Registration Form</h1>
            <div>
            <Userform/>
            </div>
            </div>
        )
    } 

}
export default App; 

   
