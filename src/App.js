import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [cars, setCars] = useState(null)
  const [accaunts, setAccauns] = useState(null)
  useEffect(() => {
    fetch('http://localhost:18000/cars').then(e => e.json()).then(setCars)

    fetch('http://localhost:18000/accaunts').then(e => e.json()).then(console.log)
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <h3>Евть машины:</h3>
          <ul>
            {cars && cars.map( ({ Name, Cylinders }, ind) => {
              return (<li key={ind}>
                <div>{Name}</div>
                <div>
                  <span>Количество цилиндров:</span><span> {Cylinders}</span>
                </div>
              </li>)
            })}
          </ul>
        </p>
      </header>
    </div>
  );
}

export default App;
