import logo from './logo.svg';
import './App.css';
// import One from './One';
import Button from './Button';
import { useState } from 'react';
function App() {
  const[count,setCount]=useState(0)
  const handleClick=()=>{
    setCount(count+1)
  }
  return (
    <div className="App">
      {/* <One/> */}
      <Button count={count} handleClick={handleClick}/>
      <Button count={count} handleClick={handleClick}/>
    </div>
  );
}

export default App;
