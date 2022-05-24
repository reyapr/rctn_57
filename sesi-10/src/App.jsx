import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions/counter';
import { fetchData } from './actions/user'
import { useState } from 'react';
import { login } from './actions/auth'

function App() {
  const selector = useSelector((state) => {
    return {
      counter: state.counter.counter,
      title: state.counter.title,
      users: state.user.users,
      login: state.auth
    }
  })
  
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  
  const dispatch = useDispatch()
  let message = ''
  
  if(selector.login.isLoading) {
    message = '...loading'
  }
  if(selector.login.isSuccess) {
    message = 'login success'
  }
  
  if(selector.login.error) {
    message = selector.login.error
  }
  return (
    <div className="App">
      <div>
        <br />
        <div>
          Email: <input type="text" name="email" id="" onChange={onChange} />
        </div>
        <br />
        <div>
          Password: <input type="password" name="password" id="" onChange={onChange}/>
        </div>
        <br />
        <button onClick={() => dispatch(login(form.email, form.password))}>Login</button>
        <p>
          {message && message}
        </p>
      </div>
      <hr />
      <h1>{selector.title}</h1>
      <h1 data-testid='counter'>{selector.counter}</h1>
      <button id='increment' onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <hr />
      <h1>{selector.title}</h1>
      <h1>{selector.counter}</h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <hr />
      <button onClick={() => dispatch(fetchData())}>Show Users</button>
      <div>
        {selector.users.length > 0 && <div style={{ backgroundColor: 'cyan', width: '150px', margin: 'auto'}}>Name</div>}
        {selector.users.map(user => {
          return (
            <div key={user.id}>{user.name}</div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
