import logo from './logo.svg';
import {useState} from 'react';
import './App.css';


function App() {
  const [isHovering, setIsHovering] = useState(false);
  const [Toogle, setToogle] = useState(false);
  const [Rand, setRand] = useState(0);

  const trial = {
  position:'relative',
  left:"0px",
  backgroundColor:"red"
  }
  const trial2 = {
    position:'relative',
    right:Rand+"px",
    backgroundColor:"red"
  }
  const handleMouseOver = (event) => {
    setIsHovering(true); 
    setRand(Math.floor(Math.random() * (400 - 50 + 1) ) + 50);
    console.log(Rand)
    setToogle(!Toogle)
  };
 // const handleMouseOut = () => {
 //   setIsHovering(false);
  //};
  return (
    <div className="App">
      <header className="App-header">
      <form>
      <div>
        <label>
          
    Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
        <label>
    Password:</label>
          <input type="text" name="username" />
        </div>
          <input style={trial2} onMouseEnter={handleMouseOver} /*onMouseLeave={handleMouseOut} */ type="submit" value="Submit" />

</form>
      </header>
    </div>
  );
}

export default App;
