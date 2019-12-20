import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, connect } from 'react-redux';
import initStore from './redux/store';
import { mapStateToProps, mapDispatchToProps } from './redux/mapper'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Create App mapped with redux
const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App)

// Create redux store
const store = initStore();

// 
const AppWithRedux = () => {
  return (
    <Provider store={store}>
      <AppConnected />
    </Provider>
  )
}

export default AppWithRedux;
