import React from "react"
import "./form_2.scss"
import {Link} from "react-router-dom";

export default class Form2 extends React.Component {
   constructor(props) {
   super(props);

   this.state = {bagsNumber: 0}
   }

    handleSelectNumber = (event) => {

       this.setState({bagsNumber: event.target.value})

   };

   handleSubmit = (event) => {
       event.preventDefault();
       console.log("Ilość worków " + this.state.bagsNumber)
   };

   render(){
     return (
         <div className="form-container form2-container">
             <div className="info-bar">
                 <h1>
                     Ważne!
                 </h1>
                 <p>
                     Wszystkie rzeczy do oddania zapakuj w 60 l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz tutaj.
                 </p>
             </div>
             <div className="form-app-header form2-header">
                 <span>
                     Krok 2/4
                 </span>
                 <h1>
                     Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
                 </h1>
             </div>
             <div className="form2-select-box">
                 <p>
                     Liczba 60l worków:
                 </p>
                 <form onSubmit={this.handleSubmit}>
                     <select
                         value={this.state.bagsNumber}
                         onChange={this.handleSelectNumber}>
                         <option value="" disabled selected>-wybierz-</option>
                         <option value="1">1</option>
                         <option value="2">2</option>
                         <option value="3">3</option>
                         <option value="4">4</option>
                         <option value="5">5</option>
                         <option value="6">6</option>
                         <option value="7">7</option>
                         <option value="8">8</option>
                         <option value="9">9</option>
                         <option value="10">10</option>
                     </select>
                     <button type="submit">
                        <Link to = {`/summary/${this.state.bagsNumber}`}>
                            Dalej
                        </Link>
                     </button>
                 </form>
             </div>
         </div>
     )
   }
 }


