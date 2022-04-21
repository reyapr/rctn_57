import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function Footer() {
  return (
    <div>
      <p>&copy; Mine - 2022</p>
    </div>
  )
}

function Swapi() {
  let [data, setData] = useState([])
  
  useEffect(() => {
    console.log( `<=================== use Effect ==================`);
    // let fetch = async () => {
    //   let url = 'https://swapi.dev/api/people'
    //   let result = await axios.get(url)
    //   setData(result.data.results)
    // }
    // fetch() 
  }, [])
  
  return (
    <div>
      {!data.length ? 
        '....Loading' 
        :
        <ul>
          {data.map(person => {
            return (
              <li>
                {person.name}
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}

function Counter() {
  const [num, setNum] = useState(0) // return [value, functionMerubahValue]
  const [state, setState] = useState({
    name: 'udin',
    age: 10,
    cars: ['bmw', 'toyota']
  })
  
  const listCar = [
    'honda',
    'volvo',
    'audi',
    'mercedes'
  ]
  
  const changeName = () => {
    setState({
      ...state,
      name: 'bambang'
    })
  }
  
  const setAge = () => {
    setState({
      ...state,
      age: 20
    })
  }
  
  const addCar = (car) => {
    setState({
      ...state,
      cars: [...state.cars, car]
    })
  }
  
  const add = () => {
    let addedOne = num + 1
    setNum(addedOne)
  }
  
  const minus = () => {
    let minusOne = num - 1
    setNum(minusOne)
  }
  
  const renderCar = car => {
    return (
      <span><b>{car} </b> <button>x</button></span>
    )
  }
  
  return (
    <div>
      <p>
        <b>{num}</b>
      </p>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={changeName}>Change Name</button>
      <button onClick={setAge}>Set Age</button>
      <br />
      <hr />
      <p>
        Mobilnya {state.name} ada: {state.cars.map(renderCar)}
      </p>
      {listCar.map(car => {
        return (
          <div>
            <br />
            <button onClick={() => addCar(car)}>Add: {car}</button>
          </div>
        )
      })}
    </div>
  )
}

function Header() {
  return (
    <header>
      <h1>My First React App</h1>
    </header>
  )
}

function App() {
  console.log('trigger app')
  return (
    <div>
      <Header/>
      <hr />
      <Swapi/>
      <hr />
      <Counter/>
      <hr />
      <Footer/>
    </div>
  );
}

export default App;
