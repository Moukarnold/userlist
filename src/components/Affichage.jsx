import React from "react";


function Affichage(props){


    return (
        <div className="container">
        <ul>
           { props.contactData.map((contact, index)=>(
                <li key={index}> 
                 {contact.userName}  is {contact.age} years old
                 </li>
            ))}
       </ul>
     
    </div> 
      

    )
};

export default Affichage;