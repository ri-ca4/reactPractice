import { createContext } from 'react';
import './App.css';
import HooksPracticeComponent from './components/HooksPracticeComponent';

export const Context = createContext('light')
console.log(Context)

function App() {
  return (
    <Context.Provider value="purple">
      <div className="App">
          <HooksPracticeComponent/>
      </div>
    </Context.Provider>
  );
}

export default App;
