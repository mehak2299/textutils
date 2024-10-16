import logo from './logo.svg';
import './App.css';
import shinchan from './Photos/shinchan.jpg'
import { useState } from 'react';
const user={
  name:'Sam',
  imageSize:80,
  alt:"Shinchan Pic"
}
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function One() {
  const listItems=products.map(item=>
    <li key={item.id}
    style={{color:item.isFruit?'pink':'blue'}}>{item.title}</li>
  )
  const[count,setCount]=useState(0)
  const handleclick=()=>{
    setCount(count+1);
  }
  return (
    <div className="App">
      <div>
      <h1>{user.name}</h1>
      <img
      src={shinchan}
      alt={user.alt}
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}
      />
      </div>
      <div>
        <ul>{listItems}</ul>
      </div>
      <div>
        <button onClick={handleclick}>
         clicked {count} times
        </button>
      </div>
    </div>
  );
}

export default One;
