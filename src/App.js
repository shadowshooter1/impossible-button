import logo from './logo.svg';
import {useState} from 'react';
import './App.css';


function App() {
  const [isHovering, setIsHovering] = useState(false);
  const [Toogle, setToogle] = useState(false);

  const trial = {
  position:'relative',
  left:"350px",
  backgroundColor:"red"
  }
  const trial2 = {
    position:'relative',
    right:"350px",
    backgroundColor:"red"
    }
  
  const handleMouseOver = (event) => {
    
    
    setIsHovering(true); 
    event.target.classList.add('trial');
    console.log(event.target)
    setToogle(!Toogle)
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className="App">
      <header className="App-header">
      <form>
      <div>
        <label>
          <p>Vaglen</p>
    Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
        <label>
    Password:</label>
          <input type="text" name="username" />
        </div>
          <input style={Toogle ? trial :trial2 } onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}  type="submit" value="Submit" />
           {/*<button  style={Toogle ? trial :trial2 }  onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} >Click Me</button> */}
</form>
      </header>
    </div>
  );
}

export default App;
