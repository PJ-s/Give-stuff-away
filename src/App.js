import React, { Component } from 'react';
import Header from "./components/Header/Header";
import HowToDo from "./components/Section-how-to-do/SectionHowToDo"
import About from "./components/Section-about/Section-about";
import Foundations from "./components/Section-foundations/foundations";
import Contact from "./components/Contact/contact";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <HowToDo/>
        <About/>
        <Foundations/>
        <Contact/>
      </div>
    );
  }
}

export default App;
