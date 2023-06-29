
import { useState } from 'react';
import {Input} from './input'
import './App.css';

let letLogin = "dsdfhdfs"

function App() {
  const [formValues, setFormValues] = useState({});

  const onSubmit = (e) =>{
    e.preventDefault()
  }

 

  

  return (
    <div className="App">


      <form onSubmit={onSubmit}>
        <Input 
        name={'login'}
        label= {"login"}
        regex = {/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
        />

        <Input 
        name={'password'}
        label= {"Пароль"}
        regex = {/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/}
        />



        <button type='submit' disabled = {!isMatch || !isMatchPassword}>Login</button>

      </form>
    </div>
  );
}

export default App;
