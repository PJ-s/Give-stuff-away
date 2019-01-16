import React from "react";
import "./Logged-view-form_1.scss";

export default class LoggedViewForm_1 extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (
         <div className="form-container">
             <div className="form-one-header">
                 <span>
                     Krok 1/4
                 </span>
                 <h1>
                     Zaznacz co chcesz oddać:
                 </h1>
             </div>
             <form className="form-one" action="">
                 <label>
                     ubrania, które nadają się do ponownego użycia
                     <input type="checkbox"/>
                     <span className="checkmark"></span>
                 </label>
                 <label>
                     ubrania, do wyrzucenia
                     <input type="checkbox"/>
                     <span className="checkmark"></span>
                 </label>
                 <label>
                     zabawki
                     <input type="checkbox"/>
                     <span className="checkmark"></span>
                 </label>
                 <label>
                     książki
                     <input type="checkbox"/>
                     <span className="checkmark"></span>
                 </label>
                 <label>
                     inne
                     <input type="checkbox"/>
                     <span className="checkmark"></span>
                 </label>
                 <button type="submit">
                     Dalej
                 </button>
             </form>



         </div>

     )
   }
 }