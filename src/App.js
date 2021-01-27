import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [cars, setCars] = useState(null)
  const [accounts, setAccouns] = useState(null)
  useEffect(() => {
    fetch('http://localhost:18000/cars').then(e => e.json()).then(setCars)

    fetch('http://localhost:18000/accounts').then(e => e.json()).then(setAccouns)
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <h3>Есть машины:</h3>
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
          <h3>Аккаунты:</h3>
          <ul>
            {accounts && accounts.map( ({ Name,email,phone}, ind) => {
              return (<li key={ind}>
                <div>{Name}</div>
                <div>
                  <span> Имя:</span><span> {Name}</span>
                  <span> Почта:</span><span> {email}</span>
                  <span> Телефон:</span><span> {phone}</span>
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
