import React, {useState, useReducer} from 'react';
import {login} from '../subpages/utils';
import '../styles/_login.scss';

function loginReducer(state, action) {
  switch (action.type) {
    case "field": {
      return{
        ...state,
        [action.field]: action.value
      }
    }
    case 'login':{
      return{
        ...state,
        isLoading: true,
        error: '',
      }
    }
    case 'sucess':{
      return {
        ...state,
        isLoggedIn: true,

      }
    }
    case 'error':{
      return {
        ...state,
        error: 'Incorect username or password',
        isLoading: false,
        username: '',
        password: '',
      }
    }
    case 'logout':{
      return {
        ...state,
        isLoggedIn: false,
        username: '',
        password: '',
      }
    }
      
      break;
  
    default:
      break;
  }
  return state
}


const initialState ={
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
}


function App() {

  const [state, dispatch] = useReducer(loginReducer, initialState);
  const [click, setClick] = useState(false);
  const [buttonName, setButtonName] = useState("Show name and password");
  const [opacity, setOpacity] = useState(1)


  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(false)
  // const [isLoggedIn, setIsLoggedIn] = useState(false)


  const handleClick = (e) =>{
   e.preventDefault();
   setClick(!click)
   setButtonName("")
   setOpacity(0)
  }

  const{
    username,
    password,
    isLoading,
    error,
    isLoggedIn
  } = state


  const onSubmit = async e=>{
    e.preventDefault();

    dispatch({type: login})

    try {
      await login({ username, password});
      dispatch({type: 'sucess'})
    } catch (error) {
      dispatch({type: "error"})
    }
  }

  return (

        <div className="container">
        {isLoggedIn  ? 
        <>
        <div className="container__page">
          <button class="container__page_btn" onClick = {()=> dispatch({type: 'logout'})}>Log Out</button>
        </div>
        
        </>
        
        
        : 
        <div className="container__login">
        <form className="form" onSubmit = {onSubmit}>
          {error && <p className="form__error">{error}</p>}
          
          <h2 className="form__text">Hello and welcome in the true of abyss</h2>
          <p className="form__text">If you don't know the password... try to find it at the page</p>
          <p className="form__text">But... if you are lazy dude there you have it: </p>
        <button onClick = {handleClick} className = "form__login" style={{opacity: opacity}}>{buttonName}</button>
          {click === false ? "" : <h1>Your name is: <p class="form__login_account">Milky</p> and your password is: <p class="form__login_account">Way</p>Have fun :)</h1> }
           
           <input type="text" placeholder="Username" value={username} onChange = {e => dispatch({type: 'field', field:'username', value: e.currentTarget.value})}/>

           <input type="password" placeholder="Password" autoComplete="new-password" value={password} onChange = {e => dispatch({type: 'field', field:'password', value: e.currentTarget.value})}/> 
          
          <button className="form__submit" type="submit" disabled = {isLoading}>{isLoading ? "Logging in..." : "Log in"}</button>
        </form>
        </div>}
        </div>
  );
}

export default App;
