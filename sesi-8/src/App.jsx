import logo from './logo.svg';
import './App.css';
import styles from './App.module.css'
import Counter from './Components/Counter';
import myStyle from './myStyle.js'
import styledComponents from 'styled-components';
import Profile from './Components/Profile';
import { AppBar, Icon, IconButton, Toolbar, Typography } from '@material-ui/core';

const Title = styledComponents.h1`
  color: ${props => props.color};
  background-color: aqua;
`

function App() {
  const anchorStyles = {
    backgroundColor: 'black',
    color: 'white'
  }
  return (
    <div className="App">
      {/* <Profile/> */}
      <AppBar>
        <Toolbar>
          <IconButton>
            icon
          </IconButton>
        </Toolbar>
        <Typography variant='h6'>
          text
        </Typography>
      </AppBar>
      {/* <Title color="green">Belajar Style Component</Title>
      <Counter/>
      <hr />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={styles.title}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={myStyle.divStyle}
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
