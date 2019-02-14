import React from "react";
import "../../../sass/partials/logged-view/_app-form-1.scss";
import {Link} from "react-router-dom";

export default class LoggedViewForm_1 extends React.Component {
   constructor(props) {
   super(props);

   this.state = {

       items: []
   }
   }

   handleSelectItem = (event) => {

       this.setState({

           items: this.state.items.concat(event.target.value)
       })
   };

   handleSubmit = (event) => {
       event.preventDefault();
       console.log("Chcesz oddać" + this.state.items);
   };


   render(){
     return (
         <div className="form-container">
             <div className="form-app-header">
                 <span>
                     Krok 1/4
                 </span>
                 <h1>
                     Zaznacz co chcesz oddać:
                 </h1>
             </div>
             <form className="form-one" onSubmit={this.handleSubmit}>
                 <label>
                     ubrania, które nadają się do ponownego użycia
                     <input
                         type="checkbox"
                         value={" ubrania w dobrym stanie"}
                         onChange={this.handleSelectItem}
                     />
                     <span className="checkmark"></span>
                 </label>
                 <label>
                     ubrania, do wyrzucenia
                     <input
                         type="checkbox"
                         value={" ubrania do wyrzucenia"}
                         onChange={this.handleSelectItem}
                     />

                     <span className="checkmark"></span>
                 </label>
                 <label>
                     zabawki
                     <input
                         type="checkbox"
                         value={" zabawki"}
                         onChange={this.handleSelectItem}
                     />
                     <span className="checkmark"></span>
                 </label>
                 <label>
                     książki
                     <input
                         type="checkbox"
                         value={" książki"}
                         onChange={this.handleSelectItem}
                     />
                     <span className="checkmark"></span>
                 </label>
                 <label>
                     inne
                     <input
                         type="checkbox"
                         value={" inne"}
                         onChange={this.handleSelectItem}
                     />
                     <span className="checkmark"></span>
                 </label>
                 <button type="submit">
                     <Link to={`/summary/${this.state.items}`}>
                         Dalej
                     </Link>
                 </button>
             </form>
         </div>
     )
   }
 }