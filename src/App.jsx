import React from 'react'
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Profile from './components/Profile/Profile.jsx'
import { Route } from 'react-router'
import About from './components/About_account/About'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import MusicContainer from './components/Music/MusicContainer';
import UsersContainer from './components/Users/UsersContainer';



function App() {
  return (
      <div className ='wrapper'>
          <Header/>
          <Navbar/>
          <div className= 'app-wrapper'>
            <Route path= '/dialogs' render= {() =><DialogsContainer/>}/>
            <Route path= '/profile' render= {() => <Profile/>}/>
            <Route path= '/users' render= {() => <UsersContainer/>}/>
            <Route path= '/music' render= {() => <MusicContainer/>}/>
            <Route path= '/about' render= {() => <About/>}/>
          </div>

      </div>
  )
}

export default App;
