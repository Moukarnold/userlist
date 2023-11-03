import React from "react";

function CardError(props){
  function closeError(){props.onClose()}
  
  
 return (
    <div className="backdrop"> 
        <div className="cardError">
            something went wrong
            {props.errorTextName && <div><p>{props.errorTextName}</p> </div>}
        {props.errorTextAge && <div><p>{props.errorTextAge}</p></div>}
          <button onClick ={closeError} > ok</button>
        </div>
     </div>
    )

};

export default CardError;