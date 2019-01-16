import React from 'react';
import LandingPage from "./components/Landing-page/Landing-page";
import LoggedView from "./components/Logged-view/Logged-view";


export default class App extends React.Component {
  render() {
    return (
        <div>
            <LandingPage/>
            {/*<LoggedView/>*/}
        </div>
    )
  }
}


