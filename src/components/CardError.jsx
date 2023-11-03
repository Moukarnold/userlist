import React from "react";

function CardError(props){
  function closeError(){props.onClose()}
  
  
 return (
    <div className="backdrop"> 
        <div className="cardError">
            something went wrong
            {props.errorTextName && <p>{props.errorTextName}</p>}
        {props.errorTextAge && <p>{props.errorTextAge}</p>}
          <button onClick ={closeError} > ok</button>
        </div>
     </div>
    )

};

export default CardError;