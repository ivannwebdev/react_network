import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { Route } from 'react-router'
import About from './components/About_account/About'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import MusicContainer from './components/Music/MusicContainer';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings.jsx'
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login'



function App() {
  return (
      <div className ='wrapper'>
          <HeaderContainer/>
          <Navbar/>
          <div className= 'app-wrapper'>
            <Route path= '/dialogs' render= {() =><DialogsContainer/>}/>
            <Route path= '/profile/:userId?' render= {() => <ProfileContainer/>}/>
            <Route path= '/users' render= {() => <UsersContainer/>}/>
            <Route path= '/music' render= {() => <MusicContainer/>}/>
            <Route path= '/about' render= {() => <About/>}/>
            <Route path= '/settings' render= {() => <Settings/>}/>
            <Route path= '/login' render= {() => <Login/>}/>
          </div>

      </div>
  )
}

export default App;
