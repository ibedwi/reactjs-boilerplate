import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, connect } from 'react-redux';
import initStore from './redux/store';
import { mapStateToProps, mapDispatchToProps } from './redux/mapper'
import Routes from './routes/routes';

function App() {
  return (
    <div className="App">
      <Routes />
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
