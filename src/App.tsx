import './App.css';
import Home from './pages/Home';
import React from 'react';

interface IProps {

}

const App:React.FC<IProps> = (props):JSX.Element =>  {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;