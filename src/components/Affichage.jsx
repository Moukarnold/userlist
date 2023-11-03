import React from "react";


function Affichage(props){


    return (
        <div className="resultContainer">
        <ul>
           { props.contactData.map((contact, index)=>(
                <li key={index}> 
                 {contact.userName} {contact.age}
                 </li>
            ))}
       </ul>
     
    </div> 
      

    )
};

export default Affichage;