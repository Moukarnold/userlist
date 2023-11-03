import React, { useState } from "react";
import UsersInput from "./components/UsersInput";
import Affichage from "./components/Affichage";
import  "./index.css";


function App(){
   const [ contacts , setContacts] = useState([]);


  function handleContactData(newContact){
   setContacts((prevContacts)=>{
      return [...prevContacts, newContact]

   });

  }



return ( <div>
    <UsersInput onTransfert={handleContactData}/>

      <Affichage contactData= {contacts} />
       

      </div>
         )
    

}
export default App;