import logo from './logo.svg';
import './App.css';
import { Button, FormGroup } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FacebookLoginButton} from 'react-social-login-buttons'
function App() {
  return (    
      <header className="App">      
       <h1 className='title'>welcome to my website</h1>       
       <label>First Name</label>
       <input type="text"  placeholder="Your name.."></input>
       <label>Last Name</label>
       <input type="text" placeholder="Your last name.."></input>
       <label>Email</label>
       <input type="text" placeholder="Email"></input>
       <label>Password</label>
       <input type="Password" placeholder="Password"></input>
       <div className='btn'>
       <button className='btn-lg btn-dark batn-block'>Log in</button>
       </div>
       <div>Or continue with </div>
       <div>
       <FacebookLoginButton/>
       </div>
 
      </header>
    
  )
}

export default App;
