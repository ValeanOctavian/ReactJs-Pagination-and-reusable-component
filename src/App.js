import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage'
import HomePage2 from './components/HomePage2/HomePage2'


function App() {
  const [toggle, setToggle] = useState(false);
  const onChangeToggle = () => {
    setToggle(!toggle);
  }
  return (

    <div>
      <div style={{ width: '100%', textAlign: 'center', height: '50px' }}>
        <button onClick={() => onChangeToggle()}>
          Change parrent
        </button>
      </div>
      {toggle ?
        <HomePage /> :
        <HomePage2 />


      }
    </div>




  );
}

export default App;
