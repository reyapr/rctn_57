import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions/counter';

function App() {
  const selector = useSelector((state) => {
    return {
      counter: state.counter,
      title: state.title
    }
  })
  
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>{selector.title}</h1>
      <h1>{selector.counter}</h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <hr />
      <h1>{selector.title}</h1>
      <h1>{selector.counter}</h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
    </div>
  );
}

export default App;
