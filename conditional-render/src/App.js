import logo from './logo.svg';
import './App.css';
import Test from './components/Text';
import { useState } from 'react';

function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <button onClick={()=>{setIsToggled(!isToggled)}}>Toggle</button>
      { isToggled && <Test />}
      { isToggled ? <p>the value is true</p> : <p>the value is false</p>}
    </div>
  );
}

export default App;
