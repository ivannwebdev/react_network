import store from './Redux/redux-store'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

if(module.hot){
   module.hot.accept()
}



ReactDOM.render(
    <HashRouter basename= {process.env.PUBLIC_URL}>
        <Provider store= {store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('root')
)
