import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import LoggedView from "./components/Logged-view/Logged-view";
import {
    HashRouter,
    Route
} from "react-router-dom";

class Routing extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (<HashRouter>
             <>
                 <Route exact path="/" component={App} />
                 <Route path="/loggedView" component={LoggedView} />
             </>
         </HashRouter>
     )
   }
 }

ReactDOM.render(<Routing />, document.getElementById('root'));

