import React, {useState, useReducer} from 'react';
import {login} from '../subpages/utils';
import '../styles/_login.scss';
import Photo from '../images/me.jpg'

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
        error: 'Incorrect username or password',
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
        <>
        <div className="login">
        {isLoggedIn  ? 
        <div className="login__page">
          <div className="login__page__button">
            <button className="login__page_btn" onClick = {()=> dispatch({type: 'logout'})}>Log Out</button>
          </div>
          <div className="login__page__me">
            <img src={Photo} alt=""/>
          </div>
          
        </div>
        
        
        
        :
        <>
        <div className="login__info">
          <h2 className="login__info-text">Hello and welcome in the true of abyss</h2>
          <hr/>
          <p className="login__info-subtext">If you don't know the password... try to find it at the page</p>
          <p className="login__info-subtext">But... if you are lazy dude there you have it: </p>
        </div>
        
        <div className="login__login">
        <form className="form" onSubmit = {onSubmit}>
          {error && <p className="form__error">{error}</p>}
          
          
        <button onClick = {handleClick} className = "form__login" style={{opacity: opacity}}>{buttonName}</button>
          {click === false ? "" : <h1>Your name is: <p className="form__login_account">Milky</p> and your password is: <p className="form__login_account">Way</p>Have fun :)</h1> }
           
           <input type="text" placeholder="Username" value={username} onChange = {e => dispatch({type: 'field', field:'username', value: e.currentTarget.value})}/>

           <input type="password" placeholder="Password" autoComplete="new-password" value={password} onChange = {e => dispatch({type: 'field', field:'password', value: e.currentTarget.value})}/> 
          
          <button className="form__submit" type="submit" disabled = {isLoading}>{isLoading ? "Logging in..." : "Log in"}</button>
        </form>
        </div>
        </>
        }
        </div>
        
        </>);
}

export default App;
