
import {useState,useRef,useEffect} from 'react';
import './App.css';



function App() {
 
  const [Rand, setRand] = useState(0);
  
  const but = {
    position:Rand>0?'absolute':"relative",
    top: Rand>0?`${Math.random() * 80}%` : "0px",
    left:Rand>0?`${Math.random() * 80}%`: "0px"
    }

  const handleMouseOver = (event) => {
       setRand(Rand+1)
  };
  
  return (
    <div className="App">
      <header className="App-header">
      <form>
      <div>
        <label>
          
    Username: </label>
          <input type="text" name="username" />
        </div>
        <div>
        <label>
    Password: </label>
          <input type="text" name="username" />
        </div>
        <input style={but} className={"button "} onMouseEnter={handleMouseOver}  type="submit" value="Submit" />
        {Rand>0? <div className="fakebutton"> Submit</div> : ""}
</form>
      </header>
    </div>
  );
}

export default App;
