import React, {useState, useReducer} from 'react';
import {login} from '../subpages/utils';
import '../styles/_login.scss';
import Photo from '../images/me.jpg';
import Image from '../images/login-page.jpg';
import {ReactComponent as Css} from '../images/svg/css3.svg';
import {ReactComponent as ReactLogo} from '../images/svg/react.svg';
import {ReactComponent as Sass} from '../images/svg/sass.svg';
import API from '../images/logos/api.png';
import HTML from '../images/logos/html.png';
import ReactRouter from '../images/logos/react-router.png';
import Jsx from '../images/logos/jsx.png';
import Hooks from '../images/logos/hooks.png';


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
        <div className="login__page" style={{backgroundImage: {Image}}}>
          <div className="login__page__button">
            <button className="login__page_btn" onClick = {()=> dispatch({type: 'logout'})}>Log Out</button>
          </div>
          <div className="login__page__me">
            <div className="login__page__me--img">
                <img src={Photo} alt="hello"/>
            </div>
            <div className="login__page__me__text">
              <div className="login__page__me__text--heading">
                <h1>Welcome, my name is Paweł</h1>
                <h2>Thanks for coming</h2>
              </div>
              <div className="login__page__me__text--secondary">
                <span>I am a web developer from Poland. I've met web development 2 years ago and I really loved it. It became my passion and this is surely what I want to do in my life. Anyway I am really thankfull that you came to my webite and I hope you enjoyed it at least a little bit. I hope This website will make other people love space like I do. This SPA is a part of my current possibilities. I started working at this project few months ago and I didn't want to change it dramatycly over the time when I met new technologies such as styled components, redux, redux-thunk, gsap, RWD, OAuth, and many more. According to this fact I'll start a new project which will contain such technologies and utilities. Thank you once more for visiting my web site and I hope you will have a great day! :)  </span>
              </div>
              
            </div>
          </div>
          <div className="login__page__utils">
            <div className="login__page__utils__top">
              <div className="login__page__utils__top--1">
                <img src={Jsx} alt="top-img-1"/>
              </div>
              <div className="login__page__utils__top--2">
                <img src={ReactRouter} alt="top-img-2"/>
              </div>
              <div className="login__page__utils__top--3">
                <img src={HTML} alt="top-img-3"/>
              </div>
              <div className="login__page__utils__top--4">
                <img src={API} alt="top-img-4"/>
              </div>
              <div className="login__page__utils__top--5">
                <img src={Hooks} alt="top-img-5"/>
              </div>
            </div>
            <div className="login__page__utils__bottom">
              <div className="login__page__utils__bottom--1"><Css/></div>
              <div className="login__page__utils__bottom--2"><ReactLogo/></div>
              <div className="login__page__utils__bottom--3"><Sass/></div>
            </div>
          </div>
        </div>
        
        
        
        :
        <>
        <div className="login__info">
          <h2 className="login__info-text">Hello and welcome in the true of abyss</h2>
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
